const PK_MOBILE_LOCAL = /^03\d{9}$/;
const PK_MOBILE_INTL = /^923\d{9}$/;

export function normalizePhone(raw: string): string {
  let s = raw.trim().replace(/[\s-]/g, "");
  if (s.startsWith("+")) {
    s = s.slice(1);
  }
  return s;
}

export function isValidPakistaniMobile(raw: string): boolean {
  const s = normalizePhone(raw);
  return PK_MOBILE_LOCAL.test(s) || PK_MOBILE_INTL.test(s);
}

export function formatPhoneForStorage(raw: string): string {
  const s = normalizePhone(raw);
  if (PK_MOBILE_INTL.test(s)) {
    return `0${s.slice(2)}`;
  }
  return s;
}