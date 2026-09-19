import { CalendarPlus, Heart, Wine } from '@phosphor-icons/react';

const CALENDAR_URL = `https://www.google.com/calendar/render?action=TEMPLATE&text=%E2%9D%A4+Gabriela+%26+Yuri+%E2%9D%A4&details=Com+toda+alegria%2C+convidamos+para+o+casamento+de+Gabriela+e+Yuri!%0A%0ABoas-vindas%3A+16%3A30%0ACerim%C3%B4nia%3A+17%3A00&dates=20261205T193000Z%2F20261206T030000Z&location=Espa%C3%A7o+de+Festa+La+Belle+Maison+-+Av.+Juscelino+Kubitschek%2C+621+-+Resende%2C+RJ`;

export function Agendas() {
  return (
    <div id="agenda" className="mx-auto max-w-2xl scroll-mt-8 py-12 md:py-16">
      <div className="border-primary/15 bg-linen/90 relative overflow-hidden rounded-3xl border p-5 text-center shadow-sm sm:p-10 md:p-12">
        <div className="bg-primary/5 pointer-events-none absolute -top-24 left-1/2 h-48 w-72 -translate-x-1/2 rounded-full blur-3xl" />

        <span className="text-primary mb-2.5 inline-block font-sans text-xs font-semibold tracking-[0.25em] uppercase">
          Save the Date
        </span>

        <h3 className="font-Cormorant xs:text-3xl text-2xl font-bold tracking-wide text-gray-800 sm:text-4xl md:text-5xl">
          Sábado, 5 de Dezembro de 2026
        </h3>

        <div className="bg-primary/25 mx-auto my-3.5 h-0.5 w-12 rounded-full" />

        <p className="font-Cormorant mx-auto max-w-md text-base text-gray-600 italic sm:text-lg">
          Com muita alegria, convidamos você para celebrar conosco
        </p>

        <div className="my-6 grid grid-cols-1 gap-3.5 sm:my-8 sm:grid-cols-2 sm:gap-4">
          <div className="border-primary/10 bg-sand/60 hover:border-primary/25 flex flex-col items-center rounded-2xl border p-4 shadow-xs transition-[transform,border-color,box-shadow] duration-200 hover:shadow-sm sm:p-6">
            <div className="bg-primary/10 text-primary mb-2.5 flex h-11 w-11 items-center justify-center rounded-full sm:mb-3 sm:h-12 sm:w-12">
              <Wine size={22} weight="regular" className="sm:hidden" />
              <Wine size={24} weight="regular" className="hidden sm:block" />
            </div>
            <span className="mb-1 font-sans text-[11px] font-semibold tracking-wider text-gray-500 uppercase sm:text-xs">
              Boas-vindas
            </span>
            <span className="text-primary font-sans text-2xl font-bold tracking-tight sm:text-3xl">16:30</span>
          </div>

          <div className="border-primary/10 bg-sand/60 hover:border-primary/25 flex flex-col items-center rounded-2xl border p-4 shadow-xs transition-[transform,border-color,box-shadow] duration-200 hover:shadow-sm sm:p-6">
            <div className="bg-primary/10 text-primary mb-2.5 flex h-11 w-11 items-center justify-center rounded-full sm:mb-3 sm:h-12 sm:w-12">
              <Heart size={22} weight="fill" className="sm:hidden" />
              <Heart size={24} weight="fill" className="hidden sm:block" />
            </div>
            <span className="mb-1 font-sans text-[11px] font-semibold tracking-wider text-gray-500 uppercase sm:text-xs">
              Cerimônia
            </span>
            <span className="text-primary font-sans text-2xl font-bold tracking-tight sm:text-3xl">17:00</span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noreferrer"
            className="bg-primary hover:bg-secondary focus:ring-primary/40 inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-2xl px-6 py-3.5 font-sans text-sm font-semibold text-white shadow-sm transition-[transform,background-color,box-shadow] duration-160 ease-out hover:shadow-md focus:ring-2 focus:ring-offset-2 focus:outline-none active:scale-[0.98] sm:w-auto sm:px-8 sm:py-4 sm:text-base"
          >
            <CalendarPlus size={20} weight="bold" />
            <span>Adicionar ao calendário</span>
          </a>
          <span className="mt-2.5 font-sans text-[11px] text-gray-400 sm:text-xs">
            Sincronize com o seu Google Agenda
          </span>
        </div>
      </div>
    </div>
  );
}
