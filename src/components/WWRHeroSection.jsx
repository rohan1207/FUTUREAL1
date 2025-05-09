import React, { useRef, useState } from 'react';
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useInView } from 'framer-motion';

export default function WWRHeroSection({ onLoad }) {
  const contentRef = useRef(null);
  const dropdownRef = useRef(null);
  const isInView = useInView(contentRef, { once: true });

  const [open, setOpen] = useState(false);

  // Dropdown handlers
  const handleMouseEnter = () => {
    if (window.innerWidth > 768) setOpen(true); // only on desktop
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) setOpen(false);
  };

  const handleButtonClick = () => {
    if (window.innerWidth <= 768) setOpen(prev => !prev); // toggle on mobile
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ animation: 'fadeIn 1s ease-in-out' }}
        onLoadedData={() => onLoad?.()}
      >
        <source src="/bgv.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90"></div>

      {/* Hero Content */}
      <div className="relative z-10 px-4 md:px-10 text-white max-w-5xl w-full mx-auto">
        <motion.div
          ref={contentRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-24"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            <motion.span variants={itemVariants}>
            Who We Are<br />
              <span className="bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent">
               
Shaping the future of spaces

              </span>
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-white/90 max-w-3xl mb-8"
          >
          We are a multidisciplinary team of designers, engineers, and project managers dedicated to creating exceptional commercial environments. From high-impact industrial facilities to human-centric healthcare and education spaces, our projects span across sectors and are unified by our commitment to design excellence and flawless execution.

          </motion.p>

         
        </motion.div>
      </div>
    </div>
  );
}
