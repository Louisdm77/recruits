import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-slate-50">

      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Find Your Next Career Opportunity
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              Apex Recruiters connects professionals
              with world-class employers.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                to="/jobs"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg"
              >
                Browse Jobs
              </Link>

              <Link
                to="/contact"
                className="border px-8 py-4 rounded-lg"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt=""
            className="rounded-2xl shadow-lg"
          />

        </div>

      </div>

    </section>
  );
}