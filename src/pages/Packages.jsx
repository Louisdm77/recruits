import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Packages() {
  const packages = [
    {
      title: "Resume Only",
      subtitle: "The Basics",
      price: "199",
      features: [
        "Professional Resume",
        "2 Revisions",
        "ATS Optimization",
        "3-4 Day Delivery",
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
        "3-4 Day Delivery",
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
        "3-4 Day Delivery",
      ],
    },
  ];

  const returningPackages = [
    {
      title: "Resume Refresh",
      price: "99",
      description: "Resume Update Based on New Goals",
    },
    {
      title: "Cover Letter",
      price: "74",
      description: "Cover Letter Add-On or Update",
    },
    {
      title: "LinkedIn Update",
      price: "124",
      description: "Headline, About, Experience, Skills",
    },
  ];

  return (
    <div className="bg-white">

      {/* HERO */}

      <section className="bg-[#0F172A] py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <span className="text-yellow-400 uppercase tracking-widest font-semibold">
                Professional Career Services
              </span>

              <h1 className="text-5xl lg:text-6xl font-bold text-white mt-6">
                From Overlooked To Interviewed
              </h1>

              <p className="text-slate-300 text-lg mt-8 leading-relaxed">
                Get more interviews with professionally written
                resumes, cover letters, and LinkedIn profiles
                designed to impress recruiters and pass ATS systems.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">

                <a
                  href="#packages"
                  className="bg-yellow-400 text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-300 transition"
                >
                  See Packages
                </a>

                <Link
                  to="/contact"
                  className="border border-yellow-400 text-yellow-400 px-8 py-4 rounded-xl hover:bg-yellow-400 hover:text-slate-900 transition"
                >
                  Contact Us
                </Link>

              </div>

            </div>

            <div>

              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="Career Growth"
                className="rounded-3xl shadow-2xl w-full"
              />

            </div>

          </div>

        </div>
      </section>

      {/* 3 STEPS */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#0F172A]">
            Three Easy Steps To Get Started
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="bg-white shadow-xl rounded-2xl p-8 border-t-4 border-yellow-400">
              <div className="text-5xl font-bold text-yellow-400">01</div>

              <h3 className="text-2xl font-bold mt-6">
                Purchase Package
              </h3>

              <p className="text-gray-600 mt-4">
                Select the experience level and package
                that best fits your goals.
              </p>
            </div>

            <div className="bg-white shadow-xl rounded-2xl p-8 border-t-4 border-yellow-400">
              <div className="text-5xl font-bold text-yellow-400">02</div>

              <h3 className="text-2xl font-bold mt-6">
                Submit Questionnaire
              </h3>

              <p className="text-gray-600 mt-4">
                Share your background, achievements,
                and career objectives.
              </p>
            </div>

            <div className="bg-white shadow-xl rounded-2xl p-8 border-t-4 border-yellow-400">
              <div className="text-5xl font-bold text-yellow-400">03</div>

              <h3 className="text-2xl font-bold mt-6">
                Writing Begins
              </h3>

              <p className="text-gray-600 mt-4">
                Our professional writers begin crafting
                your personalized documents.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* INFORMATION */}

      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="border-l-4 border-yellow-400 pl-8">

            <h2 className="text-3xl font-bold text-[#0F172A]">
              Purchasing & Communication Information
            </h2>

            <p className="mt-6 text-gray-700 leading-relaxed">
              All Apex Recruiters services are purchased
              directly through our website using secure
              payment processing. Once your order is placed,
              our team will contact you with the next steps.
            </p>

          </div>

        </div>
      </section>

      {/* EXPERIENCE LEVEL */}

      <section id="packages" className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#0F172A]">
            Select Your Experience Level
          </h2>

          <p className="text-center text-gray-600 mt-6 max-w-3xl mx-auto">
            Choose the package that best aligns with your
            career stage and professional goals.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <button className="bg-yellow-400 px-6 py-3 rounded-xl font-semibold">
              Student & Entry-Level
            </button>

            <button className="bg-slate-200 px-6 py-3 rounded-xl font-semibold">
              Mid-Career & Management
            </button>

            <button className="bg-slate-200 px-6 py-3 rounded-xl font-semibold">
              Director & Executive
            </button>

          </div>

          {/* MAIN PACKAGES */}

          <div className="grid lg:grid-cols-3 gap-8 mt-16">

            {packages.map((pkg) => (
              <motion.div
                whileHover={{ y: -10 }}
                key={pkg.title}
                className={`rounded-3xl overflow-hidden shadow-2xl ${pkg.popular
                    ? "bg-[#0F172A] text-white"
                    : "bg-white"
                  }`}
              >

                {pkg.popular && (
                  <div className="bg-yellow-400 text-slate-900 text-center py-3 font-bold">
                    MOST POPULAR
                  </div>
                )}

                <div className="p-10">

                  <p className="text-yellow-500 font-semibold">
                    {pkg.subtitle}
                  </p>

                  <h3 className="text-3xl font-bold mt-4">
                    {pkg.title}
                  </h3>

                  <div className="mt-8 flex items-end">

                    <span className="text-5xl font-bold">
                      ${pkg.price}
                    </span>

                    <span className="ml-2 text-lg">
                      .99
                    </span>

                  </div>

                  <ul className="space-y-4 mt-10">

                    {pkg.features.map((feature) => (
                      <li key={feature}>
                        ✓ {feature}
                      </li>
                    ))}

                  </ul>

                  <button
                    className={`w-full mt-10 py-4 rounded-xl font-semibold ${pkg.popular
                        ? "bg-yellow-400 text-slate-900"
                        : "bg-[#0F172A] text-white"
                      }`}
                  >
                    Select Package
                  </button>

                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* RETURNING CLIENTS */}

      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#0F172A]">
            Returning Clients
          </h2>

          <p className="text-center text-gray-600 mt-6">
            Exclusive discounted services for existing clients.
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">

            {returningPackages.map((item) => (
              <div
                key={item.title}
                className="bg-white shadow-xl rounded-2xl p-8"
              >

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-4">
                  {item.description}
                </p>

                <div className="text-4xl font-bold text-[#0F172A] mt-8">
                  ${item.price}.99
                </div>

                <button className="w-full bg-yellow-400 text-slate-900 py-4 rounded-xl font-semibold mt-8">
                  Select Package
                </button>

              </div>
            ))}

          </div>

        </div>
      </section>
      {/* EXPEDITED SERVICE */}

      <section className="bg-[#0F172A] py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <span className="text-yellow-400 font-semibold uppercase tracking-widest">
            Priority Processing
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-6">
            Need It Done Sooner?
          </h2>

          <p className="text-slate-300 text-lg mt-6 max-w-3xl mx-auto">
            Upgrade to our expedited service at checkout and receive
            priority processing. Get your resume, cover letter, or
            LinkedIn profile delivered within 24 hours.
          </p>

          <div className="mt-10 inline-block bg-yellow-400 text-slate-900 px-8 py-4 rounded-xl font-bold">
            24-Hour Delivery Available
          </div>

        </div>
      </section>

      {/* PARTNERSHIP */}

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-[#0F172A]">
            Expanded Support Through Trusted Partnerships
          </h2>

          <p className="mt-8 text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Apex Recruiters partners with experienced career coaches and
            leadership advisors to provide support beyond resumes,
            cover letters, and LinkedIn profiles.
          </p>

          <p className="mt-6 text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Whether you're a recent graduate, changing industries,
            preparing for leadership, or pursuing executive positions,
            our trusted partners help you gain clarity, confidence,
            and direction.
          </p>

          <div className="mt-12 inline-flex items-center justify-center bg-yellow-400 text-slate-900 px-10 py-6 rounded-2xl font-bold text-2xl shadow-lg">
            Next Big Job
          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}

      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#0F172A]">
            What Our Clients Say
          </h2>

          <p className="text-center text-gray-600 mt-6">
            Real feedback from professionals we've helped.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {[
              {
                name: "Brian H.",
                role: "Finance Associate",
                text: "Apex Recruiters transformed my resume and highlighted my strengths in a way I couldn't have done myself.",
              },
              {
                name: "Rico B.",
                role: "Technology Executive",
                text: "The guidance and support throughout the process were invaluable. Highly recommended.",
              },
              {
                name: "Diana N.",
                role: "Senior HR Executive",
                text: "Professional, responsive, and incredibly skilled at identifying accomplishments and achievements.",
              },
              {
                name: "Shawn B.",
                role: "Marketing Director",
                text: "Working with Apex Recruiters felt like having a personal career strategist on my side.",
              },
              {
                name: "Nathan N.",
                role: "CEO",
                text: "Excellent communication and an outstanding final product that exceeded expectations.",
              },
              {
                name: "Betty G.",
                role: "Hospitality Leader",
                text: "The resume they created had impact and helped me feel confident during my job search.",
              },
            ].map((review) => (
              <div
                key={review.name}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >

                <div className="text-yellow-400 text-3xl mb-4">
                  ★★★★★
                </div>

                <p className="text-gray-700 leading-relaxed">
                  "{review.text}"
                </p>

                <div className="mt-6">
                  <h4 className="font-bold text-lg">
                    {review.name}
                  </h4>

                  <p className="text-gray-500">
                    {review.role}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="bg-[#0F172A] py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold text-white">
            Ready To Land More Interviews?
          </h2>

          <p className="text-slate-300 text-lg mt-6">
            Let Apex Recruiters help you create career documents
            that stand out and open doors.
          </p>

          <a
            href="#contact"
            className="inline-block mt-10 bg-yellow-400 text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-300 transition"
          >
            Get Started Today
          </a>

        </div>
      </section>

      {/* CONTACT */}

      <section id="contact" className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16">

            <div>

              <h2 className="text-4xl font-bold text-[#0F172A]">
                Contact Us
              </h2>

              <p className="mt-6 text-gray-700 text-lg">
                Have questions before getting started?
                We'd love to help.
              </p>

              <div className="mt-10 space-y-4">

                <p className="font-semibold">
                  📧 info@apexrecruiters.com
                </p>

                <p className="font-semibold">
                  📍 Global Career Services
                </p>

                <p className="font-semibold">
                  💼 LinkedIn Available
                </p>

              </div>

            </div>

            <form className="bg-white shadow-xl rounded-3xl p-8">

              <div className="mb-6">

                <label className="block mb-2 font-medium">
                  Name
                </label>

                <input
                  type="text"
                  className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />

              </div>

              <div className="mb-6">

                <label className="block mb-2 font-medium">
                  Email
                </label>

                <input
                  type="email"
                  className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />

              </div>

              <div className="mb-6">

                <label className="block mb-2 font-medium">
                  Message
                </label>

                <textarea
                  rows="5"
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