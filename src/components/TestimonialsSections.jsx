import Image from "next/image";
import { FiChevronLeft, FiChevronRight, FiPlay } from "react-icons/fi";
import SubTitle from "./SubTitle";

const testimonials = [
  {
    id: 1,
    name: "Alex Carter",
    role: "Freelance Designer",
    text: "As someone who juggles multiple projects, staying focused was always a challenge. This course gave me the tools to cut through distractions and work with absolute clarity. My productivity has never been better!",
    avatar: "https://i.pravatar.cc/150?u=alex", // Dummy image
    type: "text",
  },
  {
    id: 2,
    name: "Daniel Foster",
    role: "Content Creator",
    text: "",
    avatar: "https://i.pravatar.cc/150?u=daniel",
    bgImage:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=600", // Image from Unsplash
    type: "video",
  },
  {
    id: 3,
    name: "Mark Davidson",
    role: "Software Developer",
    text: "I never realized how much distractions were holding me back. After applying the deep work techniques, I feel more in control of my time and energy. My efficiency has doubled!",
    avatar: "https://i.pravatar.cc/150?u=mark",
    type: "text",
  },
];

export default function TestimonialSection() {
  return (
    <div>
      <div className="py-8.75 md:py-30 text-center">
        <SubTitle subTitle="Testimonials" />
        <h1 className="text-2xl md:text-4xl font-semi-bold max-w-80 text-[#E0E3E5] mx-auto mt-12">
          Real Results from Real People
        </h1>
      </div>
      <div className="bg-[#05060A] text-white py-20 px-6 md:px-16 font-sans">
        <div className="max-w-7xl mx-auto">
          {/* Header with Navigation Buttons */}
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Join with 5K other students
            </h2>
            <div className="flex gap-4">
              <button className="p-4 rounded-full bg-white/5 hover:bg-white/10 transition border border-white/10">
                <FiChevronLeft size={24} />
              </button>
              <button className="p-4 rounded-full bg-white/5 hover:bg-white/10 transition border border-white/10">
                <FiChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            {testimonials.map((item) => (
  <div
    key={item.id}
    className={`relative h-[450px] rounded-[32px] p-8 flex flex-col justify-between overflow-hidden border border-white/10 ${
      item.type === "video" ? "" : "bg-[#0D0F14]"
    }`}
  >
    {/* 1. Video Card Background Fix */}
    {item.type === "video" && (
      <>
        <Image
          src="/img11.jpg" // Local image path
          alt="Video Thumbnail"
          fill // Full parent container nibe
          priority // High resolution load korbe
          className="object-cover" // Image fete jabe na
        />
        {/* Overlay: Jate text gulo pora jay */}
        <div className="absolute inset-0 bg-black/30 z-0" />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110">
            <FiPlay
              className="text-[#4056F7] ml-1"
              size={28}
              fill="currentColor"
            />
          </button>
        </div>
      </>
    )}

    {/* 2. Card Content (Z-index fix kore dewa hoyeche jate image er niche na jay) */}
    <div className="relative z-20">
      <div className="w-12 h-12 mb-8 relative">
        <Image
          src={item.avatar}
          alt={item.name}
          fill
          className="rounded-full border border-white/20 object-cover"
        />
      </div>
      
      {item.text && (
        <p className="text-gray-300 leading-relaxed text-[17px]">
          {item.text}
        </p>
      )}
    </div>

    {/* 3. Footer Content */}
    <div className="relative z-20">
      <h4 className="text-xl font-bold text-white">{item.name}</h4>
      <p className="text-gray-500 text-sm">{item.role}</p>
    </div>
  </div>
))}
          </div>
        </div>
      </div>
    </div>
  );
}
