
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function About() {
  const reasons = [
    {
      title: "Personalized Service",
      text: "Every client receives customized career documents designed around their goals, experience, and professional story.",
    },
    {
      title: "Certified Expertise",
      text: "Our team follows modern ATS standards, recruiter expectations, and industry best practices to maximize results.",
    },
    {
      title: "Transparent Process",
      text: "Clear communication, straightforward timelines, and collaborative revisions ensure a smooth experience.",
    },
    {
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
    <div className="bg-white">

      {/* HERO */}

      <section className="bg-[#0F172A] py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-yellow-400 uppercase tracking-widest font-semibold">
                About Apex Recruiters
              </span>

              <h1 className="text-5xl lg:text-6xl font-bold text-white mt-6">
                Career Support Built Around Your Success
              </h1>

              <div className="w-24 h-1 bg-yellow-400 mt-8"></div>

              <p className="text-slate-300 text-lg mt-8 leading-relaxed">
                At Apex Recruiters, we help professionals tell their stories
                in ways that make hiring managers take notice.
              </p>

              <p className="text-slate-300 text-lg mt-6 leading-relaxed">
                Our approach is strategic, personalized, and designed to
                position you for opportunities that align with your goals.
              </p>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="Career Growth"
                className="rounded-3xl shadow-2xl w-full"
              />
            </motion.div>

          </div>

        </div>
      </section>

      {/* MISSION */}

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-[#0F172A]">
            Our Mission
          </h2>

          <div className="w-20 h-1 bg-yellow-400 mt-4"></div>

          <p className="mt-8 text-lg text-gray-700 leading-relaxed">
            Our mission is simple: equip job seekers with tools that
            generate real results.
          </p>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            We specialize in creating professional resumes,
            cover letters, LinkedIn profiles, and personal branding
            materials that help candidates stand out in today's
            competitive market.
          </p>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Whether you're entering the workforce, changing industries,
            pursuing leadership opportunities, or targeting executive
            positions, we provide career support tailored to your journey.
          </p>

        </div>
      </section>

      {/* WHY CHOOSE US */}

      <section className="bg-[#0F172A] py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-white">
            Why Professionals Choose Apex Recruiters
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            {reasons.map((item) => (
              <motion.div
                whileHover={{ y: -10 }}
                key={item.title}
                className="bg-slate-900 border border-yellow-400/20 rounded-2xl p-8"
              >
                <h3 className="text-yellow-400 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="text-slate-300 mt-4">
                  {item.text}
                </p>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* SERVICES */}

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-3 gap-10">

            <div>
              <h2 className="text-3xl font-bold text-[#0F172A] mb-8">
                Services We Offer
              </h2>

              <div className="space-y-4">
                {services.map((item) => (
                  <div
                    key={item}
                    className="bg-white border-l-4 border-yellow-400 shadow-lg rounded-xl p-5"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#0F172A] mb-8">
                Who We Work With
              </h2>

              <div className="space-y-4">
                {clients.map((item) => (
                  <div
                    key={item}
                    className="bg-white border-l-4 border-yellow-400 shadow-lg rounded-xl p-5"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#0F172A] mb-8">
                Industries We Serve
              </h2>

              <div className="space-y-4">
                {industries.map((item) => (
                  <div
                    key={item}
                    className="bg-white border-l-4 border-yellow-400 shadow-lg rounded-xl p-5"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* PARTNERSHIP */}

      <section className="bg-[#0F172A] py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-white">
            Trusted Partnerships
          </h2>

          <p className="text-slate-300 mt-8 text-lg max-w-4xl mx-auto">
            We've partnered with experienced career coaches and industry
            professionals to provide expanded support beyond resumes and
            LinkedIn profiles.
          </p>

          <div className="inline-block mt-10 bg-yellow-400 text-slate-900 px-10 py-5 rounded-2xl font-bold text-xl">
            Next Big Job
          </div>

        </div>
      </section>

      {/* CLIENT COMPANIES */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#0F172A]">
            Where Our Clients Have Worked
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16">

            {[
              "Amazon",
              "Google",
              "Deloitte",
              "Cisco",
              "Capital One",
              "Johnson & Johnson",
            ].map((company) => (
              <div
                key={company}
                className="bg-white border shadow-lg rounded-xl p-8 text-center font-bold"
              >
                {company}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* FOUNDER */}

      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              alt="Founder"
              className="rounded-3xl shadow-xl"
            />

            <div>

              <div className="w-20 h-1 bg-yellow-400 mb-6"></div>

              <h2 className="text-4xl font-bold text-[#0F172A]">
                Haley Stock, CPRW, CVCS
              </h2>

              <p className="text-yellow-500 font-semibold mt-3">
                Founder
              </p>

              <p className="mt-8 text-lg text-gray-700 leading-relaxed">
                Haley founded Apex Recruiters with a mission to help
                professionals present their value with confidence.
              </p>

              <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                Having completed thousands of resumes for clients around
                the world, she understands what employers look for and
                how candidates can effectively position themselves.
              </p>

              <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                Her work has helped professionals secure opportunities
                with leading organizations across multiple industries.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="bg-[#0F172A] py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold text-white">
            Ready To Take The Next Step?
          </h2>

          <p className="text-slate-300 mt-6 text-lg">
            Let Apex Recruiters help you create a professional brand
            that gets noticed.
          </p>

          <Link
            to="/packages"
            className="inline-block mt-10 bg-yellow-400 text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-300 transition"
          >
            View Packages
          </Link>

        </div>
      </section>

    </div>
  );
}
