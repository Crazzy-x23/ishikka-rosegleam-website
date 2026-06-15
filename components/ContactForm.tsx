"use client";

import { useState, type FormEvent } from "react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

type FormState = "idle" | "submitting" | "success";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!data.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.subject.trim()) {
    errors.subject = "Please enter a subject.";
  }

  if (!data.message.trim()) {
    errors.message = "Please enter a message.";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return errors;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [formState, setFormState] = useState<FormState>("idle");
  const [formError, setFormError] = useState<string | null>(null);

  function handleChange(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear the error for this field as the user types
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setFormError(null);
    setFormState("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormState("success");
      } else {
        setFormError(result.message || "Something went wrong. Please try again.");
        setFormState("idle");
      }
    } catch {
      setFormError("Network error. Please check your connection and try again.");
      setFormState("idle");
    }
  }

  function handleReset() {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setErrors({});
    setFormError(null);
    setFormState("idle");
  }

  /* ── Success state ── */
  if (formState === "success") {
    return (
      <div
        className="flex flex-col items-center justify-center rounded-[2rem] bg-white p-8 shadow-luxury text-center"
        style={{ animation: "reveal 500ms ease-out both" }}
      >
        {/* Checkmark circle */}
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gold/15">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-gold"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h3 className="font-serif text-2xl text-ink sm:text-3xl">Message Sent</h3>
        <p className="mt-3 max-w-sm text-sm leading-7 text-espresso/60">
          Thank you, <span className="font-medium text-espresso">{formData.name}</span>. We&apos;ll
          reply to{" "}
          <span className="font-medium text-espresso">{formData.email}</span> as soon as
          possible.
        </p>

        <button
          type="button"
          onClick={handleReset}
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full border border-coffee/20 px-7 text-sm font-semibold text-espresso transition hover:bg-ivory focus-luxury"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  /* ── Form state ── */
  const disabled = formState === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] bg-white p-6 shadow-luxury sm:p-8"
      aria-label="Contact form"
      noValidate
    >
      {formError && (
        <div className="mb-5 rounded-2xl border border-red-200 bg-red-50 px-5 py-3 text-sm text-red-600">
          {formError}
        </div>
      )}
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Name */}
        <label className="grid gap-2 text-sm font-medium text-espresso/70">
          Name
          <input
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            disabled={disabled}
            className={`min-h-13 rounded-full border px-5 text-ink outline-none transition focus:border-gold disabled:opacity-50 ${
              errors.name ? "border-red-400" : "border-coffee/15"
            }`}
            placeholder="Your name"
          />
          {errors.name && (
            <span className="text-xs text-red-500">{errors.name}</span>
          )}
        </label>

        {/* Email */}
        <label className="grid gap-2 text-sm font-medium text-espresso/70">
          Email
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            disabled={disabled}
            className={`min-h-13 rounded-full border px-5 text-ink outline-none transition focus:border-gold disabled:opacity-50 ${
              errors.email ? "border-red-400" : "border-coffee/15"
            }`}
            placeholder="you@example.com"
          />
          {errors.email && (
            <span className="text-xs text-red-500">{errors.email}</span>
          )}
        </label>
      </div>

      {/* Subject */}
      <label className="mt-5 grid gap-2 text-sm font-medium text-espresso/70">
        Subject
        <input
          value={formData.subject}
          onChange={(e) => handleChange("subject", e.target.value)}
          disabled={disabled}
          className={`min-h-13 rounded-full border px-5 text-ink outline-none transition focus:border-gold disabled:opacity-50 ${
            errors.subject ? "border-red-400" : "border-coffee/15"
          }`}
          placeholder="Order, styling, gifting..."
        />
        {errors.subject && (
          <span className="text-xs text-red-500">{errors.subject}</span>
        )}
      </label>

      {/* Message */}
      <label className="mt-5 grid gap-2 text-sm font-medium text-espresso/70">
        Message
        <textarea
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          disabled={disabled}
          className={`min-h-40 rounded-[1.5rem] border px-5 py-4 text-ink outline-none transition focus:border-gold disabled:opacity-50 ${
            errors.message ? "border-red-400" : "border-coffee/15"
          }`}
          placeholder="How can we help?"
        />
        {errors.message && (
          <span className="text-xs text-red-500">{errors.message}</span>
        )}
      </label>

      {/* Submit */}
      <button
        type="submit"
        disabled={disabled}
        className="mt-6 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-espresso px-7 text-sm font-semibold text-white transition hover:bg-coffee focus-luxury disabled:opacity-70 sm:w-auto"
      >
        {disabled && (
          <svg
            className="h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        )}
        {disabled ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
