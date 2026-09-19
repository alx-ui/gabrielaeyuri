import { useState, type FormEvent } from 'react';
import { ArrowSquareOut, InstagramLogo, MapPin, NavigationArrow } from '@phosphor-icons/react';

import { SectionWrapper } from 'components/SectionWrapper';

const MAP_EMBEDED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.524792671569!2d-44.47761972378877!3d-22.470968679562723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9e9876a918841f%3A0x438682f250b8a761!2sEspa%C3%A7o%20de%20Festa%20La%20Belle%20Maison!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr';

const MAP_TITLE = 'Espaço de Festa La Belle Maison';
const MAP_ADDRESS = 'Av. Juscelino Kubitschek, 621 - Vila Hulda Rocha, Resende - RJ, 27522-130';
const VENUE_INSTAGRAM_URL = 'https://www.instagram.com/festaslabellemaison';
const VENUE_MAPS_URL =
  'https://www.google.com/maps/place/Espa%C3%A7o+de+Festa+La+Belle+Maison/@-22.4709687,-44.4750448,17z/data=!3m1!4b1!4m6!3m5!1s0x9e9876a918841f:0x438682f250b8a761!8m2!3d-22.4709687!4d-44.4750448!16s%2Fg%2F11g_zmqx3!5m1!1e1';

export function LocationMap() {
  const [endereco, setEndereco] = useState('');

  const handleRouteSubmit = (e: FormEvent) => {
    e.preventDefault();
    const destination = encodeURIComponent(
      'Espaço de Festa La Belle Maison, Av. Juscelino Kubitschek, 621 - Resende, RJ',
    );
    const url = endereco.trim()
      ? `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(endereco.trim())}&destination=${destination}`
      : VENUE_MAPS_URL;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="local" className="bg-linen/60 py-12 md:py-20">
      <SectionWrapper>
        <div className="flex flex-col-reverse gap-8 lg:flex-row lg:items-center lg:gap-12">
          <div className="w-full lg:w-1/2">
            <div className="border-primary/15 overflow-hidden rounded-3xl border bg-white p-2 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-2.5">
              <iframe
                src={MAP_EMBEDED_URL}
                className="xs:h-[340px] h-[280px] w-full rounded-2xl sm:h-[420px] lg:h-[480px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={MAP_TITLE}
                aria-label={MAP_TITLE}
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="text-center lg:text-left">
              <span className="text-primary mb-2.5 inline-block font-sans text-xs font-semibold tracking-[0.25em] uppercase">
                Localização
              </span>

              <h2 className="font-Cormorant xs:text-3xl text-2xl font-bold tracking-tight text-gray-800 sm:text-4xl lg:text-5xl">
                {MAP_TITLE}
              </h2>

              <div className="bg-primary/25 mx-auto my-3.5 h-0.5 w-12 rounded-full sm:my-4 lg:mx-0">
                <span className="sr-only">Divisor</span>
              </div>

              <div className="mb-5 flex items-start justify-center gap-2.5 text-gray-600 sm:mb-6 lg:justify-start">
                <MapPin size={22} weight="fill" className="text-primary mt-0.5 shrink-0" />
                <p className="font-Cormorant text-base leading-snug sm:text-xl">{MAP_ADDRESS}</p>
              </div>

              <div className="mb-6 flex justify-center sm:mb-8 lg:justify-start">
                <a
                  href={VENUE_INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-primary/20 bg-sand/70 hover:border-primary/40 hover:bg-sand group inline-flex max-w-full items-center gap-2.5 rounded-2xl border px-3.5 py-2 text-sm font-medium text-gray-700 shadow-xs transition-[transform,border-color,background-color] duration-200 hover:shadow-sm sm:px-4 sm:py-2.5"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-xs">
                    <InstagramLogo size={18} weight="bold" />
                  </div>
                  <div className="flex min-w-0 flex-col text-left">
                    <span className="font-sans text-[10px] font-semibold tracking-wider text-gray-500 uppercase sm:text-[11px]">
                      Espaço no Instagram
                    </span>
                    <span className="text-primary truncate font-sans text-xs font-semibold group-hover:underline sm:text-sm">
                      @festaslabellemaison
                    </span>
                  </div>
                  <ArrowSquareOut
                    size={16}
                    weight="bold"
                    className="text-primary/70 ml-1 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>

              <form onSubmit={handleRouteSubmit} className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-3">
                <input
                  type="text"
                  className="border-primary/20 focus:border-primary focus:ring-primary/20 w-full rounded-2xl border bg-white px-4 py-3 font-sans text-sm text-gray-800 placeholder-gray-400 shadow-xs transition-[border-color,box-shadow] focus:ring-2 focus:outline-none sm:py-3.5 sm:text-base lg:max-w-xs"
                  placeholder="Seu ponto de partida..."
                  value={endereco}
                  onChange={(e) => setEndereco(e.target.value)}
                />

                <button
                  type="submit"
                  className="bg-primary hover:bg-secondary focus:ring-primary/40 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl px-5 py-3 font-sans text-sm font-semibold tracking-wide text-white shadow-sm transition-[transform,background-color,box-shadow] duration-150 hover:shadow-md focus:ring-2 focus:ring-offset-2 focus:outline-none active:scale-[0.98] sm:w-auto sm:px-6 sm:py-3.5 sm:text-base sm:whitespace-nowrap"
                >
                  <NavigationArrow size={18} weight="bold" />
                  <span>{endereco.trim() ? 'Traçar rota' : 'Como chegar'}</span>
                </button>
              </form>

              <div className="mt-4 flex justify-center lg:justify-start">
                <a
                  href={VENUE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-secondary group inline-flex items-center gap-1.5 font-sans text-xs font-semibold tracking-wide underline underline-offset-4 transition-colors"
                >
                  <span>Abrir diretamente no Google Maps</span>
                  <ArrowSquareOut
                    size={14}
                    weight="bold"
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
