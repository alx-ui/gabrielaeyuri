import { useEffect, useState } from 'react';

import { Agendas } from 'components/Agendas';
import { Blessings } from 'components/Blessings';
import { CountdownWedding } from 'components/Countdown';
import { DigitalEnvelope } from 'components/DigitalEnvelope';
import { GalleryPhotos } from 'components/GalleryPhotos';
import { Hero } from 'components/Hero';
import { Information } from 'components/Information';
import { LocationMap } from 'components/LocationMap';
import { MusicPlayer } from 'components/MusicPlayer';
import { Rsvp } from 'components/Rsvp';
import { SectionWrapper } from 'components/SectionWrapper';
import { WelcomeModal } from 'components/WelcomeModal';

export function Homepage() {
  const [openWelcome, setOpenWelcome] = useState(true);
  const [playMusic, setPlayMusic] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    document.body.style.overflowX = 'hidden';
  }, []);

  const onCloseWelcomeModal = () => {
    setOpenWelcome(false);
    setPlayMusic(true);
    document.body.style.overflowY = 'auto';
    document.body.style.overflowX = 'hidden';
    window.scrollTo({ top: 0 });
  };

  return (
    <div
      style={{
        fontFamily: 'Cormorant Garamond',
        lineHeight: '1.4',
      }}
      className="bg-linen w-full max-w-full overflow-x-hidden text-gray-800"
    >
      <WelcomeModal isOpen={openWelcome} onClose={onCloseWelcomeModal} />

      <Hero />

      <Blessings />

      <SectionWrapper className="bg-sand">
        <Information />
      </SectionWrapper>

      <SectionWrapper className="bg-linen mb-2 pt-1">
        <CountdownWedding />
      </SectionWrapper>

      <SectionWrapper className="bg-sand mb-2">
        <Agendas />
      </SectionWrapper>

      <SectionWrapper className="bg-linen mb-2">
        <Rsvp />
      </SectionWrapper>

      <SectionWrapper className="bg-sand mb-2">
        <DigitalEnvelope />
      </SectionWrapper>

      <div className="mb-2 w-full max-w-full overflow-hidden">
        <LocationMap />

        <div
          className="elfsight-app-4a9ec801-4dbf-4bdd-844a-61129d234808 w-full max-w-full overflow-hidden"
          data-elfsight-app-lazy
        />
      </div>

      <SectionWrapper className="bg-sand py-16 md:py-24">
        <GalleryPhotos />
      </SectionWrapper>

      <div className="bg-linen border-sand relative border-t px-4 py-12 text-center font-sans text-sm text-gray-600 sm:py-16">
        <p className="font-Cormorant text-primary mb-2 text-xl font-medium">Gabriela & Yuri</p>
        <p>© {new Date().getFullYear()} • Celebrando o amor com carinho</p>
      </div>

      <MusicPlayer play={playMusic} setPlay={() => setPlayMusic(!playMusic)} />
    </div>
  );
}
