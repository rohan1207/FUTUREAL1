import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Target } from "lucide-react";
import { Link } from "react-router-dom";

export default function VisonandMission({ onLoad }) {
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/school3.jpg",
    "/school4.jpeg",
    "/school5.jpg",
    "/office1.jpg",
    "/office2.jpg",
    "/office5.jpg",
    "/office6.jpg",
    "/office7.jpg",
    "/hospital1.jpg",
    "/hospital2.jpg",
    "/hospital3.jpg",
    "/hospital4.jpg",
  ];

  const cards = [
    {
      icon: <Eye className="text-white" size={20} />,
      title: "Vision",
      description:
        "To reshape the future of Real Estate by delivering transformative turnkey solutions across Design & Build and General Contracting - blending innovation, precision, and empathy to craft exceptional spaces, enable thriving communities, and create lasting value for our clients and partners.",
    },
    {
      icon: <Target className="text-white" size={20} />,
      title: "Mission",
      description:
        "To deliver seamless, service-driven turnkey solutions across Design & Build, General Contracting and Real Estate Development - creating exceptional value, optimizing returns, and setting new benchmarks in quality, innovation, and client experience, while upholding the highest standards of integrity, sustainability, and industry excellence.",
    },
  ];

  // Preload images
  useEffect(() => {
    const preloadImages = () => {
      console.log("WhoAreWe: Starting to preload images");
      images.forEach((imagePath) => {
        const img = new Image();
        img.src = imagePath;
        img.onload = () => {
          console.log(`WhoAreWe: Image loaded - ${imagePath}`);
          setImagesLoaded((prev) => {
            const newCount = prev + 1;
            if (newCount === images.length) {
              console.log("WhoAreWe: All images loaded");
              onLoad?.();
            }
            return newCount;
          });
        };
        img.onerror = () => {
          console.log(`WhoAreWe: Image failed to load - ${imagePath}`);
          setImagesLoaded((prev) => {
            const newCount = prev + 1;
            if (newCount === images.length) {
              console.log("WhoAreWe: All images processed (including errors)");
              onLoad?.();
            }
            return newCount;
          });
        };
      });
    };
    preloadImages();
  }, [onLoad, images]);

  // Simple background image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative py-16 md:py-24 px-4 md:px-8 overflow-hidden min-h-screen flex items-center">
      {/* Background image carousel with smoother transitions */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
        <AnimatePresence mode="wait">
          {images.map(
            (image, index) =>
              currentImage === index && (
                <motion.div
                  key={image}
                  className="absolute inset-0 w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 2,
                    ease: [0.4, 0.0, 0.2, 1],
                    opacity: { duration: 1.5 },
                  }}
                >
                  <div
                    className="w-full h-full bg-cover bg-center transition-[filter] duration-1000"
                    style={{
                      backgroundImage: `url(${image})`,
                      filter: "brightness(0.15)", // Slightly lighter than before
                    }}
                  />
                </motion.div>
              )
          )}
        </AnimatePresence>
        {/* Lighter gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Cards */}
        <div className="space-y-24">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Content container */}
              <div className="relative">
                {/* Subtle accent line */}
                <div className="absolute -left-4 top-0 w-[2px] h-full bg-gradient-to-b from-[#2A72F8]/0 via-[#2A72F8] to-[#2A72F8]/0 group-hover:via-[#8F44EC] transition-colors duration-500" />

                <div className="pl-8">
                  {/* Icon */}
                  <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-12 h-12 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#2A72F8] to-[#8F44EC] opacity-20 blur-lg transform group-hover:opacity-30 transition-opacity duration-500" />
                      {React.cloneElement(card.icon, {
                        size: 28,
                        className: "text-white relative z-10",
                      })}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-4xl md:text-5xl font-light mb-8 text-white/90 tracking-wide">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl font-light tracking-wide">
                    {card.description}
                  </p>
                </div>

                {/* Minimal decorative element */}
                <div className="absolute -right-20 top-0 w-40 h-40 bg-gradient-to-br from-[#2A72F8]/5 to-[#8F44EC]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
