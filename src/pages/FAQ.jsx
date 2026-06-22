import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      question: "What is ATS and why is it important?",
      answer:
        "ATS stands for Applicant Tracking System. Employers use ATS software to scan resumes for relevant keywords and qualifications before a recruiter reviews applications. An ATS-optimized resume significantly improves your chances of being seen.",
    },
    {
      question: "Are your resumes ATS compatible?",
      answer:
        "Yes. Every resume we create follows ATS best practices while maintaining a professional appearance for hiring managers and recruiters.",
    },
    {
      question: "What industries and roles do you serve?",
      answer:
        "We support professionals across healthcare, technology, education, finance, human resources, engineering, sales, marketing, government, and executive leadership positions.",
    },
    {
      question: "What is the difference between a resume and a CV?",
      answer:
        "A resume is typically a concise 1–2 page document focused on experience and qualifications. A CV is more detailed and can include publications, research, awards, certifications, and academic accomplishments.",
    },
    {
      question: "Can you log into my LinkedIn profile to make updates?",
      answer:
        "No. For security and compliance reasons, we do not access client accounts. We provide professionally written LinkedIn content that you can easily copy and paste into your profile.",
    },
    {
      question: "What packages do you offer?",
      answer:
        "We offer Resume Only, Resume & Cover Letter, and All-Inclusive packages that include LinkedIn optimization. Additional services are available for returning clients.",
    },
    {
      question: "How do I know I'm working with Apex Recruiters?",
      answer:
        "All services are purchased directly through our website. Communication comes directly from our professional team throughout the project lifecycle.",
    },
    {
      question: "How are federal resumes different from private-sector resumes?",
      answer:
        "Federal resumes require significantly more detail, including job duties, accomplishments, dates, hours worked, and other information required by government hiring processes.",
    },
    {
      question: "What is the turnaround time?",
      answer:
        "Our standard turnaround time is 3–4 business days after receiving all required information. Expedited 24-hour delivery options are also available.",
    },
    {
      question: "Will I be able to update my resume in the future?",
      answer:
        "Absolutely. We provide editable DOCX files, making it easy to update your resume as your career progresses.",
    },
    {
      question: "Do you write resumes from scratch?",
      answer:
        "Yes. Whether you have an existing resume or are starting from zero, our team can create a fully optimized professional resume tailored to your goals.",
    },
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY");
    alert("Message sent successfully!");
    e.target.reset();
  };

  return (
    <div className="font-sans bg-white text-gray-900">

      {/* ── HERO — light tint ────────────────── */}
      <section className="relative overflow-hidden bg-[#F7FAFF] py-28">
        <div className="absolute top-0 left-0 w-full h-1 bg-[#1E6BD6]" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#1E6BD6] opacity-[0.06] blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 text-[#1E6BD6] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            <span className="w-6 h-px bg-[#1E6BD6]" />
            Frequently Asked Questions
            <span className="w-6 h-px bg-[#1E6BD6]" />
          </span>
          <h1 className="text-5xl lg:text-[3.75rem] font-bold text-[#0B1F3A] leading-[1.1] tracking-tight">
            Still have
            <br />
            <span className="text-[#1E6BD6]">questions?</span>
          </h1>
          <p className="text-gray-500 text-lg mt-7 max-w-2xl mx-auto leading-relaxed">
            We've answered the most common questions about our services, process, and
            career support solutions. If you need more help, our team is ready to assist.
          </p>
        </div>
      </section>

      {/* ── FAQs — white ─────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1E6BD6]">FAQ</span>
            <h2 className="text-4xl font-bold mt-4">Common questions</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-2xl border overflow-hidden transition-all duration-200 ${
                  open === index
                    ? "border-[#1E6BD6]/30 shadow-md shadow-blue-900/5"
                    : "border-gray-100 hover:border-gray-200"
                }`}
              >
                <button
                  onClick={() => setOpen(open === index ? null : index)}
                  className="w-full flex justify-between items-center px-7 py-5 text-left bg-white hover:bg-[#F7FAFF] transition-colors duration-200"
                >
                  <span className={`font-semibold text-base leading-snug pr-4 ${open === index ? "text-[#1E6BD6]" : "text-gray-900"}`}>
                    {faq.question}
                  </span>
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-sm font-bold transition-all duration-200 ${
                    open === index
                      ? "bg-[#1E6BD6] text-white rotate-180"
                      : "bg-gray-100 text-gray-500"
                  }`}>
                    {open === index ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence>
                  {open === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-7 pb-6 pt-1 bg-white text-gray-500 text-sm leading-relaxed border-t border-gray-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK FACTS — dark navy ───────────── */}
      <section className="py-24 bg-[#0B1F3A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#5BA4F5]">At a Glance</span>
            <h2 className="text-3xl font-bold text-white mt-4">Everything you need to know</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "⚡", title: "3–4 Day Delivery", desc: "Standard turnaround after receiving your information" },
              { icon: "🔒", title: "Secure Purchase", desc: "All orders placed safely through our website" },
              { icon: "📄", title: "Editable DOCX", desc: "Update your resume anytime as your career grows" },
              { icon: "🌍", title: "Available Worldwide", desc: "Serving clients locally, nationally, and internationally" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/[0.08] transition-all duration-200"
              >
                <span className="text-2xl">{item.icon}</span>
                <h3 className="text-white font-bold mt-4 text-base">{item.title}</h3>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT — light tint ─────────────── */}
      <section className="py-28 bg-[#F7FAFF]">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1E6BD6]">Get In Touch</span>
            <h2 className="text-4xl font-bold mt-4">Still need help?</h2>
            <p className="text-gray-500 mt-4 text-lg leading-relaxed">
              Can't find the answer you're looking for? Reach out and our team will
              get back to you promptly.
            </p>

            <div className="mt-10 space-y-4">
              {[
                ["✉", "info@apexrecruiters.com"],
                ["💼", "Professional Career Support"],
                ["🌎", "Available Worldwide"],
              ].map(([icon, text]) => (
                <div key={text} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF3FF] text-[#1E6BD6] flex items-center justify-center text-base shrink-0">
                    {icon}
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{text}</span>
                </div>
              ))}
            </div>

            {/* mini trust block */}
            <div className="mt-14 p-6 bg-[#EBF3FF] rounded-2xl border-l-4 border-[#1E6BD6]">
              <p className="text-[#0B1F3A] font-medium text-sm leading-relaxed">
                All communication comes directly from our professional team. You'll never be
                handed off to a third party.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <form onSubmit={sendEmail} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#1E6BD6] outline-none rounded-xl px-5 py-4 text-sm transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#1E6BD6] outline-none rounded-xl px-5 py-4 text-sm transition-colors duration-200"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Message</label>
                <textarea
                  rows="6"
                  name="message"
                  required
                  className="w-full border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#1E6BD6] outline-none rounded-xl px-5 py-4 text-sm transition-colors duration-200 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#0B1F3A] hover:bg-[#1E6BD6] text-white py-4 rounded-xl font-semibold transition-colors duration-300 text-sm tracking-wide mt-2"
              >
                Send Message →
              </button>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
}