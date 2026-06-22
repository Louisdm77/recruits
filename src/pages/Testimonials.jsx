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
      text: "Excellent service from start to finish. The resume and LinkedIn optimization helped strengthen my executive brand.",
    },
    {
      name: "Betty Green",
      role: "Hospitality Leader",
      text: "The resume they created was polished, impactful, and professional. I felt far more confident applying for leadership positions.",
    },
  ];

  const stats = [
    {
      number: "4000+",
      label: "Resumes Written",
    },
    {
      number: "95%",
      label: "Client Satisfaction",
    },
    {
      number: "500+",
      label: "Interview Success Stories",
    },
    {
      number: "20+",
      label: "Industries Served",
    },
  ];

  return (
    <div className="bg-white">

      {/* HERO */}

      <section className="bg-[#0F172A] py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <span className="text-yellow-400 uppercase tracking-widest font-semibold">
            Success Stories
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold text-white mt-6">
            What Our Clients Say
          </h1>

          <p className="text-slate-300 text-lg mt-8 max-w-3xl mx-auto">
            Thousands of professionals have trusted Apex Recruiters
            to strengthen their personal brand, secure interviews,
            and advance their careers.
          </p>

        </div>
      </section>

      {/* STATS */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white shadow-xl rounded-2xl p-8 text-center border-t-4 border-yellow-400"
              >
                <h2 className="text-5xl font-bold text-[#0F172A]">
                  {stat.number}
                </h2>

                <p className="text-gray-600 mt-4">
                  {stat.label}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}

      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#0F172A]">
            Client Testimonials
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="text-yellow-400 text-2xl mb-4">
                  ★★★★★
                </div>

                <p className="text-gray-700 leading-relaxed">
                  "{item.text}"
                </p>

                <div className="mt-8">
                  <h3 className="font-bold text-lg">
                    {item.name}
                  </h3>

                  <p className="text-gray-500">
                    {item.role}
                  </p>
                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* SUCCESS SECTION */}

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-[#0F172A] rounded-3xl p-12 text-center">

            <h2 className="text-4xl font-bold text-white">
              Helping Professionals Land Opportunities
            </h2>

            <p className="text-slate-300 mt-6 text-lg max-w-3xl mx-auto">
              From recent graduates to senior executives,
              we help professionals present their value,
              stand out from the competition, and secure
              opportunities with leading organizations.
            </p>

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="bg-[#0F172A] py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold text-white">
            Ready To Become Our Next Success Story?
          </h2>

          <p className="text-slate-300 text-lg mt-6">
            Let Apex Recruiters help you create a professional
            brand that attracts employers and opens doors.
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