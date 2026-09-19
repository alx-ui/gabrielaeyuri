import { CalendarPlus, CaretDown, CheckCircle } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import heroBgMobile from 'assets/hero-bg-mobile.jpg';
import heroBg from 'assets/hero-bg.jpg';

export function Hero() {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isSmallScreen);
  }, [isSmallScreen]);

  const handleScrollTo = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollDown = () => {
    const nextSection = document.getElementById('bencaos') || document.getElementById('informacoes');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative flex h-[100dvh] min-h-[580px] w-full items-center justify-center overflow-hidden sm:min-h-[640px]">
      <div
        className="absolute inset-x-0 -inset-y-8 bg-cover bg-no-repeat transition-all duration-700 ease-out md:inset-0"
        style={{
          backgroundImage: `url(${isMobile ? heroBgMobile : heroBg})`,
          backgroundPosition: isMobile ? 'center 65%' : 'center 68%',
        }}
      />

      <div className="absolute inset-0 bg-black/40 backdrop-blur-[0.5px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/50" />
      <div className="from-linen via-linen/40 pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t to-transparent" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 text-center text-[#FAF7F2] sm:px-6">
        <div className="hero-animate-1 mb-4 flex flex-col items-center sm:mb-5">
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/35 bg-white/10 shadow-lg shadow-black/25 backdrop-blur-md transition-transform duration-300 hover:scale-105 sm:h-20 sm:w-20">
            <span className="font-alex text-lg leading-none tracking-normal whitespace-nowrap text-[#FAF7F2] drop-shadow-sm select-none sm:text-2xl">
              G & Y
            </span>
            <span className="border-primary/40 pointer-events-none absolute -inset-1.5 rounded-full border border-dashed opacity-60" />
          </div>
          <span className="text-linen/90 mt-2.5 font-sans text-[10px] font-semibold tracking-[0.25em] uppercase drop-shadow-sm sm:mt-3 sm:text-xs sm:tracking-[0.3em]">
            Celebração de Casamento
          </span>
        </div>

        <h1 className="hero-animate-2 font-Cormorant xs:text-5xl mb-3 text-4xl font-semibold tracking-normal text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] sm:mb-4 sm:text-6xl md:text-7xl lg:text-8xl">
          Gabriela & Yuri
        </h1>

        <div className="hero-animate-3 mb-6 flex flex-col items-center sm:mb-8">
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <div className="xs:w-10 h-px w-6 bg-white/40 sm:w-16" />
            <span className="xs:text-base font-sans text-sm font-medium tracking-[0.2em] text-[#FAF7F2] drop-shadow-sm sm:text-lg sm:tracking-[0.25em] md:text-xl">
              05 • 12 • 2026
            </span>
            <div className="xs:w-10 h-px w-6 bg-white/40 sm:w-16" />
          </div>
          <p className="font-Cormorant text-linen/90 mt-2 text-sm tracking-wide italic drop-shadow-sm sm:mt-2.5 sm:text-lg">
            La Belle Maison • Resende, RJ
          </p>
        </div>

        <div className="hero-animate-4 flex w-full max-w-xs flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:items-center sm:gap-4">
          <button
            type="button"
            onClick={() => handleScrollTo('agenda')}
            className="group interactive-tactile bg-primary hover:bg-secondary border-primary/20 inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-2xl border px-6 py-3 font-sans text-sm font-semibold tracking-wide text-white shadow-lg shadow-black/30 transition-[transform,background-color,box-shadow] focus:ring-2 focus:ring-white/40 focus:outline-none sm:w-auto sm:px-7 sm:py-3.5 sm:text-base"
          >
            <CalendarPlus size={20} weight="bold" className="transition-transform group-hover:scale-110" />
            <span>Salvar a Data</span>
          </button>

          <button
            type="button"
            onClick={() => handleScrollTo('rsvp')}
            className="group interactive-tactile inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-2xl border border-white/35 bg-white/15 px-6 py-3 font-sans text-sm font-semibold tracking-wide text-white shadow-md shadow-black/20 backdrop-blur-md transition-[transform,background-color,box-shadow] hover:bg-white/25 focus:ring-2 focus:ring-white/40 focus:outline-none sm:w-auto sm:px-7 sm:py-3.5 sm:text-base"
          >
            <CheckCircle size={20} weight="bold" className="text-denary transition-transform group-hover:scale-110" />
            <span>Confirmar Presença</span>
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={handleScrollDown}
        aria-label="Rolar para explorar"
        className="hero-animate-5 interactive-tactile text-linen/85 absolute bottom-3 z-10 flex cursor-pointer flex-col items-center gap-1.5 transition-colors duration-200 hover:text-white sm:bottom-5"
      >
        <span className="font-sans text-[10px] font-medium tracking-[0.2em] uppercase drop-shadow-sm sm:text-[11px]">
          Role para explorar
        </span>
        <div className="hero-scroll-cue flex h-7 w-7 items-center justify-center rounded-full bg-black/20 backdrop-blur-sm sm:h-8 sm:w-8">
          <CaretDown size={16} weight="bold" className="sm:hidden" />
          <CaretDown size={18} weight="bold" className="hidden sm:block" />
        </div>
      </button>
    </section>
  );
}
