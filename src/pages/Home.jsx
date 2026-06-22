import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Home() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, "YOUR_PUBLIC_KEY")
      .then(
        () => { setStatus("Message sent successfully!"); form.current.reset(); },
        () => { setStatus("Failed to send message.") }
      );
  };

  const reasons = [
    {
      icon: "✦",
      title: "Personalized Service",
      text: "Every resume is uniquely crafted to match your career goals and achievements.",
    },
    {
      icon: "◈",
      title: "Certified Expertise",
      text: "Professional resume writers with experience across multiple industries.",
    },
    {
      icon: "◎",
      title: "Transparent Process",
      text: "Clear communication, revisions, and collaboration every step of the way.",
    },
    {
      icon: "✺",
      title: "Proven Results",
      text: "Helping professionals secure interviews and land better opportunities.",
    },
  ];

  const services = [
    "Professional Resume Writing",
    "Cover Letter Writing",
    "LinkedIn Profile Development",
    "Career Transition Resumes",
    "Personal Biographies",
    "Company LinkedIn Profiles",
    "Job Search Support",
  ];

  const industries = [
    "Healthcare & Nursing",
    "Information Technology",
    "Primary & Higher Education",
    "Business, Finance & Accounting",
    "Human Resources",
    "Sales & Marketing",
    "Engineering & Manufacturing",
  ];

  return (
    <div className="font-sans bg-white text-gray-900">

      {/* ── HERO ─────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0B1F3A] min-h-screen flex items-center">
        {/* subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* accent blob */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#1E6BD6] opacity-10 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 text-[#5BA4F5] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              <span className="w-6 h-px bg-[#5BA4F5]" />
              Certified Resume &amp; Career Services
            </span>

            <h1 className="text-5xl lg:text-[3.75rem] font-bold text-white leading-[1.1] tracking-tight">
              Resumes That
              <br />
              <span className="text-[#5BA4F5]">Open Doors.</span>
            </h1>

            <p className="text-gray-400 text-lg mt-7 leading-relaxed max-w-lg">
              Strategy-driven career support that helps you stand out, get noticed,
              and land the interviews you deserve.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                to="/packages"
                className="bg-[#1E6BD6] hover:bg-[#1859b8] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg shadow-blue-900/30"
              >
                View Packages →
              </Link>
              <Link
                to="/about"
                className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg transition-all duration-200"
              >
                Learn More
              </Link>
            </div>

            {/* social proof bar */}
            <div className="flex items-center gap-8 mt-14 pt-8 border-t border-white/10">
              {[["4,000+", "Resumes Written"], ["98%", "Client Satisfaction"], ["10+", "Years Experience"]].map(
                ([num, label]) => (
                  <div key={label}>
                    <p className="text-2xl font-bold text-white">{num}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{label}</p>
                  </div>
                )
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#1E6BD6]/20 to-transparent" />
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=80"
              alt="Career Support"
              className="rounded-3xl w-full object-cover aspect-[4/3] border border-white/10"
            />
            {/* floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl px-5 py-4 shadow-2xl">
              <p className="text-xs text-gray-500 font-medium">Interview Rate</p>
              <p className="text-2xl font-bold text-[#1E6BD6] mt-0.5">+85%</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1fr_1.4fr] gap-16 items-center">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1E6BD6]">About Us</span>
            <h2 className="text-4xl font-bold mt-4 leading-tight">
              Your story deserves
              <br />to be told right.
            </h2>
          </div>
          <div>
            <p className="text-gray-600 text-lg leading-relaxed">
              We help professionals tell their stories in ways that make hiring managers take notice.
              This isn't one-size-fits-all — it's strategy-driven support that meets you where
              you are and takes you where you want to go.
            </p>
            <div className="mt-8 p-6 bg-[#EBF3FF] rounded-2xl border-l-4 border-[#1E6BD6]">
              <p className="text-[#0B1F3A] font-medium leading-relaxed">
                "At Apex Recruiters, our mission is simple: equip job seekers with tools that get results."
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
            <h2 className="text-4xl font-bold mt-4">What sets us apart</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((item, i) => (
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

      {/* ── SERVICES & INDUSTRIES ────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">

            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1E6BD6]">What We Do</span>
              <h2 className="text-3xl font-bold mt-4 mb-10">Services we offer</h2>
              <div className="space-y-3">
                {services.map((service, i) => (
                  <div
                    key={service}
                    className="flex items-center gap-4 bg-[#F7FAFF] hover:bg-[#EBF3FF] rounded-xl px-6 py-4 transition-colors duration-200 group cursor-default"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#1E6BD6]/10 text-[#1E6BD6] text-xs font-bold flex items-center justify-center shrink-0 group-hover:bg-[#1E6BD6] group-hover:text-white transition-colors duration-200">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-gray-700 font-medium text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1E6BD6]">Who We Serve</span>
              <h2 className="text-3xl font-bold mt-4 mb-10">Industries we cover</h2>
              <div className="space-y-3">
                {industries.map((industry) => (
                  <div
                    key={industry}
                    className="flex items-center gap-4 bg-[#F7FAFF] hover:bg-[#EBF3FF] rounded-xl px-6 py-4 transition-colors duration-200"
                  >
                    <span className="text-[#1E6BD6] text-lg">→</span>
                    <span className="text-gray-700 font-medium text-sm">{industry}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PARTNERSHIP ──────────────────────── */}
      <section className="py-28 bg-[#0B1F3A]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
              alt="Career Coaching"
              className="rounded-3xl w-full object-cover aspect-[4/3] border border-white/10"
            />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
          </div>

          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#5BA4F5]">Partnership</span>
            <h2 className="text-4xl font-bold text-white mt-4 leading-tight">
              Expanded support through trusted partners
            </h2>
            <p className="mt-7 text-gray-400 leading-relaxed">
              We've partnered with <span className="text-white font-semibold">Next Big Job</span> to expand
              support beyond resumes — connecting you with seasoned executive coaches and career leaders.
            </p>
            <p className="mt-5 text-gray-400 leading-relaxed">
              Whether you're a recent graduate, making a career pivot, or preparing for leadership,
              you'll receive guidance built around your goals.
            </p>
            <div className="mt-10 inline-flex items-center gap-3 bg-white/5 border border-white/15 px-8 py-5 rounded-2xl">
              <div className="w-2 h-2 rounded-full bg-[#5BA4F5]" />
              <span className="text-white font-bold text-xl tracking-tight">Next Big Job</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLIENT LOGOS ─────────────────────── */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-10">
            Where our clients have landed
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {["Amazon", "Google", "Deloitte", "Cisco", "Delta", "Capital One"].map((company) => (
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
            <p className="text-[#1E6BD6] font-semibold mt-1">CPRW, CVCS — Certified Resume Writer &amp; Veteran Career Strategist</p>

            <div className="mt-8 space-y-5 text-gray-600 leading-relaxed">
              <p>
                Haley is dedicated to helping professionals tell their stories and secure meaningful
                opportunities. What started as a side project evolved into a mission focused on
                helping job seekers navigate career changes with confidence and clarity.
              </p>
              <p>
                She has completed more than <span className="font-bold text-gray-900">4,000 resumes</span> for
                local, national, and international clients while maintaining an exceptional track record
                of client success.
              </p>
            </div>

            <div className="flex gap-6 mt-10">
              {[["4,000+", "Resumes"], ["98%", "Satisfaction"], ["Global", "Reach"]].map(([num, label]) => (
                <div key={label} className="text-center">
                  <p className="text-2xl font-bold text-[#0B1F3A]">{num}</p>
                  <p className="text-xs text-gray-500 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PURCHASING INFO ───────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#EBF3FF] rounded-3xl p-10 flex flex-col md:flex-row gap-8 items-start">
            <div className="w-12 h-12 rounded-xl bg-[#1E6BD6] text-white flex items-center justify-center text-xl shrink-0">
              🔒
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0B1F3A]">Secure Purchasing &amp; Communication</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                All Apex Recruiters services are offered directly through our website using secure
                payment methods. After purchase, our support team will reach out to ensure a smooth,
                professional experience from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────── */}
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
            Applying but not
            <br />getting interviews?
          </h2>
          <p className="text-blue-200 text-lg mt-6 max-w-xl mx-auto">
            Let's fix that. We create resumes that get noticed and help professionals secure
            more interviews — faster.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link
              to="/packages"
              className="bg-white text-[#1E6BD6] px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 shadow-lg"
            >
              Choose My Package →
            </Link>
            <Link
              to="/faq"
              className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              See FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1E6BD6]">Get In Touch</span>
            <h2 className="text-4xl font-bold mt-4">Have questions?</h2>
            <p className="text-gray-500 mt-3">We're happy to help before you get started.</p>
            <a
              href="mailto:info@apexrecruiters.com"
              className="inline-block mt-4 text-[#1E6BD6] font-medium hover:underline"
            >
              info@apexrecruiters.com
            </a>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="mt-12 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#1E6BD6] outline-none rounded-xl px-5 py-4 text-sm transition-colors duration-200 placeholder:text-gray-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                required
                className="w-full border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#1E6BD6] outline-none rounded-xl px-5 py-4 text-sm transition-colors duration-200 placeholder:text-gray-400"
              />
            </div>
            <textarea
              rows="6"
              name="message"
              placeholder="How can we help you?"
              required
              className="w-full border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#1E6BD6] outline-none rounded-xl px-5 py-4 text-sm transition-colors duration-200 placeholder:text-gray-400 resize-none"
            />
            <button
              type="submit"
              className="w-full bg-[#0B1F3A] hover:bg-[#1E6BD6] text-white py-4 rounded-xl font-semibold transition-colors duration-300 text-sm tracking-wide"
            >
              Send Message →
            </button>
          </form>

          {status && (
            <div className={`mt-6 text-center py-4 rounded-xl text-sm font-medium ${status.includes("success") ? "bg-green-50 text-green-700" : "bg-red-50 text-red-600"}`}>
              {status}
            </div>
          )}
        </div>
      </section>

    </div>
  );
}