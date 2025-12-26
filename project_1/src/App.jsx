import Loader from "./components/Loader"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching or content loading time with a setTimeout
    const timer = setTimeout(() => {
      setIsLoading(false); // Once content is "loaded", set isLoading to false
    }, 2500); // Loader displays for 2.5 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
      <div>
        {isLoading ? (
          <Loader /> // Show the Loader component if isLoading is true
        ) : ( // Else, display main content
          <div className="min-h-screen bg-slate-900 overflow-hidden">
            <Navbar scrolled={scrolled} />
            <Hero />
            <Features />
            <Pricing />
            <Testimonials />
            <Footer />
          </div>
        )}
      </div>
  );
}

export default App