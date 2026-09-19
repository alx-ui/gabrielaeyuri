import { ArrowSquareOut, Camera, CoatHanger, Footprints, Info, Tree } from '@phosphor-icons/react';

const LINK_INDICACAO =
  'https://www.google.com/search?q=traje+esporte+fino+casamento&tbm=isch&hl=pt-BR&client=ms-android-samsung-gs-rev1&prmd=isvn&sa=X&ved=2ahUKEwi6-5_P7938AhVHOLkGHW8UB7IQrNwCKAB6BQgBEKIC&biw=360&bih=700';

export function Information() {
  return (
    <section id="informacoes" className="mx-auto max-w-4xl scroll-mt-8 py-12 md:py-16">
      <div className="border-primary/15 bg-linen/90 relative overflow-hidden rounded-3xl border p-5 shadow-sm sm:p-10 md:p-12">
        <div className="bg-primary/5 pointer-events-none absolute -top-24 left-1/2 h-56 w-96 -translate-x-1/2 rounded-full blur-3xl" />

        <div className="relative z-10 mb-8 text-center sm:mb-10">
          <div className="mb-3 flex items-center justify-center gap-3">
            <div className="bg-primary/30 h-px w-8 sm:w-16" />
            <span className="text-primary inline-flex items-center gap-1.5 font-sans text-xs font-semibold tracking-[0.25em] uppercase md:text-sm">
              <Info size={15} weight="bold" />
              Orientações & Dicas
            </span>
            <div className="bg-primary/30 h-px w-8 sm:w-16" />
          </div>

          <h3 className="font-Cormorant text-3xl font-bold tracking-wide text-gray-800 sm:text-4xl md:text-5xl">
            Informações Importantes
          </h3>

          <div className="bg-primary/25 mx-auto my-3.5 h-0.5 w-12 rounded-full" />

          <p className="font-Cormorant mx-auto max-w-xl text-base text-gray-600 italic sm:text-lg md:text-xl">
            Como escolhemos realizar nossa celebração no campo, reunimos algumas dicas para que você aproveite esse dia
            com o máximo de conforto e alegria.
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          <div className="border-primary/10 bg-sand/50 hover:border-primary/25 flex flex-col justify-between rounded-2xl border p-5 shadow-xs transition-[transform,border-color,box-shadow] duration-200 sm:p-6">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <div className="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                  <CoatHanger size={22} weight="regular" />
                </div>
                <div>
                  <span className="text-primary/80 font-sans text-[10px] font-semibold tracking-wider uppercase">
                    Vestimenta
                  </span>
                  <h4 className="font-Cormorant text-xl font-bold text-gray-800 sm:text-2xl">Traje Esporte Fino</h4>
                </div>
              </div>
              <p className="font-sans text-xs leading-relaxed text-gray-600 sm:text-sm">
                Um visual leve, elegante e sofisticado, ideal para a atmosfera do campo e da tarde.
              </p>
            </div>
            <div className="mt-3 pt-2">
              <a
                href={LINK_INDICACAO}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary group inline-flex items-center gap-1.5 font-sans text-xs font-semibold tracking-wide underline underline-offset-2 transition-colors"
              >
                <span>Ver inspirações de traje</span>
                <ArrowSquareOut
                  size={14}
                  weight="bold"
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>

          <div className="border-primary/10 bg-sand/50 hover:border-primary/25 flex flex-col justify-between rounded-2xl border p-5 shadow-xs transition-[transform,border-color,box-shadow] duration-200 sm:p-6">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <div className="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                  <Footprints size={22} weight="regular" />
                </div>
                <div>
                  <span className="text-primary/80 font-sans text-[10px] font-semibold tracking-wider uppercase">
                    Conforto
                  </span>
                  <h4 className="font-Cormorant text-xl font-bold text-gray-800 sm:text-2xl">Sapatos Adequados</h4>
                </div>
              </div>
              <p className="font-sans text-xs leading-relaxed text-gray-600 sm:text-sm">
                Recomendamos evitar saltos finos ou agulha: a maior parte dos ambientes possui gramado natural.
              </p>
            </div>
          </div>

          <div className="border-primary/10 bg-sand/50 hover:border-primary/25 flex flex-col justify-between rounded-2xl border p-5 shadow-xs transition-[transform,border-color,box-shadow] duration-200 sm:p-6">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <div className="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                  <Tree size={22} weight="regular" />
                </div>
                <div>
                  <span className="text-primary/80 font-sans text-[10px] font-semibold tracking-wider uppercase">
                    Ambiente
                  </span>
                  <h4 className="font-Cormorant text-xl font-bold text-gray-800 sm:text-2xl">Ar Livre & Natureza</h4>
                </div>
              </div>
              <p className="font-sans text-xs leading-relaxed text-gray-600 sm:text-sm">
                Estamos cercados pela natureza! Levar um bom repelente pode garantir total tranquilidade durante toda a
                festa.
              </p>
            </div>
          </div>

          <div className="border-primary/10 bg-sand/50 hover:border-primary/25 flex flex-col justify-between rounded-2xl border p-5 shadow-xs transition-[transform,border-color,box-shadow] duration-200 sm:p-6">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <div className="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                  <Camera size={22} weight="regular" />
                </div>
                <div>
                  <span className="text-primary/80 font-sans text-[10px] font-semibold tracking-wider uppercase">
                    Celebração
                  </span>
                  <h4 className="font-Cormorant text-xl font-bold text-gray-800 sm:text-2xl">Viva Esse Momento</h4>
                </div>
              </div>
              <p className="font-sans text-xs leading-relaxed text-gray-600 sm:text-sm">
                Converse, dance, dê boas risadas e tire muitas fotos. Sua energia e alegria tornarão esse dia
                inesquecível!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
