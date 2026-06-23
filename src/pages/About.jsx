import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function About() {
  const reasons = [
    {
      icon: "✦",
      title: "Personalized Service",
      text: "Every client receives customized career documents designed around their goals, experience, and professional story.",
    },
    {
      icon: "◈",
      title: "Certified Expertise",
      text: "Our team follows modern ATS standards, recruiter expectations, and industry best practices to maximize results.",
    },
    {
      icon: "◎",
      title: "Transparent Process",
      text: "Clear communication, straightforward timelines, and collaborative revisions ensure a smooth experience.",
    },
    {
      icon: "✺",
      title: "Proven Results",
      text: "We've helped professionals secure interviews and opportunities with leading companies worldwide.",
    },
  ];

  const services = [
    "Professional Resume Writing",
    "Cover Letter Writing",
    "LinkedIn Profile Optimization",
    "Career Transition Resumes",
    "Personal Biographies",
    "Company LinkedIn Profiles",
    "Job Search Support",
  ];

  const clients = [
    "High School Students",
    "College Students",
    "Entry-Level Professionals",
    "Mid-Career Professionals",
    "Managers & Directors",
    "Executives & C-Suite Candidates",
    "Federal Job Seekers",
    "Transitioning Veterans",
  ];

  const industries = [
    "Healthcare & Nursing",
    "Information Technology",
    "Education",
    "Business & Finance",
    "Human Resources",
    "Sales & Marketing",
    "Engineering & Manufacturing",
  ];

  return (
    <div className="font-sans bg-white text-gray-900">

      {/* ── HERO ─────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0B1F3A] min-h-[80vh] flex items-center">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#1E6BD6] opacity-10 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 text-[#5BA4F5] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              <span className="w-6 h-px bg-[#5BA4F5]" />
              About Apex Recruiters
            </span>

            <h1 className="text-5xl lg:text-[3.75rem] font-bold text-white leading-[1.1] tracking-tight">
              Career support built
              <br />
              <span className="text-[#5BA4F5]">around your success.</span>
            </h1>

            <p className="text-gray-400 text-lg mt-7 leading-relaxed max-w-lg">
              We help professionals tell their stories in ways that make hiring managers
              take notice, strategic, personalized, and designed to get you results.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                to="/packages"
                className="bg-[#1E6BD6] hover:bg-[#1859b8] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg shadow-blue-900/30"
              >
                View Packages →
              </Link>
              <Link
                to="/faq"
                className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg transition-all duration-200"
              >
                See FAQ
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

      {/* ── MISSION ──────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1E6BD6]">Our Mission</span>
            <h2 className="text-4xl font-bold mt-4 leading-tight">
              Tools that generate
              <br />real results.
            </h2>
          </div>
          <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
            <p>
              We specialize in creating professional resumes, cover letters, LinkedIn profiles,
              and personal branding materials that help candidates stand out in today's
              competitive market.
            </p>
            <p>
              Whether you're entering the workforce, changing industries, pursuing leadership
              opportunities, or targeting executive positions, we provide career support
              tailored to your journey.
            </p>
            <div className="mt-8 p-6 bg-[#EBF3FF] rounded-2xl border-l-4 border-[#1E6BD6]">
              <p className="text-[#0B1F3A] font-medium">
                "Our mission is simple: equip job seekers with the tools and strategy they
                need to land opportunities that match their potential."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────── */}
      <section className="py-28 bg-[#F7FAFF]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1E6BD6]">Why Apex</span>
            <h2 className="text-4xl font-bold mt-4">Why professionals choose us</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((item) => (
              <motion.div
                whileHover={{ y: -6 }}
                key={item.title}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <span className="text-2xl text-[#1E6BD6] block mb-5">{item.icon}</span>
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-gray-500 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES / CLIENTS / INDUSTRIES ──── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1E6BD6]">What We Do</span>
            <h2 className="text-4xl font-bold mt-4">A complete career solution</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">

            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-gray-400 mb-6">
                Services We Offer
              </h3>
              <div className="space-y-3">
                {services.map((item, i) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 bg-[#F7FAFF] hover:bg-[#EBF3FF] rounded-xl px-5 py-4 transition-colors duration-200 group cursor-default"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#1E6BD6]/10 text-[#1E6BD6] text-xs font-bold flex items-center justify-center shrink-0 group-hover:bg-[#1E6BD6] group-hover:text-white transition-colors duration-200">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Clients */}
            <div>
              <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-gray-400 mb-6">
                Who We Work With
              </h3>
              <div className="space-y-3">
                {clients.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 bg-[#F7FAFF] hover:bg-[#EBF3FF] rounded-xl px-5 py-4 transition-colors duration-200"
                  >
                    <span className="text-[#1E6BD6] text-lg shrink-0">→</span>
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Industries */}
            <div>
              <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-gray-400 mb-6">
                Industries We Serve
              </h3>
              <div className="space-y-3">
                {industries.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 bg-[#F7FAFF] hover:bg-[#EBF3FF] rounded-xl px-5 py-4 transition-colors duration-200"
                  >
                    <span className="text-[#1E6BD6] text-lg shrink-0">→</span>
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PARTNERSHIP ──────────────────────── */}
      <section className="py-24 bg-[#0B1F3A]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#5BA4F5]">Partnership</span>
          <h2 className="text-4xl font-bold text-white mt-4">Trusted partnerships</h2>
          <p className="text-gray-400 mt-6 text-lg leading-relaxed max-w-2xl mx-auto">
            We've partnered with experienced career coaches and industry professionals to provide
            expanded support beyond resumes and LinkedIn profiles.
          </p>
          <div className="mt-10 inline-flex items-center gap-3 bg-white/5 border border-white/15 px-10 py-6 rounded-2xl">
            <div className="w-2 h-2 rounded-full bg-[#5BA4F5]" />
            <span className="text-white font-bold text-2xl tracking-tight">Next Big Job</span>
          </div>
        </div>
      </section>

      {/* ── CLIENT COMPANIES ─────────────────── */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-10">
            Where our clients have landed
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {["Amazon", "Google", "Deloitte", "Cisco", "Capital One", "Johnson & Johnson"].map((company) => (
              <div
                key={company}
                className="bg-gray-50 hover:bg-[#EBF3FF] border border-gray-200 text-gray-500 hover:text-[#1E6BD6] font-semibold text-sm rounded-xl px-7 py-4 transition-all duration-200"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER ──────────────────────────── */}
      <section className="py-28 bg-[#F7FAFF]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#1E6BD6]/10 to-transparent -z-10" />
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&q=80"
              alt="Haley Stock, Founder"
              className="rounded-3xl w-full object-cover aspect-[4/3] shadow-xl"
            />
          </div>

          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1E6BD6]">Meet the Founder</span>
            <h2 className="text-4xl font-bold mt-4">Haley Stock</h2>
            <p className="text-[#1E6BD6] font-semibold mt-1">CPRW, CVCS — Founder &amp; Lead Career Strategist</p>

            <div className="mt-8 space-y-5 text-gray-600 leading-relaxed">
              <p>
                Haley founded Apex Recruiters with a mission to help professionals present their
                value with confidence. Having completed thousands of resumes for clients around
                the world, she understands exactly what employers look for.
              </p>
              <p>
                Her work has helped professionals secure opportunities with leading organizations
                across multiple industries, from entry-level candidates to C-suite executives.
              </p>
            </div>

            <div className="flex gap-8 mt-10 pt-8 border-t border-gray-200">
              {[["4,000+", "Resumes Written"], ["Global", "Client Reach"], ["10+", "Years Experience"]].map(
                ([num, label]) => (
                  <div key={label}>
                    <p className="text-2xl font-bold text-[#0B1F3A]">{num}</p>
                    <p className="text-xs text-gray-500 mt-1">{label}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────── */}
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
            Ready to take the
            <br />next step?
          </h2>
          <p className="text-blue-200 text-lg mt-6 max-w-xl mx-auto">
            Let Apex Recruiters help you create a professional brand that gets noticed
            by the right people.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link
              to="/packages"
              className="bg-white text-[#1E6BD6] px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 shadow-lg"
            >
              View Packages →
            </Link>
            <Link
              to="/contact"
              className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}