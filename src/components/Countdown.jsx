"use client";
import { useEffect, useState } from "react";

export default function Countdown() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const target = new Date().getTime() + 4 * 24 * 60 * 60 * 1000;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);

      setTime(`${d}d ${h}h ${m}m ${s}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-block bg-blue-900/40 text-blue-300 px-4 py-1 rounded-full text-xs mb-6">
      30% off until {time}
    </div>
  );
}
