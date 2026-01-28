import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // EmailJS credentials - CORRECTED ✅
  const EMAILJS_SERVICE_ID = 'service_yamtg3a';
  const EMAILJS_TEMPLATE_ID = 'template_vrbljzd';
  const EMAILJS_PUBLIC_KEY = 'kE-7afrCnHjQitxXg';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const emailjs = (await import('@emailjs/browser')).default;
      
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-[#f5a623] font-semibold text-lg">GET IN TOUCH</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2d2d2d] mb-6">
              Let's Work Together
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can work together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-[#2d2d2d]">Contact Information</h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                  Feel free to reach out through any of these channels. I'm always excited to discuss new projects and opportunities.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href="mailto:sheminshemi6@gmail.com"
                  className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl border-2 border-transparent hover:border-[#f5a623] transition-all"
                >
                  <div className="w-14 h-14 bg-[#3d4f3d] rounded-xl flex items-center justify-center">
                    <Mail size={24} className="text-[#f5a623]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <p className="text-lg font-bold text-[#2d2d2d]">sheminshemi6@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+918848037794"
                  className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl border-2 border-transparent hover:border-[#f5a623] transition-all"
                >
                  <div className="w-14 h-14 bg-[#3d4f3d] rounded-xl flex items-center justify-center">
                    <Phone size={24} className="text-[#f5a623]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Phone</p>
                    <p className="text-lg font-bold text-[#2d2d2d]">+91 8848037794</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl border-2 border-transparent">
                  <div className="w-14 h-14 bg-[#3d4f3d] rounded-xl flex items-center justify-center">
                    <MapPin size={24} className="text-[#f5a623]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Location</p>
                    <p className="text-lg font-bold text-[#2d2d2d]">Kannur, Kerala, India</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="pt-8">
                <p className="text-sm text-gray-500 mb-4 font-semibold">FOLLOW ME</p>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/in/shamil-p"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#3d4f3d] rounded-xl flex items-center justify-center hover:bg-[#f5a623] transition-all"
                  >
                    <Linkedin size={20} className="text-white" />
                  </a>
                  <a
                    href="https://github.com/Shamilp-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#3d4f3d] rounded-xl flex items-center justify-center hover:bg-[#f5a623] transition-all"
                  >
                    <Github size={20} className="text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-100">
                {status === 'idle' || status === 'sending' ? (
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold mb-2 text-[#2d2d2d]">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={status === 'sending'}
                        className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#f5a623] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-bold mb-2 text-[#2d2d2d]">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={status === 'sending'}
                        className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#f5a623] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-bold mb-2 text-[#2d2d2d]">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        disabled={status === 'sending'}
                        rows={6}
                        className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#f5a623] transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="Tell me about your project..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full py-4 bg-gradient-to-r from-[#3d4f3d] to-[#2d3d2d] text-white font-bold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'sending' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={20} />
                        </>
                      )}
                    </button>
                  </div>
                ) : status === 'success' ? (
                  <div className="py-12 text-center">
                    <div className="w-20 h-20 bg-[#f5a623] rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={40} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-black mb-2 text-[#2d2d2d]">Message Sent!</h3>
                    <p className="text-gray-600">Thank you for reaching out. I'll get back to you soon.</p>
                  </div>
                ) : (
                  <div className="py-12 text-center">
                    <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <AlertCircle size={40} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-black mb-2 text-[#2d2d2d]">Oops! Something went wrong</h3>
                    <p className="text-gray-600 mb-4">Please try again or email me directly at sheminshemi6@gmail.com</p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="px-6 py-3 bg-[#3d4f3d] text-white font-bold rounded-xl hover:bg-[#f5a623] transition-all"
                    >
                      Try Again
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
