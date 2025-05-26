import React, { useRef, useEffect, useState } from "react";
import { motion, useTransform, useScroll, useSpring, AnimatePresence } from "framer-motion";

export const Interior_Fit_Outs = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const cardContainerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useSpring(useTransform(scrollYProgress, [0, 1], [100, -100]), {
    stiffness: 100,
    damping: 30,
    mass: 0.5,
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );

  const titleX = useTransform(scrollYProgress, [0, 0.3], ["-100%", "0%"]);

  const textScale = useTransform(scrollYProgress, [0, 0.2], [0.9, 1]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  // Mobile card auto-sliding
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth < 768) {
        setCurrentCard((prev) => (prev === 1 ? 0 : 1));
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const cards = [
    {
      text: "Futureal's Interior Fit-out services are anchored in design excellence, technical expertise, and meticulous execution. We handle everything - from space planning and material selection to custom installations and finishing touches, ensuring each project reflects your unique vision and requirements.",
    },
    {
      text: "Our clients trust us for innovative design solutions, quality craftsmanship, and timely delivery. Whether working on corporate offices, retail spaces, or institutional facilities, we ensure your interiors are both aesthetically pleasing and functionally efficient, ready for immediate occupancy.",
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-black pt-24 z-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/wwd.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 min-h-[calc(100vh-6rem)] flex flex-col justify-center">
        {/* Title Section */}
        <motion.div
          className="text-center mb-16 relative"
          style={{ x: titleX, opacity }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-7xl font-light text-white mb-6 relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <span className="relative">
              <span className="relative z-10">INTERIOR FIT-OUTS</span>
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#2A72F8] to-[#8F44EC]"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </span>
          </motion.h2>

          <motion.p
            style={{ scale: textScale }}
            className="text-lg sm:text-xl md:text-2xl text-transparent bg-clip-text font-light tracking-wide text-white"
          >
            Tailored Interior Solutions for Functional and Aesthetic Excellence
          </motion.p>
        </motion.div>

        {/* Desktop Cards */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 md:gap-12 w-full max-w-6xl mx-auto">
          <motion.div
            className="backdrop-blur-md bg-black/40 rounded-2xl p-8 border border-white/10 relative group"
            whileHover={{ scale: 1.02, rotateY: 5 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#2A72F8]/20 to-[#8F44EC]/20"
              style={{
                opacity: 0,
                scale: 0.6,
                transition: { duration: 0.6 },
              }}
              whileHover={{
                opacity: 1,
                scale: 1,
              }}
            />
            <p className="text-gray-300 leading-relaxed text-lg relative z-10">
              {cards[0].text}
            </p>
          </motion.div>

          <motion.div
            className="backdrop-blur-md bg-black/40 rounded-2xl p-8 border border-white/10 relative group"
            whileHover={{ scale: 1.02, rotateY: -5 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-bl from-[#2A72F8]/20 to-[#8F44EC]/20"
              style={{
                opacity: 0,
                scale: 0.6,
                transition: { duration: 0.6 },
              }}
              whileHover={{
                opacity: 1,
                scale: 1,
              }}
            />
            <p className="text-gray-300 leading-relaxed text-lg relative z-10">
              {cards[1].text}
            </p>
          </motion.div>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden w-full max-w-md mx-auto overflow-hidden">
          <motion.div ref={cardContainerRef} className="relative h-[400px]">
            <AnimatePresence initial={false} mode="crossfade">
              <motion.div
                key={currentCard}
                className="absolute inset-0"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <motion.div
                  className="backdrop-blur-md bg-black/40 rounded-2xl p-6 border border-white/10 h-full flex items-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-gray-300 leading-relaxed text-base relative z-10">
                    {cards[currentCard].text}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {[0, 1].map((index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentCard === index ? "w-6 bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10"
        style={{ opacity }}
      />
    </motion.section>
  );
};
