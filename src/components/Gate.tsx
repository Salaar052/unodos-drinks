"use client";

import { FormEvent, useState } from "react";
import { isValidPakistaniMobile } from "@/lib/phone";
import { setMenuUnlocked } from "@/lib/storage";

interface Props {
  onUnlocked: () => void;
}

export function Gate({ onUnlocked }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    let valid = true;
    const trimmedName = name.trim();
    if (trimmedName.length < 2) {
      setNameError("Please enter at least 2 characters (cosplay names count!).");
      valid = false;
    } else {
      setNameError("");
    }
    if (!isValidPakistaniMobile(phone)) {
      setPhoneError(
        "Use a Pakistani mobile like 03XX XXXXXXX, +923XX XXXXXXX, or 923XX XXXXXXX.",
      );
      valid = false;
    } else {
      setPhoneError("");
    }
    if (!valid) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: trimmedName,
          phone,
          website: honeypot,
        }),
      });
      const data = (await res.json()) as {
        ok?: boolean;
        leadLog?: {
          name: string;
          phone: string;
          spreadsheet: string;
          detail?: string;
        };
      };
      if (!res.ok) {
        console.error("[gate] lead API returned", res.status);
      } else if (data.leadLog) {
        const { name: n, phone: p, spreadsheet, detail } = data.leadLog;
        console.info(
          `[lead] ${n} | ${p}\nSpreadsheet: ${spreadsheet}${detail ? `\n${detail}` : ""}`,
        );
      }
    } catch (err) {
      console.error("[gate] lead API failed", err);
    } finally {
      setSubmitting(false);
      setMenuUnlocked();
      onUnlocked();
    }
  }

  return (
    <div className="gate-overlay" role="dialog" aria-modal="true" aria-labelledby="gate-title">
      <form className="gate-card" onSubmit={handleSubmit} noValidate>
        <h2 id="gate-title" className="gate-title">
          Enter your info to unlock the menu
        </h2>
        <p className="gate-sub">Quick signup—then straight to the good stuff.</p>

        <div className="field">
          <label htmlFor="gate-name">Name or cosplay name</label>
          <input
            id="gate-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            minLength={2}
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            aria-invalid={nameError ? true : undefined}
            aria-describedby={nameError ? "gate-name-error" : undefined}
          />
          {nameError ? (
            <p id="gate-name-error" className="field-error" role="alert">
              {nameError}
            </p>
          ) : null}
        </div>

        <div className="field">
          <label htmlFor="gate-phone">Phone number</label>
          <input
            id="gate-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            value={phone}
            onChange={(ev) => setPhone(ev.target.value)}
            aria-invalid={phoneError ? true : undefined}
            aria-describedby={phoneError ? "gate-phone-error" : undefined}
            placeholder="03XX XXXXXXX"
          />
          {phoneError ? (
            <p id="gate-phone-error" className="field-error" role="alert">
              {phoneError}
            </p>
          ) : null}
        </div>

        <div className="hp-field" aria-hidden="true">
          <label htmlFor="gate-website">Website</label>
          <input
            id="gate-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(ev) => setHoneypot(ev.target.value)}
          />
        </div>

        <p className="consent">
          By continuing you agree to be contacted by Undos Games about future events.
        </p>

        <button type="submit" className="btn-start" disabled={submitting}>
          {submitting ? "Opening…" : "Start"}
        </button>
      </form>
    </div>
  );
}