import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { 
  FaEnvelope, FaMapMarkerAlt, FaPaperPlane, 
  FaCheckCircle, FaWhatsapp, FaGithub, FaLinkedin 
} from "react-icons/fa";
import FlyInText from "./FlyInText";

const SERVICE_ID = "service_5n3rrkx";
const USER_ID = "y8nscxWO4CHQ7ssL0";
const TEMPLATE_GENERAL = "template_yrkx7ye";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!formData.user_name || !formData.user_email || !formData.message) {
      setError("Please fill in your name, email, and message.");
      setLoading(false);
      return;
    }

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_GENERAL, form.current!, USER_ID)
      .then(
        () => {
          setSent(true);
          setLoading(false);
          setFormData({
            user_name: "",
            user_email: "",
            user_phone: "",
            subject: "",
            message: ""
          });
        },
        (err) => {
          console.error(err);
          setError("Failed to send message. Please contact via WhatsApp directly.");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="bg-[#0a0a0a] py-14 sm:py-20 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Heading, Subtitle & Contact Info (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <span className="text-crimson-500 text-sm sm:text-base">✦</span>
                <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-crimson-500">
                  GET IN TOUCH
                </span>
              </div>

              <FlyInText
                as="h2"
                text={"LET'S WORK\nTOGETHER"}
                className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-[0.95] mb-4 sm:mb-5"
                stagger={0.08}
              />

              <FlyInText
                as="p"
                text="I'm currently open for freelance projects, full-time engineering roles, and AI workflow automation consulting. Let's discuss your next project and build something remarkable."
                className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed max-w-md mb-6 sm:mb-8"
                delay={0.2}
                stagger={0.03}
              />

              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-zinc-300 bg-zinc-950 border border-zinc-800 px-3.5 sm:px-4 py-2 rounded-full mb-6 sm:mb-10">
                <span className="w-2 h-2 rounded-full bg-crimson-500 animate-ping shrink-0" />
                <span>AVAILABLE FOR FREELANCE &amp; CONTRACT</span>
              </div>

              {/* Contact Details List: EXACTLY like reference image */}
              <div className="space-y-4 pt-4 border-t border-zinc-900">
                
                <a
                  href="mailto:talhaishaqrabani@gmail.com"
                  className="group flex items-center gap-4 text-zinc-300 hover:text-white transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-crimson-500 group-hover:border-crimson-500 transition-colors">
                    <FaEnvelope className="text-sm" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block">Email Address</span>
                    <span className="text-xs sm:text-sm font-semibold">talhaishaqrabani@gmail.com</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/923009490631"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 text-zinc-300 hover:text-white transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-emerald-500 group-hover:border-emerald-500 transition-colors">
                    <FaWhatsapp className="text-base" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block">WhatsApp / Phone</span>
                    <span className="text-xs sm:text-sm font-semibold">+92 300 9490631</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-zinc-300">
                  <div className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-crimson-500">
                    <FaMapMarkerAlt className="text-sm" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block">Location</span>
                    <span className="text-xs sm:text-sm font-semibold">Lahore, Pakistan • Worldwide Remote</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3">
                  <a
                    href="https://github.com/talharabani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 hover:border-zinc-600 flex items-center justify-center text-zinc-300 hover:text-white transition-all"
                    aria-label="GitHub"
                  >
                    <FaGithub className="text-base" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/talha-ishaq-rabani9490/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 hover:border-zinc-600 flex items-center justify-center text-zinc-300 hover:text-white transition-all"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-base" />
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Clean Dark Contact Form (6 cols) */}
          <div className="lg:col-span-6">
            <div className="bg-zinc-950 border border-zinc-850 rounded-2xl p-5 sm:p-8 shadow-2xl relative">
              <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                Fill out the quick form below or ping me directly on WhatsApp.
              </p>

              {sent ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <FaCheckCircle className="text-4xl text-emerald-500 mb-3" />
                  <h4 className="text-base font-bold text-white mb-1">Message Sent Successfully!</h4>
                  <p className="text-xs text-zinc-400 max-w-xs mb-6">
                    Thank you for reaching out. I'll get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="text-xs font-bold uppercase tracking-wider text-crimson-500 hover:underline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      required
                      value={formData.user_name}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe"
                      className="w-full bg-[#0a0a0a] border border-zinc-800 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-crimson-500 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="user_email"
                        required
                        value={formData.user_email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full bg-[#0a0a0a] border border-zinc-800 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-crimson-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        name="user_phone"
                        value={formData.user_phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-[#0a0a0a] border border-zinc-800 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-crimson-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                      Project Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="e.g. Full Stack Web App / n8n Workflow"
                      className="w-full bg-[#0a0a0a] border border-zinc-800 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-crimson-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, timeline, and requirements..."
                      className="w-full bg-[#0a0a0a] border border-zinc-800 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-crimson-500 transition-colors resize-none"
                    />
                  </div>

                  {error && (
                    <div className="text-[11px] text-crimson-400 font-semibold">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-crimson-600 hover:bg-crimson-700 disabled:opacity-50 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-lg shadow-crimson-950/40"
                  >
                    {loading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <FaPaperPlane className="text-xs" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
