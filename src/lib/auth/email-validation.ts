import dns from "node:dns/promises";
import disposableDomainsList from "disposable-email-domains";

// Create a fast Set for O(1) lookup
const disposableSet = new Set<string>(
  (disposableDomainsList as unknown as string[]).map((d) => d.toLowerCase().trim())
);

// Supplementary high-volume temporary email domains
const extraDisposableDomains = [
  "tempmail.com",
  "10minutemail.com",
  "guerrillamail.com",
  "mailinator.com",
  "throwawaymail.com",
  "sharklasers.com",
  "getairmail.com",
  "dispostable.com",
  "crazymailing.com",
  "yopmail.com",
  "trashmail.com",
  "temp-mail.org",
  "fakemailgenerator.com",
  "emailondeck.com",
  "nada.ltd",
  "mohmal.com",
  "burnermail.io",
  "guerrillamailblock.com",
  "inboxkitten.com",
];

for (const d of extraDisposableDomains) {
  disposableSet.add(d.toLowerCase());
}

export interface EmailValidationResult {
  valid: boolean;
  normalizedEmail: string;
  domain: string;
  reason?: "INVALID_SYNTAX" | "DISPOSABLE_DOMAIN" | "INVALID_DOMAIN" | "TIMEOUT_OR_NETWORK";
  errorMessage?: string;
}

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export function normalizeEmail(rawEmail: string): string {
  return rawEmail.trim().toLowerCase();
}

export function isDisposableDomain(domain: string): boolean {
  const cleanDomain = domain.toLowerCase().trim();
  if (disposableSet.has(cleanDomain)) {
    return true;
  }

  // Check subdomains (e.g. sub.mailinator.com)
  const parts = cleanDomain.split(".");
  for (let i = 1; i < parts.length - 1; i++) {
    const parentDomain = parts.slice(i).join(".");
    if (disposableSet.has(parentDomain)) {
      return true;
    }
  }

  return false;
}

// Fast-path known trusted major email providers to avoid DNS latency
const KNOWN_TRUSTED_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "yahoo.co.in",
  "yahoo.co.uk",
  "outlook.com",
  "hotmail.com",
  "live.com",
  "msn.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "proton.me",
  "protonmail.com",
  "zoho.com",
  "zohomail.in",
  "aol.com",
  "gmx.com",
  "mail.com",
  "yandex.com",
]);

async function checkDomainDns(domain: string, timeoutMs = 2000): Promise<{ isValid: boolean; isDefiniteError: boolean }> {
  const cleanDomain = domain.toLowerCase().trim();

  // 1. Fast-path trusted providers & common educational TLDs
  if (
    KNOWN_TRUSTED_DOMAINS.has(cleanDomain) ||
    cleanDomain.endsWith(".edu") ||
    cleanDomain.endsWith(".ac.in") ||
    cleanDomain.endsWith(".edu.in") ||
    cleanDomain.endsWith(".ac.uk")
  ) {
    return { isValid: true, isDefiniteError: false };
  }

  const timeoutPromise = new Promise<{ isValid: boolean; isDefiniteError: boolean }>((resolve) => {
    setTimeout(() => {
      // Graceful fallback on timeout so legitimate users are not rejected
      resolve({ isValid: true, isDefiniteError: false });
    }, timeoutMs);
  });

  const dnsLookupPromise = (async () => {
    try {
      // Check MX records
      const mxRecords = await dns.resolveMx(cleanDomain);
      if (mxRecords && mxRecords.length > 0) {
        return { isValid: true, isDefiniteError: false };
      }
    } catch (err: unknown) {
      const code = (err as { code?: string })?.code;
      // If code is ENOTFOUND or NXDOMAIN, test A/AAAA
      if (code !== "ENOTFOUND" && code !== "NXDOMAIN" && code !== "ENODATA") {
        // Any other DNS/network error (SERVFAIL, TIMEOUT, EAI_AGAIN) -> graceful fallback
        return { isValid: true, isDefiniteError: false };
      }
    }

    try {
      // Check A / AAAA records as fallback
      const [aRecords, aaaaRecords] = await Promise.allSettled([
        dns.resolve4(cleanDomain),
        dns.resolve6(cleanDomain),
      ]);

      const hasA = aRecords.status === "fulfilled" && aRecords.value.length > 0;
      const hasAaaa = aaaaRecords.status === "fulfilled" && aaaaRecords.value.length > 0;

      if (hasA || hasAaaa) {
        return { isValid: true, isDefiniteError: false };
      }

      // Check if both conclusively failed with ENOTFOUND / NXDOMAIN
      const aErr = aRecords.status === "rejected" ? (aRecords.reason as { code?: string })?.code : "";
      const aaaaErr = aaaaRecords.status === "rejected" ? (aaaaRecords.reason as { code?: string })?.code : "";

      if (
        (aErr === "ENOTFOUND" || aErr === "NXDOMAIN" || aErr === "ENODATA") &&
        (aaaaErr === "ENOTFOUND" || aaaaErr === "NXDOMAIN" || aaaaErr === "ENODATA" || aaaaErr === "BADNAME")
      ) {
        return { isValid: false, isDefiniteError: true };
      }

      // Non-conclusive DNS error -> graceful fallback
      return { isValid: true, isDefiniteError: false };
    } catch {
      // Transient error - do not reject legitimate user
      return { isValid: true, isDefiniteError: false };
    }
  })();

  return Promise.race([dnsLookupPromise, timeoutPromise]);
}

export async function validateEmail(rawEmail: string): Promise<EmailValidationResult> {
  if (!rawEmail || typeof rawEmail !== "string") {
    return {
      valid: false,
      normalizedEmail: "",
      domain: "",
      reason: "INVALID_SYNTAX",
      errorMessage: "Please enter a valid email address.",
    };
  }

  const normalized = normalizeEmail(rawEmail);

  // Length check (RFC limits: 254 characters overall, local part 64)
  if (normalized.length < 5 || normalized.length > 254) {
    return {
      valid: false,
      normalizedEmail: normalized,
      domain: "",
      reason: "INVALID_SYNTAX",
      errorMessage: "Please enter a valid email address.",
    };
  }

  // Syntax check
  if (!EMAIL_REGEX.test(normalized)) {
    return {
      valid: false,
      normalizedEmail: normalized,
      domain: "",
      reason: "INVALID_SYNTAX",
      errorMessage: "Please enter a valid email address.",
    };
  }

  const parts = normalized.split("@");
  if (parts.length !== 2) {
    return {
      valid: false,
      normalizedEmail: normalized,
      domain: "",
      reason: "INVALID_SYNTAX",
      errorMessage: "Please enter a valid email address.",
    };
  }

  const domain = parts[1];

  // Disposable domain check
  if (isDisposableDomain(domain)) {
    return {
      valid: false,
      normalizedEmail: normalized,
      domain,
      reason: "DISPOSABLE_DOMAIN",
      errorMessage: "Temporary or disposable email addresses are not supported.",
    };
  }

  // Server-side DNS / MX check
  const dnsCheck = await checkDomainDns(domain);
  if (!dnsCheck.isValid && dnsCheck.isDefiniteError) {
    return {
      valid: false,
      normalizedEmail: normalized,
      domain,
      reason: "INVALID_DOMAIN",
      errorMessage: "Please use a valid email address.",
    };
  }

  return {
    valid: true,
    normalizedEmail: normalized,
    domain,
  };
}
