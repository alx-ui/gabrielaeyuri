import { Link } from 'react-router';

import heroBgMobile from '../assets/hero-bg-mobile.jpg';

import { SectionWrapper } from 'components/SectionWrapper';

export function Links() {
  return (
    <div
      style={{
        fontFamily: 'Cormorant Garamond',
        lineHeight: '1.4',
      }}
      className="bg-linen min-h-screen"
    >
      <SectionWrapper className="bg-linen">
        <div className="w-full px-2 sm:px-4">
          <div className="flex items-center justify-center pt-8 sm:pt-10">
            <img
              src={heroBgMobile}
              alt="Gabriela e Yuri"
              className="border-primary/20 xs:h-44 xs:w-44 h-36 w-36 rounded-full border-4 object-cover shadow-lg sm:h-52 sm:w-52"
            />
          </div>

          <h4 className="font-Cormorant mb-6 pt-6 text-center text-3xl font-bold text-gray-800 sm:mb-8 sm:pt-8 sm:text-4xl">
            Gabriela & Yuri
          </h4>
          <div className="mx-auto flex max-w-md flex-col justify-evenly">
            <Link
              to="/"
              className="interactive-tactile bg-primary hover:bg-secondary mb-3.5 cursor-pointer rounded-2xl py-3.5 text-center font-sans text-sm font-semibold text-white shadow-md transition-[transform,background-color,box-shadow] duration-160 ease-out hover:shadow-lg active:scale-[0.97] sm:mb-4 sm:text-base"
            >
              Site dos noivos
            </Link>

            <Link
              to="/#rsvp"
              className="interactive-tactile bg-primary hover:bg-secondary mb-3.5 cursor-pointer rounded-2xl py-3.5 text-center font-sans text-sm font-semibold text-white shadow-md transition-[transform,background-color,box-shadow] duration-160 ease-out hover:shadow-lg active:scale-[0.97] sm:mb-4 sm:text-base"
            >
              Confirmar Presença
            </Link>

            <a
              href="https://www.finalfeliz.de/yuri-gabriela-"
              target="_blank"
              rel="noopener noreferrer"
              className="interactive-tactile bg-primary hover:bg-secondary mb-3.5 cursor-pointer rounded-2xl py-3.5 text-center font-sans text-sm font-semibold text-white shadow-md transition-[transform,background-color,box-shadow] duration-160 ease-out hover:shadow-lg active:scale-[0.97] sm:mb-4 sm:text-base"
            >
              Lista de Presentes (Final Feliz)
            </a>

            <Link
              to="/?pix=open#presentes"
              className="interactive-tactile bg-primary hover:bg-secondary mb-3.5 cursor-pointer rounded-2xl py-3.5 text-center font-sans text-sm font-semibold text-white shadow-md transition-[transform,background-color,box-shadow] duration-160 ease-out hover:shadow-lg active:scale-[0.97] sm:mb-4 sm:text-base"
            >
              Presente via Pix
            </Link>
          </div>
        </div>
      </SectionWrapper>
      <div className="bg-linen relative py-8 text-center font-sans text-sm text-gray-500">
        © {new Date().getFullYear()} • Gabriela & Yuri
      </div>
    </div>
  );
}
