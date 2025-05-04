import React, { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
}   from "framer-motion";
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

  // Enhanced smooth transforms for scroll animations with increased sliding
  const designX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5],
    ["-150%", "-75%", "0%"]
  );
  const excellenceX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5],
    ["150%", "75%", "0%"]
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
      {/* Black Screen Overlay */}
      <AnimatePresence>
        {isInView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-black z-40 pointer-events-none"
          />
        )}
      </AnimatePresence>

      <div
        ref={sectionRef}
        className="relative  h-[1060px] min-h-screen overflow-hidden bg-[#030014]"
      >
        {/* Video Background */}
        <div className="absolute inset-0">
        <div className="w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute w-full h-full  z-50"
            style={{ filter: "brightness(0.7) contrast(1.2)" }}
          >
            <source src="/fluidbg.mp4" type="video/mp4" />
          </video>
          </div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[black]/30 to-[black]/30 mix-blend-overlay" />
        </div>

        {/* Content Container */}
        <div className="relative z-50 container mx-auto px-4 h-screen flex flex-col justify-center items-center">
          {/* Design Excellence Text */}
          <div className="flex flex-col items-center space-y-6 mt-[575px]">
            <motion.h1
              style={{ x: designX }}
              initial={{ x: "-150%" }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-extralight text-white/90 tracking-wider text-center"
            >
              Beyond Construction
            </motion.h1>
            <motion.h1
              style={{ x: excellenceX }}
              initial={{ x: "150%" }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-extralight text-white/90 tracking-wider text-center"
            >
              Into Experience
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            style={{ opacity, scale }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-[350px] text-lg sm:text-xl md:text-2xl text-gray-300/90 text-center max-w-2xl mx-auto leading-relaxed px-4"
          >
            Meaningful change starts with how we build. We're here to lead the
            way.- You can make meaningful change through design.Let us show you how
          </motion.p>

            {/* Glass effect Read More button */}
         
                    <Link 
                      to="/design-build" 
                      className="relative px-6 py-2.5 group"
                    >
                      <div className="bg-gradient-to-r from-[#2A72F8] to-[#8F44EC] text-white px-5 py-2 rounded-full text-sm font-medium hover:from-[#1E5FD8] hover:to-[#7D3AD8] transition-all transform hover:scale-[1.02] active:scale-[0.98] w-[200px] h-[50px] flex items-center justify-center text-center mb-4">
                        What We Do
                      </div>
                    </Link>
                  

              
        </div>
        
      </div>
    </>
  );
};

export default DesignExcellence;
