import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WWRHeroSection from "../components/WWRHeroSection";

import IDPValueCreationSection from "../components/IDPValueCreationSection";

import VisonandMission from "../components/VisionandMission";
import OurValues from "../components/OurValues";

export default function WhoWeAreDetail() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <WWRHeroSection />
      <IDPValueCreationSection />
      <OurValues />
      <VisonandMission />
    </motion.div>
  );
}
