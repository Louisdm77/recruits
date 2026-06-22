import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Brian Henderson",
      role: "Finance Associate",
      text: "Apex Recruiters completely transformed my resume and LinkedIn profile. Within three weeks I secured interviews with companies I had been targeting for months.",
    },
    {
      name: "Rico Benson",
      role: "Technology Executive",
      text: "The team helped me position my leadership experience effectively. I received multiple interview invitations shortly after updating my materials.",
    },
    {
      name: "Diana Nelson",
      role: "Senior HR Executive",
      text: "Professional, responsive, and highly knowledgeable. They helped me communicate my achievements in a way that resonated with hiring managers.",
    },
    {
      name: "Shawn Brooks",
      role: "Marketing Director",
      text: "Working with Apex Recruiters felt like having a personal career strategist. The process was smooth and the results exceeded expectations.",
    },
    {
      name: "Nathan Newman",
      role: "CEO",
      text: "Excellent service from start to finish. The resume and LinkedIn optimization helped strengthen my executive brand significantly.",
    },
    {
      name: "Betty Green",
      role: "Hospitality Leader",
      text: "The resume they created was polished, impactful, and professional. I felt far more confident applying for leadership positions.",
    },
  ];

  const stats = [
    { number: "4,000+", label: "Resumes Written" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "500+", label: "Interview Success Stories" },
    { number: "20+", label: "Industries Served" },
  ];

  return (
    <div className="font-sans bg-white text-gray-900">

      {/* ── HERO — blue ───────────────────────── */}
      <section className="relative overflow-hidden bg-[#1E6BD6] py-28 flex items-center">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 text-white/70 text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            <span className="w-6 h-px bg-white/50" />
            Success Stories
            <span className="w-6 h-px bg-white/50" />
          </span>
          <h1 className="text-5xl lg:text-[3.75rem] font-bold text-white leading-[1.1] tracking-tight">
            What our clients say
          </h1>
          <p className="text-blue-100 text-lg mt-7 max-w-2xl mx-auto leading-relaxed">
            Thousands of professionals have trusted Apex Recruiters to strengthen their
            personal brand, secure interviews, and advance their careers.
          </p>
        </div>
      </section>

      {/* ── STATS — white ────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center bg-[#F7FAFF] rounded-2xl px-8 py-10 border border-[#1E6BD6]/10 hover:border-[#1E6BD6]/30 hover:shadow-md transition-all duration-300"
              >
                <p className="text-5xl font-bold text-[#0B1F3A]">{stat.number}</p>
                <p className="text-gray-500 text-sm mt-3 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS — dark navy ──────────── */}
      <section className="py-28 bg-[#0B1F3A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#5BA4F5]">Testimonials</span>
            <h2 className="text-4xl font-bold text-white mt-4">Client testimonials</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] transition-all duration-200 flex flex-col"
              >
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#5BA4F5] text-sm">★</span>
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed text-sm flex-1">"{item.text}"</p>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="font-bold text-white text-sm">{item.name}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{item.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUCCESS CALLOUT — light tint ─────── */}
      <section className="py-28 bg-[#F7FAFF]">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1fr_1.4fr] gap-16 items-center">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1E6BD6]">Our Impact</span>
            <h2 className="text-4xl font-bold mt-4 leading-tight">
              Helping professionals
              <br />land real opportunities.
            </h2>
          </div>
          <div>
            <p className="text-gray-600 text-lg leading-relaxed">
              From recent graduates to senior executives, we help professionals present
              their value, stand out from the competition, and secure opportunities with
              leading organizations worldwide.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                ["Amazon", "Google"],
                ["Deloitte", "Capital One"],
              ].flat().map((company) => (
                <div
                  key={company}
                  className="bg-white border border-gray-200 hover:bg-[#EBF3FF] hover:border-[#1E6BD6]/30 text-gray-500 hover:text-[#1E6BD6] font-semibold text-sm rounded-xl px-5 py-3 text-center transition-all duration-200"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA — dark navy ──────────────────── */}
      <section className="relative overflow-hidden bg-[#0B1F3A] py-28">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#1E6BD6] opacity-10 blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 text-[#5BA4F5] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            <span className="w-6 h-px bg-[#5BA4F5]" />
            Get Started
          </span>
          <h2 className="text-5xl font-bold text-white leading-tight tracking-tight">
            Ready to become our
            <br />next success story?
          </h2>
          <p className="text-gray-400 text-lg mt-6 max-w-xl mx-auto">
            Let Apex Recruiters help you build a professional brand that attracts
            employers and opens the right doors.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link
              to="/packages"
              className="bg-[#1E6BD6] hover:bg-[#1859b8] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg shadow-blue-900/30"
            >
              View Packages →
            </Link>
            <Link
              to="/contact"
              className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}