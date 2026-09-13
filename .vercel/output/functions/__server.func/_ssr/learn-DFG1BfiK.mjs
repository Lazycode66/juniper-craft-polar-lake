import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Trigger2, i as Root2, n as Header, r as Item, t as Content2, v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as ChevronDown } from "../_libs/lucide-react.mjs";
import { r as cn } from "./router-D1vD6Ypz.mjs";
import { i as SiteShell, n as Progress, r as SAMPLES, t as Button } from "./site-shell-DItHVid-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/learn-DFG1BfiK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b border-border", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between gap-3 py-4 text-left text-base font-medium transition-colors duration-[150ms] hover:text-fg [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 shrink-0 text-muted transition-transform duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)]" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-none data-[state=open]:animate-none",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pt-0 pb-5 text-muted", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
var GUIDES = [
	{
		id: "phishing",
		title: "How to read a link before you tap",
		kicker: "Phishing",
		body: [
			"The only part of a web address that names the company is the domain — the bit just before .com, .in, .gov, and similar. Everything in front of it (login., secure., appleid.) can be invented.",
			"Hover on a computer; press-and-hold on a phone. If the domain is a jumble, a lookalike (paypa1, apple-support-id), or a shortener, do not tap. Open the official app or type the company name yourself.",
			"A padlock only means the connection is encrypted. Scam sites buy certificates too. Encryption does not prove identity."
		]
	},
	{
		id: "digital-arrest",
		title: "Digital arrest and fake officials",
		kicker: "Voice & video scams",
		body: [
			"In this scam, someone claiming to be from a cyber cell, CBI, customs, the IRS, or a court keeps you on a video call, shows a forged warrant, and demands money or gift cards to ‘avoid arrest’.",
			"Police do not collect fines in Bitcoin. They do not ask you to stay on the line, install AnyDesk, or keep the call a secret from family. Isolation is the method.",
			"Hang up. Tell someone in the room. Call 1930 in India or your local non-emergency police number from a number you look up — not the one on the screen."
		]
	},
	{
		id: "apps",
		title: "Sideloaded apps and greedy permissions",
		kicker: "Malicious apps",
		body: [
			"An APK from WhatsApp, Telegram, or a ‘mod’ site skips the store review. Loan apps, job-task apps, and cracked games are the usual bait.",
			"Accessibility, SMS, device admin, and ‘draw over other apps’ let malware read OTPs and put a fake bank screen on top of the real one. A torch, PDF reader, or cleaner does not need those.",
			"Install money, chat, and government apps only from Google Play or the App Store. If you already sideloaded, uninstall, revoke extra permissions, and change banking passwords from another device."
		]
	},
	{
		id: "already",
		title: "If you already tapped, paid, or installed",
		kicker: "After a mistake",
		body: [
			"You are not the first, and you still have moves. Use a different device if you can. The compromised one may still be watched.",
			"Change the password of the account you typed, then email, then banking. Turn on two-factor authentication with an app — not SMS — if offered. Call your bank’s number from the back of the card.",
			"In India report at cybercrime.gov.in or 1930. In the US: reportfraud.ftc.gov and ic3.gov. Tell a person you trust. Shame is part of the scam; talking breaks it."
		]
	}
];
var QUIZ = [
	{
		id: "q1",
		prompt: "Which address is the real PayPal site?",
		options: [
			{
				id: "a",
				label: "paypal-login-verification.com",
				correct: false
			},
			{
				id: "b",
				label: "secure.paypal.com.account-help.net",
				correct: false
			},
			{
				id: "c",
				label: "paypal.com",
				correct: true
			},
			{
				id: "d",
				label: "paypal.com.verify-id.xyz",
				correct: false
			}
		],
		why: "Only paypal.com (and a few official PayPal domains) belong to PayPal. Extra words before or after the real name are a costume."
	},
	{
		id: "q2",
		prompt: "A caller says they are from the cyber cell, shows a warrant on video, and tells you not to hang up. What do you do?",
		options: [
			{
				id: "a",
				label: "Stay on the line and pay to clear your name",
				correct: false
			},
			{
				id: "b",
				label: "Hang up, tell someone, and call a number you look up yourself",
				correct: true
			},
			{
				id: "c",
				label: "Install AnyDesk so they can show the court portal",
				correct: false
			},
			{
				id: "d",
				label: "Share an OTP to prove you are cooperating",
				correct: false
			}
		],
		why: "Digital arrest scams rely on fear plus isolation. Breaking the call is the whole defence."
	},
	{
		id: "q3",
		prompt: "A loan APK arrives on WhatsApp and asks for SMS and Accessibility permission. What is the safest move?",
		options: [
			{
				id: "a",
				label: "Install it — loans always need those permissions",
				correct: false
			},
			{
				id: "b",
				label: "Do not install. Use the lender’s listing on Google Play or the App Store, or walk away",
				correct: true
			},
			{
				id: "c",
				label: "Install, then deny permissions later",
				correct: false
			},
			{
				id: "d",
				label: "Forward it to a friend who needs money",
				correct: false
			}
		],
		why: "SMS plus Accessibility is how stealers lift OTPs. A file on chat is not a store listing."
	},
	{
		id: "q4",
		prompt: "You typed a password on a page that now looks fake. What is the first useful step?",
		options: [
			{
				id: "a",
				label: "Wait and see if money moves",
				correct: false
			},
			{
				id: "b",
				label: "Change that password from another device, then alert the bank if it was a financial login",
				correct: true
			},
			{
				id: "c",
				label: "Reply to the message and ask them to delete it",
				correct: false
			},
			{
				id: "d",
				label: "Post the link so others can check it",
				correct: false
			}
		],
		why: "Assume the password is burned. Change it on a device you trust, and treat any OTP SMS that follows as the thief trying to finish the job."
	},
	{
		id: "q5",
		prompt: "A padlock appears next to the address of a site asking you to “re-verify KYC”. What does the padlock actually prove?",
		options: [
			{
				id: "a",
				label: "The site is the real bank",
				correct: false
			},
			{
				id: "b",
				label: "The connection is encrypted — not that the domain is official",
				correct: true
			},
			{
				id: "c",
				label: "The page cannot steal a password",
				correct: false
			},
			{
				id: "d",
				label: "The site passed a government check",
				correct: false
			}
		],
		why: "Certificates are cheap. A lock only means the path is encrypted. Read the domain itself."
	}
];
var REPORT_CHANNELS = [
	{
		region: "India",
		items: [{
			name: "National Cyber Crime Portal",
			href: "https://cybercrime.gov.in"
		}, {
			name: "Helpline 1930",
			href: "tel:1930"
		}]
	},
	{
		region: "United States",
		items: [{
			name: "FTC ReportFraud",
			href: "https://reportfraud.ftc.gov"
		}, {
			name: "FBI IC3",
			href: "https://www.ic3.gov"
		}]
	},
	{
		region: "Companies",
		items: [{
			name: "Google phishing report",
			href: "https://safebrowsing.google.com/safebrowsing/report_phish/"
		}, {
			name: "PayPal spoof@paypal.com",
			href: "mailto:spoof@paypal.com"
		}]
	}
];
function Guides() {
	const [open, setOpen] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const hash = window.location.hash.replace(/^#/, "");
		if (!hash || !GUIDES.some((guide) => guide.id === hash)) return;
		setOpen(hash);
		const timer = window.setTimeout(() => {
			document.getElementById(hash)?.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		}, 50);
		return () => window.clearTimeout(timer);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-wide text-subtle uppercase",
				children: "Field notes"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-3xl font-medium tracking-tight",
				children: "A short briefing on the usual traps"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
				type: "single",
				collapsible: true,
				value: open,
				onValueChange: setOpen,
				className: "mt-6",
				children: GUIDES.map((guide) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
					value: guide.id,
					id: guide.id,
					className: "scroll-mt-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex flex-col items-start gap-1 pr-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-medium tracking-wide text-subtle uppercase",
							children: guide.kicker
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: guide.title })]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex max-w-2xl flex-col gap-3",
						children: [
							guide.body.map((para) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "leading-relaxed",
								children: para
							}, para)),
							guide.id === "phishing" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrySample, {
								sampleId: "paypal-lookalike",
								label: "Check a PayPal lookalike"
							}) : null,
							guide.id === "digital-arrest" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrySample, {
								sampleId: "digital-arrest",
								label: "Check a digital-arrest script"
							}) : null,
							guide.id === "apps" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrySample, {
								sampleId: "loan-apk",
								label: "Check a sideloaded loan app"
							}) : null
						]
					}) })]
				}, guide.id))
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-wide text-subtle uppercase",
				children: "Report"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-3xl font-medium tracking-tight",
				children: "Official doors, not the number in the message"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-4 sm:grid-cols-3",
				children: REPORT_CHANNELS.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-medium text-fg",
						children: group.region
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 flex flex-col gap-2",
						children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.href,
							className: "text-sm text-muted underline-offset-4 hover:text-fg hover:underline",
							rel: item.href.startsWith("http") ? "noreferrer" : void 0,
							children: item.name
						}) }, item.name))
					})]
				}, group.region))
			})
		] })]
	});
}
function TrySample({ sampleId, label }) {
	if (!SAMPLES.find((s) => s.id === sampleId)) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/",
		search: { sample: sampleId },
		className: "mt-2 inline-flex h-11 items-center text-sm font-medium text-fg underline-offset-4 hover:underline",
		children: label
	});
}
function Quiz() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [picked, setPicked] = (0, import_react.useState)(null);
	const [correctCount, setCorrectCount] = (0, import_react.useState)(0);
	const [done, setDone] = (0, import_react.useState)(false);
	const explainRef = (0, import_react.useRef)(null);
	const question = QUIZ[index];
	const chosen = question.options.find((o) => o.id === picked);
	const answered = picked !== null;
	const progress = done ? 100 : Math.round((index + (answered ? 1 : 0)) / QUIZ.length * 100);
	(0, import_react.useEffect)(() => {
		if (!answered && !done) return;
		explainRef.current?.scrollIntoView({
			behavior: "smooth",
			block: "nearest"
		});
	}, [
		answered,
		done,
		index
	]);
	function pick(id) {
		if (answered) return;
		setPicked(id);
		if (question.options.find((o) => o.id === id)?.correct) setCorrectCount((n) => n + 1);
	}
	function next() {
		if (index + 1 >= QUIZ.length) {
			setDone(true);
			return;
		}
		setIndex((n) => n + 1);
		setPicked(null);
	}
	function reset() {
		setIndex(0);
		setPicked(null);
		setCorrectCount(0);
		setDone(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] sm:p-7",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-wide text-subtle uppercase",
					children: "Spot the trap"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-xs text-subtle tabular-nums",
					children: done ? "Done" : `${index + 1}/${QUIZ.length}`
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
				value: progress,
				className: "mt-3"
			}),
			done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: explainRef,
				className: "mt-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-3xl font-medium tracking-tight",
						children: [
							correctCount,
							" of ",
							QUIZ.length,
							" read correctly"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xl text-sm leading-relaxed text-muted",
						children: "This is practice, not a certificate. The useful habit is slowing down when money, police, or a login appears in a surprise message."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "secondary",
						className: "mt-6 min-h-11",
						onClick: reset,
						children: "Try the questions again"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-medium tracking-tight sm:text-3xl",
						children: question.prompt
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 flex flex-col gap-2",
						children: question.options.map((option) => {
							const selected = picked === option.id;
							const show = answered;
							const good = option.correct;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => pick(option.id),
								className: cn("min-h-12 rounded-lg px-4 py-3 text-left text-sm leading-snug transition-[background-color,box-shadow,color] duration-[150ms]", !show && "bg-elevated text-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]", show && good && "bg-risk-low text-risk-low-fg", show && selected && !good && "bg-risk-high text-risk-high-fg", show && !selected && !good && "bg-elevated text-muted"),
								children: option.label
							}, option.id);
						})
					}),
					answered && chosen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						ref: explainRef,
						className: "rise-in mt-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-muted",
							children: question.why
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							className: "mt-4 min-h-11",
							onClick: next,
							children: index + 1 >= QUIZ.length ? "See how you did" : "Next question"
						})]
					}) : null
				]
			})
		]
	});
}
function Learn() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, {
		current: "learn",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto flex w-full max-w-5xl flex-col gap-14 px-4 py-8 sm:px-6 sm:py-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium tracking-wide text-subtle uppercase",
							children: "Learn"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 font-display text-4xl leading-tight font-medium tracking-tight sm:text-5xl",
							children: "Slow down. Then look again."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xl text-base leading-relaxed text-muted",
							children: "Most scams work because they steal time — not because the story is clever. These notes, examples, and a short quiz are for that pause."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quiz, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Guides, {})
			]
		})
	});
}
//#endregion
export { Learn as component };
