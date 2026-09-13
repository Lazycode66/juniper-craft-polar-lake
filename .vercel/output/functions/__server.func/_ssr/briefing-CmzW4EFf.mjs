import { t as createServerFn } from "./ssr.mjs";
import { t as createServerRpc } from "./createServerRpc-A6pJPYTF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/briefing-CmzW4EFf.js
var RANK = {
	low: 0,
	medium: 1,
	high: 2
};
function clampLevel(model, floor) {
	const next = model === "high" || model === "medium" || model === "low" ? model : floor;
	return RANK[next] < RANK[floor] ? floor : next;
}
var enhanceBriefing_createServerFn_handler = createServerRpc({
	id: "48b9a4cb92c2d0c22d8fc07644af6947b499fd0b4578a8e5eb0ec7a9c4e664cb",
	name: "enhanceBriefing",
	filename: "src/lib/analyzer/briefing.ts"
}, (opts) => enhanceBriefing.__executeServer(opts));
var enhanceBriefing = createServerFn({ method: "POST" }).validator((input) => ({
	kind: input.kind,
	input: String(input.input ?? "").slice(0, 2e3),
	level: input.level,
	headline: String(input.headline ?? "").slice(0, 240),
	indicators: (input.indicators ?? []).slice(0, 12).map((i) => ({
		id: String(i.id ?? "").slice(0, 80),
		title: String(i.title ?? "").slice(0, 120),
		detail: String(i.detail ?? "").slice(0, 400)
	}))
})).handler(enhanceBriefing_createServerFn_handler, async ({ data }) => {
	const apiKey = process.env.XAI_API_KEY;
	if (!apiKey) return {
		ok: false,
		error: "unavailable"
	};
	const res = await fetch("https://api.x.ai/v1/chat/completions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`
		},
		body: JSON.stringify({
			model: "grok-4.5",
			max_tokens: 500,
			temperature: .2,
			messages: [{
				role: "system",
				content: "You are a calm cybersecurity awareness educator. Never panic the reader. Never declare something 'safe' or 'legit'. Do not give a forensic verdict. Use plain language. Return JSON only with keys: summary (2-4 sentences), level (low|medium|high), indicators (array of {title, detail}), steps (array of {title, detail}, 2-4 items). Do not downgrade a high heuristic to low. If the heuristic is high, keep level high."
			}, {
				role: "user",
				content: JSON.stringify({
					kind: data.kind,
					heuristicLevel: data.level,
					headline: data.headline,
					indicators: data.indicators,
					userSubmission: data.input
				})
			}]
		})
	});
	if (!res.ok) return {
		ok: false,
		error: `xAI API error ${res.status}`
	};
	const jsonText = ((await res.json()).choices?.[0]?.message?.content ?? "").replace(/```json|```/g, "").trim();
	try {
		const parsed = JSON.parse(jsonText);
		const extra = (parsed.indicators ?? []).slice(0, 4).map((i, idx) => ({
			id: `ai-${idx}`,
			severity: clampLevel(parsed.level ?? data.level, data.level),
			weight: 8,
			title: String(i.title ?? "Extra note").slice(0, 120),
			detail: String(i.detail ?? "").slice(0, 400),
			category: "scam"
		}));
		const steps = (parsed.steps ?? []).slice(0, 4).map((s) => ({
			title: String(s.title ?? "").slice(0, 80),
			detail: String(s.detail ?? "").slice(0, 280)
		})).filter((s) => s.title && s.detail);
		return {
			ok: true,
			summary: String(parsed.summary ?? "").slice(0, 900),
			level: clampLevel(parsed.level ?? data.level, data.level),
			indicators: extra,
			steps
		};
	} catch {
		return {
			ok: false,
			error: "Could not parse briefing"
		};
	}
});
//#endregion
export { enhanceBriefing_createServerFn_handler };
