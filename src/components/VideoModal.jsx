"use client";

export default function VideoModal({ open, setOpen }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="w-full max-w-3xl">
        <iframe
          className="w-full h-100 rounded-lg"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          allowFullScreen
        />
        <button
          onClick={() => setOpen(false)}
          className="mt-4 text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
}