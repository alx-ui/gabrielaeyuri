export function Blessings() {
  return (
    <section id="bencaos" className="bg-linen scroll-mt-8 py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="border-primary/15 bg-sand/40 relative overflow-hidden rounded-3xl border p-5 text-center shadow-sm sm:p-10 md:p-16">
          <div className="bg-primary/5 pointer-events-none absolute -top-20 left-1/2 h-44 w-80 -translate-x-1/2 rounded-full blur-3xl" />

          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="bg-primary/30 h-px w-8 sm:w-16" />
            <span className="text-primary font-sans text-xs font-semibold tracking-[0.25em] uppercase md:text-sm">
              Com as bênçãos de nossos pais
            </span>
            <div className="bg-primary/30 h-px w-8 sm:w-16" />
          </div>

          <div className="relative z-10 my-6 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8 md:gap-12">
            <div className="border-primary/10 bg-linen/80 hover:border-primary/25 flex w-full flex-1 flex-col items-center rounded-2xl border px-5 py-5 shadow-sm transition-[transform,border-color,box-shadow] duration-200 sm:w-auto sm:px-6 sm:py-8">
              <span className="text-primary/80 mb-1 font-sans text-[11px] font-semibold tracking-widest uppercase">
                Pais da Noiva
              </span>
              <h3 className="font-Cormorant text-2xl font-semibold tracking-wide text-gray-800 sm:text-3xl">
                Livia & Jorge
              </h3>
            </div>

            <div className="relative flex shrink-0 items-center justify-center">
              <div className="border-primary/25 flex h-12 w-12 items-center justify-center rounded-full border bg-white shadow-md transition-transform duration-200 hover:scale-105 sm:h-16 sm:w-16">
                <span className="font-alex text-primary pt-0.5 text-2xl font-normal select-none sm:pt-1 sm:text-4xl">
                  &
                </span>
              </div>
            </div>

            <div className="border-primary/10 bg-linen/80 hover:border-primary/25 flex w-full flex-1 flex-col items-center rounded-2xl border px-5 py-5 shadow-sm transition-[transform,border-color,box-shadow] duration-200 sm:w-auto sm:px-6 sm:py-8">
              <span className="text-primary/80 mb-1 font-sans text-[11px] font-semibold tracking-widest uppercase">
                Pais do Noivo
              </span>
              <h3 className="font-Cormorant text-2xl font-semibold tracking-wide text-gray-800 sm:text-3xl">
                Andrea & Urai
              </h3>
            </div>
          </div>

          <div className="bg-primary/25 mx-auto my-6 h-px w-16" />

          <p className="font-Cormorant mx-auto max-w-xl text-lg text-gray-600 italic sm:text-xl">
            Agradecemos a Deus e aos nossos pais por todo amor, apoio e dedicação que nos guiaram até o início deste
            novo capítulo.
          </p>
        </div>
      </div>
    </section>
  );
}
