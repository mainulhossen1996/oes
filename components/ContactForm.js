"use client";
import { useState } from "react";
import { site } from "@/lib/site";

const needs = ["Civil work", "Interior design & development", "Plumbing", "Painting", "Supplies", "Subcontract work"];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  function submit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const text = `Hello ${site.name}, I am ${f.get("name")} (${f.get("phone")}).\nI need: ${f.get("need")}.\n${f.get("details") || ""}`;
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    setSent(true);
  }
  return (
    <form onSubmit={submit} className="grid gap-4 rounded-lg bg-white p-6 text-slate-800 shadow-xl">
      <label><span className="font-semibold">Your name</span><input name="name" required autoComplete="name" className="field mt-1" /></label>
      <label><span className="font-semibold">Phone</span><input name="phone" type="tel" required autoComplete="tel" className="field mt-1" /></label>
      <label><span className="font-semibold">What do you need?</span>
        <select name="need" className="field mt-1">{needs.map((n) => <option key={n}>{n}</option>)}</select></label>
      <label><span className="font-semibold">Project details</span><textarea name="details" rows={4} className="field mt-1" /></label>
      <button className="btn btn-blue" type="submit">Send on WhatsApp</button>
      {sent && <p className="font-semibold text-brand" role="status">WhatsApp opened with your message. Press send there and we will reply soon.</p>}
    </form>
  );
}
