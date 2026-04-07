"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import VideoSection from "../components/VideoSection";
import PainPointsSection from "@/components/PainPointsSection";
import BenefitsSection from "@/components/BenefitsSection";
import CurriculumSection from "@/components/CurriculumSection";
import TestimonialSection from "@/components/TestimonialsSections";
import CTASection from "@/components/CTASection";

export default function Home() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "bg-black text-white" : "bg-white text-black"}>
      <Navbar dark={dark} setDark={setDark} />
      <Hero />
      <VideoSection />
      <PainPointsSection />
      <BenefitsSection />
      <CurriculumSection />
      <TestimonialSection />
      <CTASection />
    </div>
  );
}