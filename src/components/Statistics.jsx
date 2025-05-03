import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const stats = [
  {
    id: 1,
    startValue: 0,
    endValue: 30,
    suffix: "+",
    label: "Clients",
    duration: 2,
  },
  {
    id: 2,
    startValue: 0,
    endValue: 40,
    suffix: "+",
    label: "Projects",
    duration: 2,
  },
  {
    id: 3,
    startValue: 1,
    endValue: "1",
    suffix: " Million+",
    label: "Sq. ft. Delivered",
    duration: 1,
  },
];

const Counter = ({
  startValue,
  endValue,
  duration,
  suffix = "",
  format = false,
}) => {
  const [count, setCount] = useState(startValue);
  const countRef = useRef(startValue);
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const steps = 60;
    const stepDuration = (duration * 1000) / steps;
    const increment = (endValue - startValue) / steps;

    const interval = setInterval(() => {
      if (countRef.current >= endValue) {
        clearInterval(interval);
        return;
      }

      countRef.current += increment;
      setCount(Math.min(countRef.current, endValue));
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isInView, startValue, endValue, duration]);

  const formatNumber = (num) => {
    if (format) {
      return new Intl.NumberFormat("en-IN").format(Math.round(num));
    }
    return Math.round(num);
  };

  return (
    <span ref={elementRef}>
      {formatNumber(count)}
      {suffix}
    </span>
  );
};

export default function Statistics() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-black via-[#0a0a0a] to-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
        ref={containerRef}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Impact In Numbers
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#2A72F8] to-[#8F44EC] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group ${
                index === 2 && "md:col-span-1 col-span-2"
              }`}
            >
              <div className="p-4 md:p-5 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10 hover:bg-black/50 transition-all duration-300 transform hover:scale-105 hover:border-white/20 h-full flex flex-col justify-center items-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#2A72F8] to-[#8F44EC] bg-clip-text text-transparent mb-3">
                  <Counter
                    startValue={stat.startValue}
                    endValue={stat.endValue}
                    duration={stat.duration}
                    suffix={stat.suffix}
                    format={stat.format}
                  />
                </div>
                <div className="text-sm md:text-base text-gray-300 text-center">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
