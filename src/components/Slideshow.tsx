import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface SlideshowProps {
  images: string[];
  altTexts?: string[];
  className?: string;
  mouseX?: number;
  mouseY?: number;
  labels?: string[];
}


export default function Slideshow({ images, altTexts = [], className = "", labels }: SlideshowProps) {
  const [index, setIndex] = useState(0);
  const total = images.length;


  // No repulsion, just upward offset for selected

  const goTo = (i: number) => {
    setIndex((i + total) % total);
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="flex items-center justify-center min-h-[320px] w-full">
        <Image
          src={images[index]}
          alt={altTexts[index] || `Slide ${index + 1}`}
          className="max-h-80 max-w-full object-contain drop-shadow-xl"
          width={500} // set your desired width
          height={300} // set your desired height
          style={{ background: "none" }}
        />
      </div>
      
      <div
        className="w-full flex justify-center"
        style={{ overflow: "visible", maxWidth: "100%" }}
      >
        <div
          className="slideshow-inner flex items-center mt-6 gap-3"
          style={{
            width: "auto",
            maxWidth: "100%",
            transformOrigin: "top center",
          }}
        >
          {/* Prev Button */}
          <button
            aria-label="Previous"
            onClick={() => goTo(index - 1)}
            className="px-5 h-9 flex items-center justify-center bg-black/30 border border-white/60 text-primary hover:bg-black/50 transition-colors duration-200 rounded-full hover:shadow-[0_2px_12px_0_rgba(255,255,255,0.18)]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          {/* Slide Buttons */}
          {images.map((_, i) => (
            <div
              key={i}
              className={i === index ? 'z-10 flex' : 'flex'}
              style={{
                transition: 'transform 0.7s cubic-bezier(0.4,0,0.2,1)',
                transform: `translateY(${i === index ? -12 : 0}px)`
              }}
            >
              <button
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={
                  `px-5 h-9 flex items-center justify-center border border-white/60 text-primary font-semibold rounded-full transition-all duration-200 animate-slidefloat ` +
                  (i === index
                    ? "bg-black/60 border-white/80 text-white shadow-[0_2px_12px_0_rgba(255,255,255,0.18)]"
                    : "bg-black/30 hover:bg-black/50 text-white/80 hover:shadow-[0_2px_12px_0_rgba(255,255,255,0.18)]")
                }
                style={{ animationDelay: `${(i / total) * 1.5}s` }}
              >
                {labels && labels[i] !== undefined ? labels[i] : i + 1}
              </button>
            </div>
          ))}
          {/* Next Button */}
          <button
            aria-label="Next"
            onClick={() => goTo(index + 1)}
            className="px-5 h-9 flex items-center justify-center bg-black/30 border border-white/60 text-primary hover:bg-black/50 transition-colors duration-200 rounded-full hover:shadow-[0_2px_12px_0_rgba(255,255,255,0.18)]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

import "../styles/slideshow.css";
