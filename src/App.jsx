import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Packages from "./pages/Packages";
import Testimonials from "./pages/Testimonials";
import FAQ from "./pages/FAQ";
import Payment from "./pages/payment";

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Navbar />

      <AnimatePresence mode="wait">

        <Routes
          location={location}
          key={location.pathname}
        >
          <Route path="/" element={<Home />} />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/packages"
            element={<Packages />}
          />

          <Route
            path="/testimonials"
            element={<Testimonials />}
          />

          <Route
            path="/faq"
            element={<FAQ />}
          />

          <Route
            path="/payment"
            element={<Payment />}
          />
        </Routes>

      </AnimatePresence>

      <Footer />
    </>
  );
}

export default App;