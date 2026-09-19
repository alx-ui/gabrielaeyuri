import { useEffect, useRef, useState } from 'react';
import ReactHowler from 'react-howler';

import { CaretLeft, CaretRight, Pause, Play, SpeakerHigh, SpeakerLow, SpeakerSlash } from '@phosphor-icons/react';
import music from 'assets/wedding.mp3';

interface MusicPlayerProps {
  play: boolean;
  setPlay: (play: boolean) => void;
}

export function MusicPlayer({ play, setPlay }: MusicPlayerProps) {
  const [volume, setVolume] = useState(0.1);
  const [prevVolume, setPrevVolume] = useState(0.1);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hasFineHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    setIsTouch(!hasFineHover);
  }, []);

  const effectiveVolume = isMuted ? 0 : volume;
  const isCurrentlyExpanded = isExpanded || (!isTouch && isHovered);

  const toggleMute = () => {
    if (isMuted || volume === 0) {
      const restored = prevVolume > 0 ? prevVolume : 0.1;
      setVolume(restored);
      setIsMuted(false);
    } else {
      setPrevVolume(volume);
      setIsMuted(true);
    }
  };

  const handleVolumeChange = (newVol: number) => {
    setVolume(newVol);
    if (newVol > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (playerRef.current && !playerRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const volumePercentage = Math.round(effectiveVolume * 100);

  return (
    <>
      <ReactHowler src={music} playing={play} loop volume={effectiveVolume} />

      <div
        ref={playerRef}
        onMouseEnter={() => !isTouch && setIsHovered(true)}
        onMouseLeave={() => !isTouch && setIsHovered(false)}
        className="fixed right-2.5 bottom-2.5 z-40 max-w-[calc(100vw-1.25rem)] overflow-hidden select-none sm:right-6 sm:bottom-6 sm:max-w-md"
      >
        <div
          className={`group border-primary/20 bg-cream/95 relative flex items-center gap-1.5 rounded-full border px-2 py-1.5 shadow-md backdrop-blur-md transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] sm:gap-2 sm:px-2.5 ${
            isCurrentlyExpanded ? 'ring-primary/15 ring-1 sm:pr-3.5 sm:pl-3' : ''
          }`}
        >
          <button
            onClick={() => setPlay(!play)}
            aria-label={play ? 'Pausar música' : 'Tocar música'}
            className="bg-primary text-cream hover:bg-secondary focus:ring-primary/30 flex h-8 w-8 shrink-0 items-center justify-center rounded-full shadow-sm transition-transform duration-160 ease-out focus:ring-2 focus:outline-none active:scale-95"
          >
            {play ? <Pause size={15} weight="fill" /> : <Play size={15} weight="fill" className="ml-0.5" />}
          </button>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label={isCurrentlyExpanded ? 'Recolher detalhes' : 'Expandir controles'}
            className="flex h-6 items-center gap-[2.5px] px-0.5 focus:outline-none"
          >
            <span
              className={`bg-primary/80 inline-block h-3.5 w-[2.5px] origin-bottom rounded-full transition-transform duration-200 ${
                play ? 'wave-bar-1' : 'scale-y-[0.25] opacity-50'
              }`}
            />
            <span
              className={`bg-primary inline-block h-3.5 w-[2.5px] origin-bottom rounded-full transition-transform duration-200 ${
                play ? 'wave-bar-2' : 'scale-y-[0.4] opacity-50'
              }`}
            />
            <span
              className={`bg-primary/90 inline-block h-3.5 w-[2.5px] origin-bottom rounded-full transition-transform duration-200 ${
                play ? 'wave-bar-3' : 'scale-y-[0.25] opacity-50'
              }`}
            />
            <span
              className={`bg-primary/70 inline-block h-3.5 w-[2.5px] origin-bottom rounded-full transition-transform duration-200 ${
                play ? 'wave-bar-4' : 'scale-y-[0.35] opacity-50'
              }`}
            />
          </button>

          <div
            className={`flex items-center gap-1.5 overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] sm:gap-2.5 ${
              isCurrentlyExpanded
                ? 'max-w-[175px] opacity-100 sm:max-w-[280px]'
                : 'pointer-events-none max-w-0 opacity-0'
            }`}
          >
            <div className="hidden flex-col pr-1 whitespace-nowrap sm:flex">
              <span className="font-Cormorant text-xs leading-tight font-semibold tracking-wide text-gray-800">
                Nossa Trilha Sonora
              </span>
              <span className="text-primary/80 font-sans text-[9px] font-bold tracking-widest uppercase">
                Gabriela & Yuri
              </span>
            </div>

            <div className="bg-primary/15 hidden h-5 w-[1px] sm:block" />

            <button
              onClick={toggleMute}
              aria-label={isMuted || volume === 0 ? 'Desativar mudo' : 'Ativar mudo'}
              className="text-primary/80 hover:text-primary hover:bg-primary/10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-transform duration-160 ease-out focus:outline-none active:scale-90"
            >
              {effectiveVolume === 0 ? (
                <SpeakerSlash size={15} weight="bold" />
              ) : effectiveVolume < 0.4 ? (
                <SpeakerLow size={15} weight="bold" />
              ) : (
                <SpeakerHigh size={15} weight="bold" />
              )}
            </button>

            <div className="flex items-center gap-1 sm:gap-1.5">
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={effectiveVolume}
                onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                aria-label="Volume da música"
                style={{ touchAction: 'none' }}
                className="music-volume-slider w-10 cursor-pointer touch-none sm:w-16"
              />
              <span className="w-5 text-right font-sans text-[9px] font-semibold text-gray-500 tabular-nums sm:w-6 sm:text-[10px]">
                {volumePercentage}%
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label={isCurrentlyExpanded ? 'Recolher player' : 'Expandir player'}
            className="text-primary/60 hover:text-primary hover:bg-primary/10 flex h-5 w-5 items-center justify-center rounded-full transition-transform duration-160 ease-out focus:outline-none active:scale-90"
          >
            {isCurrentlyExpanded ? <CaretRight size={12} weight="bold" /> : <CaretLeft size={12} weight="bold" />}
          </button>
        </div>
      </div>
    </>
  );
}
