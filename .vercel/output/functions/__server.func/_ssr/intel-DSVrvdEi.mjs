import { t as createServerFn } from "./ssr.mjs";
import { t as createServerRpc } from "./createServerRpc-A6pJPYTF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/intel-DSVrvdEi.js
var UA = "LanternAwareness/1.0 (educational; +https://grok.com)";
async function withTimeout(ms, fn, fallback) {
	const ctrl = new AbortController();
	const timer = setTimeout(() => ctrl.abort(), ms);
	try {
		return await fn(ctrl.signal);
	} catch {
		return fallback;
	} finally {
		clearTimeout(timer);
	}
}
function ageDays(iso) {
	if (!iso) return null;
	const t = Date.parse(iso);
	if (Number.isNaN(t)) return null;
	return Math.max(0, Math.floor((Date.now() - t) / 864e5));
}
async function lookupRdap(hostname, signal) {
	const url = /^(?:\d{1,3}\.){3}\d{1,3}$/.test(hostname) || hostname.includes(":") ? `https://rdap.org/ip/${encodeURIComponent(hostname)}` : `https://rdap.org/domain/${encodeURIComponent(hostname)}`;
	const res = await fetch(url, {
		signal,
		redirect: "follow",
		headers: {
			Accept: "application/rdap+json, application/json",
			"User-Agent": UA
		}
	});
	if (res.status === 404) return {
		ok: true,
		registrar: "Not in the public registry"
	};
	if (!res.ok) return {
		ok: false,
		error: `RDAP ${res.status}`
	};
	const body = await res.json();
	const created = body.events?.find((e) => /registration|registered/i.test(e.eventAction ?? ""))?.eventDate;
	let registrar = body.registrar;
	if (!registrar && Array.isArray(body.entities)) {
		const vcard = body.entities.find((e) => e.roles?.includes("registrar"))?.vcardArray?.[1];
		if (Array.isArray(vcard)) {
			const fn = vcard.find((row) => Array.isArray(row) && row[0] === "fn");
			if (Array.isArray(fn) && typeof fn[3] === "string") registrar = fn[3];
		}
	}
	const nameservers = (body.nameservers ?? []).map((n) => n.ldhName).filter((n) => Boolean(n)).slice(0, 4);
	return {
		ok: true,
		registrar,
		created,
		ageDays: ageDays(created),
		nameservers
	};
}
async function lookupMalware(hostname, signal) {
	const [phish, scan] = await Promise.all([fetch(`https://phish.sinking.yachts/v2/check/${encodeURIComponent(hostname)}`, {
		signal,
		headers: {
			Accept: "application/json",
			"User-Agent": UA
		}
	}).then(async (res) => {
		if (!res.ok) return { listed: false };
		const text = (await res.text()).trim().toLowerCase();
		return { listed: text === "true" || text === "1" };
	}).catch(() => ({ listed: false })), fetch(`https://urlscan.io/api/v1/search/?q=domain:${encodeURIComponent(hostname)}&size=3`, {
		signal,
		headers: {
			Accept: "application/json",
			"User-Agent": UA
		}
	}).then(async (res) => {
		if (!res.ok) return {
			listed: false,
			tags: []
		};
		const hits = (await res.json()).results ?? [];
		return {
			listed: hits.some((h) => h.page?.malicious || h.verdicts?.overall?.malicious),
			tags: Array.from(new Set(hits.flatMap((h) => h.task?.tags ?? []))).slice(0, 6)
		};
	}).catch(() => ({
		listed: false,
		tags: []
	}))]);
	const listed = Boolean(phish.listed || scan.listed);
	const tags = "tags" in scan ? scan.tags : [];
	return {
		ok: true,
		listed,
		threat: listed ? phish.listed ? "phishing list" : "urlscan malicious" : void 0,
		tags
	};
}
async function lookupDns(hostname, signal) {
	const res = await fetch(`https://dns.google/resolve?name=${encodeURIComponent(hostname)}&type=A`, {
		signal,
		headers: {
			Accept: "application/dns-json",
			"User-Agent": UA
		}
	});
	if (!res.ok) return {
		ok: false,
		addresses: [],
		error: `DNS ${res.status}`
	};
	return {
		ok: true,
		addresses: ((await res.json()).Answer ?? []).filter((a) => a.type === 1 && a.data).map((a) => a.data).slice(0, 4)
	};
}
function indicatorsFrom(domains) {
	const out = [];
	for (const d of domains) {
		if (d.urlhaus.ok && d.urlhaus.listed) out.push({
			id: `intel-list-${d.hostname}`,
			severity: "high",
			weight: 36,
			title: `${d.hostname} appears on a public phishing feed`,
			detail: `A community malware/phishing list flagged this host${d.urlhaus.threat ? ` (${d.urlhaus.threat})` : ""}. Treat it as hostile until a trusted channel says otherwise.`,
			category: "phishing"
		});
		if (d.rdap.ok && d.rdap.registrar === "Not in the public registry") out.push({
			id: `intel-nx-${d.hostname}`,
			severity: "medium",
			weight: 14,
			title: "Domain is not in the public registry",
			detail: `${d.hostname} has no RDAP record. It may be unregistered, newly dropped, or invented. Do not trust a login page on it.`,
			category: "phishing"
		});
		if (d.rdap.ok && d.rdap.ageDays != null && d.rdap.ageDays <= 14) out.push({
			id: `intel-young-${d.hostname}`,
			severity: "high",
			weight: 22,
			title: "Domain was registered in the last two weeks",
			detail: `${d.hostname} is about ${d.rdap.ageDays} day${d.rdap.ageDays === 1 ? "" : "s"} old${d.rdap.registrar ? ` (registrar: ${d.rdap.registrar})` : ""}. Brand-new domains are a common phishing tell.`,
			category: "phishing"
		});
		else if (d.rdap.ok && d.rdap.ageDays != null && d.rdap.ageDays <= 90) out.push({
			id: `intel-recent-${d.hostname}`,
			severity: "medium",
			weight: 12,
			title: "Domain is relatively new",
			detail: `${d.hostname} was registered about ${d.rdap.ageDays} days ago. Banks and governments rarely use a domain that young.`,
			category: "phishing"
		});
		if (d.dns.ok && d.dns.addresses.length === 0) out.push({
			id: `intel-nodns-${d.hostname}`,
			severity: "medium",
			weight: 8,
			title: "No DNS A record",
			detail: `${d.hostname} does not resolve to an IP right now. That is another reason not to tap it.`,
			category: "phishing"
		});
	}
	return out;
}
var lookupIntel_createServerFn_handler = createServerRpc({
	id: "7204bf98f42cc9d014f6e7d7be9dd03096e8d848ac4bf83b25eff2970c16a947",
	name: "lookupIntel",
	filename: "src/lib/analyzer/intel.ts"
}, (opts) => lookupIntel.__executeServer(opts));
var lookupIntel = createServerFn({ method: "POST" }).validator((input) => ({ hostnames: (input.hostnames ?? []).map((h) => String(h).toLowerCase().replace(/\.$/, "").slice(0, 253)).filter(Boolean).slice(0, 2) })).handler(lookupIntel_createServerFn_handler, async ({ data }) => {
	if (data.hostnames.length === 0) return {
		ok: true,
		domains: [],
		indicators: []
	};
	const domains = await Promise.all(data.hostnames.map(async (hostname) => {
		const [rdap, urlhaus, dns] = await Promise.all([
			withTimeout(6e3, (s) => lookupRdap(hostname, s), {
				ok: false,
				error: "timed out"
			}),
			withTimeout(5e3, (s) => lookupMalware(hostname, s), {
				ok: false,
				listed: false,
				error: "timed out"
			}),
			withTimeout(4e3, (s) => lookupDns(hostname, s), {
				ok: false,
				addresses: [],
				error: "timed out"
			})
		]);
		return {
			hostname,
			rdap,
			urlhaus,
			dns
		};
	}));
	return {
		ok: true,
		domains,
		indicators: indicatorsFrom(domains)
	};
});
//#endregion
export { lookupIntel_createServerFn_handler };
