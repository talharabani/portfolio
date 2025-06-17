import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaSpinner } from 'react-icons/fa';
import { toast, Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init("MYIgnsfTkvYX2N-wM");

const MAX_MESSAGE_LENGTH = 500;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length > MAX_MESSAGE_LENGTH) {
      newErrors.message = `Message must be less than ${MAX_MESSAGE_LENGTH} characters`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'talhaishaqrabani9490@gmail.com',
      };

      await emailjs.send(
        'service_5n3rrkx',
        'template_nadgcga',
        templateParams,
        'MYIgnsfTkvYX2N-wM'
      );
      
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!');
  };

  return (
    <section id="contact" className="py-20 px-4">
      <Toaster position="top-right" />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Get In Touch</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-textSecondary">
              I'm currently looking for new opportunities. Whether you have a question
              or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="flex flex-col gap-4">
              <button
                onClick={() => copyToClipboard('talhaishaqrabani9490@gmail.com')}
                className="flex items-center gap-3 text-textSecondary hover:text-secondary transition-colors group"
              >
                <FaEnvelope className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>talhaishaqrabani9490@gmail.com</span>
              </button>
              
              <a
                href="https://github.com/talhaishaqrabani"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-textSecondary hover:text-secondary transition-colors group"
              >
                <FaGithub className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>github.com/talhaishaqrabani</span>
              </a>
              
              <a
                href="https://www.linkedin.com/in/talhaishaqrabani"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-textSecondary hover:text-secondary transition-colors group"
              >
                <FaLinkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>linkedin.com/in/talhaishaqrabani</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-tertiary p-6 rounded-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-textPrimary mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 bg-backgroundSecondary border ${
                    errors.name ? 'border-red-500' : 'border-secondary/20'
                  } rounded-lg focus:outline-none focus:border-secondary text-textPrimary placeholder-textSecondary/50`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-textPrimary mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 bg-backgroundSecondary border ${
                    errors.email ? 'border-red-500' : 'border-secondary/20'
                  } rounded-lg focus:outline-none focus:border-secondary text-textPrimary placeholder-textSecondary/50`}
                  placeholder="Your email"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-textPrimary mb-2">
                  Message
                  <span className="text-sm text-textSecondary ml-2">
                    ({formData.message.length}/{MAX_MESSAGE_LENGTH})
                  </span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className={`w-full px-4 py-2 bg-backgroundSecondary border ${
                    errors.message ? 'border-red-500' : 'border-secondary/20'
                  } rounded-lg focus:outline-none focus:border-secondary text-textPrimary placeholder-textSecondary/50 resize-none`}
                  placeholder="Your message"
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 