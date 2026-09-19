import { useState } from 'react';
import { CheckCircle, Heart, PaperPlaneTilt, User, WhatsappLogo, XCircle } from '@phosphor-icons/react';

const WHATSAPP_NUMBER = '5524998759073';

export function Rsvp() {
  const [attending, setAttending] = useState<boolean>(true);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [showValidationError, setShowValidationError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setShowValidationError(true);
      return;
    }

    setShowValidationError(false);

    let text = '';

    if (attending) {
      text = `Olá Gabriela e Yuri!\n\nEstou passando para confirmar minha presença no casamento de vocês!\n\n`;
      text += `*Nome:* ${name.trim()}\n`;

      if (message.trim()) {
        text += `*Mensagem carinhosa:* ${message.trim()}\n`;
      }

      text += `\nMal posso esperar para celebrar esse grande dia com vocês!`;
    } else {
      text = `Olá Gabriela e Yuri!\n\nMuito obrigado pelo convite tão especial. Infelizmente não poderei comparecer ao casamento, mas estarei em oração e com o coração repleto de alegria por vocês!\n\n`;
      text += `*Nome:* ${name.trim()}\n`;

      if (message.trim()) {
        text += `*Mensagem carinhosa:* ${message.trim()}\n`;
      }

      text += `\nDesejo uma vida inteira de bênçãos, muito amor e felicidade!`;
    }

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedText}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="rsvp" className="mx-auto max-w-2xl scroll-mt-8 py-12 md:py-16">
      <div className="border-primary/15 bg-linen/95 relative overflow-hidden rounded-3xl border p-5 text-center shadow-sm sm:p-10 md:p-12">
        <div className="bg-primary/5 pointer-events-none absolute -top-24 left-1/2 h-56 w-80 -translate-x-1/2 rounded-full blur-3xl" />

        <span className="text-primary mb-2.5 inline-block font-sans text-xs font-semibold tracking-[0.25em] uppercase">
          Confirmação de Presença
        </span>

        <h3 className="font-Cormorant xs:text-3xl text-2xl font-bold tracking-wide text-gray-800 sm:text-4xl md:text-5xl">
          Você estará conosco?
        </h3>

        <div className="bg-primary/25 mx-auto my-3.5 h-0.5 w-12 rounded-full" />

        <p className="font-Cormorant mx-auto max-w-lg text-base text-gray-600 sm:text-lg">
          Sua presença tornará esse dia inesquecível. Por favor, confirme para que possamos organizar tudo com todo
          carinho!
        </p>

        <form onSubmit={handleSubmit} className="mt-6 text-left sm:mt-8">
          <div className="mb-5 sm:mb-6">
            <label className="mb-2 block font-sans text-xs font-semibold tracking-wider text-gray-600 uppercase">
              Confirmação
            </label>
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
              <button
                type="button"
                onClick={() => setAttending(true)}
                className={`interactive-tactile flex cursor-pointer items-center justify-center gap-2 rounded-2xl border p-3 font-sans text-xs font-medium transition-[transform,background-color,border-color,box-shadow] sm:gap-2.5 sm:p-3.5 sm:text-sm ${
                  attending
                    ? 'border-primary bg-primary/10 text-primary font-semibold shadow-xs'
                    : 'border-primary/15 hover:border-primary/30 bg-white/70 text-gray-600 hover:bg-white'
                }`}
              >
                <CheckCircle
                  size={18}
                  weight={attending ? 'fill' : 'regular'}
                  className={attending ? 'text-primary' : 'text-gray-400'}
                />
                <span>Sim, estarei presente</span>
              </button>

              <button
                type="button"
                onClick={() => setAttending(false)}
                className={`interactive-tactile flex cursor-pointer items-center justify-center gap-2 rounded-2xl border p-3 font-sans text-xs font-medium transition-[transform,background-color,border-color,box-shadow] sm:gap-2.5 sm:p-3.5 sm:text-sm ${
                  !attending
                    ? 'border-gray-500 bg-gray-100 font-semibold text-gray-700 shadow-xs'
                    : 'border-primary/15 hover:border-primary/30 bg-white/70 text-gray-600 hover:bg-white'
                }`}
              >
                <XCircle
                  size={18}
                  weight={!attending ? 'fill' : 'regular'}
                  className={!attending ? 'text-gray-600' : 'text-gray-400'}
                />
                <span>Não poderei comparecer</span>
              </button>
            </div>
          </div>

          <div className="mb-5">
            <label
              htmlFor="guest-name"
              className="mb-1.5 flex items-center gap-1.5 font-sans text-xs font-semibold tracking-wider text-gray-600 uppercase"
            >
              <User size={14} className="text-primary" />
              <span>Seu Nome Completo *</span>
            </label>
            <input
              id="guest-name"
              type="text"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (showValidationError && e.target.value.trim()) {
                  setShowValidationError(false);
                }
              }}
              placeholder="Ex: João da Silva"
              className={`focus:ring-primary/25 focus:border-primary w-full rounded-2xl border bg-white/80 px-4 py-3.5 font-sans text-base text-gray-800 placeholder-gray-400 transition-all duration-160 ease-out focus:bg-white focus:ring-2 focus:outline-none ${
                showValidationError ? 'border-red-400 ring-2 ring-red-200' : 'border-primary/20'
              }`}
            />
            {showValidationError && (
              <p className="mt-1.5 font-sans text-xs text-red-500">
                Por favor, preencha seu nome para que possamos identificá-lo(a).
              </p>
            )}
          </div>

          <div className="mb-8">
            <label
              htmlFor="guest-message"
              className="mb-1.5 flex items-center gap-1.5 font-sans text-xs font-semibold tracking-wider text-gray-600 uppercase"
            >
              <Heart size={14} className="text-primary" />
              <span>Recado carinhoso aos noivos (opcional)</span>
            </label>
            <textarea
              id="guest-message"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Deixe uma mensagem especial para a Gabriela e o Yuri..."
              className="focus:ring-primary/25 focus:border-primary border-primary/20 w-full resize-none rounded-2xl border bg-white/80 px-4 py-3 font-sans text-sm text-gray-800 placeholder-gray-400 transition-all duration-160 ease-out focus:bg-white focus:ring-2 focus:outline-none"
            />
          </div>

          <div className="flex flex-col items-center justify-center">
            <button
              type="submit"
              className="interactive-tactile inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] px-6 py-3.5 font-sans text-sm font-semibold text-white shadow-md shadow-[#25D366]/25 transition-[transform,background-color,box-shadow] hover:bg-[#20ba5c] hover:shadow-lg focus:ring-2 focus:ring-[#25D366]/40 focus:ring-offset-2 focus:outline-none sm:w-auto sm:px-8 sm:py-4 sm:text-base"
            >
              <WhatsappLogo size={22} weight="fill" />
              <span>Confirmar no WhatsApp</span>
              <PaperPlaneTilt size={16} weight="bold" className="opacity-90 sm:text-lg" />
            </button>
            <span className="mt-2.5 text-center font-sans text-[11px] text-gray-400 sm:mt-3 sm:text-xs">
              Você será direcionado(a) para o WhatsApp com a mensagem pronta para envio
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
