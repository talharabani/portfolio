import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FaEnvelope, FaUser, FaPhone, FaCommentDots, FaCheckCircle, FaSpinner, FaWhatsapp } from "react-icons/fa";

const SERVICE_ID = "service_5n3rrkx";
const USER_ID = "y8nscxWO4CHQ7ssL0";
const TEMPLATE_GENERAL = "template_yrkx7ye";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedTemplate] = useState(TEMPLATE_GENERAL);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    subject: "",
    message: ""
  });
  const [showToast, setShowToast] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    
    // Basic validation
    if (!formData.user_name || !formData.user_email || !formData.message) {
      setError("Please fill in all required fields.");
      setLoading(false);
      return;
    }

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
          setShowToast(true);
          setTimeout(() => setShowToast(false), 3000);
        },
        () => {
          setError("Failed to send message. Try again later.");
          setLoading(false);
        }
      );
  };

  const resetForm = () => {
    setSent(false);
    setError("");
    setFormData({
      user_name: "",
      user_email: "",
      user_phone: "",
      subject: "",
      message: ""
    });
    if (form.current) {
      form.current.reset();
    }
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-12"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-l from-transparent via-purple-500/10 to-transparent transform skew-y-12"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="backdrop-blur-md bg-white/10 dark:bg-black/20 rounded-3xl p-8 border border-white/20 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent drop-shadow-lg">
              Get In Touch
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-white/90 max-w-3xl mx-auto drop-shadow-md">
              Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing together!
            </p>
          </div>
        </motion.div>

        {/* WhatsApp Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <a
            href="https://wa.me/923009490631"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 bg-green-500 text-white rounded-2xl shadow-lg hover:bg-green-600 hover:scale-105 transition-all duration-300 font-semibold"
          >
            <FaWhatsapp size={24} />
            <span>Chat on WhatsApp: 0300 9490631</span>
          </a>
        </motion.div>

        {/* Toast Notification */}
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div className="flex items-center gap-3 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
              <FaCheckCircle />
              <span>Message sent successfully!</span>
            </div>
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-8"
        >
          <motion.div 
            className="backdrop-blur-lg bg-white/10 dark:bg-black/20 rounded-3xl p-6 md:p-8 border border-white/20 dark:border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:rotate-1 hover:bg-white/20 dark:hover:bg-black/30"
            whileHover={{ 
              y: -10,
              rotateY: 5,
              rotateX: 5,
              transition: { duration: 0.3 }
            }}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center text-gray-900 dark:text-white drop-shadow-lg">Contact Information</h3>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 backdrop-blur-sm bg-white/20 dark:bg-white/20 rounded-full flex items-center justify-center border border-gray-300 dark:border-white/30 flex-shrink-0">
                    <FaEnvelope className="text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white drop-shadow-md">Email</p>
                    <p className="text-gray-700 dark:text-white/80 drop-shadow-md">talhaishaqrabani@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 backdrop-blur-sm bg-white/20 dark:bg-white/20 rounded-full flex items-center justify-center border border-gray-300 dark:border-white/30 flex-shrink-0">
                    <FaWhatsapp className="text-green-500 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white drop-shadow-md">WhatsApp</p>
                    <p className="text-gray-700 dark:text-white/80 drop-shadow-md">+92 300 9490631</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 backdrop-blur-sm bg-white/20 dark:bg-white/20 rounded-full flex items-center justify-center border border-gray-300 dark:border-white/30 flex-shrink-0">
                    <FaPhone className="text-purple-500 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white drop-shadow-md">Phone</p>
                    <p className="text-gray-700 dark:text-white/80 drop-shadow-md">+92 300 9490631</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="backdrop-blur-lg bg-white/10 dark:bg-black/20 rounded-3xl p-6 md:p-8 border border-white/20 dark:border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:rotate-1 hover:bg-white/20 dark:hover:bg-black/30"
            whileHover={{ 
              y: -10,
              rotateY: 5,
              rotateX: 5,
              transition: { duration: 0.3 }
            }}
          >
        {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-6 text-center"
              >
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <FaCheckCircle className="text-4xl text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 dark:text-gray-300">Thank you for reaching out. I'll get back to you soon!</p>
                </div>
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-300 font-semibold"
                >
                  Send Another Message
                </button>
              </motion.div>
        ) : (
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <FaUser className="absolute left-3 top-3 text-cyan-400" />
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
                          value={formData.user_name}
                          onChange={handleInputChange}
              required
                          className="w-full pl-10 pr-4 py-3 rounded-xl backdrop-blur-sm bg-white/20 dark:bg-white/20 border border-gray-300 dark:border-white/30 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
            />
                  </div>
                  
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-3 text-cyan-400" />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
                      value={formData.user_email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl backdrop-blur-sm bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  
                  <div className="relative">
                    <FaPhone className="absolute left-3 top-3 text-cyan-400" />
                    <input
                      type="tel"
                      name="user_phone"
                      placeholder="Your Phone (Optional)"
                      value={formData.user_phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl backdrop-blur-sm bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  
                  <div className="relative">
                    <FaCommentDots className="absolute left-3 top-3 text-cyan-400" />
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl backdrop-blur-sm bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  
                  <div className="relative">
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-xl backdrop-blur-sm bg-white/20 dark:bg-white/20 border border-gray-300 dark:border-white/30 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 resize-none"
            />
                  </div>
                </div>
                
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-700 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg"
                  >
                    {error}
                  </motion.div>
                )}
                
                    <button
                      type="submit"
                      className="w-full py-4 backdrop-blur-md bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-gray-900 dark:text-white rounded-xl shadow-xl hover:from-cyan-500/30 hover:to-purple-500/30 hover:scale-105 transition-all duration-300 font-semibold disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 border border-cyan-400/30 hover:border-cyan-400/50"
                      disabled={loading}
                    >
                  {loading ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaEnvelope />
                      Send Message
                    </>
                  )}
            </button>
          </form>
        )}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 