import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Hero from "../components/Hero";
import OurProcess from "../components/OurProcess";
import DesignExcellence from "../components/DesignExcellence";
import WhyChooseUs from "../components/WhyChooseUs";
import Statistics from "../components/Statistics";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [timeoutOccurred, setTimeoutOccurred] = useState(false);
  const [componentLoaded, setComponentLoaded] = useState({
    hero: false,
    whyChooseUs: false,
    ourValues: false,
    statistics: false,
    ourProcess: false,
    designExcellence: false,
  });

  const { scrollYProgress } = useScroll();

  // Effect for checking loaded components
  useEffect(() => {
    const allLoaded = Object.values(componentLoaded).every((loaded) => loaded);
    if (allLoaded || timeoutOccurred) {
      setIsLoading(false);
    }
  }, [componentLoaded, timeoutOccurred]);

  // Effect for timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeoutOccurred(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleComponentLoad = (component) => {
    setComponentLoaded((prev) => ({
      ...prev,
      [component]: true,
    }));
  };

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          >
            <div
              className="w-12 h-12 rounded-full border-4 border-t-transparent animate-spin"
              style={{
                borderImage: "linear-gradient(to right, #2A72F8, #8F44EC) 1",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2A72F8] to-[#8F44EC] transform origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero Section */}
      <section className="relative">
        <Hero onLoad={() => handleComponentLoad("hero")} />
      </section>

      {/* Design Excellence Section with Diagonal Cut */}
      <section className="relative">
        <div className="absolute top-0 left-0 w-full h-32   z-10" />
        <div className="clip-diagonal-top">
          <DesignExcellence
            onLoad={() => handleComponentLoad("designExcellence")}
          />
        </div>
      </section>

      {/* Why Choose Us Section with Floating Elements */}
      <section className="relative overflow-visible">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(42,114,248,0.1),transparent_50%)]" />
        <WhyChooseUs onLoad={() => handleComponentLoad("whyChooseUs")} />

        {/* Floating Elements */}
        <motion.div
          className="absolute -left-20 top-1/4 w-40 h-40 bg-gradient-to-r from-[#2A72F8] to-[#8F44EC] rounded-full blur-3xl opacity-20"
          animate={{
            y: [0, 50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -right-20 bottom-1/4 w-40 h-40 bg-gradient-to-r from-[#8F44EC] to-[#2A72F8] rounded-full blur-3xl opacity-20"
          animate={{
            y: [0, -50, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </section>

      {/* Statistics Section with Parallax */}
      <section className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(143,68,236,0.1),transparent_70%)]" />
        <Statistics onLoad={() => handleComponentLoad("statistics")} />
      </section>

      {/* Our Process Section with Wave Divider */}
      <section className="relative">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-24"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              style={{ fill: "#000" }}
            ></path>
          </svg>
        </div>
        <div className="clip-diagonal-bottom">
          <OurProcess onLoad={() => handleComponentLoad("ourProcess")} />
        </div>
      </section>
    </div>
  );
}
