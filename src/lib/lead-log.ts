export type SpreadsheetStatus =
  | "saved"
  | "not_saved"
  | "not_configured"
  | "unknown";

export function summarizeWebhookResponse(text: string): string {
  const trimmed = text.trim();
  const lower = trimmed.toLowerCase();

  if (lower.startsWith("<!doctype") || lower.startsWith("<html")) {
    if (
      /request.access|need access|sign in|accounts-button|Authorization/i.test(
        trimmed,
      )
    ) {
      return (
        "Google sent a login/access HTML page — redeploy the Web app: Execute as Me, " +
        "Who has access: Anyone. Use the /exec URL (not the editor link)."
      );
    }
    return (
      "Google sent HTML instead of ok — check LEADS_WEBHOOK_URL points to the deployed Web app /exec URL."
    );
  }

  if (trimmed.length > 160) {
    return `${trimmed.slice(0, 157)}…`;
  }

  return trimmed || "(empty body)";
}

export function logLeadToTerminal(
  name: string,
  phone: string,
  at: string,
  status: SpreadsheetStatus,
  detail?: string,
): void {
  const statusLine =
    status === "saved"
      ? "SAVED ✓"
      : status === "not_configured"
        ? "NOT SAVED (no LEADS_WEBHOOK_URL)"
        : status === "unknown"
          ? "UNKNOWN — check sheet"
          : "NOT SAVED ✗";

  console.log("");
  console.log("────────── Unodos lead ──────────");
  console.log(`  Name:         ${name}`);
  console.log(`  Phone:        ${phone}`);
  console.log(`  Time:         ${at}`);
  console.log(`  Spreadsheet:  ${statusLine}`);
  if (detail) {
    console.log(`  Detail:       ${detail}`);
  }
  console.log("──────────────────────────────────");
  console.log("");
}