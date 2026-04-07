"use client";
import { motion } from "framer-motion";
import Countdown from "./Countdown";

export default function Hero() {
  return (
    <section className="text-center py-20 px-4 relative">
      <div className="absolute inset-0 bg-linear-to-b from-blue-900/20 via-black to-black blur-2xl opacity-60"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <Countdown />

        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Master Focus & Get More Done in Less Time
        </h1>

        <p className="text-gray-400 mb-8">
          Eliminate procrastination and boost productivity effortlessly.
        </p>

        <div className="flex justify-center gap-4">
          <button className="btn btn-primary">
            Enroll now
          </button>
          <button className="btn btn-outline">
            Curriculum
          </button>
        </div>
      </motion.div>
    </section>
  );
}
