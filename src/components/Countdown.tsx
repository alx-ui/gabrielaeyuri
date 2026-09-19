import { memo, useEffect, useState } from 'react';

const EVENT_DATE = '2026-12-05T20:00:00.000Z';
const COUNTDOWN_DATE = new Date(EVENT_DATE).getTime();
const MARRIED_DATE = '2026-12-05T20:00:00.000Z';
const COUNTDOWN_MARRIED_DATE = new Date(MARRIED_DATE).getTime();

interface COUNTDOWNTYPE {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const countdownBase: COUNTDOWNTYPE = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

function calculateRemaining(targetTime: number): COUNTDOWNTYPE {
  const now = Date.now();
  const delta = targetTime - now;

  if (delta <= 0) {
    return countdownBase;
  }

  const days = Math.floor(delta / (1000 * 60 * 60 * 24));
  const hours = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((delta % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

function calculateElapsed(startTime: number): COUNTDOWNTYPE {
  const now = Date.now();
  const delta = now - startTime;

  if (delta <= 0) {
    return countdownBase;
  }

  const days = Math.floor(delta / (1000 * 60 * 60 * 24));
  const hours = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((delta % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

const Countdown = memo(() => {
  const [countdown, setCountdown] = useState<COUNTDOWNTYPE>(() => calculateRemaining(COUNTDOWN_DATE));
  const [countdownMarried, setCountdownMarried] = useState<COUNTDOWNTYPE>(() =>
    calculateElapsed(COUNTDOWN_MARRIED_DATE),
  );

  useEffect(() => {
    const updateCountdown = () => {
      const remaining = calculateRemaining(COUNTDOWN_DATE);
      setCountdown(remaining);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateMarried = () => {
      const elapsed = calculateElapsed(COUNTDOWN_MARRIED_DATE);
      setCountdownMarried(elapsed);
    };

    updateMarried();
    const interval = setInterval(updateMarried, 1000);

    return () => clearInterval(interval);
  }, []);

  const isEventPassed =
    countdown.days === 0 && countdown.hours === 0 && countdown.minutes === 0 && countdown.seconds === 0;

  return (
    <section id="contagem" className="mx-auto max-w-xl scroll-mt-8 py-8 text-center sm:py-10">
      {isEventPassed ? (
        <>
          <div className="mb-6">
            <span className="text-primary font-sans text-xs font-semibold tracking-[0.25em] uppercase">
              NOSSA UNIÃO
            </span>
            <h4 className="font-Cormorant mt-1 text-2xl font-bold text-gray-800 sm:text-3xl">Casados há</h4>
          </div>

          <div className="xs:gap-2 flex items-center justify-center gap-1.5 sm:gap-3.5">
            <NumberCard number={countdownMarried.days} label="Dias" />
            <NumberCard number={countdownMarried.hours} label="Horas" />
            <NumberCard number={countdownMarried.minutes} label="Minutos" />
            <NumberCard number={countdownMarried.seconds} label="Segundos" />
          </div>
        </>
      ) : (
        <>
          <div className="mb-6">
            <span className="text-primary font-sans text-xs font-semibold tracking-[0.25em] uppercase">
              #SAVETHEDATE • 05.12.2026
            </span>
            <h4 className="font-Cormorant mt-1 text-2xl font-bold text-gray-800 sm:text-3xl">Contagem Regressiva</h4>
          </div>

          <div className="xs:gap-2 flex items-center justify-center gap-1.5 sm:gap-3.5">
            <NumberCard number={countdown.days} label="Dias" />
            <NumberCard number={countdown.hours} label="Horas" />
            <NumberCard number={countdown.minutes} label="Minutos" />
            <NumberCard number={countdown.seconds} label="Segundos" />
          </div>
        </>
      )}
    </section>
  );
});

interface NumberCardProps {
  number: number;
  label: string;
}

const NumberCard = memo(({ number, label }: NumberCardProps) => {
  const numberString = number < 100 ? ('0' + number).slice(-2) : String(number);

  return (
    <div className="interactive-tactile border-primary/15 bg-sand/60 sm:bg-sand/70 hover:border-primary/30 xs:min-w-[70px] flex max-w-[85px] min-w-[62px] flex-1 flex-col items-center justify-center rounded-2xl border px-1.5 py-2.5 text-center shadow-xs transition-[transform,background-color,border-color,box-shadow] duration-200 hover:bg-white/80 sm:max-w-[110px] sm:min-w-[92px] sm:px-4 sm:py-4">
      <div className="py-0.5 sm:py-1">
        <div
          key={numberString}
          className="countdown-digit-tick font-Cormorant text-primary xs:text-3xl text-2xl leading-tight font-bold select-none sm:text-4xl"
          style={{ fontVariantNumeric: 'tabular-nums' }}
        >
          {numberString}
        </div>
      </div>
      <span className="xs:text-[10px] mt-0.5 font-sans text-[9px] font-medium tracking-wider text-gray-500 uppercase sm:text-[11px]">
        {label}
      </span>
    </div>
  );
});

export function CountdownWedding() {
  return <Countdown />;
}
