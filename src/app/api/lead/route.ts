import { NextResponse } from "next/server";
import {
  logLeadToTerminal,
  summarizeWebhookResponse,
  type SpreadsheetStatus,
} from "@/lib/lead-log";
import { formatPhoneForStorage, isValidPakistaniMobile } from "@/lib/phone";

const MAX_NAME = 80;
const MAX_PHONE = 20;

interface LeadBody {
  name?: unknown;
  phone?: unknown;
  website?: unknown;
}

interface LeadDevLog {
  name: string;
  phone: string;
  at: string;
  spreadsheet: SpreadsheetStatus;
  detail?: string;
}

function trimName(raw: string): string {
  return raw.trim().slice(0, MAX_NAME);
}

function devLogResponse(
  name: string,
  phone: string,
  at: string,
  spreadsheet: SpreadsheetStatus,
  detail?: string,
) {
  logLeadToTerminal(name, phone, at, spreadsheet, detail);
  const leadLog: LeadDevLog = { name, phone, at, spreadsheet, detail };
  if (detail) {
    leadLog.detail = detail;
  }
  if (process.env.NODE_ENV === "development") {
    return { leadLog };
  }
  return {};
}

export async function POST(request: Request) {
  let body: LeadBody;
  try {
    body = (await request.json()) as LeadBody;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  if (typeof body.website === "string" && body.website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const nameRaw = typeof body.name === "string" ? body.name : "";
  const phoneRaw = typeof body.phone === "string" ? body.phone : "";

  const name = trimName(nameRaw);

  if (name.length < 2) {
    return NextResponse.json({ ok: false, error: "invalid_name" }, { status: 400 });
  }
  if (!isValidPakistaniMobile(phoneRaw)) {
    return NextResponse.json({ ok: false, error: "invalid_phone" }, { status: 400 });
  }

  const phone = formatPhoneForStorage(phoneRaw).slice(0, MAX_PHONE);
  const at = new Date().toISOString();
  const payload: Record<string, string> = {
    name,
    phone,
    at,
    source: "qr",
  };

  const webhook = process.env.LEADS_WEBHOOK_URL;
  const secret = process.env.LEADS_SECRET;

  if (secret) {
    payload.secret = secret;
  }

  if (!webhook) {
    const extra = devLogResponse(
      name,
      phone,
      at,
      "not_configured",
      "Set LEADS_WEBHOOK_URL in .env.local and restart npm run dev",
    );
    return NextResponse.json({ ok: true, ...extra });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow",
    });
    const responseText = (await res.text()).trim();
    const summary = summarizeWebhookResponse(responseText);

    if (res.ok && responseText.toLowerCase() === "ok") {
      const extra = devLogResponse(name, phone, at, "saved");
      return NextResponse.json({ ok: true, ...extra });
    }

    if (res.ok) {
      const extra = devLogResponse(name, phone, at, "unknown", summary);
      return NextResponse.json({ ok: true, ...extra });
    }

    const extra = devLogResponse(name, phone, at, "not_saved", summary);
    return NextResponse.json({ ok: true, ...extra });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    const extra = devLogResponse(name, phone, at, "not_saved", message);
    return NextResponse.json({ ok: true, ...extra });
  }
}