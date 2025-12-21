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
    }, 3000); // Loader displays for 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
      <div className="App">
        {isLoading ? (
          <Loader /> // Show the Loader component if isLoading is true
        ) : (
          <div className="min-h-screen bg-slate-900 overflow-hidden">
            <Navbar />
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