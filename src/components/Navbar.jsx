import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* LOGO */}
          <Link
            to="/"
            className="text-2xl font-extrabold bg-gradient-to-r from-blue-700 to-yellow-500 bg-clip-text text-transparent"
          >
            Apex Careers
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8 font-medium">

            <Link
              to="/"
              className="hover:text-blue-700 transition"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="hover:text-blue-700 transition"
            >
              About
            </Link>

            <Link
              to="/packages"
              className="hover:text-blue-700 transition"
            >
              Packages
            </Link>

            <Link
              to="/testimonials"
              className="hover:text-blue-700 transition"
            >
              Testimonials
            </Link>

            <Link
              to="/faq"
              className="hover:text-blue-700 transition"
            >
              FAQ
            </Link>

            <Link
              to="/packages"
              className="bg-yellow-400 hover:bg-yellow-300 text-slate-900 px-5 py-2 rounded-xl font-semibold transition"
            >
              Get Started
            </Link>

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-2xl text-slate-800"
          >
            <FaBars />
          </button>

        </div>
      </nav>

      {/* OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeMenu}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.35,
              ease: "easeInOut",
            }}
            className="fixed top-0 right-0 h-screen w-72 bg-gradient-to-b from-[#0F172A] via-[#172554] to-[#1E293B] shadow-2xl z-[60] md:hidden"
          >

            {/* HEADER */}
            <div className="flex justify-between items-center p-6 border-b border-slate-700">

              <h2 className="font-bold text-xl text-yellow-400">
                Apex Recruiters
              </h2>

              <button
                onClick={closeMenu}
                className="text-white text-2xl hover:text-yellow-400 transition"
              >
                <FaTimes />
              </button>

            </div>

            {/* LINKS */}
            <div className="flex flex-col p-6 gap-3">

              <Link
                to="/"
                onClick={closeMenu}
                className="text-white hover:text-yellow-400 hover:bg-white/10 px-4 py-3 rounded-xl transition-all duration-300"
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={closeMenu}
                className="text-white hover:text-yellow-400 hover:bg-white/10 px-4 py-3 rounded-xl transition-all duration-300"
              >
                About
              </Link>

              <Link
                to="/packages"
                onClick={closeMenu}
                className="text-white hover:text-yellow-400 hover:bg-white/10 px-4 py-3 rounded-xl transition-all duration-300"
              >
                Packages
              </Link>

              <Link
                to="/testimonials"
                onClick={closeMenu}
                className="text-white hover:text-yellow-400 hover:bg-white/10 px-4 py-3 rounded-xl transition-all duration-300"
              >
                Testimonials
              </Link>

              <Link
                to="/faq"
                onClick={closeMenu}
                className="text-white hover:text-yellow-400 hover:bg-white/10 px-4 py-3 rounded-xl transition-all duration-300"
              >
                FAQ
              </Link>

            </div>

            {/* CTA */}
            <div className="absolute bottom-8 left-6 right-6">

              <Link
                to="/packages"
                onClick={closeMenu}
                className="block text-center bg-yellow-400 text-slate-900 font-semibold py-3 rounded-xl hover:bg-yellow-300 transition"
              >
                Get Started
              </Link>

            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}