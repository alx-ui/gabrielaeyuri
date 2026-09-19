import { useEffect, useState } from 'react';
import { ArrowUpRight, Gift, PixLogo } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { PixModal } from 'components/PixModal';

export function DigitalEnvelope() {
  const [isPixModalOpen, setIsPixModalOpen] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.get('pix') === 'open' || window.location.hash === '#pix') {
      setIsPixModalOpen(true);
    }
  }, []);

  return (
    <section id="presentes" className="mx-auto max-w-4xl scroll-mt-8 py-12 md:py-16">
      <PixModal isOpen={isPixModalOpen} onClose={() => setIsPixModalOpen(false)} />

      <div className="border-primary/15 bg-sand/40 relative overflow-hidden rounded-3xl border p-5 shadow-sm sm:p-10 md:p-14">
        <div className="bg-primary/5 pointer-events-none absolute -top-24 left-1/2 h-56 w-96 -translate-x-1/2 rounded-full blur-3xl" />
        <div className="bg-primary/5 pointer-events-none absolute -right-12 -bottom-24 h-48 w-72 rounded-full blur-3xl" />

        <div className="relative z-10 mb-8 text-center sm:mb-10 md:mb-12">
          <div className="mb-3 flex items-center justify-center gap-3">
            <div className="bg-primary/30 h-px w-8 sm:w-16" />
            <span className="text-primary font-sans text-xs font-semibold tracking-[0.25em] uppercase md:text-sm">
              Lista de Presentes & Afeto
            </span>
            <div className="bg-primary/30 h-px w-8 sm:w-16" />
          </div>

          <h3 className="font-Cormorant xs:text-3xl text-2xl font-bold tracking-wide text-gray-800 sm:text-4xl md:text-5xl">
            Mimos, Afeto & Celebração
          </h3>

          <div className="bg-primary/25 mx-auto my-3.5 h-0.5 w-12 rounded-full" />

          <p className="font-Cormorant mx-auto max-w-2xl text-base text-gray-600 italic sm:text-lg md:text-xl">
            A presença de vocês é o nosso maior presente. Caso queiram nos abençoar com uma lembrança para o nosso novo
            lar ou contribuir com a nossa lua de mel, selecionamos com carinho as opções abaixo:
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
          <div className="border-primary/15 bg-linen/90 hover:border-primary/30 group relative flex flex-col justify-between rounded-2xl border p-5 shadow-sm transition-[transform,border-color,box-shadow] duration-200 hover:shadow-md sm:p-8">
            <div>
              <div className="mb-4 flex items-center justify-between">
                <div className="bg-primary/10 text-primary group-hover:bg-primary flex h-13 w-13 items-center justify-center rounded-2xl transition-colors duration-200 group-hover:text-white">
                  <PixLogo size={28} weight="bold" />
                </div>
                <span className="bg-primary/10 text-primary rounded-full px-3 py-1 font-sans text-[11px] font-semibold tracking-wider uppercase">
                  Mais Prático
                </span>
              </div>

              <h4 className="font-Cormorant mb-2 text-2xl font-bold text-gray-800 sm:text-3xl">Cotas de Lua de Mel</h4>
              <p className="mb-6 font-sans text-sm leading-relaxed text-gray-600 sm:text-base">
                Ajude-nos a colecionar memórias inesquecíveis na nossa viagem dos sonhos. Você pode enviar qualquer
                valor via Pix de forma rápida e segura para os noivos.
              </p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setIsPixModalOpen(true)}
                className="interactive-tactile bg-primary hover:bg-secondary focus:ring-primary/40 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl px-5 py-2.5 font-sans text-sm font-semibold text-white shadow-sm transition-all duration-160 ease-out hover:shadow-md focus:ring-2 focus:outline-none sm:py-3"
              >
                <PixLogo size={18} weight="bold" />
                <span>Contribuir com Pix</span>
                <ArrowUpRight size={16} weight="bold" />
              </button>
            </div>
          </div>

          <div className="border-primary/15 bg-linen/90 hover:border-primary/30 group relative flex flex-col justify-between rounded-2xl border p-5 shadow-sm transition-[transform,border-color,box-shadow] duration-200 hover:shadow-md sm:p-8">
            <div>
              <div className="mb-4 flex items-center justify-between">
                <div className="bg-primary/10 text-primary group-hover:bg-primary flex h-13 w-13 items-center justify-center rounded-2xl transition-colors duration-200 group-hover:text-white">
                  <Gift size={28} weight="regular" />
                </div>
                <span className="bg-primary/10 text-primary rounded-full px-3 py-1 font-sans text-[11px] font-semibold tracking-wider uppercase">
                  Site & Lista
                </span>
              </div>

              <h4 className="font-Cormorant mb-2 text-2xl font-bold text-gray-800 sm:text-3xl">
                Lista de Presentes Virtual
              </h4>
              <p className="mb-6 font-sans text-sm leading-relaxed text-gray-600 sm:text-base">
                Para quem prefere nos presentear com itens para o nosso novo lar ou conferir nossa lista completa de
                presentes, criamos nossa lista oficial no Final Feliz.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/finalfeliz"
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-tactile bg-primary hover:bg-secondary focus:ring-primary/40 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl px-5 py-2.5 font-sans text-sm font-semibold text-white shadow-sm transition-all duration-160 ease-out hover:shadow-md focus:ring-2 focus:outline-none sm:py-3"
              >
                <Gift size={18} weight="bold" />
                <span>Acessar Lista no Final Feliz</span>
                <ArrowUpRight size={16} weight="bold" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
