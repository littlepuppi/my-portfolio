"use client";

import { useMemo, useState } from "react";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  message: "",
};

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  } else if (values.name.trim().length < 2) {
    errors.name = "Name should be at least 2 characters.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.message.trim()) {
    errors.message = "Please enter your message.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormValues]) {
      const nextValues = { ...values, [name]: value };
      setErrors(validate(nextValues));
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setIsSuccess(false);

    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    setIsSubmitting(false);
    setIsSuccess(true);
    setValues(initialValues);
  }

  return (
    <section id="contact" className="py-20 px-6 sm:py-24">
      <div className="mx-auto w-full max-w-3xl rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-xl shadow-indigo-100 sm:p-10 dark:border-white/20 dark:bg-white/10 dark:backdrop-blur-sm dark:shadow-purple-950/20">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
          Contact Us
        </h2>
        <p className="mt-3 text-slate-600 dark:text-purple-100/80">
          Send us a message and we&apos;ll get back to you shortly.
        </p>

        <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label htmlFor="name" className="mb-2 block text-sm text-slate-700 dark:text-purple-100">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-300/40 dark:border-white/20 dark:bg-white/5 dark:text-white dark:placeholder:text-purple-200/60 dark:focus:border-purple-300 dark:focus:ring-purple-300/40"
                placeholder="Your name"
              />
              {errors.name ? (
                <p id="name-error" className="mt-1.5 text-sm text-rose-300">
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="email" className="mb-2 block text-sm text-slate-700 dark:text-purple-100">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-300/40 dark:border-white/20 dark:bg-white/5 dark:text-white dark:placeholder:text-purple-200/60 dark:focus:border-purple-300 dark:focus:ring-purple-300/40"
                placeholder="you@example.com"
              />
              {errors.email ? (
                <p id="email-error" className="mt-1.5 text-sm text-rose-300">
                  {errors.email}
                </p>
              ) : null}
            </div>
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm text-slate-700 dark:text-purple-100">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={values.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              className="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-300/40 dark:border-white/20 dark:bg-white/5 dark:text-white dark:placeholder:text-purple-200/60 dark:focus:border-purple-300 dark:focus:ring-purple-300/40"
              placeholder="Tell us how we can help..."
            />
            {errors.message ? (
              <p id="message-error" className="mt-1.5 text-sm text-rose-300">
                {errors.message}
              </p>
            ) : null}
          </div>

          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full bg-slate-900 px-8 py-3 font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-white dark:text-purple-900 dark:hover:bg-purple-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {isSuccess ? (
              <p className="text-sm text-emerald-300">
                Message sent successfully.
              </p>
            ) : hasErrors ? (
              <p className="text-sm text-slate-600 dark:text-purple-200/80">
                Please fix the highlighted fields.
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}

