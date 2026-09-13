import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { a as MessageSquareText, c as FileSearch, d as Ban, i as ShieldCheck, l as CircleAlert, n as Smartphone, o as Link2, r as ShieldQuestion, s as Globe } from "../_libs/lucide-react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as Route$1, r as cn } from "./router-D1vD6Ypz.mjs";
import { a as getSample, i as SiteShell, n as Progress, r as SAMPLES, t as Button } from "./site-shell-DItHVid-.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { i as Trigger, n as List, r as Root2, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
import { t as Root$1 } from "../_libs/radix-ui__react-separator.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CURzN_kA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var OFFICIAL_DOMAINS = {
	paypal: [
		"paypal.com",
		"paypal.me",
		"paypalobjects.com"
	],
	apple: [
		"apple.com",
		"icloud.com",
		"me.com",
		"appleid.com"
	],
	google: [
		"google.com",
		"google.co.in",
		"google.co.uk",
		"youtube.com",
		"gmail.com",
		"android.com",
		"googleusercontent.com",
		"gstatic.com",
		"withgoogle.com"
	],
	microsoft: [
		"microsoft.com",
		"office.com",
		"live.com",
		"outlook.com",
		"xbox.com",
		"microsoftonline.com",
		"office365.com",
		"onedrive.com",
		"windows.com",
		"msn.com",
		"bing.com"
	],
	amazon: [
		"amazon.com",
		"amazon.in",
		"amazon.co.uk",
		"amazon.de",
		"amazon.ca",
		"amazon.co.jp",
		"amazonaws.com",
		"a2z.com"
	],
	meta: [
		"facebook.com",
		"fb.com",
		"instagram.com",
		"whatsapp.com",
		"wa.me",
		"messenger.com",
		"meta.com",
		"threads.net"
	],
	netflix: ["netflix.com"],
	spotify: ["spotify.com"],
	x: [
		"x.com",
		"twitter.com",
		"t.co"
	],
	linkedin: ["linkedin.com", "lnkd.in"],
	steam: ["steampowered.com", "steamcommunity.com"],
	binance: ["binance.com"],
	coinbase: ["coinbase.com"],
	metamask: ["metamask.io"],
	adobe: ["adobe.com"],
	dropbox: ["dropbox.com"],
	dhl: ["dhl.com"],
	fedex: ["fedex.com"],
	ups: ["ups.com"],
	usps: ["usps.com"],
	indiapost: ["indiapost.gov.in"],
	sbi: [
		"onlinesbi.sbi",
		"sbi.co.in",
		"sbi.com"
	],
	hdfc: ["hdfcbank.com"],
	icici: ["icicibank.com"],
	axis: ["axisbank.com"],
	kotak: ["kotak.com", "kotakbank.com"],
	paytm: ["paytm.com", "paytmbank.com"],
	phonepe: ["phonepe.com"],
	bhim: ["bhimupi.org.in"],
	npci: ["npci.org.in"],
	irctc: ["irctc.co.in"],
	uidai: ["uidai.gov.in"],
	incometax: ["incometax.gov.in"],
	cybercrime: ["cybercrime.gov.in"],
	rbi: ["rbi.org.in"],
	govin: ["india.gov.in", "gov.in"],
	irs: ["irs.gov"],
	ssa: ["ssa.gov"],
	ftc: ["ftc.gov"],
	ic3: ["ic3.gov"],
	chase: ["chase.com"],
	bofa: ["bankofamerica.com"],
	wellsfargo: ["wellsfargo.com"],
	citi: ["citi.com", "citibank.com"],
	capitalone: ["capitalone.com"]
};
var BRAND_ALIASES = {
	paypal: "paypal",
	apple: "apple",
	icloud: "apple",
	appleid: "apple",
	google: "google",
	gmail: "google",
	youtube: "google",
	microsoft: "microsoft",
	outlook: "microsoft",
	office365: "microsoft",
	office: "microsoft",
	hotmail: "microsoft",
	xbox: "microsoft",
	amazon: "amazon",
	awsprize: "amazon",
	facebook: "meta",
	instagram: "meta",
	insta: "meta",
	whatsapp: "meta",
	messenger: "meta",
	meta: "meta",
	netflix: "netflix",
	spotify: "spotify",
	twitter: "x",
	linkedin: "linkedin",
	steam: "steam",
	binance: "binance",
	coinbase: "coinbase",
	metamask: "metamask",
	adobe: "adobe",
	dropbox: "dropbox",
	dhl: "dhl",
	fedex: "fedex",
	ups: "ups",
	usps: "usps",
	sbi: "sbi",
	hdfc: "hdfc",
	hdfcbank: "hdfc",
	icici: "icici",
	icicibank: "icici",
	axis: "axis",
	axisbank: "axis",
	kotak: "kotak",
	paytm: "paytm",
	phonepe: "phonepe",
	bhim: "bhim",
	irctc: "irctc",
	aadhaar: "uidai",
	aadhar: "uidai",
	uidai: "uidai",
	incometax: "incometax",
	chase: "chase",
	wellsfargo: "wellsfargo",
	bankofamerica: "bofa",
	citibank: "citi",
	capitalone: "capitalone",
	irs: "irs"
};
var SUSPICIOUS_TLDS = /* @__PURE__ */ new Set([
	"xyz",
	"tk",
	"ml",
	"ga",
	"cf",
	"gq",
	"top",
	"click",
	"zip",
	"mov",
	"country",
	"stream",
	"gdn",
	"loan",
	"win",
	"bid",
	"review",
	"account",
	"download",
	"cfd",
	"sbs",
	"cyou",
	"icu",
	"rest",
	"support",
	"help",
	"security",
	"finance",
	"quest",
	"work",
	"cam",
	"buzz",
	"club",
	"info"
]);
var SHORTENERS = /* @__PURE__ */ new Set([
	"bit.ly",
	"tinyurl.com",
	"t.co",
	"goo.gl",
	"ow.ly",
	"is.gd",
	"buff.ly",
	"rebrand.ly",
	"cutt.ly",
	"tiny.cc",
	"shorturl.at",
	"rb.gy",
	"t.ly",
	"v.gd",
	"owllink.net",
	"bl.ink"
]);
var FREE_HOSTS = [
	"github.io",
	"netlify.app",
	"vercel.app",
	"web.app",
	"firebaseapp.com",
	"blogspot.com",
	"wordpress.com",
	"weebly.com",
	"wixsite.com",
	"squarespace.com",
	"glitch.me",
	"pages.dev",
	"webflow.io",
	"000webhostapp.com",
	"herokuapp.com"
];
var PHISHING_WORDS = [
	"login",
	"log-in",
	"signin",
	"sign-in",
	"verify",
	"verification",
	"secure",
	"update",
	"confirm",
	"password",
	"account",
	"unlock",
	"restore",
	"limited",
	"suspend",
	"billing",
	"invoice",
	"wallet",
	"recovery",
	"authenticate",
	"credential"
];
var SCAM_RULES = [
	{
		id: "digital-arrest",
		phrases: [
			"digital arrest",
			"digitally arrested",
			"virtual arrest",
			"video arrest",
			"online arrest"
		],
		severity: "high",
		weight: 40,
		title: "Digital arrest language",
		detail: "Real police do not arrest people over a video call or demand money to cancel a warrant. This phrase is a hallmark of a common scam.",
		category: "impersonation"
	},
	{
		id: "law-enforcement",
		phrases: [
			"arrest warrant",
			"warrant has been issued",
			"you will be arrested",
			"legal notice",
			"court order",
			"cyber crime cell",
			"cyber cell",
			"enforcement directorate",
			"central bureau",
			"income tax raid",
			"customs department",
			"narcotics bureau",
			"interpol notice",
			"federal bureau",
			"department of justice",
			"immigration and customs",
			"social security administration",
			"internal revenue service"
		],
		tokens: [
			"cbi",
			"ncb",
			"interpol"
		],
		severity: "high",
		weight: 28,
		title: "Impersonating officials",
		detail: "Scammers copy the names of police, tax, and customs agencies. A genuine officer will not demand secrecy or instant payment over a phone or chat.",
		category: "impersonation"
	},
	{
		id: "isolation",
		phrases: [
			"do not disconnect",
			"do not hang up",
			"stay on the line",
			"do not tell anyone",
			"keep this confidential",
			"this is a secret operation",
			"do not inform family",
			"mute your phone",
			"do not talk to the bank"
		],
		severity: "high",
		weight: 26,
		title: "Tries to isolate you",
		detail: "Isolation is the scam. Anyone who forbids you from hanging up, calling a loved one, or checking with your bank is not protecting you.",
		category: "scam"
	},
	{
		id: "remote-access",
		phrases: [
			"anydesk",
			"teamviewer",
			"ultraviewer",
			"remote desktop",
			"allow screen share",
			"install this app to verify",
			"share your screen",
			"grant remote access"
		],
		severity: "high",
		weight: 32,
		title: "Asks for remote access",
		detail: "Apps that let someone control your phone or computer are a favourite of fraudsters. Once they are in, they can move money while you watch.",
		category: "privacy"
	},
	{
		id: "otp-harvest",
		phrases: [
			"share otp",
			"share the otp",
			"tell me the otp",
			"send otp",
			"forward the code",
			"verification code is",
			"read the sms",
			"cvv number",
			"net banking password",
			"upi pin"
		],
		tokens: ["otp"],
		severity: "high",
		weight: 30,
		title: "Asks for OTP or PIN",
		detail: "One-time codes and UPI PINs are the keys to your money. Banks and apps never ask you to read them out or type them into a chat.",
		category: "privacy"
	},
	{
		id: "payment-demand",
		phrases: [
			"pay immediately",
			"pay right now",
			"gift card",
			"itunes card",
			"steam card",
			"google play card",
			"wire transfer",
			"bitcoin",
			"usdt",
			"crypto wallet",
			"deposit to this account",
			"fine must be paid",
			"settlement amount"
		],
		severity: "high",
		weight: 24,
		title: "Demands unusual payment",
		detail: "Gift cards, crypto, and rushed bank transfers are almost never how real fines, taxes, or courier fees work. Treat a payment demand as a stop sign.",
		category: "scam"
	},
	{
		id: "urgency",
		phrases: [
			"act now",
			"immediately",
			"within 24 hours",
			"within 2 hours",
			"last warning",
			"final notice",
			"account will be closed",
			"account will be suspended",
			"will be frozen",
			"will be sealed",
			"limited-time",
			"expires today",
			"do not ignore",
			"urgent action required"
		],
		severity: "medium",
		weight: 12,
		title: "Pressures you to rush",
		detail: "Urgency is used to skip your judgement. Real institutions give you time and a way to verify on their official site or app.",
		category: "urgency"
	},
	{
		id: "kyc-threat",
		phrases: [
			"update kyc",
			"kyc pending",
			"kyc expired",
			"aadhaar suspended",
			"aadhar blocked",
			"pan card blocked",
			"account freeze",
			"re-kyc"
		],
		severity: "medium",
		weight: 16,
		title: "KYC or ID scare",
		detail: "Banks do send KYC reminders — but they will not ask you to confirm passwords or pay a fee from a text link. Open the official app yourself.",
		category: "scam"
	},
	{
		id: "prize",
		phrases: [
			"you have won",
			"you've won",
			"lottery",
			"lucky winner",
			"claim your prize",
			"inheritance",
			"guaranteed returns",
			"double your money",
			"investment opportunity"
		],
		severity: "medium",
		weight: 18,
		title: "Prize or miracle return",
		detail: "Unexpected winnings and guaranteed investment returns are a classic hook. If you did not enter a contest, you did not win it.",
		category: "scam"
	},
	{
		id: "job-task",
		phrases: [
			"part time job",
			"daily profit",
			"task rebate",
			"like and earn",
			"work from home offer",
			"click jobs",
			"need to recharge"
		],
		severity: "medium",
		weight: 16,
		title: "Task or rebate job hook",
		detail: "Fake job apps pay a little at first, then ask you to deposit money to unlock larger ‘tasks’. That deposit is the scam.",
		category: "scam"
	}
];
var PERMISSION_CATALOG = [
	{
		id: "sms",
		label: "SMS",
		hint: "Read or send texts — can steal OTPs",
		weight: 22,
		highRisk: true
	},
	{
		id: "accessibility",
		label: "Accessibility",
		hint: "Can tap, read, and control the whole phone",
		weight: 36,
		highRisk: true
	},
	{
		id: "admin",
		label: "Device admin",
		hint: "Hard to uninstall; often used by lock-screen malware",
		weight: 34,
		highRisk: true
	},
	{
		id: "overlay",
		label: "Draw over apps",
		hint: "Can fake a bank screen on top of the real one",
		weight: 24,
		highRisk: true
	},
	{
		id: "contacts",
		label: "Contacts",
		hint: "Used to spam people you know",
		weight: 8,
		highRisk: false
	},
	{
		id: "camera",
		label: "Camera",
		hint: "Sensitive if the app has no reason to film",
		weight: 6,
		highRisk: false
	},
	{
		id: "microphone",
		label: "Microphone",
		hint: "Sensitive if the app has no reason to listen",
		weight: 8,
		highRisk: false
	},
	{
		id: "location",
		label: "Location",
		hint: "Common, but still worth questioning",
		weight: 4,
		highRisk: false
	},
	{
		id: "storage",
		label: "All files",
		hint: "Can read photos, documents, and downloads",
		weight: 10,
		highRisk: false
	},
	{
		id: "notification",
		label: "Notification access",
		hint: "Can read OTPs that arrive as notifications",
		weight: 18,
		highRisk: true
	},
	{
		id: "phone",
		label: "Phone / call log",
		hint: "Can see who you call",
		weight: 10,
		highRisk: false
	},
	{
		id: "accounts",
		label: "Accounts",
		hint: "Can reach saved logins",
		weight: 16,
		highRisk: true
	}
];
var APP_SOURCES = [
	{
		id: "play",
		label: "Google Play"
	},
	{
		id: "appstore",
		label: "Apple App Store"
	},
	{
		id: "apk",
		label: "Sideloaded APK"
	},
	{
		id: "web",
		label: "Website download"
	},
	{
		id: "chat",
		label: "WhatsApp / Telegram / SMS"
	},
	{
		id: "unknown",
		label: "Unknown"
	}
];
var MULTI_TLDS = /* @__PURE__ */ new Set([
	"co.uk",
	"com.au",
	"co.in",
	"com.br",
	"co.jp",
	"com.mx",
	"co.za",
	"com.tr",
	"co.kr",
	"com.sg",
	"org.in",
	"gov.in",
	"net.in",
	"ac.uk",
	"gov.uk",
	"com.cn",
	"co.nz",
	"com.hk"
]);
var URL_RE = /((?:https?|ftp|hxxp|hxxps):\/\/[^\s<>"']+|(?:www\.)[a-z0-9][a-z0-9.-]+\.[a-z]{2,}(?:\/[^\s<>"']*)?)/gi;
var BARE_DOMAIN_RE = /\b(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+(?:xn--[a-z0-9]+|[a-z]{2,24})(?::\d{2,5})?(?:\/[^\s<>"']*)?/gi;
function registrableDomain(hostname) {
	const host = hostname.toLowerCase().replace(/\.$/, "");
	const parts = host.split(".").filter(Boolean);
	if (parts.length <= 2) return host;
	const last2 = parts.slice(-2).join(".");
	if (MULTI_TLDS.has(last2)) return parts.slice(-3).join(".");
	return last2;
}
function isIpHost(hostname) {
	if (/^\[?[0-9a-f:]+\]?$/i.test(hostname) && hostname.includes(":")) return true;
	return /^(?:\d{1,3}\.){3}\d{1,3}$/.test(hostname);
}
function defang(raw) {
	return raw.replace(/hxxps?:\/\//gi, (m) => m.toLowerCase().startsWith("hxxps") ? "https://" : "http://").replace(/\[\.\]/g, ".").replace(/\(dot\)/gi, ".");
}
function parseUrl(raw) {
	const cleaned = defang(raw.trim()).replace(/[),.;!?]+$/g, "");
	if (!cleaned) return null;
	let href = cleaned;
	if (!/^[a-z][a-z0-9+.-]*:/i.test(href)) href = `https://${href}`;
	try {
		const u = new URL(href);
		const hostname = u.hostname.replace(/^\[|\]$/g, "").toLowerCase();
		if (!hostname) return null;
		return {
			raw,
			href: u.href,
			protocol: u.protocol.replace(":", ""),
			hostname,
			registrable: registrableDomain(hostname),
			path: `${u.pathname}${u.search}`,
			isIp: isIpHost(hostname),
			isPunycode: hostname.includes("xn--"),
			decodedHost: hostname
		};
	} catch {
		return null;
	}
}
function extractUrls(text) {
	const found = /* @__PURE__ */ new Map();
	const add = (chunk) => {
		const parsed = parseUrl(chunk);
		if (!parsed) return;
		if (!found.has(parsed.registrable + parsed.path)) found.set(parsed.registrable + parsed.path, parsed);
	};
	for (const m of text.matchAll(URL_RE)) add(m[0]);
	for (const m of text.matchAll(BARE_DOMAIN_RE)) {
		const token = m[0];
		if (token.includes("@")) continue;
		add(token);
	}
	return [...found.values()];
}
function decodeRepeated(value, times = 3) {
	let current = value;
	for (let i = 0; i < times; i++) try {
		const next = decodeURIComponent(current);
		if (next === current) break;
		current = next;
	} catch {
		break;
	}
	return current;
}
function levenshtein(a, b) {
	if (a === b) return 0;
	if (!a.length) return b.length;
	if (!b.length) return a.length;
	const row = Array.from({ length: b.length + 1 }, (_, i) => i);
	for (let i = 1; i <= a.length; i++) {
		let prev = i - 1;
		row[0] = i;
		for (let j = 1; j <= b.length; j++) {
			const tmp = row[j];
			const cost = a[i - 1] === b[j - 1] ? 0 : 1;
			row[j] = Math.min(row[j] + 1, row[j - 1] + 1, prev + cost);
			prev = tmp;
		}
	}
	return row[b.length];
}
function squashHomoglyphs(value) {
	return value.toLowerCase().replace(/0/g, "o").replace(/[1l|]/g, "i").replace(/3/g, "e").replace(/4/g, "a").replace(/5/g, "s").replace(/7/g, "t").replace(/\$/g, "s").replace(/@/g, "a").replace(/rn/g, "m");
}
function push(list, item) {
	if (list.some((i) => i.id === item.id)) return;
	list.push(item);
}
function escapeRegExp(value) {
	return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function hasToken(haystack, token) {
	return new RegExp(`(^|[^a-z0-9])${escapeRegExp(token)}($|[^a-z0-9])`, "i").test(haystack);
}
function tldOf(host) {
	const parts = host.split(".");
	return parts[parts.length - 1] ?? "";
}
function isOfficial(url) {
	for (const [brand, domains] of Object.entries(OFFICIAL_DOMAINS)) if (domains.some((d) => url.registrable === d || url.hostname.endsWith(`.${d}`))) return { brand };
	return null;
}
function sld(registrable) {
	return registrable.split(".")[0] ?? registrable;
}
function findBrandInHost(host) {
	const compact = host.replace(/[^a-z0-9]/gi, "").toLowerCase();
	const squashed = squashHomoglyphs(compact);
	for (const alias of Object.keys(BRAND_ALIASES)) {
		if (alias.length < 3) continue;
		if (compact.includes(alias) || squashed.includes(alias)) return alias;
		if (levenshtein(squashed, squashHomoglyphs(alias)) === 1 && alias.length >= 5) return alias;
	}
	return null;
}
function findTyposquat(registrable) {
	const label = squashHomoglyphs(sld(registrable));
	for (const alias of Object.keys(BRAND_ALIASES)) {
		if (alias.length < 4) continue;
		const dist = levenshtein(label, squashHomoglyphs(alias));
		if (dist > 0 && dist <= (alias.length >= 7 ? 2 : 1)) return alias;
	}
	return null;
}
function scanUrls(urls, blob) {
	const out = [];
	for (const url of urls) {
		const official = isOfficial(url);
		const hostBlob = `${url.hostname}${url.path}`.toLowerCase();
		const decoded = decodeRepeated(`${url.hostname}${url.path}`).toLowerCase();
		if (url.protocol === "javascript" || url.protocol === "data") push(out, {
			id: `scheme-${url.registrable}`,
			severity: "high",
			weight: 40,
			title: "Dangerous link type",
			detail: `This uses a ${url.protocol}: address, which can run code or hide a fake page inside the link itself.`,
			category: "phishing"
		});
		if (url.isIp) push(out, {
			id: `ip-${url.hostname}`,
			severity: "high",
			weight: 34,
			title: "Website is a raw IP address",
			detail: "Banks, shops, and mail providers do not send you to a string of numbers. IP links are a common way to hide the real destination.",
			category: "phishing"
		});
		if (url.isPunycode) push(out, {
			id: `idn-${url.hostname}`,
			severity: "high",
			weight: 30,
			title: "International lookalike domain",
			detail: "This address uses encoded characters (punycode). Attackers use them to make a fake site look identical to a real brand.",
			category: "phishing"
		});
		if (url.raw.includes("@") && /https?:\/\/[^/\s]+@/i.test(url.raw)) push(out, {
			id: `at-${url.hostname}`,
			severity: "high",
			weight: 32,
			title: "Hidden destination after @",
			detail: "Everything before the @ is a decoy. Browsers go to the host after it — a classic way to dress a malicious site in a trusted name.",
			category: "phishing"
		});
		if (url.hostname.split(".").length >= 5 && !official) push(out, {
			id: `subs-${url.hostname}`,
			severity: "medium",
			weight: 10,
			title: "Unusually long subdomain chain",
			detail: `${url.hostname} has many prefixes. Phishing kits nest extra words like “secure” or “login” in front of a lookalike name.`,
			category: "phishing"
		});
		if (SHORTENERS.has(url.registrable)) push(out, {
			id: `short-${url.registrable}`,
			severity: "medium",
			weight: 14,
			title: "Shortened link hides the destination",
			detail: "Short links can point anywhere. Do not tap them from a surprise message. Ask the sender for the full address, or open the official app instead.",
			category: "phishing"
		});
		const tld = tldOf(url.registrable);
		if (SUSPICIOUS_TLDS.has(tld) && !official) push(out, {
			id: `tld-${url.registrable}`,
			severity: "medium",
			weight: 12,
			title: `Uncommon domain ending .${tld}`,
			detail: "This ending is cheap and frequently used for throwaway phishing sites. It is not proof by itself, but it is a reason to slow down.",
			category: "phishing"
		});
		if (FREE_HOSTS.some((h) => url.registrable === h || url.hostname.endsWith(`.${h}`))) push(out, {
			id: `freehost-${url.hostname}`,
			severity: "medium",
			weight: 16,
			title: "Hosted on a free website platform",
			detail: "Anyone can publish a page here in minutes. Real banks and tax offices do not collect logins on free hosting.",
			category: "phishing"
		});
		if (url.protocol === "http" && !url.isIp) push(out, {
			id: `http-${url.hostname}`,
			severity: official ? "low" : "medium",
			weight: official ? 4 : 10,
			title: "Not encrypted (http)",
			detail: "The connection is not locked. A login page on plain http is a strong warning, even if the name looks familiar.",
			category: "phishing"
		});
		if (!official) {
			const brand = findBrandInHost(url.hostname.replace(/\./g, "")) ?? findBrandInHost(sld(url.registrable)) ?? findTyposquat(url.registrable);
			if (brand) {
				const officialList = OFFICIAL_DOMAINS[BRAND_ALIASES[brand] ?? brand] ?? [];
				if (!officialList.includes(url.registrable)) push(out, {
					id: `lookalike-${url.registrable}`,
					severity: "high",
					weight: 38,
					title: `Mimics ${brand} but is not the official site`,
					detail: `${url.registrable} borrows the name “${brand}”. Official pages live on ${officialList.slice(0, 2).join(" or ") || "the company’s real domain"} — not this address.`,
					category: "phishing"
				});
			}
			const bait = PHISHING_WORDS.filter((w) => hostBlob.includes(w) || decoded.includes(w));
			if (bait.length >= 2) push(out, {
				id: `bait-${url.registrable}`,
				severity: "medium",
				weight: 12,
				title: "Login or verification words in the address",
				detail: `The link leans on words like ${bait.slice(0, 3).join(", ")}. Combined with an unfamiliar domain, that is a typical fake sign-in page.`,
				category: "phishing"
			});
		}
	}
	const lower = blob.toLowerCase();
	if (/\b(verify|confirm|update|unlock)\b/i.test(lower) && urls.length > 0 && urls.every((u) => !isOfficial(u))) push(out, {
		id: "cta-unofficial",
		severity: "medium",
		weight: 8,
		title: "Asks you to verify on an unofficial site",
		detail: "If a message wants you to ‘verify’, ‘update’, or ‘unlock’, type the service name into your app store or bookmarks. Never use the link in the message.",
		category: "phishing"
	});
	return out;
}
function scanScamLanguage(text) {
	const out = [];
	const lower = text.toLowerCase();
	for (const rule of SCAM_RULES) {
		const hitPhrase = rule.phrases.some((p) => lower.includes(p));
		const hitToken = (rule.tokens ?? []).some((t) => hasToken(lower, t));
		if (!hitPhrase && !hitToken) continue;
		push(out, {
			id: rule.id,
			severity: rule.severity,
			weight: rule.weight,
			title: rule.title,
			detail: rule.detail,
			category: rule.category
		});
	}
	const threat = out.some((i) => i.id === "digital-arrest" || i.id === "law-enforcement");
	const pay = out.some((i) => i.id === "payment-demand");
	const isolate = out.some((i) => i.id === "isolation");
	if (threat && (pay || isolate)) push(out, {
		id: "arrest-combo",
		severity: "high",
		weight: 20,
		title: "Classic digital-arrest pattern",
		detail: "A fake official, a threat of arrest, and a demand to stay on the line or pay — that combination is the scam, not a coincidence.",
		category: "scam"
	});
	return out;
}
function scanApp(app) {
	const out = [];
	const sourceLabel = APP_SOURCES.find((s) => s.id === app.source)?.label ?? app.source;
	const sideloaded = app.source === "apk" || app.source === "web" || app.source === "chat";
	if (sideloaded) push(out, {
		id: "sideload",
		severity: "high",
		weight: app.source === "apk" || app.source === "chat" ? 32 : 24,
		title: `Installed from ${sourceLabel}`,
		detail: "Apps sent as files, or downloaded from a random site, skip the store’s malware checks. Loan, job, and ‘mod’ APKs are a frequent way to steal OTPs.",
		category: "app"
	});
	else if (app.source === "unknown") push(out, {
		id: "unknown-source",
		severity: "medium",
		weight: 12,
		title: "Install source is unclear",
		detail: "If you cannot say which store it came from, treat it as untrusted until you can reinstall from Google Play or the App Store.",
		category: "app"
	});
	const selected = PERMISSION_CATALOG.filter((p) => app.permissions.includes(p.id));
	for (const perm of selected) {
		const bump = sideloaded && perm.highRisk ? 8 : 0;
		push(out, {
			id: `perm-${perm.id}`,
			severity: perm.highRisk ? "high" : "medium",
			weight: perm.weight + bump,
			title: `Wants ${perm.label.toLowerCase()} access`,
			detail: perm.hint + ".",
			category: "app"
		});
	}
	const purpose = `${app.claimedPurpose} ${app.name}`.toLowerCase();
	const looksSimple = /calculator|torch|flashlight|cleaner|wallpaper|photo|filter|game|vpn|pdf|reader/.test(purpose);
	const dangerous = selected.filter((p) => p.highRisk);
	if (looksSimple && dangerous.length) push(out, {
		id: "purpose-mismatch",
		severity: "high",
		weight: 18,
		title: "Permissions do not match the job",
		detail: `A ${app.name || "simple utility"} does not need ${dangerous.map((p) => p.label.toLowerCase()).join(", ")}. That mismatch is a common malware tell.`,
		category: "app"
	});
	if (/loan|credit|kyc|bank|wallet|upi|invest|trading|rebate|earn/.test(purpose) && sideloaded) push(out, {
		id: "finance-sideload",
		severity: "high",
		weight: 22,
		title: "Money app from outside the store",
		detail: "Anything that touches loans, KYC, or wallets should come only from the official store listing of that company — never a file on chat.",
		category: "app"
	});
	if (/unknown|random|friend|whatsapp|telegram/i.test(app.developer) && sideloaded) push(out, {
		id: "unknown-dev",
		severity: "medium",
		weight: 10,
		title: "Developer is not identifiable",
		detail: "A nameless publisher plus a file from chat is enough reason to delete the app and keep your banking apps on a clean phone.",
		category: "app"
	});
	return out;
}
function levelFromScore$1(score, indicators) {
	if (indicators.some((i) => i.severity === "high" && i.weight >= 28)) return score >= 40 ? "high" : "medium";
	if (score >= 55) return "high";
	if (score >= 24) return "medium";
	return "low";
}
function headlineFor(level, kind) {
	if (level === "high") {
		if (kind === "app") return "This app looks dangerous — do not keep it.";
		if (kind === "link") return "This looks like a phishing trap.";
		return "This reads like a scam. You can ignore it.";
	}
	if (level === "medium") return "Some warning signs. Pause and verify another way.";
	return "No clear threat pattern — still verify unexpected asks.";
}
function summaryFor(level, kind, indicators) {
	const top = indicators.slice().sort((a, b) => b.weight - a.weight).slice(0, 3).map((i) => i.title.toLowerCase());
	if (level === "high") return "Several hallmarks of fraud showed up together. Do not tap, pay, share a code, or install anything from this." + (top.length ? ` The strongest flags: ${top.join("; ")}.` : "") + " Real institutions will not rush you over a private chat.";
	if (level === "medium") return "This is not a clean pass. " + (top.length ? `Worth a closer look because of ${top.join(", ")}. ` : "") + "Open the company from a bookmark or the official app — never from this message — and ask a person you trust if you feel pressured.";
	if (kind === "link") return "The address does not match common phishing tricks. That is not a guarantee it is harmless. If the request is unexpected, still go through the official app.";
	return "The wording does not match common scam scripts. Stay cautious with any request for money, codes, or downloads you were not expecting.";
}
function stepsFor(level, kind) {
	const shared = [];
	if (level === "high") {
		shared.push({
			title: "Stop. Do not engage.",
			detail: "Do not tap the link, reply, pay, share an OTP, or install an app. Hang up if you are on a call."
		}, {
			title: "Verify on a channel you choose.",
			detail: "Look up the official number or app yourself. Never call back a number from the message."
		}, {
			title: "Report it.",
			detail: "In India: cybercrime.gov.in or 1930. In the US: reportfraud.ftc.gov. Forward phishing to the real company when they publish an address."
		});
		if (kind === "app") shared.splice(1, 0, {
			title: "Uninstall and scan.",
			detail: "Delete the app. If you granted accessibility or device admin, revoke that first in Settings. Run a Play Protect scan, then change banking passwords from another device."
		});
	} else if (level === "medium") shared.push({
		title: "Do not use the contact details in the message.",
		detail: "Type the organisation’s name into your browser or open the app you already installed from the store."
	}, {
		title: "Ask a second pair of eyes.",
		detail: "Pressure drops when you talk it through. A bank will wait. A scammer will not."
	});
	else shared.push({
		title: "Keep the usual habits.",
		detail: "Unexpected money requests, codes, or logins still deserve a pause — even when this scan is quiet."
	});
	shared.push({
		title: "If you already tapped or paid",
		detail: "Use another device to change passwords, call your bank, and file a report. See the Learn page for a calm sequence."
	});
	return shared;
}
function previewOf(text) {
	const trimmed = text.replace(/\s+/g, " ").trim();
	return trimmed.length > 180 ? `${trimmed.slice(0, 177)}…` : trimmed;
}
function analyze(payload) {
	const text = payload.text.trim();
	const appText = payload.app ? [
		payload.app.name,
		payload.app.developer,
		payload.app.claimedPurpose
	].filter(Boolean).join("\n") : "";
	const blob = `${text}\n${appText}`;
	const urls = payload.kind === "app" ? extractUrls(blob) : extractUrls(blob).length ? extractUrls(blob) : payload.kind === "link" && text ? [parseUrl(text)].filter((u) => u !== null) : extractUrls(blob);
	const indicators = [];
	if (payload.kind !== "app") {
		indicators.push(...scanUrls(urls, blob));
		indicators.push(...scanScamLanguage(blob));
	} else if (payload.app) {
		indicators.push(...scanApp(payload.app));
		indicators.push(...scanScamLanguage(blob));
		indicators.push(...scanUrls(urls, blob));
	}
	const score = Math.min(100, indicators.reduce((sum, i) => sum + i.weight, 0));
	const level = levelFromScore$1(score, indicators);
	return {
		kind: payload.kind,
		level,
		score,
		headline: headlineFor(level, payload.kind),
		summary: summaryFor(level, payload.kind, indicators),
		indicators: indicators.sort((a, b) => b.weight - a.weight),
		steps: stepsFor(level, payload.kind),
		urls,
		inputPreview: previewOf(text || appText) || "—"
	};
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
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
})).handler(createSsrRpc("48b9a4cb92c2d0c22d8fc07644af6947b499fd0b4578a8e5eb0ec7a9c4e664cb"));
var RANK = {
	low: 0,
	medium: 1,
	high: 2
};
function levelFromScore(score, indicators) {
	if (indicators.some((i) => i.severity === "high" && i.weight >= 28)) return score >= 40 ? "high" : "medium";
	if (score >= 55) return "high";
	if (score >= 24) return "medium";
	return "low";
}
var lookupIntel = createServerFn({ method: "POST" }).validator((input) => ({ hostnames: (input.hostnames ?? []).map((h) => String(h).toLowerCase().replace(/\.$/, "").slice(0, 253)).filter(Boolean).slice(0, 2) })).handler(createSsrRpc("7204bf98f42cc9d014f6e7d7be9dd03096e8d848ac4bf83b25eff2970c16a947"));
function applyIntel(current, intel) {
	const known = new Set(current.indicators.map((i) => i.id));
	const indicators = [...current.indicators, ...intel.indicators.filter((i) => !known.has(i.id))].sort((a, b) => b.weight - a.weight);
	const score = Math.min(100, indicators.reduce((sum, i) => sum + i.weight, 0));
	const nextLevel = levelFromScore(score, indicators);
	const level = RANK[nextLevel] > RANK[current.level] ? nextLevel : current.level;
	return {
		...current,
		score,
		level,
		indicators,
		intel: intel.domains
	};
}
function ExamplesStrip({ activeId, onPick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-medium tracking-wide text-subtle uppercase",
			children: "Try a sample"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0",
			children: SAMPLES.map((sample) => {
				const active = sample.id === activeId;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onPick(sample.id),
					className: cn("h-11 shrink-0 rounded-full px-4 text-sm transition-[background-color,color,box-shadow] duration-[150ms]", active ? "bg-accent text-accent-fg" : "bg-elevated text-muted shadow-[var(--shadow-border)] hover:text-fg"),
					children: sample.label
				}, sample.id);
			})
		})]
	});
}
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-md bg-elevated px-3 text-sm text-fg shadow-[var(--shadow-border)] transition-[box-shadow] duration-[150ms] placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn("text-sm font-medium text-fg", className),
	...props
}));
Label.displayName = Root.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-36 w-full resize-y rounded-lg bg-elevated px-4 py-3 text-sm text-fg shadow-[var(--shadow-border)] transition-[box-shadow] duration-[150ms] placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var Tabs = Root2;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
	ref,
	className: cn("inline-flex h-11 w-full items-center justify-center rounded-lg bg-elevated p-1 text-muted", className),
	...props
}));
TabsList.displayName = List.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
	ref,
	className: cn("inline-flex min-h-9 flex-1 items-center justify-center rounded-md px-3 text-sm font-medium whitespace-nowrap transition-[color,background-color] duration-[150ms] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-surface data-[state=active]:text-fg", className),
	...props
}));
TabsTrigger.displayName = Trigger.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
	ref,
	className: cn("mt-4 focus-visible:outline-none", className),
	...props
}));
TabsContent.displayName = Content.displayName;
function Intake({ kind, text, app, busy, disabled, onKind, onText, onApp, onSubmit }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: (e) => {
			e.preventDefault();
			onSubmit();
		},
		className: "rounded-xl bg-surface p-3 shadow-[var(--shadow-border)] sm:p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
			value: kind,
			onValueChange: (value) => onKind(value),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
					"aria-label": "What to check",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
							value: "link",
							className: "gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link2, { className: "size-4" }), "Link"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
							value: "message",
							className: "gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquareText, { className: "size-4" }), "Message"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
							value: "app",
							className: "gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "size-4" }), "App"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
					value: "link",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "link-input",
						className: "sr-only",
						children: "Suspicious link"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "link-input",
						value: text,
						onChange: (e) => onText(e.target.value),
						placeholder: "Paste a full address, or a message that contains one.",
						className: "min-h-32 font-mono text-sm leading-relaxed"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
					value: "message",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "message-input",
						className: "sr-only",
						children: "Suspicious message"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "message-input",
						value: text,
						onChange: (e) => onText(e.target.value),
						placeholder: "Paste the SMS, chat, email, or what the caller said.",
						className: "min-h-32 leading-relaxed"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "app",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppFields, {
						app,
						onChange: onApp
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-subtle",
				children: "Nothing is saved. A deeper briefing may use an AI model on this session only."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				disabled: busy || disabled,
				className: "w-full sm:w-auto",
				children: busy ? "Checking…" : "Check this"
			})]
		})]
	});
}
function AppFields({ app, onChange }) {
	const patch = (partial) => onChange({
		...app,
		...partial
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "App name",
					htmlFor: "app-name",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "app-name",
						value: app.name,
						onChange: (e) => patch({ name: e.target.value }),
						placeholder: "e.g. Instant loan"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Publisher",
					htmlFor: "app-dev",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "app-dev",
						value: app.developer,
						onChange: (e) => patch({ developer: e.target.value }),
						placeholder: "Who made it, if you know"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Where did it come from?",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-2 sm:grid-cols-3",
					children: APP_SOURCES.map((source) => {
						const selected = app.source === source.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => patch({ source: source.id }),
							className: cn("h-11 rounded-md px-3 text-left text-sm transition-[background-color,box-shadow,color] duration-[150ms]", selected ? "bg-accent text-accent-fg" : "bg-elevated text-muted shadow-[var(--shadow-border)] hover:text-fg"),
							"aria-pressed": selected,
							children: source.label
						}, source.id);
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Permissions it asked for",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: PERMISSION_CATALOG.map((perm) => {
						const on = app.permissions.includes(perm.id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => patch({ permissions: on ? app.permissions.filter((id) => id !== perm.id) : [...app.permissions, perm.id] }),
							className: cn("h-11 rounded-full px-3 text-sm transition-[background-color,color,box-shadow] duration-[150ms]", on ? "bg-accent text-accent-fg" : "bg-elevated text-muted shadow-[var(--shadow-border)] hover:text-fg"),
							"aria-pressed": on,
							title: perm.hint,
							children: perm.label
						}, perm.id);
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "What does it claim to do?",
				htmlFor: "app-purpose",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "app-purpose",
					value: app.claimedPurpose,
					onChange: (e) => patch({ claimedPurpose: e.target.value }),
					placeholder: "Loan, job tasks, cleaner, torch…",
					className: "min-h-24"
				})
			})
		]
	});
}
function Field({ label, htmlFor, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			htmlFor,
			className: "text-muted",
			children: label
		}), children]
	});
}
var badgeVariants = cva("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide", {
	variants: { variant: {
		default: "bg-elevated text-muted",
		low: "bg-risk-low text-risk-low-fg",
		medium: "bg-risk-medium text-risk-medium-fg",
		high: "bg-risk-high text-risk-high-fg",
		outline: "text-muted shadow-[var(--shadow-border)]"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var Separator = import_react.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root$1, {
	ref,
	decorative,
	orientation,
	className: cn("shrink-0 bg-border", orientation === "horizontal" ? "h-px w-full" : "h-full w-px", className),
	...props
}));
Separator.displayName = Root$1.displayName;
function Skeleton({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("rounded-md bg-elevated pulse-soft", className),
		...props
	});
}
var LEVEL_COPY = {
	high: {
		label: "High risk",
		variant: "high",
		Icon: Ban
	},
	medium: {
		label: "Medium risk",
		variant: "medium",
		Icon: CircleAlert
	},
	low: {
		label: "Low risk",
		variant: "low",
		Icon: ShieldCheck
	}
};
function Results({ assessment, scanning, briefingPending, intelPending, briefingNote }) {
	if (scanning) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScanningState, {});
	if (!assessment) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {});
	const tone = LEVEL_COPY[assessment.level];
	const Icon = tone.Icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-live": "polite",
		className: "rise-in rounded-xl bg-surface shadow-[var(--shadow-border)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-6 p-5 sm:p-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("mt-0.5 inline-flex size-10 items-center justify-center rounded-md", assessment.level === "high" && "bg-risk-high text-risk-high-fg", assessment.level === "medium" && "bg-risk-medium text-risk-medium-fg", assessment.level === "low" && "bg-risk-low text-risk-low-fg"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: tone.variant,
								children: tone.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-xs text-subtle tabular-nums",
								children: ["Score ", assessment.score]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-2xl leading-snug font-medium tracking-tight sm:text-3xl",
							children: assessment.headline
						})] })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
					value: assessment.score,
					barClassName: cn(assessment.level === "high" && "bg-risk-high", assessment.level === "medium" && "bg-risk-medium", assessment.level === "low" && "bg-risk-low")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-2xl text-base leading-relaxed text-muted",
					children: assessment.summary
				}),
				briefingPending || intelPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-subtle pulse-soft",
					children: intelPending ? "Querying registry, DNS, and public malware lists…" : "Writing a calmer briefing…"
				}) : briefingNote ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-subtle",
					children: briefingNote
				}) : null,
				assessment.urls.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg bg-elevated px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-wide text-subtle uppercase",
						children: "Address we read"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-2 space-y-1",
						children: assessment.urls.slice(0, 3).map((url) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "font-mono text-xs break-all text-fg",
							children: [url.hostname, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-subtle",
								children: url.path
							})]
						}, url.href))
					})]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveIntel, {
					domains: assessment.intel,
					pending: intelPending
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-medium tracking-wide text-subtle uppercase",
						children: "Why it looks this way"
					}), assessment.indicators.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: "No strong pattern matched. Absence of flags is not a certificate of safety."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 flex flex-col gap-3",
						children: assessment.indicators.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rise-in rounded-lg bg-elevated p-4",
							style: { animationDelay: `${index * 40}ms` },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium text-fg",
									children: item.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: item.severity,
									className: "shrink-0",
									children: item.severity
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-sm leading-relaxed text-muted",
								children: item.detail
							})]
						}, item.id))
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-medium tracking-wide text-subtle uppercase",
							children: "What to do"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-3 flex flex-col gap-3",
							children: assessment.steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs text-subtle tabular-nums",
									children: String(index + 1).padStart(2, "0")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium text-fg",
									children: step.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm leading-relaxed text-muted",
									children: step.detail
								})] })]
							}, step.title))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/learn",
								hash: "already",
								className: "text-fg underline-offset-4 hover:underline",
								children: "Already tapped, paid, or installed? Follow this sequence."
							})
						})
					] })]
				})
			]
		})
	});
}
function LiveIntel({ domains, pending }) {
	if (pending && (!domains || domains.length === 0)) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg bg-elevated px-4 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-medium tracking-wide text-subtle uppercase",
			children: "Live intel"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 flex flex-col gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-2/3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-1/2" })]
		})]
	});
	if (!domains || domains.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg bg-elevated px-4 py-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-3.5 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-wide text-subtle uppercase",
					children: "Live intel"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 flex flex-col gap-4",
				children: domains.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs text-fg",
					children: d.hostname
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-2 grid gap-2 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntelFact, {
							label: "Registry",
							value: d.rdap.ok ? [d.rdap.registrar, d.rdap.ageDays != null ? `${d.rdap.ageDays}d old` : d.rdap.created].filter(Boolean).join(" · ") || "Listed" : d.rdap.error ?? "Unavailable",
							warn: Boolean(d.rdap.ok && d.rdap.ageDays != null && d.rdap.ageDays <= 90)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntelFact, {
							label: "Malware list",
							value: !d.urlhaus.ok ? d.urlhaus.error ?? "Unavailable" : d.urlhaus.listed ? d.urlhaus.threat || "Listed on a phishing feed" : "Not listed on public phishing feeds",
							warn: d.urlhaus.listed
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntelFact, {
							label: "DNS",
							value: d.dns.ok ? d.dns.addresses.join(", ") || "No A record" : d.dns.error ?? "Unavailable"
						})
					]
				})] }, d.hostname))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-[11px] leading-relaxed text-subtle",
				children: "RDAP registry, Google Public DNS, sinking.yachts phishing feed, and urlscan.io. These feeds can miss threats and can be delayed. They are not a forensic verdict."
			})
		]
	});
}
function IntelFact({ label, value, warn }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
		className: "text-[11px] tracking-wide text-subtle uppercase",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
		className: cn("mt-0.5 text-xs leading-relaxed", warn ? "text-risk-high" : "text-muted"),
		children: value
	})] });
}
function EmptyState() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-surface px-5 py-12 text-center shadow-[var(--shadow-border)] sm:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldQuestion, { className: "mx-auto size-8 text-subtle" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 font-display text-2xl font-medium tracking-tight",
				children: "Waiting for something to check"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-2 max-w-md text-sm text-muted",
				children: "Paste a link, a message, or the details of an app. We will name the patterns we see, look up the domain, and tell you what to do — without the panic."
			})
		]
	});
}
function ScanningState() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] sm:p-7",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "scan-sweep pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(to_bottom,transparent,color-mix(in_oklab,var(--color-accent)_16%,transparent),transparent)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 text-sm text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileSearch, { className: "size-4" }), "Reading patterns, then live feeds"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-8 w-2/3" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-full" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-5/6" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mt-4 h-24 w-full rounded-lg" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-24 w-full rounded-lg" })
				]
			})
		]
	});
}
var EMPTY_APP = {
	name: "",
	source: "unknown",
	permissions: [],
	claimedPurpose: "",
	developer: ""
};
function CheckPage({ sampleId }) {
	const navigate = useNavigate();
	const [kind, setKind] = (0, import_react.useState)("link");
	const [text, setText] = (0, import_react.useState)("");
	const [app, setApp] = (0, import_react.useState)(EMPTY_APP);
	const [scanning, setScanning] = (0, import_react.useState)(false);
	const [assessment, setAssessment] = (0, import_react.useState)(null);
	const [briefingPending, setBriefingPending] = (0, import_react.useState)(false);
	const [intelPending, setIntelPending] = (0, import_react.useState)(false);
	const [briefingNote, setBriefingNote] = (0, import_react.useState)(null);
	const [activeSample, setActiveSample] = (0, import_react.useState)(sampleId ?? null);
	const runId = (0, import_react.useRef)(0);
	const lastAuto = (0, import_react.useRef)(null);
	const resultsRef = (0, import_react.useRef)(null);
	const canRun = (0, import_react.useMemo)(() => {
		if (kind === "app") return Boolean(app.name.trim() || app.claimedPurpose.trim());
		return text.trim().length > 0;
	}, [
		kind,
		text,
		app
	]);
	(0, import_react.useEffect)(() => {
		if (!sampleId || lastAuto.current === sampleId) return;
		lastAuto.current = sampleId;
		applySample(sampleId, true);
	}, [sampleId]);
	function applySample(id, auto = false) {
		const sample = getSample(id);
		if (!sample) return;
		setActiveSample(id);
		setKind(sample.kind);
		setText(sample.payload.text);
		setApp(sample.payload.app ?? EMPTY_APP);
		if (auto) runCheck(sample.payload.kind, sample.payload.text, sample.payload.app ?? EMPTY_APP);
	}
	async function runCheck(nextKind = kind, nextText = text, nextApp = app) {
		if (!(nextKind === "app" ? Boolean(nextApp.name.trim() || nextApp.claimedPurpose.trim() || nextText.trim()) : nextText.trim().length > 0)) return;
		const id = ++runId.current;
		setScanning(true);
		setBriefingNote(null);
		setAssessment(null);
		setIntelPending(false);
		setBriefingPending(false);
		const started = Date.now();
		const local = analyze({
			kind: nextKind,
			text: nextKind === "app" ? nextText || nextApp.claimedPurpose : nextText,
			app: nextKind === "app" ? nextApp : void 0
		});
		const wait = Math.max(0, 700 - (Date.now() - started));
		await new Promise((r) => setTimeout(r, wait));
		if (id !== runId.current) return;
		setAssessment(local);
		setScanning(false);
		setIntelPending(true);
		setBriefingPending(true);
		requestAnimationFrame(() => {
			resultsRef.current?.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		});
		const hosts = Array.from(new Set(local.urls.map((u) => u.registrable || u.hostname).filter(Boolean))).slice(0, 2);
		const intelPromise = hosts.length > 0 ? lookupIntel({ data: { hostnames: hosts } }).catch(() => null) : Promise.resolve(null);
		const briefingPromise = enhanceBriefing({ data: {
			kind: local.kind,
			input: nextKind === "app" ? JSON.stringify(nextApp).slice(0, 1500) : nextText.slice(0, 1500),
			level: local.level,
			headline: local.headline,
			indicators: local.indicators.slice(0, 8).map((i) => ({
				id: i.id,
				title: i.title,
				detail: i.detail
			}))
		} }).catch(() => null);
		const intel = await intelPromise;
		if (id !== runId.current) return;
		if (intel) {
			setAssessment((current) => current ? applyIntel(current, intel) : current);
			if (intel.ok && intel.domains.length) setBriefingNote("Live registry, DNS, and malware-list lookups finished.");
		}
		setIntelPending(false);
		const extra = await briefingPromise;
		if (id !== runId.current) return;
		if (extra && extra.ok) {
			setAssessment((current) => {
				if (!current) return current;
				const known = new Set(current.indicators.map((i) => i.title.toLowerCase()));
				const mergedIndicators = [...current.indicators, ...extra.indicators.filter((i) => i.detail && !known.has(i.title.toLowerCase()))];
				return {
					...current,
					level: extra.level,
					summary: extra.summary || current.summary,
					indicators: mergedIndicators,
					steps: extra.steps.length ? extra.steps : current.steps
				};
			});
			setBriefingNote((note) => note ? `${note} Briefing expanded with a second read.` : "Briefing expanded with a second read.");
		}
		setBriefingPending(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 py-8 sm:px-6 sm:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-wide text-subtle uppercase",
						children: "Awareness desk"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-4xl leading-tight font-medium tracking-tight sm:text-5xl",
						children: "Check it before you tap."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-base leading-relaxed text-muted",
						children: "Paste a suspicious link, message, or app. Lantern names the patterns — phishing, digital-arrest scripts, greedy permissions — then checks the domain against live registry, DNS, and public malware lists."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Intake, {
				kind,
				text,
				app,
				busy: scanning,
				disabled: !canRun,
				onKind: (next) => {
					setKind(next);
					setActiveSample(null);
				},
				onText: (next) => {
					setText(next);
					setActiveSample(null);
				},
				onApp: (next) => {
					setApp(next);
					setActiveSample(null);
				},
				onSubmit: () => {
					if (!canRun) return;
					navigate({
						to: "/",
						search: {}
					});
					runCheck();
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExamplesStrip, {
				activeId: activeSample,
				onPick: (id) => {
					lastAuto.current = id;
					navigate({
						to: "/",
						search: { sample: id }
					});
					applySample(id, true);
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: resultsRef,
				className: "scroll-mt-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Results, {
					assessment,
					scanning,
					briefingPending,
					intelPending,
					briefingNote
				})
			})
		]
	});
}
function Home() {
	const { sample } = Route$1.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, {
		current: "check",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckPage, { sampleId: sample })
	});
}
//#endregion
export { Home as component };
