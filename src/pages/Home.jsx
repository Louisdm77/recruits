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
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        () => {
          setStatus("Failed to send message.");
        }
      );
  };

  const reasons = [
    {
      title: "Personalized Service",
      text: "Every resume is uniquely crafted to match your career goals and achievements.",
    },
    {
      title: "Certified Expertise",
      text: "Professional resume writers with experience across multiple industries.",
    },
    {
      title: "Transparent Process",
      text: "Clear communication, revisions, and collaboration every step of the way.",
    },
    {
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
    <>
      {/* HERO */}

      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-blue-600 uppercase tracking-widest font-semibold">
                Certified Resume Writing & Career Support Services
              </span>

              <h1 className="text-5xl lg:text-6xl font-bold mt-6 leading-tight">
                Professional Resume Writing
                That Gets Interviews
              </h1>

              <p className="text-gray-600 text-lg mt-8">
                We help professionals tell their stories in ways
                that make hiring managers take notice.
                Strategy-driven career support designed to help
                you stand out and secure your next opportunity.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">

                <Link
                  to="/packages"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700"
                >
                  Choose My Package
                </Link>

                <Link
                  to="/about"
                  className="border border-slate-300 px-8 py-4 rounded-lg hover:bg-slate-100"
                >
                  Learn More
                </Link>

              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="Career Support"
                className="rounded-3xl shadow-2xl w-full"
              />
            </motion.div>

          </div>

        </div>
      </section>

      {/* ABOUT */}

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold">
            About Apex Recruiters
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-relaxed">
            We help professionals tell their stories in ways
            that make hiring managers take notice.
            This isn’t one-size-fits-all.
            It’s strategy-driven support that meets you where you are
            and takes you where you want to go.
          </p>

        </div>
      </section>

      {/* MISSION */}

      <section className="bg-slate-100 py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold">
            Our Mission
          </h2>

          <p className="mt-8 text-gray-700 leading-relaxed text-lg">
            At Apex Recruiters, the mission is simple:
            equip job seekers with tools that get results.
            We specialize in delivering personalized resume writing
            services that go beyond formatting.
          </p>

          <p className="mt-6 text-gray-700 leading-relaxed text-lg">
            Whether you're entering the workforce,
            transitioning industries,
            or targeting executive leadership roles,
            we help you showcase your value,
            highlight achievements,
            and present your career story in a way
            that resonates with employers and ATS systems.
          </p>

        </div>
      </section>

      {/* WHY CHOOSE US */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Why Job Seekers Choose Apex Recruiters
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            {reasons.map((item) => (
              <motion.div
                whileHover={{ y: -10 }}
                key={item.title}
                className="bg-white shadow-lg rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600">
                  {item.text}
                </p>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* PURCHASING INFO */}

      <section className="bg-blue-50 py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold">
            Purchasing & Communication Information
          </h2>

          <p className="mt-8 text-lg text-gray-700 leading-relaxed">
            All Apex Recruiters services are offered
            directly through our website using secure payment methods.
            After purchase, communication will be handled
            through our support team to ensure a smooth,
            professional experience.
          </p>

        </div>
      </section>

      {/* SERVICES & INDUSTRIES */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12">

            <div>

              <h2 className="text-4xl font-bold mb-8">
                Services We Offer
              </h2>

              <div className="space-y-4">

                {services.map((service) => (
                  <div
                    key={service}
                    className="bg-white shadow rounded-xl p-5"
                  >
                    {service}
                  </div>
                ))}

              </div>

            </div>

            <div>

              <h2 className="text-4xl font-bold mb-8">
                Industries We Serve
              </h2>

              <div className="space-y-4">

                {industries.map((industry) => (
                  <div
                    key={industry}
                    className="bg-white shadow rounded-xl p-5"
                  >
                    {industry}
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>
            {/* PARTNERSHIP */}

      <section className="bg-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200"
                alt="Career Coaching"
                className="rounded-3xl shadow-xl w-full"
              />
            </div>

            <div>

              <h2 className="text-4xl font-bold">
                Expanded Support Through Trusted Partnerships
              </h2>

              <p className="mt-8 text-gray-700 leading-relaxed text-lg">
                We've partnered with Next Big Job to expand the support
                we offer beyond resumes, cover letters, and LinkedIn profiles.
              </p>

              <p className="mt-6 text-gray-700 leading-relaxed text-lg">
                Their coaches are seasoned executives and career leaders
                with experience helping professionals gain clarity,
                build confidence, and take action.
              </p>

              <p className="mt-6 text-gray-700 leading-relaxed text-lg">
                Whether you're a recent graduate, making a career pivot,
                or preparing for leadership opportunities,
                you'll receive guidance designed around your goals.
              </p>

              <div className="mt-10">
                <div className="inline-flex items-center justify-center bg-white px-8 py-6 rounded-2xl shadow-lg">
                  <span className="text-2xl font-bold text-blue-600">
                    Next Big Job
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CLIENT LOGOS */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Where Our Clients Have Worked
          </h2>

          <p className="text-center text-gray-600 mt-4">
            Professionals we've supported have gone on to work at
            leading companies worldwide.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16">

            {[
              "Amazon",
              "Google",
              "Deloitte",
              "Cisco",
              "Delta",
              "Capital One",
            ].map((company) => (
              <div
                key={company}
                className="bg-white border rounded-2xl p-8 shadow text-center font-bold text-gray-700"
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

            <div>
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200"
                alt="Founder"
                className="rounded-3xl shadow-xl w-full"
              />
            </div>

            <div>

              <h2 className="text-4xl font-bold">
                About The Founder
              </h2>

              <h3 className="text-2xl font-semibold mt-4 text-blue-600">
                Haley Stock, CPRW, CVCS
              </h3>

              <p className="mt-8 text-gray-700 leading-relaxed text-lg">
                Haley is a Certified Resume Writer and Veteran Career
                Strategist dedicated to helping professionals tell
                their stories and secure meaningful opportunities.
              </p>

              <p className="mt-6 text-gray-700 leading-relaxed text-lg">
                What started as a side project evolved into a mission
                focused on helping job seekers navigate career changes
                with confidence and clarity.
              </p>

              <p className="mt-6 text-gray-700 leading-relaxed text-lg">
                She has completed more than 4,000 resumes for local,
                national, and international clients while maintaining
                an exceptional track record of client success.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="bg-blue-600 py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-white text-5xl font-bold leading-tight">
            Constantly Applying But Not Getting Interviews?
          </h2>

          <p className="text-white text-lg mt-8">
            Let's fix that. We create resumes that get noticed
            and help professionals secure more interviews.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <Link
              to="/packages"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold"
            >
              Choose My Package
            </Link>

            <Link
              to="/faq"
              className="border border-white text-white px-8 py-4 rounded-lg"
            >
              Learn More
            </Link>

          </div>

        </div>
      </section>

      {/* CONTACT */}

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Contact Us
          </h2>

          <p className="text-center text-gray-600 mt-4">
            Have questions before getting started?
            Send us a message.
          </p>

          <div className="text-center mt-8">
            <p className="font-medium">
              info@apexrecruiters.com
            </p>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6 mt-12"
          >

            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full border rounded-xl p-4"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full border rounded-xl p-4"
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Message"
              required
              className="w-full border rounded-xl p-4"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold"
            >
              Submit
            </button>

          </form>

          {status && (
            <p className="text-center mt-6 font-medium">
              {status}
            </p>
          )}

        </div>
      </section>

    </>
  );
}