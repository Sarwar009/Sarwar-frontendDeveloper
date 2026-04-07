"use client";
import Image from "next/image";
import { Play } from "lucide-react";
import { useState } from "react";
import VideoModal from "./VideoModal";

export default function VideoSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="px-4 md:px-16 pb-20 bg-linear-to-t from-blue-500/80 to-black-500/30 relative">

        <div className="relative rounded-xl overflow-hidden flex items-center justify-center container mx-auto w-full">
          <Image
            src="/hero-video-thumb.png"
            alt="video"
            width={900}
            height={500}
            className="rounded-2xl object-cover w-full h-auto"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => setOpen(true)}
              className="bg-white p-5 rounded-full border-3 border-red-300/40 cursor-pointer transition-transform hover:scale-110 hover:animate-spin"
            >
              <Play fill="rgba(36, 102, 242, 1)" size={20} />
            </button>
          </div>
        </div>

      <VideoModal open={open} setOpen={setOpen} />
    </section>
  );
}
