import { Link } from "react-router-dom";
import jobs from "../data/jobs";
import { motion } from "framer-motion";

export default function Jobs() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center">
          Current Openings
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {jobs.map((job) => (
            <motion.div
              key={job.id}
              whileHover={{ y: -10 }}
              className="bg-white shadow-lg rounded-xl p-8"
            >
              <h2 className="text-2xl font-bold">
                {job.title}
              </h2>

              <p className="mt-3 text-gray-600">
                📍 {job.location}
              </p>

              <p className="mt-2 text-gray-600">
                {job.type}
              </p>

              <Link
                to={`/jobs/${job.id}`}
                className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg"
              >
                View Details
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}