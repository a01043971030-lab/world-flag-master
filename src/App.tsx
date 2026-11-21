import React, { useState, useRef } from "react";
import { FLAGS_DATA } from "./data/flagsData";

export default function App() {
  const sortedFlags = [...FLAGS_DATA].sort((a, b) => b.difficulty - a.difficulty);
  const [revealedIds, setRevealedIds] = useState<Record<string, boolean>>({});
  
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef<number | null>(null);

  const toggleReveal = (id: string, nameKo: string) => {
    const isCurrentlyRevealed = !!revealedIds[id];
    setRevealedIds(prev => ({ ...prev, [id]: !isCurrentlyRevealed }));

    if (!isCurrentlyRevealed && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(nameKo);
      utterance.lang = "ko-KR";
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.targetTouches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent, index: number) => {
    if (touchStartY.current === null) return;
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY.current - touchEndY;

    const threshold = 40;
    if (Math.abs(diff) > threshold) {
      if (diff > 0 && index < sortedFlags.length - 1) {
        const nextEl = containerRef.current?.children[index + 1];
        nextEl?.scrollIntoView({ behavior: "smooth" });
      } else if (diff < 0 && index > 0) {
        const prevEl = containerRef.current?.children[index - 1];
        prevEl?.scrollIntoView({ behavior: "smooth" });
      }
    }
    touchStartY.current = null;
  };

  return (
    <div 
      ref={containerRef}
      className="h-[100dvh] w-screen overflow-y-scroll snap-y snap-mandatory bg-slate-950 text-white font-sans scroll-smooth select-none touch-pan-y"
    >
      {sortedFlags.map((flag, index) => {
        const isRevealed = !!revealedIds[flag.id];

        return (
          <div
            key={flag.id}
            onClick={() => toggleReveal(flag.id, flag.nameKo)}
            onTouchStart={handleTouchStart}
            onTouchEnd={(e) => handleTouchEnd(e, index)}
            className="h-[100dvh] w-screen snap-start flex items-center justify-center relative cursor-pointer overflow-hidden bg-slate-950 p-2 sm:p-6 md:p-10 shrink-0"
          >
            {/* Responsive Flag Image: Perfectly fits mobile screens and tablet screens while maintaining exact flag proportions */}
            <div className="w-full h-full flex items-center justify-center relative p-2 sm:p-4 md:p-8">
              <img
                src={`https://flagcdn.com/${flag.code}.svg`}
                alt={flag.nameEn}
                className="max-h-[75vh] max-w-[95vw] sm:max-h-[80vh] sm:max-w-[92vw] md:max-h-[85vh] md:max-w-[85vw] w-auto h-auto object-contain rounded-2xl shadow-2xl border border-white/10 pointer-events-none"
              />
            </div>

            {/* Responsive Progress Badge */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-2xl border border-white/10 text-[11px] sm:text-xs text-white/80 font-bold pointer-events-none shadow-lg">
              {index + 1} / {sortedFlags.length} • 난이도 {"⭐".repeat(flag.difficulty)}
            </div>

            {/* Revealed Country Name Overlay */}
            {isRevealed && (
              <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl flex flex-col items-center justify-center p-6 sm:p-8 transition-all animate-fadeIn z-30">
                <h1 className="text-5xl sm:text-7xl md:text-9xl font-black text-white tracking-wider text-center drop-shadow-2xl">
                  {flag.nameKo}
                </h1>
                <p className="mt-3 sm:mt-4 text-lg sm:text-2xl text-indigo-300 font-bold tracking-wide">
                  수도: {flag.capitalKo} ({flag.continentKo})
                </p>
                <p className="mt-2 text-xs sm:text-base text-slate-300 max-w-xl text-center bg-slate-900/80 px-5 py-2.5 sm:px-6 sm:py-3 rounded-2xl border border-white/10 shadow-lg">
                  💡 {flag.symbolism}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
