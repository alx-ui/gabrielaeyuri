import { Compass, Gift, House, Sparkle } from '@phosphor-icons/react';
import { useNavigate } from 'react-router';

export function NotFound() {
  const navigate = useNavigate();

  const handleNavigateToRsvp = () => {
    navigate('/');
    setTimeout(() => {
      const rsvpElement = document.getElementById('rsvp');
      if (rsvpElement) {
        rsvpElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <main
      className="bg-linen relative flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden px-4 py-12 text-center select-none"
      style={{
        fontFamily: 'Cormorant Garamond, serif',
      }}
    >
      {/* Soft decorative background glows */}
      <div
        aria-hidden="true"
        className="bg-primary/10 pointer-events-none absolute -top-28 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="bg-sand pointer-events-none absolute -bottom-28 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full blur-2xl"
      />

      {/* Main Glassmorphic Card */}
      <div className="nf-reveal-card border-primary/15 bg-cream/85 shadow-primary/5 relative z-10 w-full max-w-lg rounded-3xl border p-6 shadow-xl backdrop-blur-md sm:p-10">
        {/* Top Badge */}
        <div className="nf-reveal-1 mb-6 flex items-center justify-center gap-2">
          <span className="border-primary/20 bg-primary/5 text-primary inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-sans text-xs font-medium tracking-wider uppercase">
            <Sparkle size={13} weight="fill" className="text-primary" />
            Página não encontrada • 404
          </span>
        </div>

        {/* Poetic Icon */}
        <div className="nf-reveal-2 border-primary/20 from-primary/15 via-primary/5 text-primary mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border bg-gradient-to-br to-transparent shadow-inner">
          <Compass size={40} weight="light" />
        </div>

        {/* Title & Description */}
        <h1 className="nf-reveal-2 font-Cormorant mb-3 text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl">
          Esse caminho não leva ao altar...
        </h1>

        <p className="nf-reveal-3 mx-auto mb-8 max-w-md font-sans text-sm leading-relaxed text-gray-600 sm:text-base">
          A página que você buscou não existe ou foi alterada. Mas não se preocupe: a celebração de{' '}
          <span className="text-primary font-semibold">Gabriela &amp; Yuri</span> continua esperando por você.
        </p>

        {/* Action Buttons with Emil-style tactile feedback */}
        <div className="nf-reveal-4 flex flex-col gap-3.5">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="interactive-tactile bg-primary hover:bg-secondary shadow-primary/20 inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl px-6 py-3.5 font-sans text-sm font-semibold text-white shadow-md"
          >
            <House size={18} weight="bold" />
            <span>Voltar para a celebração</span>
          </button>

          <div className="mt-1 flex items-center justify-center gap-2 pt-1 font-sans text-xs text-gray-500">
            <span>Ou acerte seu destino:</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <button
              type="button"
              onClick={() => navigate('/finalfeliz')}
              className="interactive-tactile border-primary/20 hover:border-primary hover:text-primary inline-flex cursor-pointer items-center gap-1.5 rounded-lg border bg-white/70 px-3.5 py-2 font-sans text-xs font-medium text-gray-700 shadow-xs hover:bg-white"
            >
              <Gift size={15} weight="regular" className="text-primary" />
              <span>Lista de Presentes</span>
            </button>

            <button
              type="button"
              onClick={handleNavigateToRsvp}
              className="interactive-tactile border-primary/20 hover:border-primary hover:text-primary inline-flex cursor-pointer items-center gap-1.5 rounded-lg border bg-white/70 px-3.5 py-2 font-sans text-xs font-medium text-gray-700 shadow-xs hover:bg-white"
            >
              <Sparkle size={15} weight="regular" className="text-primary" />
              <span>Confirmar Presença</span>
            </button>
          </div>
        </div>

        {/* Footer Signature */}
        <div className="border-primary/10 mt-8 border-t pt-4 text-center font-sans text-xs text-gray-400">
          <span className="font-Cormorant text-primary/80 text-sm font-medium">Gabriela &amp; Yuri</span> • Celebrando o
          amor
        </div>
      </div>
    </main>
  );
}
