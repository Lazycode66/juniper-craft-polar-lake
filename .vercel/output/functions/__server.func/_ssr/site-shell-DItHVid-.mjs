import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as Slot, v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { r as cn } from "./router-D1vD6Ypz.mjs";
import { n as Root, t as Indicator } from "../_libs/radix-ui__react-progress.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-shell-DItHVid-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SAMPLES = [
	{
		id: "paypal-lookalike",
		kind: "link",
		label: "PayPal lookalike",
		blurb: "A verification domain that is not PayPal",
		payload: {
			kind: "link",
			text: "http://paypal-login-verification.com/secure/update?session=1"
		}
	},
	{
		id: "short-link",
		kind: "link",
		label: "Short bank link",
		blurb: "A shortener wrapping a KYC scare",
		payload: {
			kind: "link",
			text: "Your SBI KYC expires in 24 hours. Update now to avoid account freeze: https://bit.ly/sbi-kyc-urgent"
		}
	},
	{
		id: "real-paypal",
		kind: "link",
		label: "Official PayPal",
		blurb: "The real domain, for contrast",
		payload: {
			kind: "link",
			text: "https://www.paypal.com/signin"
		}
	},
	{
		id: "digital-arrest",
		kind: "message",
		label: "Digital arrest",
		blurb: "Fake cyber cell + Bitcoin demand",
		payload: {
			kind: "message",
			text: "This is an official notice from the Cyber Crime Cell. An arrest warrant has been issued in your name for money laundering. Do not disconnect this call. Pay 250000 INR immediately via Bitcoin to avoid digital arrest. Share your OTP to verify identity. Install AnyDesk for video court."
		}
	},
	{
		id: "parcel-customs",
		kind: "message",
		label: "Parcel fee",
		blurb: "Courier holding a package for a small fee",
		payload: {
			kind: "message",
			text: "DHL: Your parcel is held at customs. Pay the handling fee immediately or it will be returned. Visit http://dhl-customs-payment.xyz/invoice to avoid delay."
		}
	},
	{
		id: "loan-apk",
		kind: "app",
		label: "Loan APK",
		blurb: "Sideloaded lender with SMS and accessibility",
		payload: {
			kind: "app",
			text: "QuickCash Instant Loan APK sent on WhatsApp. Developer unknown. Claims to approve loans in 5 minutes.",
			app: {
				name: "QuickCash Instant Loan",
				source: "chat",
				permissions: [
					"sms",
					"accessibility",
					"overlay",
					"contacts"
				],
				claimedPurpose: "Instant personal loan and KYC",
				developer: "Unknown — sent on WhatsApp"
			}
		}
	},
	{
		id: "torch-store",
		kind: "app",
		label: "Store torch app",
		blurb: "Simple utility from Play Store",
		payload: {
			kind: "app",
			text: "A flashlight from Google Play. Uses only the camera flash.",
			app: {
				name: "Lantern Torch",
				source: "play",
				permissions: [],
				claimedPurpose: "Flashlight",
				developer: "Listed Play publisher"
			}
		}
	}
];
function getSample(id) {
	if (!id) return null;
	return SAMPLES.find((s) => s.id === id) ?? null;
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[color,background-color,box-shadow,opacity,transform] duration-[150ms] ease-[cubic-bezier(0.23,1,0.32,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:enabled:scale-[0.96]", {
	variants: {
		variant: {
			default: "bg-accent text-accent-fg hover:opacity-90",
			secondary: "bg-elevated text-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
			outline: "bg-transparent text-fg shadow-[var(--shadow-border)] hover:bg-elevated",
			ghost: "text-muted hover:bg-elevated hover:text-fg"
		},
		size: {
			default: "h-11 min-h-11 rounded-md px-4 text-sm",
			sm: "h-9 min-h-9 rounded-sm px-3 text-sm",
			lg: "h-12 min-h-12 rounded-md px-5 text-base",
			icon: "size-11 min-h-11 rounded-md"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Progress = import_react.forwardRef(({ className, value, barClassName, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn("relative h-1.5 w-full overflow-hidden rounded-full bg-elevated", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Indicator, {
		className: cn("h-full w-full flex-1 bg-accent transition-transform duration-[var(--motion-slow)] ease-[var(--ease-smooth-out)]", barClassName),
		style: { transform: `translateX(-${100 - (value ?? 0)}%)` }
	})
}));
Progress.displayName = Root.displayName;
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-5xl flex-col gap-3 px-4 py-8 text-sm text-muted sm:flex-row sm:items-start sm:justify-between sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-xl",
				children: "Lantern is an awareness guide, not a forensic verdict. It can miss threats and can flag innocent messages. Submissions stay in this session and are not stored."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/learn",
				hash: "already",
				className: "shrink-0 text-fg underline-offset-4 hover:underline",
				children: "Already tapped or paid?"
			})]
		})
	});
}
function LanternMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className: cn("size-6", className),
		fill: "none",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M9 8.5h6l-.85 9.2a2.2 2.2 0 0 1-2.18 2h-.14a2.2 2.2 0 0 1-2.18-2L9 8.5Z",
				stroke: "currentColor",
				strokeWidth: "1.5",
				strokeLinejoin: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M9.2 8.5V7.2a2.8 2.8 0 0 1 5.6 0v1.3",
				stroke: "currentColor",
				strokeWidth: "1.5",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M8 8.5h8",
				stroke: "currentColor",
				strokeWidth: "1.5",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M12 12.2v3.2",
				stroke: "currentColor",
				strokeWidth: "1.5",
				strokeLinecap: "round"
			})
		]
	});
}
function Wordmark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-2 text-fg", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanternMark, { className: "size-5 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-lg font-medium tracking-tight",
			children: "Lantern"
		})]
	});
}
var LINKS = [{
	to: "/",
	label: "Check"
}, {
	to: "/learn",
	label: "Learn"
}];
function SiteHeader({ current }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-20 border-b border-border bg-bg/90 backdrop-blur-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:h-16 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				"aria-label": "Lantern home",
				className: "rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex items-center rounded-lg bg-surface p-1 shadow-[var(--shadow-border)]",
				"aria-label": "Primary",
				children: LINKS.map((link) => {
					const active = current === "check" && link.to === "/" || current === "learn" && link.to === "/learn";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: link.to,
						className: cn("inline-flex h-10 min-w-16 items-center justify-center rounded-md px-3 text-sm font-medium transition-colors duration-[150ms]", active ? "bg-elevated text-fg" : "text-muted hover:text-fg"),
						"aria-current": active ? "page" : void 0,
						children: link.label
					}, link.to);
				})
			})]
		})
	});
}
function SiteShell({ current, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, { current }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { getSample as a, SiteShell as i, Progress as n, SAMPLES as r, Button as t };
