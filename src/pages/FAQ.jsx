
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

    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      e.target,
      "YOUR_PUBLIC_KEY"
    );

    alert("Message sent successfully!");
    e.target.reset();
  };

  return (
    <div className="bg-white">

      {/* HERO */}

      <section className="bg-[#0F172A] py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <span className="text-yellow-400 uppercase tracking-widest font-semibold">
            Frequently Asked Questions
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-white mt-6">
            Still Have Questions?
          </h1>

          <p className="text-slate-300 mt-8 text-lg max-w-3xl mx-auto">
            We've answered the most common questions about our services,
            process, and career support solutions. If you need additional
            help, our team is ready to assist.
          </p>

        </div>
      </section>

      {/* FAQS */}

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#0F172A]">
            Frequently Asked Questions
          </h2>

          <div className="mt-16 space-y-5">

            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() =>
                    setOpen(open === index ? null : index)
                  }
                  className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-slate-50"
                >
                  <span className="font-semibold text-lg">
                    {faq.question}
                  </span>

                  <span className="text-yellow-500 text-2xl">
                    {open === index ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence>

                  {open === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 bg-slate-50 text-gray-700 leading-relaxed">
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

      {/* CONTACT */}

      <section className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16">

            <div>

              <h2 className="text-4xl font-bold text-[#0F172A]">
                Contact Us
              </h2>

              <p className="mt-6 text-lg text-gray-700">
                Have questions before getting started?
                We'd love to help.
              </p>

              <div className="mt-10 space-y-5">

                <p className="font-semibold text-lg">
                  📧 info@apexrecruiters.com
                </p>

                <p className="font-semibold text-lg">
                  📱 Professional Career Support
                </p>

                <p className="font-semibold text-lg">
                  🌎 Available Worldwide
                </p>

              </div>

            </div>

            <form
              onSubmit={sendEmail}
              className="bg-white rounded-3xl shadow-xl p-8"
            >

              <div className="mb-6">
                <label className="block mb-2 font-medium">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 font-medium">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 font-medium">
                  Message
                </label>

                <textarea
                  rows="5"
                  name="message"
                  required
                  className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-slate-900 py-4 rounded-xl font-semibold hover:bg-yellow-300 transition"
              >
                Submit
              </button>

            </form>

          </div>

        </div>
      </section>

    </div>
  );
}
