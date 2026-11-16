import { useState } from 'react';
import { Mail, MessageCircle, Globe, Send, Check, Star, Sparkles, ArrowRight, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import paulaPhoto from '@assets/paula/paula-grad-friends.png';
import paperclipIcon from '@assets/paula/paperclip.svg';
import curlyArrow from '@assets/paula/curly-arrow.svg';

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email Inquiries',
      value: 'paula.robles.marketing@gmail.com',
      link: 'mailto:paula.robles.marketing@gmail.com',
      color: '#D93240',
      tag: 'FASTEST RESPONSE'
    },
    {
      icon: MessageCircle,
      label: 'TikTok & Creator Profile',
      value: '@boliviana.en.canada',
      link: 'https://tiktok.com/@boliviana.en.canada',
      color: '#54100F',
      tag: 'COMMUNITY'
    },
    {
      icon: Globe,
      label: 'Location & Availability',
      value: 'Winnipeg, Canada • Available Worldwide',
      link: '#',
      color: '#54100F',
      tag: 'REMOTE FRIENDLY'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] py-16 relative overflow-hidden">
      <Star className="absolute top-20 right-12 w-8 h-8 text-[#D93240] sparkle" fill="#D93240" />

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <div className="inline-block px-4 py-1.5 bg-[#54100F] text-[#F6FFB6] rounded-full text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow">
                    ✦ GET IN TOUCH
                  </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#54100F] font-display">
                      Let’s Work Together!
                    </h1>
                      <div className="h-1 w-20 bg-gradient-to-r from-[#D93240] to-[#F6FFB6] mx-auto mt-4 mb-4" />
                      <p className="text-base sm:text-lg text-[#2D2323]/80 leading-relaxed font-medium">
                        Have an upcoming product launch, marketing campaign, or monthly retainer need? Let’s create content that converts.
                      </p>
                </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((c, idx) => (
            <a 
              key={idx}
              href={c.link}
              target={c.link.startsWith('http') ? '_blank' : undefined}
              rel={c.link.startsWith('http') ? 'noreferrer' : undefined}
              className="bg-white p-6 rounded-3xl border-3 border-[#54100F] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F2F1EB] border-2 border-[#54100F] flex items-center justify-center text-[#54100F] group-hover:scale-110 transition-transform">
                    <c.icon className="w-6 h-6 text-[#D93240]" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full bg-[#F6FFB6] text-[#54100F]">
                    {c.tag}
                  </span>
                </div>
                <span className="text-xs font-mono uppercase text-[#54100F]/60 block mb-1">
                  {c.label}
                </span>
                <p className="text-base font-bold text-[#54100F] group-hover:text-[#D93240] transition-colors break-words">
                  {c.value}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#54100F]/15 flex items-center justify-between text-xs font-mono text-[#54100F]/70">
                <span>Connect</span>
                <ArrowRight className="w-4 h-4 text-[#D93240] group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>

                    {/* Form & Image Grid */}
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                      {/* Inquiry Form */}
                      <div className="lg:col-span-7">
                        <div className="bg-white p-8 sm:p-10 rounded-3xl border-4 border-[#54100F] shadow-2xl">
                          {submitted ? (
                            <div className="text-center py-12 space-y-4">
                              <div className="w-16 h-16 rounded-full bg-[#F6FFB6] border-2 border-[#54100F] text-[#54100F] flex items-center justify-center mx-auto shadow-md">
                                <Check className="w-8 h-8" />
                              </div>
                              <h3 className="text-2xl font-bold font-display text-[#54100F]">Inquiry Sent!</h3>
                              <p className="text-sm text-[#2D2323]/80 max-w-sm mx-auto">
                                Thank you for reaching out! Paula will review your brand details and reply within 24 hours.
                              </p>
                              <button
                                onClick={() => setSubmitted(false)}
                                className="px-6 py-2.5 bg-[#54100F] text-[#F6FFB6] rounded-full font-mono text-xs font-bold mt-4"
                              >
                                Send Another Message
                              </button>
                            </div>
                          ) : (
                            <form
                              onSubmit={(e) => {
                                e.preventDefault();
                                setSubmitted(true);
                              }}
                              className="space-y-4"
                            >
                              <div>
                                <h3 className="text-2xl font-bold font-display text-[#54100F]">Campaign Inquiry Form</h3>
                                <p className="text-xs text-[#2D2323]/70 font-mono mt-1">
                                  Fill out the details below to request a tailored quote or discovery call.
                                </p>
                              </div>

                              <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                  <label className="text-xs font-mono font-bold text-[#54100F] block mb-1">Your Full Name *</label>
                                  <input
                                    type="text"
                                    required
                                    placeholder="e.g. Maria Santos"
                                    className="w-full bg-[#FDFBF7] border-2 border-[#54100F] rounded-xl px-3.5 py-2.5 text-xs text-[#2D2323] focus:outline-none focus:ring-2 focus:ring-[#D93240]"
                                  />
                                </div>
                                <div>
                                  <label className="text-xs font-mono font-bold text-[#54100F] block mb-1">Company / Brand *</label>
                                  <input
                                    type="text"
                                    required
                                    placeholder="e.g. Liceria Skincare"
                                    className="w-full bg-[#FDFBF7] border-2 border-[#54100F] rounded-xl px-3.5 py-2.5 text-xs text-[#2D2323] focus:outline-none focus:ring-2 focus:ring-[#D93240]"
                                  />
                                </div>
                              </div>

                              <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                  <label className="text-xs font-mono font-bold text-[#54100F] block mb-1">Work Email *</label>
                                  <input
                                    type="email"
                                    required
                                    placeholder="hello@brand.com"
                                    className="w-full bg-[#FDFBF7] border-2 border-[#54100F] rounded-xl px-3.5 py-2.5 text-xs text-[#2D2323] focus:outline-none focus:ring-2 focus:ring-[#D93240]"
                                  />
                                </div>
                                <div>
                                  <label className="text-xs font-mono font-bold text-[#54100F] block mb-1">Service Interest</label>
                                  <select className="w-full bg-[#FDFBF7] border-2 border-[#54100F] rounded-xl px-3.5 py-2.5 text-xs text-[#2D2323] font-mono focus:outline-none focus:ring-2 focus:ring-[#D93240]">
                                    <option value="UGC Video Package">UGC Video Package</option>
                                    <option value="Product Photography">Lifestyle / Product Photography</option>
                                    <option value="Combined Video + Photo">Combined Video + Photo</option>
                                    <option value="Monthly Content Retainer">Monthly Content Retainer</option>
                                  </select>
                                </div>
                              </div>

                              <div>
                                <label className="text-xs font-mono font-bold text-[#54100F] block mb-1">Campaign Details & Timeline *</label>
                                <textarea
                                  rows={4}
                                  required
                                  placeholder="Share brief product information, desired deliverables, target launch date..."
                                  className="w-full bg-[#FDFBF7] border-2 border-[#54100F] rounded-xl px-3.5 py-2.5 text-xs text-[#2D2323] focus:outline-none focus:ring-2 focus:ring-[#D93240]"
                                />
                              </div>

                              <button
                                type="submit"
                                className="w-full py-3.5 bg-[#D93240] hover:bg-[#54100F] text-white rounded-xl font-mono text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                              >
                                <Send className="w-4 h-4" />
                                <span>Send Inquiry</span>
                              </button>
                            </form>
                          )}
                        </div>
                      </div>

                              {/* Right Polaroid Photo Card */}
                              <div className="lg:col-span-5 flex justify-center">
                                <div className="relative group rotate-2 hover:rotate-0 transition-transform duration-300 max-w-sm w-full">
                                  <img
                                    src={paperclipIcon}
                                    alt="Paperclip"
                                    className="absolute -top-6 left-10 w-8 h-12 z-20 drop-shadow pointer-events-none"
                                  />
                                  <div className="bg-white p-4 pb-6 rounded-2xl shadow-xl border-4 border-[#54100F]">
                                    <div className="overflow-hidden rounded-xl aspect-[4/5] bg-[#F2F1EB]">
                                      <img
                                        src={paulaPhoto}
                                        alt="Paula Robles celebrating graduation with friends"
                                        className="w-full h-full object-cover object-top"
                                      />
                                    </div>
                                      <div className="mt-3 text-center">
                                        <span className="font-handwriting text-2xl text-[#54100F] font-bold">
                                          Let’s make it happen! 💌
                                        </span>
                                      </div>
                      </div>

                          <img
                            src={curlyArrow}
                            alt="Arrow pointing"
                            className="absolute -bottom-8 -left-10 w-16 h-28 pointer-events-none drop-shadow rotate-12"
                          />
                        </div>
                      </div>
                  </div>
                </div>
            </div>
            );
}
