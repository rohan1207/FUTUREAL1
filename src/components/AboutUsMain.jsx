import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const AboutUsMain = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <div
      ref={sectionRef}
      className="bg-[#000000] min-h-screen relative overflow-hidden py-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#050505]/40 to-[#0f172a]/60" />
       
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Founder Section */}
        <motion.div
          className="max-w-6xl mx-auto mb-24"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Founder Image */}
            <motion.div
              className="md:col-span-4 relative max-w-[280px] mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative group">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src="/sir.jpg"
                    alt="Founder"
                    className="w-full h-auto aspect-[3/4] object-cover object-center transform group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                </div>
            </motion.div>

            {/* Founder Info */}
            <motion.div
              className="md:col-span-8 space-y-6 px-4 sm:px-6 md:px-0"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-light text-white mb-3">
                  Abhishek Kumar (Our Founder)
                </h2> 
                <div className="h-0.5 w-16 bg-gradient-to-r from-[#2A72F8] to-[#8F44EC] mb-6" />
              </div>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                A 3x founder with 22 years of experience in Project Management,
                Real Estate Development and Private Equity. He started his
                entrepreneurial journey 10 years back and went on to establish
                multiple businesses like Futureal, Tealwalls Technologies, Covie
                Ventures. He has worked with companies like Bovis Lend Lease,
                DTZ, Och-Ziff and ABIL to name a few. He has been involved with
                projects for companies like SAP Labs, Philips Software,
                Honeywell, Metro Cash & Carry, Coca-Cola and luxury developments
                like Castle Royale, God's Blessings and Hospitality projects
                like Westin - Pune and W Resort Goa.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                He holds a Civil Engineering degree with a PG in Construction
                Management from XIME Bangalore. He also did his executive
                management programs from IIM Calcutta and Cornell University. He
                was instrumental in building Covie as a Co-Founder and establish
                it as one of the most sought after premium student housing and
                coliving brand in the country.
              </p>
            </motion.div>
          </div>
        </motion.div>        {/* Team Member - Sapna Mishra */}
        <motion.div
          className="max-w-6xl mx-auto pt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Team Member Image */}
            <motion.div
              className="md:col-span-4 relative max-w-[280px] mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative group">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src="/sapna_mishra.JPG"
                    alt="Sapna Mishra"
                    className="w-full h-auto aspect-[3/4] object-cover object-center transform group-hover:scale-105 transition-all duration-700"
                  />
                </div>
              </div>
            </motion.div>

            {/* Team Member Info */}
            <motion.div
              className="md:col-span-8 space-y-6 px-4 sm:px-6 md:px-0"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-light text-white mb-3">
                  Sapna Mishra
                </h2>
                <div className="h-0.5 w-16 bg-gradient-to-r from-[#2A72F8] to-[#8F44EC] mb-6" />
              </div>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                A dreamer at heart, Sapna Mishra transitioned from a successful career in banking and finance 
                to follow her true calling—design. With nearly a decade of experience in building and managing 
                her own silver and imitation jewelry brand, she developed a keen eye for aesthetics and craftsmanship.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Her passion for interiors was sparked while designing her own home, where she discovered 
                the joy of blending timeless elegance with modern functionality. Today, she brings that 
                same thoughtful design philosophy into every space she curates.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Sapna holds a degree in commerce and has completed her Executive MBA from IIM Kolkata, 
                combining business acumen with creative vision to lead with both style and strategy.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUsMain;
