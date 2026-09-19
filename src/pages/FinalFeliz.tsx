import { useEffect, useState } from 'react';
import { ArrowUpRight, Gift } from '@phosphor-icons/react';

export function FinalFeliz() {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (countdown === 0) {
      window.location.href = 'https://www.finalfeliz.de/yuri-gabriela-';
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  return (
    <div className="bg-linen flex min-h-screen w-full flex-col items-center justify-center px-4 text-center">
      <div className="border-primary/15 max-w-md rounded-3xl border bg-white/80 p-8 shadow-lg backdrop-blur-sm sm:p-10">
        <div className="bg-primary/10 text-primary mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl">
          <Gift size={32} weight="regular" />
        </div>
        <h1 className="font-Cormorant mb-2 text-2xl font-bold text-gray-800 sm:text-3xl">
          Lista de Presentes de Gabriela & Yuri
        </h1>
        <p className="mb-6 font-sans text-sm text-gray-600">
          Redirecionando você para o nosso site no Final Feliz em {countdown} segundo{countdown !== 1 ? 's' : ''}...
        </p>

        <a
          href="https://www.finalfeliz.de/yuri-gabriela-"
          className="bg-primary hover:bg-secondary inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-sans text-sm font-semibold text-white shadow-sm transition-all duration-160 ease-out hover:shadow-md"
        >
          <span>Ir para a lista agora</span>
          <ArrowUpRight size={16} weight="bold" />
        </a>
      </div>
    </div>
  );
}
