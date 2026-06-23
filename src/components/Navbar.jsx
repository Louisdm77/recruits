import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-white shadow sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                <Link
                    to="/"
                    className="text-2xl font-bold text-blue-700"
                >
                    Apex Recruiters
                </Link>

                <div className="hidden md:flex gap-8">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/packages">Packages</Link>
                    <Link to="/testimonials">Testimonials</Link>
                    {/* <Link to="/blog">Our Blog</Link> */}
                    <Link to="/faq">FAQ</Link>
                </div>

                <button
                    className="md:hidden"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {open && (
                <div className="md:hidden bg-white px-6 pb-6 flex flex-col gap-4">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/packages">Packages</Link>
                    <Link to="/testimonials">Testimonials</Link>
                    {/* <Link to="/blog">Our Blog</Link> */}
                    <Link to="/faq">FAQ</Link>
                </div>
            )}
        </nav>
    );
}