import React, { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { Link } from "react-router-dom";

const DesignExcellence = ({ onLoad }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    margin: "-20% 0px -20% 0px",
    once: false,
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const designX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5],
    ["-30%", "-25%", "0%"] // Changed from -150% to be less extreme
  );
  const excellenceX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5],
    ["30%", "25%", "0%"] // Changed from 150% to be less extreme
  );
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 0.5, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.5], [0.8, 0.9, 1]);

  useEffect(() => {
    if (onLoad) {
      onLoad();
    }
  }, [onLoad]);

  return (
    <>
      <AnimatePresence>
        {isInView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            className="fixed inset-0 bg-black z-40 pointer-events-none"
          />
        )}
      </AnimatePresence>

      <div
        ref={sectionRef}
        className="relative h-[100vh] overflow-hidden bg-[#030014]"
      >
        {/* Video Background with improved positioning */}
        <div className="absolute inset-0">
          <div className="w-full h-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute w-full h-full object-cover z-50"
              style={{
                filter: "brightness(0.65) contrast(1.2)",
                objectPosition: "center",
              }}
            >
              <source src="/revolvebg.mp4" type="video/mp4" />
            </video>
          </div>
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/60 mix-blend-overlay" />
        </div>

        {/* Content Container with improved spacing */}
        <div className="relative z-50 container mx-auto px-4 h-screen flex flex-col justify-center items-center">
          {/* Main titles with enhanced typography */}
          <div className="flex flex-col items-center space-y-6 mb-10">
            <motion.h1
              style={{ x: designX }}
              initial={{ x: "-40%" }} // Changed from -150% to match transform
              className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl  text-white/90 tracking-wider text-center leading-tight"
            >
              Beyond Construction
            </motion.h1>
            <motion.h1
              style={{ x: excellenceX }}
              initial={{ x: "40%" }} // Changed from 150% to match transform
              className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl text-white/90 tracking-wider text-center leading-tight"
            >
              Into Experience
            </motion.h1>
          </div>

          {/* Description with increased spacing and enhanced readability */}
          <motion.p
            style={{ opacity, scale }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-12 text-lg sm:text-xl md:text-2xl text-gray-100/90 text-center max-w-2xl mx-auto leading-relaxed px-4 font-medium mb-16"
          >
          Meaningful change starts with how we build. We're here to lead the way.
          
          </motion.p>

          {/* Enhanced CTA button */}
          <Link to="/design-build" className="relative px-6 py-2.5 group">
            <div className="bg-gradient-to-r from-[#2A72F8] to-[#8F44EC] text-white px-8 py-3 rounded-full text-lg font-medium hover:from-[#1E5FD8] hover:to-[#7D3AD8] transition-all transform hover:scale-[1.02] active:scale-[0.98] min-w-[200px] h-[54px] flex items-center justify-center text-center shadow-lg hover:shadow-xl">
              What We Do
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DesignExcellence;
