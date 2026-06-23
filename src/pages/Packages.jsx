import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Packages() {
  const [activeLevel, setActiveLevel] = useState("Student & Entry-Level");

  const packages = [
    {
      title: "Resume Only",
      subtitle: "The Basics",
      price: "199",
      features: [
        "Professional Resume",
        "2 Revisions",
        "ATS Optimization",
        "3–4 Day Delivery",
      ],
    },
    {
      title: "Resume & Cover Letter",
      subtitle: "Application Pro",
      price: "274",
      popular: true,
      features: [
        "Professional Resume",
        "Custom Cover Letter",
        "2 Revisions",
        "ATS Optimization",
        "3–4 Day Delivery",
      ],
    },
    {
      title: "All Inclusive",
      subtitle: "Career Accelerator",
      price: "399",
      features: [
        "Professional Resume",
        "Cover Letter",
        "LinkedIn Optimization",
        "2 Revisions",
        "ATS Optimization",
        "3–4 Day Delivery",
      ],
    },
  ];

  const returningPackages = [
    {
      title: "Resume Refresh",
      price: "99",
      description: "Resume update based on new goals",
    },
    {
      title: "Cover Letter",
      price: "74",
      description: "Cover letter add-on or update",
    },
    {
      title: "LinkedIn Update",
      price: "124",
      description: "Headline, About, Experience, Skills",
    },
  ];

  const levels = ["Student & Entry-Level", "Mid-Career & Management", "Director & Executive"];

  const testimonials = [
    { name: "Brian H.", role: "Finance Associate", text: "Apex Career Partners transformed my resume and highlighted my strengths in a way I couldn't have done myself." },
    { name: "Rico B.", role: "Technology Executive", text: "The guidance and support throughout the process were invaluable. Highly recommended." },
    { name: "Diana N.", role: "Senior HR Executive", text: "Professional, responsive, and incredibly skilled at identifying accomplishments and achievements." },
    { name: "Shawn B.", role: "Marketing Director", text: "Working with Apex Career Partners felt like having a personal career strategist on my side." },
    { name: "Nathan N.", role: "CEO", text: "Excellent communication and an outstanding final product that exceeded expectations." },
    { name: "Betty G.", role: "Hospitality Leader", text: "The resume they created had real impact and helped me feel confident during my job search." },
  ];

  return (
    <div className="font-sans bg-white text-gray-900">

      {/* ── HERO — dark navy ─────────────────── */}
      <section className="relative overflow-hidden bg-[#0B1F3A] min-h-[80vh] flex items-center">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#1E6BD6] opacity-10 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 text-[#5BA4F5] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              <span className="w-6 h-px bg-[#5BA4F5]" />
              Professional Career Services
            </span>
            <h1 className="text-5xl lg:text-[3.75rem] font-bold text-white leading-[1.1] tracking-tight">
              From overlooked
              <br />
              <span className="text-[#5BA4F5]">to interviewed.</span>
            </h1>
            <p className="text-gray-400 text-lg mt-7 leading-relaxed max-w-lg">
              Professionally written resumes, cover letters, and LinkedIn profiles
              designed to impress recruiters and pass ATS systems.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#packages"
                className="bg-[#1E6BD6] hover:bg-[#1859b8] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg shadow-blue-900/30"
              >
                See Packages →
              </a>
              <Link
                to="/contact"
                className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=80"
              alt="Career Growth"
              className="rounded-3xl w-full object-cover aspect-[4/3] border border-white/10"
            />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
          </motion.div>
        </div>
      </section>

      {/* ── 3 STEPS — white ──────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1E6BD6]">How It Works</span>
            <h2 className="text-4xl font-bold mt-4">Three easy steps to get started</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { n: "01", title: "Purchase a Package", desc: "Select the experience level and package that best fits your career goals." },
              { n: "02", title: "Submit Questionnaire", desc: "Share your background, achievements, and career objectives with our team." },
              { n: "03", title: "Writing Begins", desc: "Our professional writers craft your personalized documents and deliver fast." },
            ].map((step) => (
              <div
                key={step.n}
                className="relative bg-[#F7FAFF] rounded-2xl p-8 border border-[#1E6BD6]/10 overflow-hidden group hover:border-[#1E6BD6]/30 transition-all duration-300"
              >
                <span className="absolute top-6 right-6 text-6xl font-bold text-[#1E6BD6]/[0.07] select-none group-hover:text-[#1E6BD6]/[0.12] transition-all duration-300">
                  {step.n}
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#1E6BD6] text-white flex items-center justify-center text-sm font-bold mb-6">
                  {step.n}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="text-gray-500 mt-3 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PURCHASING INFO — blue accent ─────── */}
      <section className="py-20 bg-[#1E6BD6]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-12 h-12 rounded-xl bg-white/15 text-white flex items-center justify-center text-xl shrink-0">
              🔒
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Secure Purchasing & Communication</h3>
              <p className="mt-3 text-blue-100 leading-relaxed">
                All services are purchased directly through our website using secure payment
                processing. Once your order is placed, our team will contact you promptly
                with next steps to get started.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PACKAGES — light tint ────────────── */}
      <section id="packages" className="py-28 bg-[#F7FAFF]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1E6BD6]">Pricing</span>
            <h2 className="text-4xl font-bold mt-4">Select your experience level</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Choose the package that best aligns with your career stage and professional goals.
            </p>
          </div>

          {/* Level tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {levels.map((level) => (
              <button
                key={level}
                onClick={() => setActiveLevel(level)}
                className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${activeLevel === level
                  ? "bg-[#0B1F3A] text-white shadow-md"
                  : "bg-white text-gray-500 border border-gray-200 hover:border-[#1E6BD6] hover:text-[#1E6BD6]"
                  }`}
              >
                {level}
              </button>
            ))}
          </div>

          {/* Package cards */}
          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <motion.div
                whileHover={{ y: -6 }}
                key={pkg.title}
                className={`relative rounded-2xl overflow-hidden border transition-all duration-300 ${pkg.popular
                  ? "bg-[#0B1F3A] border-[#1E6BD6] shadow-2xl shadow-blue-900/20"
                  : "bg-white border-gray-200 shadow-sm hover:shadow-md"
                  }`}
              >
                {pkg.popular && (
                  <div className="bg-[#1E6BD6] text-white text-center py-2.5 text-xs font-bold tracking-widest uppercase">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  <p className={`text-xs font-semibold tracking-[0.15em] uppercase ${pkg.popular ? "text-[#5BA4F5]" : "text-[#1E6BD6]"}`}>
                    {pkg.subtitle}
                  </p>
                  <h3 className={`text-2xl font-bold mt-2 ${pkg.popular ? "text-white" : "text-gray-900"}`}>
                    {pkg.title}
                  </h3>

                  <div className={`mt-8 flex items-baseline gap-1 ${pkg.popular ? "text-white" : "text-gray-900"}`}>
                    <span className="text-4xl font-bold">${pkg.price}</span>
                    <span className="text-lg">.99</span>
                  </div>

                  <ul className="mt-8 space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className={`flex items-center gap-3 text-sm ${pkg.popular ? "text-gray-300" : "text-gray-600"}`}>
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${pkg.popular ? "bg-[#1E6BD6] text-white" : "bg-[#EBF3FF] text-[#1E6BD6]"}`}>
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/payment"
                    state={{
                      packageName: pkg.title,
                      packagePrice: `${pkg.price}.99`,
                    }}
                    className={`block text-center w-full mt-10 py-4 rounded-xl font-semibold ${pkg.popular
                        ? "bg-yellow-400 text-slate-900"
                        : "bg-[#0F172A] text-white"
                      }`}
                  >
                    Select Package
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RETURNING CLIENTS — white ─────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1E6BD6]">Returning Clients</span>
            <h2 className="text-4xl font-bold mt-4">Welcome back</h2>
            <p className="text-gray-500 mt-4">Exclusive discounted services for existing clients.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {returningPackages.map((item) => (
              <div
                key={item.title}
                className="bg-[#F7FAFF] rounded-2xl p-8 border border-[#1E6BD6]/10 hover:border-[#1E6BD6]/30 hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-500 mt-3 text-sm">{item.description}</p>
                <div className="text-4xl font-bold text-[#0B1F3A] mt-8">${item.price}<span className="text-lg">.99</span></div>
                <button className="w-full bg-[#0B1F3A] hover:bg-[#1E6BD6] text-white py-4 rounded-xl font-semibold mt-8 text-sm transition-colors duration-200">
                  Select Package →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPEDITED — light tint ────────────── */}
      <section className="py-24 bg-[#F7FAFF]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-[#0B1F3A] rounded-3xl px-12 py-14 text-center relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.05] rounded-3xl"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <span className="relative text-xs font-semibold tracking-[0.2em] uppercase text-[#5BA4F5]">Priority Processing</span>
            <h2 className="relative text-4xl font-bold text-white mt-4">Need it done sooner?</h2>
            <p className="relative text-gray-400 text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
              Upgrade to expedited service at checkout and receive priority processing.
              Get your documents delivered within 24 hours.
            </p>
            <div className="relative mt-10 inline-flex items-center gap-3 bg-[#1E6BD6] text-white px-8 py-4 rounded-xl font-bold text-sm">
              <span className="text-lg">⚡</span> 24-Hour Delivery Available
            </div>
          </div>
        </div>
      </section>

      {/* ── PARTNERSHIP — white ───────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1fr_1.4fr] gap-16 items-center">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1E6BD6]">Partnership</span>
            <h2 className="text-4xl font-bold mt-4 leading-tight">
              Expanded support through trusted partners.
            </h2>
          </div>
          <div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Apex Career Partners partners with experienced career coaches and leadership advisors
              to provide support beyond resumes, cover letters, and LinkedIn profiles.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-5">
              Whether you're a recent graduate, changing industries, or pursuing executive
              positions, our partners help you gain clarity, confidence, and direction.
            </p>
            <div className="mt-10 inline-flex items-center gap-3 bg-[#EBF3FF] border border-[#1E6BD6]/20 px-8 py-5 rounded-2xl">
              <div className="w-2 h-2 rounded-full bg-[#1E6BD6]" />
              <span className="text-[#0B1F3A] font-bold text-xl tracking-tight">Next Big Job</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS — dark navy ──────────── */}
      <section className="py-28 bg-[#0B1F3A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#5BA4F5]">Testimonials</span>
            <h2 className="text-4xl font-bold text-white mt-4">What our clients say</h2>
            <p className="text-gray-500 mt-4">Real feedback from professionals we've helped.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((review) => (
              <div
                key={review.name}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] transition-all duration-200"
              >
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#5BA4F5] text-sm">★</span>
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">"{review.text}"</p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="font-bold text-white text-sm">{review.name}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — blue ───────────────────────── */}
      <section className="relative overflow-hidden bg-[#1E6BD6] py-28">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white text-5xl font-bold leading-tight tracking-tight">
            Ready to land
            <br />more interviews?
          </h2>
          <p className="text-blue-200 text-lg mt-6 max-w-xl mx-auto">
            Let Apex Career Partners help you create career documents that stand out and open doors.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a
              href="#packages"
              className="bg-white text-[#1E6BD6] px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 shadow-lg"
            >
              Get Started Today →
            </a>
            <Link
              to="/contact"
              className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONTACT — light tint ─────────────── */}
      <section id="contact" className="py-28 bg-[#F7FAFF]">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1E6BD6]">Get In Touch</span>
            <h2 className="text-4xl font-bold mt-4">Have questions?</h2>
            <p className="text-gray-500 mt-4 text-lg">We'd love to help before you get started.</p>

            <div className="mt-10 space-y-5">
              {[
                ["✉", "info@apexrecruiters.com"],
                ["📍", "Global Career Services"],
                ["💼", "LinkedIn Available"],
              ].map(([icon, text]) => (
                <div key={text} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF3FF] text-[#1E6BD6] flex items-center justify-center text-base shrink-0">
                    {icon}
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#1E6BD6] outline-none rounded-xl px-5 py-4 text-sm transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#1E6BD6] outline-none rounded-xl px-5 py-4 text-sm transition-colors duration-200"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Message</label>
                <textarea
                  rows="5"
                  className="w-full border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#1E6BD6] outline-none rounded-xl px-5 py-4 text-sm transition-colors duration-200 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#0B1F3A] hover:bg-[#1E6BD6] text-white py-4 rounded-xl font-semibold transition-colors duration-300 text-sm tracking-wide mt-2"
              >
                Send Message →
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}