import { useState, useMemo, useRef } from "react";
import {
  Ban,
  CircleAlert,
  ShieldCheck,
  Shield,
  Link2,
  MessageSquare,
  Smartphone,
  ArrowRight,
  BookOpen,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
} from "lucide-react";
import { cn } from "./utils";
import { analyze } from "./analyzer";
import type { Assessment, InputKind, AppDetails } from "./analyzer/types";
import { getSample, SAMPLES } from "./analyzer/samples";
const SAMPLE_IDS = SAMPLES.map(s => s.id);

const EMPTY_APP: AppDetails = {
  name: "",
  source: "unknown",
  permissions: [],
  claimedPurpose: "",
  developer: "",
};

const LEVEL = {
  high: {
    label: "High risk",
    color: "text-risk-high",
    bg: "bg-risk-high-bg",
    border: "border-risk-high/40",
    bar: "bg-risk-high",
    Icon: Ban,
  },
  medium: {
    label: "Medium risk",
    color: "text-risk-medium",
    bg: "bg-risk-medium-bg",
    border: "border-risk-medium/40",
    bar: "bg-risk-medium",
    Icon: CircleAlert,
  },
  low: {
    label: "Low risk",
    color: "text-risk-low",
    bg: "bg-risk-low-bg",
    border: "border-risk-low/40",
    bar: "bg-risk-low",
    Icon: ShieldCheck,
  },
} as const;

function LanternMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-6", className)} fill="none" aria-hidden>
      <path d="M9 8.5h6l-.85 9.2a2.2 2.2 0 0 1-2.18 2h-.14a2.2 2.2 0 0 1-2.18-2L9 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9.2 8.5V7.2a2.8 2.8 0 0 1 5.6 0v1.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 8.5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 12.2v3.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="5.2" r="1.1" fill="currentColor" className="text-amber-400" />
    </svg>
  );
}

export default function App() {
  const [tab, setTab] = useState<"check" | "learn">("check");
  const [kind, setKind] = useState<InputKind>("link");
  const [text, setText] = useState("");
  const [app, setApp] = useState<AppDetails>(EMPTY_APP);
  const [scanning, setScanning] = useState(false);
  const [assessment, setAssessment] = useState<Assessment | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const runId = useRef(0);

  const canRun = useMemo(() => {
    if (kind === "app") return Boolean(app.name.trim() || app.claimedPurpose.trim() || text.trim());
    return text.trim().length > 0;
  }, [kind, text, app]);

  async function runCheck() {
    if (!canRun) return;
    const id = ++runId.current;
    setScanning(true);
    setAssessment(null);
    const started = Date.now();
    const local = analyze({
      kind,
      text: kind === "app" ? text || app.claimedPurpose : text,
      app: kind === "app" ? app : undefined,
    });
    const wait = Math.max(0, 850 - (Date.now() - started));
    await new Promise((r) => setTimeout(r, wait));
    if (id !== runId.current) return;
    setAssessment(local);
    setScanning(false);
    requestAnimationFrame(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function loadSample(id: string) {
    const sample = getSample(id);
    if (!sample) return;
    setKind(sample.kind);
    setText(sample.payload.text);
    setApp(sample.payload.app ?? EMPTY_APP);
    setTimeout(() => {
      const a = analyze({
        kind: sample.kind,
        text: sample.payload.text,
        app: sample.payload.app,
      });
      setAssessment(a);
      setScanning(false);
    }, 100);
  }

  return (
    <div className="min-h-dvh flex flex-col bg-bg text-fg">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-border bg-bg/85 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:h-16 sm:px-6">
          <button onClick={() => setTab("check")} className="flex items-center gap-2.5 group">
            <span className="relative">
              <LanternMark className="size-6 text-accent group-hover:text-amber-300 transition-colors" />
              <span className="absolute -top-0.5 left-1/2 -translate-x-1/2 size-1.5 rounded-full bg-amber-400 glow-pulse" />
            </span>
            <span className="font-display text-lg font-medium tracking-tight">Lantern</span>
          </button>
          <nav className="flex gap-1">
            {[
              { id: "check" as const, label: "Check", icon: Shield },
              { id: "learn" as const, label: "Learn", icon: BookOpen },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setTab(item.id)}
                className={cn(
                  "inline-flex h-10 items-center gap-1.5 rounded-lg px-3 text-sm font-medium transition-all",
                  tab === item.id ? "bg-elevated text-fg shadow-sm" : "text-muted hover:text-fg"
                )}
              >
                <item.icon className="size-4 opacity-70" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {tab === "check" ? (
          <CheckView
            kind={kind}
            setKind={setKind}
            text={text}
            setText={setText}
            app={app}
            setApp={setApp}
            canRun={canRun}
            scanning={scanning}
            assessment={assessment}
            onRun={runCheck}
            onSample={loadSample}
            resultsRef={resultsRef}
          />
        ) : (
          <LearnView />
        )}
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 flex flex-col sm:flex-row gap-4 justify-between text-sm text-muted">
          <p className="max-w-lg">
            Lantern is an awareness guide, not a forensic verdict. It can miss threats and can flag innocent messages. Nothing you paste is stored.
          </p>
          <p className="text-subtle shrink-0">© {new Date().getFullYear()} Lantern</p>
        </div>
      </footer>
    </div>
  );
}

function CheckView({
  kind, setKind, text, setText, app, setApp, canRun, scanning, assessment, onRun, onSample, resultsRef,
}: any) {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      {/* Hero */}
      <div className="text-center mb-10 rise">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted mb-5">
          <Sparkles className="size-3.5 text-amber-400" />
          Free · Private · No account needed
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-medium tracking-tight leading-[1.15]">
          Shine a light on<br className="hidden sm:block" /> suspicious messages
        </h1>
        <p className="mt-4 text-muted text-base sm:text-lg max-w-xl mx-auto">
          Paste a link, message, or app description. Lantern calmly explains phishing, digital-arrest scams, and risky permissions.
        </p>
      </div>

      {/* Input card */}
      <div className="rounded-2xl border border-border bg-surface shadow-lg overflow-hidden rise" style={{ animationDelay: "60ms" }}>
        {/* Kind tabs */}
        <div className="flex border-b border-border">
          {[
            { id: "link" as const, label: "Link", icon: Link2 },
            { id: "message" as const, label: "Message", icon: MessageSquare },
            { id: "app" as const, label: "App", icon: Smartphone },
          ].map((k) => (
            <button
              key={k.id}
              onClick={() => setKind(k.id)}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-medium transition-colors",
                kind === k.id
                  ? "bg-elevated text-fg border-b-2 border-amber-400 -mb-px"
                  : "text-muted hover:text-fg hover:bg-elevated/50"
              )}
            >
              <k.icon className="size-4" />
              {k.label}
            </button>
          ))}
        </div>

        <div className="p-5 sm:p-6 space-y-4">
          {kind !== "app" ? (
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={
                kind === "link"
                  ? "https://example-login-verify.com or paste any URL…"
                  : "Paste the full SMS, WhatsApp, or email text here…"
              }
              rows={4}
              className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-fg placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-amber-400/40 resize-y min-h-[110px]"
            />
          ) : (
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                value={app.name}
                onChange={(e) => setApp({ ...app, name: e.target.value })}
                placeholder="App name"
                className="rounded-xl border border-border bg-bg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/40"
              />
              <select
                value={app.source}
                onChange={(e) => setApp({ ...app, source: e.target.value as any })}
                className="rounded-xl border border-border bg-bg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/40"
              >
                <option value="unknown">Source unknown</option>
                <option value="play">Google Play</option>
                <option value="appstore">App Store</option>
                <option value="apk">Sideloaded APK</option>
                <option value="web">Web / browser</option>
                <option value="chat">Sent in chat</option>
              </select>
              <input
                value={app.developer}
                onChange={(e) => setApp({ ...app, developer: e.target.value })}
                placeholder="Developer (optional)"
                className="rounded-xl border border-border bg-bg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/40"
              />
              <input
                value={app.claimedPurpose}
                onChange={(e) => setApp({ ...app, claimedPurpose: e.target.value })}
                placeholder="What it claims to do"
                className="rounded-xl border border-border bg-bg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/40"
              />
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Permissions requested or extra description…"
                rows={2}
                className="sm:col-span-2 rounded-xl border border-border bg-bg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/40 resize-y"
              />
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
            <button
              onClick={onRun}
              disabled={!canRun || scanning}
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all",
                canRun && !scanning
                  ? "bg-amber-400 text-bg hover:bg-amber-300 shadow-lg shadow-amber-400/20"
                  : "bg-elevated text-muted cursor-not-allowed"
              )}
            >
              {scanning ? (
                <>
                  <span className="size-4 border-2 border-bg/30 border-t-bg rounded-full animate-spin" />
                  Scanning…
                </>
              ) : (
                <>
                  Check with Lantern
                  <ArrowRight className="size-4" />
                </>
              )}
            </button>
            <p className="text-xs text-subtle text-center sm:text-right">
              Analysis runs entirely in your browser
            </p>
          </div>
        </div>
      </div>

      {/* Samples */}
      <div className="mt-6 flex flex-wrap gap-2 justify-center">
        <span className="text-xs text-subtle self-center mr-1">Try a sample:</span>
        {SAMPLE_IDS.slice(0, 5).map((id) => (
          <button
            key={id}
            onClick={() => onSample(id)}
            className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted hover:text-fg hover:border-border-strong transition-colors"
          >
            {id.replace(/-/g, " ")}
          </button>
        ))}
      </div>

      {/* Results */}
      <div ref={resultsRef} className="mt-10">
        {scanning && <ScanningCard />}
        {assessment && !scanning && <ResultsCard assessment={assessment} />}
      </div>
    </div>
  );
}

function ScanningCard() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 right-0 h-16 bg-gradient-to-b from-amber-400/10 to-transparent" style={{ animation: "scan 1.6s ease-in-out infinite" }} />
      </div>
      <div className="relative flex flex-col items-center gap-3 text-center">
        <div className="size-12 rounded-full bg-elevated flex items-center justify-center">
          <LanternMark className="size-6 text-amber-400" />
        </div>
        <p className="font-medium">Looking for patterns…</p>
        <p className="text-sm text-muted">Checking domains, urgency language, and permission risks</p>
      </div>
    </div>
  );
}

function ResultsCard({ assessment }: { assessment: Assessment }) {
  const tone = LEVEL[assessment.level];
  const Icon = tone.Icon;

  return (
    <div className="rise space-y-6">
      <div className={cn("rounded-2xl border bg-surface overflow-hidden", tone.border)}>
        <div className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-start gap-4">
            <div className={cn("size-12 rounded-xl flex items-center justify-center shrink-0", tone.bg)}>
              <Icon className={cn("size-6", tone.color)} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold", tone.bg, tone.color)}>
                  {tone.label}
                </span>
                <span className="font-mono text-xs text-subtle">Score {assessment.score}/100</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-medium tracking-tight leading-snug">
                {assessment.headline}
              </h2>
              <p className="mt-3 text-muted leading-relaxed">{assessment.summary}</p>
            </div>
          </div>

          {/* Score bar */}
          <div className="mt-6">
            <div className="h-2 rounded-full bg-elevated overflow-hidden">
              <div
                className={cn("h-full rounded-full transition-all duration-700", tone.bar)}
                style={{ width: `${assessment.score}%` }}
              />
            </div>
          </div>
        </div>

        {/* Indicators */}
        {assessment.indicators.length > 0 && (
          <div className="border-t border-border px-6 sm:px-8 py-5">
            <h3 className="text-sm font-medium text-muted mb-3">What we noticed</h3>
            <ul className="space-y-3">
              {assessment.indicators.map((ind) => (
                <li key={ind.id} className="flex gap-3">
                  <span className={cn(
                    "mt-0.5 size-5 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold",
                    ind.severity === "high" && "bg-risk-high-bg text-risk-high",
                    ind.severity === "medium" && "bg-risk-medium-bg text-risk-medium",
                    ind.severity === "low" && "bg-risk-low-bg text-risk-low",
                  )}>
                    {ind.severity === "high" ? "!" : ind.severity === "medium" ? "•" : "○"}
                  </span>
                  <div>
                    <p className="text-sm font-medium">{ind.title}</p>
                    <p className="text-sm text-muted mt-0.5">{ind.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Next steps */}
        {assessment.steps.length > 0 && (
          <div className="border-t border-border px-6 sm:px-8 py-5 bg-elevated/40">
            <h3 className="text-sm font-medium text-muted mb-3">Safe next steps</h3>
            <ul className="space-y-3">
              {assessment.steps.map((step, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="size-5 text-amber-400/80 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">{step.title}</p>
                    <p className="text-sm text-muted mt-0.5">{step.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <p className="text-center text-xs text-subtle">
        This is an awareness tool only. When in doubt, verify through official channels.
      </p>
    </div>
  );
}

function LearnView() {
  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const questions = [
    {
      q: "You receive a call saying “This is the cyber cell. There is a warrant against you. Pay ₹25,000 immediately or face arrest.” What should you do first?",
      options: [
        "Pay to avoid arrest",
        "Hang up and call the real police helpline yourself",
        "Ask for their badge number and pay later",
        "Share your Aadhaar to prove innocence",
      ],
      correct: 1,
      explain: "Real law enforcement never demands instant payment over a phone call. Digital-arrest scams rely on fear and urgency.",
    },
    {
      q: "A message says your package is held and asks you to click a link to “confirm address and pay ₹47 delivery fee”. The link looks like “indiapost-track.net”. Red flag?",
      options: [
        "No, official sites use .net sometimes",
        "Yes — lookalike domain + unexpected fee is classic phishing",
        "Only if the amount is high",
        "Safe if it has an HTTPS lock",
      ],
      correct: 1,
      explain: "India Post and carriers never ask for delivery fees via random SMS links. The domain is deliberately close but fake.",
    },
    {
      q: "An APK shared on WhatsApp claims to be a “loan approval app” and asks for SMS, contacts, and accessibility permissions. Risk level?",
      options: ["Low — just a loan app", "Medium — needs more info", "High — sideloaded + excessive permissions", "None if a friend sent it"],
      correct: 2,
      explain: "Sideloaded APKs + broad permissions are a common malware vector. Never install banking or loan apps outside official stores.",
    },
  ];

  const current = questions[qIndex];

  function answer(i: number) {
    if (selected !== null) return;
    setSelected(i);
    if (i === current.correct) setScore((s) => s + 1);
  }

  function next() {
    if (qIndex + 1 >= questions.length) {
      setDone(true);
    } else {
      setQIndex((i) => i + 1);
      setSelected(null);
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="text-center mb-10 rise">
        <h1 className="font-display text-3xl sm:text-4xl font-medium tracking-tight">
          Slow down. Then look again.
        </h1>
        <p className="mt-3 text-muted max-w-lg mx-auto">
          Most scams succeed because they steal time, not because the story is clever. A short quiz to build the pause habit.
        </p>
      </div>

      {!done ? (
        <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 rise">
          <div className="flex items-center justify-between text-xs text-subtle mb-5">
            <span>Question {qIndex + 1} of {questions.length}</span>
            <span>Score {score}</span>
          </div>
          <p className="font-medium text-lg leading-relaxed mb-6">{current.q}</p>
          <div className="space-y-2.5">
            {current.options.map((opt, i) => {
              const isCorrect = i === current.correct;
              const isSelected = selected === i;
              let style = "border-border hover:border-border-strong hover:bg-elevated/50";
              if (selected !== null) {
                if (isCorrect) style = "border-risk-low bg-risk-low-bg text-risk-low";
                else if (isSelected) style = "border-risk-high bg-risk-high-bg text-risk-high";
                else style = "border-border opacity-50";
              }
              return (
                <button
                  key={i}
                  onClick={() => answer(i)}
                  disabled={selected !== null}
                  className={cn(
                    "w-full text-left rounded-xl border px-4 py-3.5 text-sm transition-all",
                    style
                  )}
                >
                  {opt}
                </button>
              );
            })}
          </div>
          {selected !== null && (
            <div className="mt-5 p-4 rounded-xl bg-elevated text-sm text-muted rise">
              <p className="font-medium text-fg mb-1">
                {selected === current.correct ? "Correct." : "Not quite."}
              </p>
              {current.explain}
              <button
                onClick={next}
                className="mt-4 inline-flex items-center gap-1.5 text-amber-400 font-medium hover:text-amber-300"
              >
                {qIndex + 1 >= questions.length ? "See results" : "Next question"}
                <ChevronRight className="size-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="rounded-2xl border border-border bg-surface p-8 text-center rise">
          <div className="size-16 rounded-full bg-amber-400/15 flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="size-8 text-amber-400" />
          </div>
          <h2 className="font-display text-2xl font-medium">You scored {score}/{questions.length}</h2>
          <p className="mt-2 text-muted max-w-md mx-auto">
            The goal isn’t perfection — it’s the habit of pausing when something feels urgent or too good to be true.
          </p>
          <button
            onClick={() => { setQIndex(0); setSelected(null); setScore(0); setDone(false); }}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-elevated px-5 py-2.5 text-sm font-medium hover:bg-border-strong transition-colors"
          >
            Try again
          </button>
        </div>
      )}

      {/* Quick guides */}
      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {[
          { title: "Digital arrest", body: "Police never demand instant UPI/bank transfers over a call. Hang up and verify independently." },
          { title: "Lookalike domains", body: "paypal-secure-login.com is not PayPal. Check the real domain carefully before typing anything." },
          { title: "Sideloaded apps", body: "APKs from chats or websites skip store review. Excessive permissions are a major red flag." },
        ].map((g) => (
          <div key={g.title} className="rounded-xl border border-border bg-surface p-5">
            <AlertTriangle className="size-5 text-amber-400 mb-3" />
            <h3 className="font-medium mb-1.5">{g.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{g.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
