// File: app/deep-work-blueprint/page.js
// Next.js App Router (using 'use client' for state)
"use client";

import { useState } from "react";
// Icons import (React Icons makes it easy to add common UI icons)
import { FiCheckCircle, FiStar, FiArrowRight } from "react-icons/fi";
import Image from "next/image"; // Next.js image optimization
import SubTitle from "./SubTitle";

// 1. Data Structure - Image data mimics for exact content
const pricingFeatures = [
  "6h of videos - Step-by-step deep work strategies.",
  "Templates & Trackers - Stay on track effortlessly.",
  "Live Q&As - Expert guidance & accountability.",
  "Exclusive Community - Connect with others.",
];

const offerHighlights = [
  { icon: FiStar, label: "Bonus: 1:1 coaching session to boost focus." },
  { icon: FiStar, label: "Discount: Save 30% when you enroll now!" },
];

const students = [
  { id: 1, avatar: "https://i.pravatar.cc/150?u=student1" },
  { id: 2, avatar: "https://i.pravatar.cc/150?u=student2" },
  { id: 3, avatar: "https://i.pravatar.cc/150?u=student3" },
];

const footerLinks = [
  "Terms & conditions",
  "Refund policy",
  "Pricing",
  "Support",
];

export default function CTASection() {
  return (
    // 1. Main Layout - Dark background, padding, flex container
    <div className="min-h-screen bg-[#05060A] text-white p-8 md:p-16 flex flex-col gap-16 font-sans">
      {/*SECTION 1: Pricing Section - Blue border container*/}
      <div className="p-12 space-y-12 bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT COLUMN: Offer Details Card */}
          <div className="bg-[#101319] border border-white/5 rounded-2xl p-10 flex flex-col align-center gap-6">
            <div className="py-4.75 md:py-10 text-left">
              <SubTitle subTitle="Introducing" />
              <h1 className="text-2xl md:text-4xl font-semi-bold max-w-80 text-[#E0E3E5] mt-12 mb-6">
                The Deep Work <br></br>Blueprint
              </h1>
              <p className="text-[#D0D5D9]">
                What extra you will get if you enroll now
              </p>
            </div>

            {/* Offer Highlights List */}
            <ul className="space-y-6">
              {offerHighlights.map((highlight, index) => {
                const HighlightIcon = highlight.icon;
                return (
                  <li
                    key={index}
                    className="flex items-start gap-4 text-gray-300"
                  >
                    <HighlightIcon className="w-6 h-6 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-[17px] leading-relaxed">
                      {highlight.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* RIGHT COLUMN: Pricing Card */}
          <div className="bg-[#101319] border border-white/5 rounded-2xl p-10 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-start gap-6">
                <h2 className="text-6xl font-extrabold tracking-tight">$349</h2>
                <div className="text-2xl font-semibold tracking-tight">
                  <span className="text-gray-500 line-through">$500</span>
                  <span className="ml-6 bg-blue-500 text-xs text-white px-3 py-1 rounded">
                    30% off
                  </span>
                </div>
              </div>
              <p className="text-lg text-gray-400">
                30% off until{" "}
                <span className="text-gray-100 tabular-nums">
                  4d : 2h : 41m : 17s
                </span>
              </p>

              {/* Features List */}
              <ul className="space-y-6 pt-10">
                {pricingFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 text-gray-300"
                  >
                    <FiCheckCircle className="w-6 h-6 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-[17px] leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-[#4056F7] text-white font-extrabold py-5 rounded-xl text-xl hover:bg-[#3247d1] transition-colors duration-150 mt-12">
              Enroll now
            </button>
          </div>
        </div>
      </div>

      {/* SECTION 2: Hero/Footer Section - Purple border container */}
      <div className="rounded-3xl p-12 space-y-12 bg-black">
        {/* Course Description and Join Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
                <h1 className="text-5xl font-extrabold tracking-tighter">
                The Deep Work <br /> Blueprint
                </h1>
                <p className="text-lg text-gray-400 max-w-sm">
                    Master Focus & Get More Done in Less Time
                </p>
            </div>
            {/* Join Community Card */}
            <div className="bg-[#101319] border border-white/5 rounded-2xl p-10 space-y-10 shadow-2xl">
                <div className="flex items-center gap-6">
                    <div className="flex -space-x-4">
                        {students.map((student) => (
                        <Image
                            key={student.id}
                            src={student.avatar}
                            alt="Student avatar"
                            width={56}
                            height={56}
                            className="rounded-full border border-gray-700 object-cover"
                        />
                        ))}
                    </div>
                    <button className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/15 transition-colors duration-150">
                        <FiArrowRight className="w-7 h-7 text-white" />
                    </button>
                </div>
                <p className="text-lg text-blue-300 font-semibold max-w-xs">
                    Join with 5K other students
                </p>
            </div>
        </div>

        {/* Footer trademark and utility links */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0">
            <p className="text-sm text-gray-500 max-w-sm">
                © Copyright 2024, All Rights Reserved
            </p>
            <ul className="flex flex-wrap gap-x-12 gap-y-4 text-sm text-gray-300 font-medium">
                {footerLinks.map((link, index) => (
                    <li key={index}>
                        <a href="#" className="hover:text-blue-300 transition-colors duration-150">
                            {link}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
      </div>

    </div>
  );
}