import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Packages from "./pages/Packages";
import Testimonials from "./pages/Testimonials";
// import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ"
import Payment from "./pages/payment";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/testimonials" element={<Testimonials />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/faq" element={<FAQ />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;