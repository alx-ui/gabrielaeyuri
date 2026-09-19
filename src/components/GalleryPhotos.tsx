import { useCallback, useEffect, useState } from 'react';
import { X, CaretLeft, CaretRight, ArrowsOut, Camera } from '@phosphor-icons/react';

import foto1 from 'assets/galery/foto1.jpg';
import foto2 from 'assets/galery/foto2.jpg';
import foto3 from 'assets/galery/foto3.jpg';
import foto4 from 'assets/galery/foto4.jpg';
import foto5 from 'assets/galery/foto5.jpg';
import foto6 from 'assets/galery/foto6.jpg';
import foto7 from 'assets/galery/foto7.jpg';

interface PhotoItem {
  id: number;
  src: string;
  alt: string;
}

const photos: PhotoItem[] = [
  { id: 0, src: foto1, alt: 'Ensaio Pré-Wedding - Foto 1' },
  { id: 1, src: foto3, alt: 'Ensaio Pré-Wedding - Foto 2' },
  { id: 2, src: foto2, alt: 'Ensaio Pré-Wedding - Foto 3' },
  { id: 3, src: foto6, alt: 'Ensaio Pré-Wedding - Foto 4' },
  { id: 4, src: foto5, alt: 'Ensaio Pré-Wedding - Foto 5' },
  { id: 5, src: foto4, alt: 'Ensaio Pré-Wedding - Foto 6' },
  { id: 6, src: foto7, alt: 'Ensaio Pré-Wedding - Foto 7' },
];

export function GalleryPhotos() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'auto';
  }, []);

  const nextImage = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % photos.length);
    }
  }, [selectedImageIndex]);

  const prevImage = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + photos.length) % photos.length);
    }
  }, [selectedImageIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchStartX - touchEndX;

    if (Math.abs(deltaX) > 45) {
      if (deltaX > 0) {
        nextImage();
      } else {
        prevImage();
      }
    }
    setTouchStartX(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, closeLightbox, nextImage, prevImage]);

  return (
    <section className="w-full">
      <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10 md:mb-14">
        <span className="text-primary inline-flex items-center gap-1.5 font-sans text-xs font-semibold tracking-[0.25em] uppercase">
          <Camera size={15} weight="bold" className="text-primary" />
          Ensaio dos Noivos
        </span>
        <h3 className="font-Cormorant xs:text-3xl mt-2 text-2xl font-bold tracking-tight text-gray-800 sm:text-4xl md:text-5xl">
          Nosso Pré-Wedding
        </h3>
        <p className="font-Cormorant mt-2 text-base text-gray-600 italic sm:text-lg md:text-xl">
          Momentos espontâneos registrados com carinho antes do nosso grande dia.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3.5 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
        <div
          onClick={() => openLightbox(0)}
          className="group border-primary/10 bg-sand/30 xs:min-h-[340px] relative col-span-1 min-h-[260px] cursor-pointer overflow-hidden rounded-3xl border shadow-sm transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-xl active:scale-[0.98] sm:min-h-[440px] md:col-span-2 lg:col-span-2 lg:row-span-2 lg:min-h-[520px]"
        >
          <img
            src={photos[0].src}
            alt={photos[0].alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/25 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
          <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1.5 text-xs font-medium text-gray-800 backdrop-blur-md transition-[opacity,transform] duration-200 ease-out group-hover:bg-white sm:opacity-0 sm:group-hover:opacity-100">
            <ArrowsOut size={14} className="text-primary" />
            <span className="font-sans text-[11px] font-semibold tracking-wider uppercase">Ampliar</span>
          </div>
        </div>

        <div
          onClick={() => openLightbox(1)}
          className="group border-primary/10 bg-sand/30 relative col-span-1 min-h-[250px] cursor-pointer overflow-hidden rounded-3xl border shadow-sm transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-xl active:scale-[0.98] sm:min-h-[260px] lg:col-span-1 lg:row-span-1"
        >
          <img
            src={photos[1].src}
            alt={photos[1].alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/25 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
          <div className="text-primary absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur-md transition-[opacity,transform] duration-200 ease-out group-hover:bg-white sm:opacity-0 sm:group-hover:opacity-100">
            <ArrowsOut size={16} />
          </div>
        </div>

        <div
          onClick={() => openLightbox(2)}
          className="group border-primary/10 bg-sand/30 relative col-span-1 min-h-[250px] cursor-pointer overflow-hidden rounded-3xl border shadow-sm transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-xl active:scale-[0.98] sm:min-h-[260px] lg:col-span-1 lg:row-span-1"
        >
          <img
            src={photos[2].src}
            alt={photos[2].alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/25 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
          <div className="text-primary absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur-md transition-[opacity,transform] duration-200 ease-out group-hover:bg-white sm:opacity-0 sm:group-hover:opacity-100">
            <ArrowsOut size={16} />
          </div>
        </div>

        <div
          onClick={() => openLightbox(3)}
          className="group border-primary/10 bg-sand/30 relative col-span-1 min-h-[250px] cursor-pointer overflow-hidden rounded-3xl border shadow-sm transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-xl active:scale-[0.98] sm:min-h-[260px] lg:col-span-1 lg:row-span-1"
        >
          <img
            src={photos[3].src}
            alt={photos[3].alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/25 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
          <div className="text-primary absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur-md transition-[opacity,transform] duration-200 ease-out group-hover:bg-white sm:opacity-0 sm:group-hover:opacity-100">
            <ArrowsOut size={16} />
          </div>
        </div>

        <div
          onClick={() => openLightbox(4)}
          className="group border-primary/10 bg-sand/30 relative col-span-1 min-h-[250px] cursor-pointer overflow-hidden rounded-3xl border shadow-sm transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-xl active:scale-[0.98] sm:min-h-[260px] lg:col-span-1 lg:row-span-1"
        >
          <img
            src={photos[4].src}
            alt={photos[4].alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/25 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
          <div className="text-primary absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur-md transition-[opacity,transform] duration-200 ease-out group-hover:bg-white sm:opacity-0 sm:group-hover:opacity-100">
            <ArrowsOut size={16} />
          </div>
        </div>

        <div
          onClick={() => openLightbox(5)}
          className="group border-primary/10 bg-sand/30 relative col-span-1 min-h-[260px] cursor-pointer overflow-hidden rounded-3xl border shadow-sm transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-xl active:scale-[0.98] sm:min-h-[280px] md:col-span-1 lg:col-span-2"
        >
          <img
            src={photos[5].src}
            alt={photos[5].alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/25 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
          <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1.5 text-xs font-medium text-gray-800 backdrop-blur-md transition-[opacity,transform] duration-200 ease-out group-hover:bg-white sm:opacity-0 sm:group-hover:opacity-100">
            <ArrowsOut size={14} className="text-primary" />
            <span className="font-sans text-[11px] font-semibold tracking-wider uppercase">Ampliar</span>
          </div>
        </div>

        <div
          onClick={() => openLightbox(6)}
          className="group border-primary/10 bg-sand/30 relative col-span-1 min-h-[260px] cursor-pointer overflow-hidden rounded-3xl border shadow-sm transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-xl active:scale-[0.98] sm:min-h-[280px] md:col-span-1 lg:col-span-2"
        >
          <img
            src={photos[6].src}
            alt={photos[6].alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/25 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
          <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1.5 text-xs font-medium text-gray-800 backdrop-blur-md transition-[opacity,transform] duration-200 ease-out group-hover:bg-white sm:opacity-0 sm:group-hover:opacity-100">
            <ArrowsOut size={14} className="text-primary" />
            <span className="font-sans text-[11px] font-semibold tracking-wider uppercase">Ampliar</span>
          </div>
        </div>
      </div>

      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 backdrop-blur-md transition-opacity duration-200 ease-out sm:p-4"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="dialog"
          aria-modal="true"
          aria-label="Visualizador de Fotos"
        >
          <div
            className="absolute top-0 right-0 left-0 flex items-center justify-between p-3.5 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-full bg-white/15 px-3.5 py-1 backdrop-blur-md sm:px-4 sm:py-1.5">
              <span className="font-sans text-[11px] font-medium tracking-widest text-white/90 uppercase sm:text-xs">
                {selectedImageIndex + 1} de {photos.length}
              </span>
            </div>

            <button
              type="button"
              onClick={closeLightbox}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-[transform,background-color] duration-160 ease-out hover:bg-white/30 active:scale-[0.95] sm:h-11 sm:w-11"
              aria-label="Fechar galeria"
            >
              <X size={22} className="sm:hidden" />
              <X size={24} className="hidden sm:block" />
            </button>
          </div>

          <div
            className="relative flex max-h-[85vh] max-w-5xl items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={prevImage}
              className="absolute left-1 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-[transform,background-color] duration-160 ease-out hover:bg-black/60 active:scale-[0.95] sm:-left-16 sm:h-14 sm:w-14"
              aria-label="Foto anterior"
            >
              <CaretLeft size={22} className="sm:hidden" />
              <CaretLeft size={30} className="hidden sm:block" />
            </button>

            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={photos[selectedImageIndex].src}
                alt={photos[selectedImageIndex].alt}
                className="max-h-[80vh] max-w-full rounded-2xl object-contain select-none"
              />
            </div>

            <button
              type="button"
              onClick={nextImage}
              className="absolute right-1 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-[transform,background-color] duration-160 ease-out hover:bg-black/60 active:scale-[0.95] sm:-right-16 sm:h-14 sm:w-14"
              aria-label="Próxima foto"
            >
              <CaretRight size={22} className="sm:hidden" />
              <CaretRight size={30} className="hidden sm:block" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
