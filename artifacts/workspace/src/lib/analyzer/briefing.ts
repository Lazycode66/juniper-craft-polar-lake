import { createServerFn } from "@tanstack/react-start";
import type { Indicator, NextStep, RiskLevel } from "./types";

type BriefingInput = {
  kind: "link" | "message" | "app";
  input: string;
  level: RiskLevel;
  headline: string;
  indicators: { id: string; title: string; detail: string }[];
};

export type BriefingResult =
  | {
      ok: true;
      summary: string;
      level: RiskLevel;
      indicators: Indicator[];
      steps: NextStep[];
    }
  | { ok: false; error: string };

const RANK: Record<RiskLevel, number> = { low: 0, medium: 1, high: 2 };

function clampLevel(model: string, floor: RiskLevel): RiskLevel {
  const next =
    model === "high" || model === "medium" || model === "low"
      ? model
      : floor;
  return RANK[next] < RANK[floor] ? floor : next;
}

export const enhanceBriefing = createServerFn({ method: "POST" })
  .validator((input: BriefingInput) => ({
    kind: input.kind,
    input: String(input.input ?? "").slice(0, 2000),
    level: input.level,
    headline: String(input.headline ?? "").slice(0, 240),
    indicators: (input.indicators ?? []).slice(0, 12).map((i) => ({
      id: String(i.id ?? "").slice(0, 80),
      title: String(i.title ?? "").slice(0, 120),
      detail: String(i.detail ?? "").slice(0, 400),
    })),
  }))
  .handler(async ({ data }): Promise<BriefingResult> => {
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) return { ok: false, error: "unavailable" };

    const res = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "grok-4.5",
        max_tokens: 500,
        temperature: 0.2,
        messages: [
          {
            role: "system",
            content:
              "You are a calm cybersecurity awareness educator. Never panic the reader. Never declare something 'safe' or 'legit'. Do not give a forensic verdict. Use plain language. Return JSON only with keys: summary (2-4 sentences), level (low|medium|high), indicators (array of {title, detail}), steps (array of {title, detail}, 2-4 items). Do not downgrade a high heuristic to low. If the heuristic is high, keep level high.",
          },
          {
            role: "user",
            content: JSON.stringify({
              kind: data.kind,
              heuristicLevel: data.level,
              headline: data.headline,
              indicators: data.indicators,
              userSubmission: data.input,
            }),
          },
        ],
      }),
    });

    if (!res.ok) {
      return { ok: false, error: `xAI API error ${res.status}` };
    }

    const body = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const raw = body.choices?.[0]?.message?.content ?? "";
    const jsonText = raw.replace(/```json|```/g, "").trim();
    try {
      const parsed = JSON.parse(jsonText) as {
        summary?: string;
        level?: string;
        indicators?: { title?: string; detail?: string }[];
        steps?: { title?: string; detail?: string }[];
      };
      const extra = (parsed.indicators ?? []).slice(0, 4).map((i, idx) => ({
        id: `ai-${idx}`,
        severity: clampLevel(parsed.level ?? data.level, data.level),
        weight: 8,
        title: String(i.title ?? "Extra note").slice(0, 120),
        detail: String(i.detail ?? "").slice(0, 400),
        category: "scam" as const,
      }));
      const steps = (parsed.steps ?? [])
        .slice(0, 4)
        .map((s) => ({
          title: String(s.title ?? "").slice(0, 80),
          detail: String(s.detail ?? "").slice(0, 280),
        }))
        .filter((s) => s.title && s.detail);
      return {
        ok: true,
        summary: String(parsed.summary ?? "").slice(0, 900),
        level: clampLevel(parsed.level ?? data.level, data.level),
        indicators: extra,
        steps,
      };
    } catch {
      return { ok: false, error: "Could not parse briefing" };
    }
  });
