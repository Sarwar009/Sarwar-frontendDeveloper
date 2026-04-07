"use client";

import { modulesBenefitsData, modulesData } from "@/lib/Data/Data";
import { Play } from "lucide-react";
import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import SubTitle from "./SubTitle";

export default function CurriculumSection() {
  const [openModules, setOpenModules] = useState({ 1: true });

  // 3. Toggle function for modules
  const toggleModule = (id) => {
    setOpenModules((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div>
      <div className="py-8.75 md:py-30 text-center">
        <SubTitle subTitle="Course Curriculum" />
        <h1 className="text-2xl md:text-4xl font-semi-bold max-w-150 text-[#E0E3E5] mx-auto mt-12">
          Mastering Deep Work: A Structured Path to Peak Productivity
        </h1>
      </div>
      <div className="min-h-screen bg-[#05060A] text-white p-8 md:p-16 flex flex-col md:flex-row gap-12 font-sans">
        {/* LEFT COLUMN: Course Curriculum */}
        <div className="w-full md:w-2/3 space-y-4">
          {modulesData.map((module) => {
            const isOpen = openModules[module.id];
            return (
              <div
                key={module.id}
                className="border border-white/5 rounded-2xl overflow-hidden relative"
              >
                {/* Module Header - Clickable area */}
                <button
                  onClick={() => toggleModule(module.id)}
                  className="w-full text-left p-6 flex justify-between items-start hover:bg-white/5 transition-colors duration-200"
                >
                  <div className="space-y-1">
                    <h3 className="text-xl font-medium tracking-tight">
                      {module.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {module.videoDuration}
                    </p>
                  </div>
                  {/* Chevron icon toggles up/down based on state */}
                  <div className="pt-1">
                    {isOpen ? (
                      <div>
                        <svg
                          width="19"
                          height="11"
                          viewBox="0 0 19 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.39294 0.390482C8.62253 0.160913 8.928 0.0230045 9.25203 0.00262961C9.57607 -0.0177453 9.8964 0.0808133 10.1529 0.279815L10.2783 0.390482L18.2783 8.39048L18.3889 8.51582L18.4609 8.61848L18.5329 8.74648L18.5556 8.79448L18.5916 8.88382L18.6343 9.02781L18.6476 9.09848L18.6609 9.17848L18.6663 9.25448L18.6689 9.33315L18.6663 9.41182L18.6596 9.48915L18.6476 9.56915L18.6343 9.63848L18.5916 9.78248L18.5556 9.87182L18.4623 10.0478L18.3756 10.1678L18.2783 10.2758L18.1529 10.3865L18.0503 10.4585L17.9223 10.5305L17.8743 10.5531L17.7849 10.5891L17.6409 10.6318L17.5703 10.6451L17.4903 10.6585L17.4143 10.6638L17.3356 10.6665H1.3356C0.199605 10.6665 -0.393728 9.35182 0.291605 8.50248L0.392938 8.39048L8.39294 0.390482Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    ) : (
                      <div>
                        <svg
                          width="19"
                          height="11"
                          viewBox="0 0 19 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.3307 0C18.4667 0 19.06 1.31467 18.3747 2.164L18.2733 2.276L10.2733 10.276C10.0437 10.5056 9.73828 10.6435 9.41424 10.6639C9.09021 10.6842 8.76987 10.5857 8.51333 10.3867L8.388 10.276L0.388 2.276L0.277334 2.15067L0.205334 2.048L0.133334 1.92L0.110667 1.872L0.074667 1.78267L0.0320002 1.63867L0.0186666 1.568L0.00533358 1.488L0 1.412V1.25467L0.00666682 1.17733L0.0186666 1.09733L0.0320002 1.028L0.074667 0.884L0.110667 0.794666L0.204 0.618666L0.290667 0.498666L0.388 0.390667L0.513334 0.28L0.616001 0.208L0.744 0.136L0.792 0.113333L0.881334 0.0773328L1.02533 0.0346667L1.096 0.0213331L1.176 0.00799942L1.252 0.00266647L17.3307 0Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-250 opacity-100 pb-6" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 space-y-6">
                    {module.lessons.map((lesson, index) => (
                      <div
                        key={lesson.id}
                        className="flex items-center gap-4 text-gray-300"
                      >
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${index === 0 ? "bg-white" : "bg-gray-800"}`}
                        >
                          <Play
                            fill={index === 0 ? "#2466F2" : "#000"}
                            size={20}
                            strokeWidth={0}
                          />
                        </div>

                        <div className="grow flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="font-medium text-[15px]">
                              {lesson.title}
                            </span>
                            {lesson.hasPreview && (
                              <span className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded">
                                Preview
                              </span>
                            )}
                          </div>
                          {/* Lesson Duration */}
                          <span className="text-[15px] tabular-nums text-gray-500 font-mono">
                            {lesson.duration}
                          </span>
                        </div>
                      </div>
                    ))}

                    {isOpen && module.lessons.length === 0 && (
                      <div className="p-4 text-center text-gray-600 border border-dashed border-gray-700 rounded-lg">
                        Lessons details is locked.
                      </div>
                    )}
                  </div>
                </div>
                <div className="absolute bottom-0 left-5 right-5 w-full h-px bg-linear-to-r from-black via-blue-500 to-black"></div>
              </div>
            );
          })}
        </div>

        {/* RIGHT COLUMN: Benefits Card */}
        <div className="w-full md:w-1/3 mt-8 md:mt-0">
          {/* Card Styling - Same to same design */}
          <div className="bg-[#101319] border border-white/5 rounded-2xl p-8 space-y-10 shadow-2xl sticky top-8">
            <h2 className="text-3xl font-extrabold tracking-tighter">
              Not only video lessons!
            </h2>

            {/* Benefits List - Checkmark icons */}
            <ul className="space-y-6">
              {modulesBenefitsData.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 text-gray-300"
                >
                  <div className="mt-3">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.99998 0.833496C7.62585 0.833496 7.32105 0.990903 7.04371 1.20255C6.78391 1.40076 6.49735 1.68733 6.16211 2.02261L6.13853 2.04619C5.79542 2.3893 5.49631 2.52434 5.0347 2.52434C4.97685 2.52434 4.90384 2.52228 4.82139 2.51996C4.61004 2.51402 4.33663 2.50632 4.09741 2.52701C3.7475 2.55727 3.31019 2.65302 2.97828 2.98772C2.64891 3.31986 2.55549 3.75538 2.52613 4.10309C2.50613 4.34013 2.51381 4.6115 2.51975 4.82135C2.52209 4.90402 2.52417 4.97716 2.52417 5.03487C2.52417 5.49648 2.38912 5.7956 2.04599 6.13872L2.02243 6.16229C1.68715 6.49754 1.40057 6.7841 1.20237 7.04383C0.990726 7.32123 0.83332 7.62603 0.833313 8.00016C0.83332 8.37423 0.990733 8.67903 1.20237 8.95643C1.40061 9.2163 1.68725 9.5029 2.02261 9.83823L2.04602 9.86163C2.26846 10.084 2.37339 10.2283 2.43286 10.3644C2.49077 10.497 2.52417 10.6649 2.52417 10.9654C2.52417 11.0233 2.52211 11.0963 2.51979 11.1788C2.51385 11.3901 2.50615 11.6635 2.52684 11.9028C2.55711 12.2526 2.65287 12.69 2.98757 13.0219C3.31972 13.3512 3.75523 13.4446 4.10293 13.474C4.33996 13.494 4.61133 13.4863 4.82117 13.4804C4.90385 13.478 4.97698 13.476 5.03469 13.476C5.32883 13.476 5.49415 13.5056 5.62428 13.5592C5.75429 13.6129 5.89335 13.709 6.10281 13.9184C6.14751 13.9631 6.2064 14.0262 6.27433 14.099C6.42764 14.2634 6.62712 14.4772 6.81331 14.6399C7.09578 14.8868 7.50105 15.1668 7.99998 15.1668C8.49898 15.1668 8.90418 14.8868 9.18671 14.6399C9.37285 14.4772 9.57218 14.2636 9.72545 14.0992C9.79345 14.0263 9.85245 13.9632 9.89718 13.9184C10.1066 13.709 10.2456 13.6129 10.3756 13.5592C10.5058 13.5056 10.6711 13.476 10.9652 13.476C11.023 13.476 11.0961 13.478 11.1788 13.4804C11.3886 13.4863 11.66 13.494 11.897 13.474C12.2447 13.4446 12.6802 13.3512 13.0124 13.0219C13.3471 12.69 13.4428 12.2526 13.4731 11.9028C13.4938 11.6635 13.4861 11.3901 13.4802 11.1788C13.4778 11.0964 13.4758 11.0232 13.4758 10.9654C13.4758 10.6649 13.5092 10.497 13.5671 10.3644C13.6266 10.2283 13.7315 10.084 13.9539 9.86163L13.9774 9.83823C14.3127 9.5029 14.5994 9.2163 14.7976 8.95643C15.0092 8.67903 15.1666 8.37423 15.1666 8.00016C15.1666 7.62603 15.0092 7.32123 14.7976 7.04383C14.5994 6.7841 14.3128 6.49754 13.9776 6.16231L13.954 6.13872C13.7315 5.91627 13.6266 5.77202 13.5671 5.63586C13.5092 5.50328 13.4758 5.33542 13.4758 5.03487C13.4758 4.97706 13.4778 4.90412 13.4802 4.82174C13.4861 4.61038 13.4938 4.3368 13.4731 4.0976C13.4428 3.74769 13.3471 3.31038 13.0124 2.97848C12.6803 2.64909 12.2448 2.55566 11.897 2.5263C11.66 2.50629 11.3886 2.51398 11.1788 2.51992C11.0961 2.52226 11.023 2.52434 10.9652 2.52434C10.5035 2.52434 10.2044 2.38924 9.86145 2.04619L9.83785 2.02262C9.50258 1.68733 9.21605 1.40076 8.95625 1.20255C8.67891 0.990903 8.37411 0.833496 7.99998 0.833496ZM10.5104 6.7623C10.7472 6.48038 10.7107 6.05986 10.4288 5.82304C10.1468 5.58622 9.72631 5.62279 9.48951 5.90472L7.13145 8.7119L6.444 8.0981C6.16935 7.8529 5.74791 7.87676 5.50269 8.15143C5.25747 8.42603 5.28133 8.8475 5.55597 9.0927L6.75598 10.1642C6.89045 10.2842 7.06785 10.3447 7.24771 10.3318C7.42751 10.3189 7.59451 10.2337 7.71045 10.0956L10.5104 6.7623Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <span className="text-[15px] leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button - Blue, wide, exact text */}
            <button className="w-full bg-[#4056F7] text-white font-bold py-4 rounded-xl text-lg hover:bg-[#3247d1] transition-colors duration-150">
              Enroll now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
