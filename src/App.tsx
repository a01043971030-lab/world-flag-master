import React, { useState, useRef } from "react";
import { Shuffle, Globe } from "lucide-react";
import { FLAGS_DATA, FlagItem } from "./data/flagsData";

export default function App() {
  const [flagsList, setFlagsList] = useState<FlagItem[]>(() => 
    [...FLAGS_DATA].sort((a, b) => b.difficulty - a.difficulty)
  );
  
  const [revealedIds, setRevealedIds] = useState<Record<string, boolean>>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef<number | null>(null);

  // Shuffle flags and forcefully reset scroll to the very top (scrollTop = 0)
  const handleShuffleAndRestart = () => {
    const shuffled = [...FLAGS_DATA].sort(() => Math.random() - 0.5);
    setFlagsList(shuffled);
    setRevealedIds({});
    setCurrentIndex(0);

    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
      containerRef.current.scrollTo({ top: 0, behavior: "instant" });
    }

    setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.scrollTop = 0;
        containerRef.current.scrollTo({ top: 0, behavior: "instant" });
      }
    }, 20);
  };

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
      if (diff > 0 && index < flagsList.length - 1) {
        const nextIdx = index + 1;
        setCurrentIndex(nextIdx);
        const nextEl = containerRef.current?.children[nextIdx + 2];
        nextEl?.scrollIntoView({ behavior: "smooth" });
      } else if (diff < 0 && index > 0) {
        const prevIdx = index - 1;
        setCurrentIndex(prevIdx);
        const prevEl = containerRef.current?.children[prevIdx + 2];
        prevEl?.scrollIntoView({ behavior: "smooth" });
      }
    }
    touchStartY.current = null;
  };

  return (
    <div 
      ref={containerRef}
      onScroll={(e) => {
        const target = e.currentTarget;
        const index = Math.round(target.scrollTop / target.clientHeight);
        if (index >= 0 && index < flagsList.length) {
          setCurrentIndex(index);
        }
      }}
      className="h-[100dvh] w-screen overflow-y-scroll snap-y snap-mandatory bg-black text-white font-sans scroll-smooth select-none touch-pan-y relative"
    >
      {/* Top-Right Shuffle & Restart Button (Half size / 1/2 compact) */}
      <button
        onClick={handleShuffleAndRestart}
        className="fixed top-2 right-2 z-50 bg-black/70 hover:bg-black/90 backdrop-blur-md px-1.5 py-0.5 rounded-lg border border-white/25 text-[9px] font-bold text-amber-300 shadow-xl flex items-center space-x-0.5 transition-all active:scale-95"
        title="랜덤 섞기 & 처음으로"
      >
        <Shuffle className="w-2.5 h-2.5 text-amber-400" />
        <span>처음으로</span>
      </button>

      {/* Top-Left Progress Badge (Half size / 1/2 compact) */}
      <div className="fixed top-2 left-2 z-50 bg-black/70 backdrop-blur-md px-1.5 py-0.5 rounded-lg border border-white/10 text-[9px] font-bold text-white/90 shadow-xl pointer-events-none flex items-center space-x-0.5">
        <Globe className="w-2.5 h-2.5 text-indigo-400" />
        <span>{currentIndex + 1} / {flagsList.length}</span>
      </div>

      {flagsList.map((flag, index) => {
        const isRevealed = !!revealedIds[flag.id];

        return (
          <div
            key={flag.id}
            onClick={() => toggleReveal(flag.id, flag.nameKo)}
            onTouchStart={handleTouchStart}
            onTouchEnd={(e) => handleTouchEnd(e, index)}
            className="h-[100dvh] w-screen snap-start flex items-center justify-center relative cursor-pointer overflow-hidden bg-black shrink-0"
          >
            {/* Edge-to-Edge Proportional Flag: Automatically maximizes size in both portrait and landscape orientations without cropping or distorting */}
            <img
              src={`https://flagcdn.com/${flag.code}.svg`}
              alt={flag.nameEn}
              className="w-full h-full object-contain pointer-events-none p-1 sm:p-2 md:p-3"
            />

            {/* Revealed Country Name Overlay with Location & Characteristics */}
            {isRevealed && (
              <div className="absolute inset-0 bg-black/85 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8 transition-all animate-fadeIn z-40">
                <h1 className="text-4xl sm:text-7xl md:text-9xl font-black text-white tracking-wider text-center drop-shadow-2xl">
                  {flag.nameKo}
                </h1>
                <p className="mt-2 sm:mt-4 text-base sm:text-2xl text-amber-300 font-bold tracking-wide">
                  수도: {flag.capitalKo} ({flag.continentKo})
                </p>
                <div className="mt-3 text-xs sm:text-base text-slate-200 max-w-2xl text-center bg-slate-900/90 px-5 py-3 rounded-3xl border border-white/15 shadow-2xl space-y-1 sm:space-y-2">
                  <p className="font-semibold leading-relaxed">📍 {flag.symbolism}</p>
                  <p className="text-indigo-300 text-xs sm:text-sm">💡 {flag.funFact}</p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
