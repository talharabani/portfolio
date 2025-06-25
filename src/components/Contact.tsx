import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_5n3rrkx";
const USER_ID = "y8nscxWO4CHQ7ssL0";
const TEMPLATE_GENERAL = "template_yrkx7ye";
const TEMPLATE_ALT = "template_ipay0d5";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState(TEMPLATE_GENERAL);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    emailjs
      .sendForm(
        SERVICE_ID,
        selectedTemplate,
        form.current!,
        USER_ID
      )
      .then(
        () => {
          setSent(true);
          setLoading(false);
        },
        () => {
          setError("Failed to send message. Try again later.");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>
        {sent ? (
          <div className="flex flex-col items-center gap-4">
            <div className="text-green-700 text-xl font-semibold text-center">Thank you! Your message has been sent.</div>
            <button
              type="button"
              onClick={() => {
                setSent(false);
                setError("");
                if (form.current) {
                  form.current.reset();
                }
              }}
              className="w-full py-3 bg-primary text-white rounded-lg shadow hover:bg-opacity-80 hover:scale-105 transition-all duration-300 font-semibold"
            >
              Send Another
            </button>
          </div>
        ) : (
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <select
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
              value={selectedTemplate}
              onChange={e => setSelectedTemplate(e.target.value)}
            >
              <option value={TEMPLATE_GENERAL}>General Inquiry</option>
              <option value={TEMPLATE_ALT}>Alternate Template</option>
            </select>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <button
              type="submit"
              className="w-full py-3 bg-primary text-white rounded-lg shadow hover:bg-opacity-80 hover:scale-105 transition-all duration-300 font-semibold disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
} 