import { useState } from "react";
import Image from "next/image";

interface SlideshowProps {
  images: string[];
  altTexts?: string[];
  className?: string;
}

export default function Slideshow({ images, altTexts = [], className = "" }: SlideshowProps) {
  const [index, setIndex] = useState(0);
  const total = images.length;

  const goTo = (i: number) => {
    setIndex((i + total) % total);
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="flex items-center justify-center min-h-[240px] w-full">
        <Image
          src={images[index]}
          alt={altTexts[index] || `Slide ${index + 1}`}
          className="max-h-80 max-w-full object-contain drop-shadow-xl"
          width={600} // set your desired width
          height={400} // set your desired height
          style={{ background: "none" }}
        />
      </div>
      <div className="flex items-center mt-6 space-x-2">
        {/* Prev Button */}
        <button
          aria-label="Previous"
          onClick={() => goTo(index - 1)}
          className="w-9 h-9 flex items-center justify-center bg-white/70 border border-white text-primary hover:bg-white/90 transition-colors duration-200 rounded-full shadow-md"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        {/* Slide Buttons */}
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`w-9 h-9 flex items-center justify-center border border-white text-primary font-semibold transition-all duration-200 ${
              i === index
                ? "bg-white/80 border-white rounded-none shadow-lg"
                : "bg-white/60 rounded-full hover:bg-white/80 shadow-md"
            }`}
            style={{ marginLeft: i === 0 ? 0 : 8, marginRight: i === total - 1 ? 0 : 0 }}
          >
            {i + 1}
          </button>
        ))}
        {/* Next Button */}
        <button
          aria-label="Next"
          onClick={() => goTo(index + 1)}
          className="w-9 h-9 flex items-center justify-center bg-white/70 border border-white text-primary hover:bg-white/90 transition-colors duration-200 rounded-full shadow-md"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
    </div>
  );
}
