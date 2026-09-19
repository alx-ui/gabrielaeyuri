interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WelcomeModal({ isOpen, onClose }: WelcomeModalProps) {
  return (
    <div
      className={`fixed inset-0 z-50 h-full w-full overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        !isOpen ? 'pointer-events-none invisible -translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="bg-linen/95 fixed inset-0 flex h-full w-full flex-col items-center justify-center p-4 backdrop-blur-md sm:p-6">
        <div className="border-primary/10 flex w-full max-w-md flex-col items-center rounded-3xl border bg-white/80 p-6 text-center shadow-xl backdrop-blur-sm sm:p-12">
          <span className="text-primary mb-2.5 font-sans text-[11px] font-semibold tracking-[0.25em] uppercase sm:mb-3 sm:text-xs sm:tracking-[0.3em]">
            Bem-vindos ao casamento de
          </span>
          <h4 className="font-Cormorant xs:text-4xl mb-3 text-3xl font-bold tracking-wide text-gray-800 sm:text-6xl">
            Gabriela & Yuri
          </h4>
          <p className="font-Cormorant mb-6 text-base text-gray-500 italic sm:mb-8 sm:text-lg">
            05 de Dezembro de 2026
          </p>

          <button
            type="button"
            className="interactive-tactile bg-primary hover:bg-secondary focus:ring-primary/40 cursor-pointer rounded-xl px-7 py-3 font-sans text-sm font-semibold text-white shadow-md transition-[transform,background-color,box-shadow] duration-160 ease-out hover:shadow-lg focus:ring-2 focus:ring-offset-2 focus:outline-none active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 sm:px-8 sm:py-3.5 sm:text-base"
            onClick={onClose}
          >
            Entrar no site
          </button>
        </div>
      </div>
    </div>
  );
}
