"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

// No backend yet: submitting opens the visitor's mail app with the message
// pre-filled. Swap `handleSubmit` for an API call (or the planned chatbot)
// once one exists.
export default function ContactForm({ email }: { email: string }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const from = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${from})`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        <span>Your name</span>
        <input name="name" type="text" required placeholder="What's your name?" autoComplete="name" />
      </label>
      <label>
        <span>Your email</span>
        <input name="email" type="email" required placeholder="Where can I reach you?" autoComplete="email" />
      </label>
      <label>
        <span>Your message</span>
        <textarea name="message" rows={6} required placeholder="What would you like to build?" />
      </label>

      <button type="submit" className="button-primary">
        <Send size={16} /> {sent ? "Opening your mail app…" : "Send message"}
      </button>
    </form>
  );
}
