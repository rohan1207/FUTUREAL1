import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
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
    ["-50%", "-25%", "0%"]
  );
  const excellenceX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5],
    ["50%", "25%", "0%"]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 0.5, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.5], [0.8, 0.9, 1]);

  useEffect(() => {
    if (onLoad) {
      onLoad();
    }
  }, [onLoad]);

  return (
    <div
      ref={sectionRef}
      className="relative h-[100vh] overflow-hidden bg-[#e3e2e5] z-0"
    >
      {/* Video Background with overlay */}
      <div className="absolute inset-0">
        <div className="w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute w-full h-full object-cover z-10"
            style={{
              filter: "brightness(0.8) contrast(1.2)", // Darkened the video more
            }}
          >
            <source src="/nv.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 z-20" />
        </div>
      </div>

      {/* Content Container - Added pt-24 for navbar space */}
      <div className="relative z-30 container mx-auto px-4 h-screen flex flex-col justify-center items-center pt-24">
        {/* Main titles */}
        <div className="flex flex-col items-center space-y-6 mb-16">
          <motion.h1
            style={{ x: designX }}
            initial={{ x: "-50%" }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-7xl text-white tracking-wider text-center leading-tight font-bold"
          >
            Beyond Construction
          </motion.h1>
          <motion.h1
            style={{ x: excellenceX }}
            initial={{ x: "50%" }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-7xl text-white tracking-wider text-center leading-tight font-bold"
          >
            Into Experience
          </motion.h1>
        </div>

        {/* Description - Improved text contrast */}
        <motion.p
          style={{ opacity, scale }}
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-12 text-lg sm:text-xl md:text-2xl text-white text-center max-w-2xl mx-auto leading-relaxed px-4 font-medium mb-16"
        >
          Meaningful change starts with how we build. We're here to lead the
          way.
       
        </motion.p>

        {/* CTA button */}
        <Link to="/design-build" className="relative px-6 py-2.5 group">
          <div className="bg-gradient-to-r from-[#2A72F8] to-[#8F44EC] text-white px-8 py-3 rounded-full text-lg font-medium hover:from-[#1E5FD8] hover:to-[#7D3AD8] transition-all transform hover:scale-[1.02] active:scale-[0.98] min-w-[200px] h-[54px] flex items-center justify-center text-center shadow-lg hover:shadow-xl">
            What We Do
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DesignExcellence;
