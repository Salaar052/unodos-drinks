"use client";

import { useId, useState } from "react";
import { DEVELOPER_CONTACT } from "@/lib/site";

export function DeveloperSection() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const { name, tagline, email, phoneDisplay, phoneTel, whatsappUrl } =
    DEVELOPER_CONTACT;

  return (
    <section
      className={`dev-section${open ? " dev-section-open" : ""}`}
      aria-labelledby={open ? "dev-heading" : undefined}
    >
      <button
        type="button"
        className="dev-contact-toggle"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        Contact developer
        <span className="chev" aria-hidden>
          {open ? "−" : "+"}
        </span>
      </button>
      <div
        id={panelId}
        className="dev-panel"
        hidden={!open}
        role="region"
        aria-label="Developer contact"
      >
        <h2 id="dev-heading" className="dev-heading">
          Summon the developer
        </h2>
        <p className="dev-tagline">{tagline}</p>
        <p className="dev-text">
          If you want any software or digital services, contact{" "}
          <strong>{name}</strong>.
        </p>
        <div className="dev-actions">
          <a className="dev-btn dev-btn-mail" href={`mailto:${email}`}>
            Email
          </a>
          <a className="dev-btn dev-btn-tel" href={`tel:${phoneTel}`}>
            Call {phoneDisplay}
          </a>
          <a
            className="dev-btn dev-btn-wa"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
        <p className="dev-drip" aria-hidden />
      </div>
    </section>
  );
}