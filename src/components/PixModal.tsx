import { useEffect, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Drawer } from 'vaul';
import { Check, Copy, EnvelopeSimple, Heart, PixLogo, QrCode, ShieldCheck, X } from '@phosphor-icons/react';

interface PixModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PIX_EMAIL = 'casalgabrielayuri@gmail.com';
const BENEFICIARY_NAME = 'Gabriela Gonçalves Vieira';

function generatePixBacenPayload(key: string, name: string, city: string = 'BRASIL'): string {
  const formatField = (id: string, value: string) => {
    const len = value.length.toString().padStart(2, '0');
    return `${id}${len}${value}`;
  };

  const payloadFormat = formatField('00', '01');
  const gui = formatField('00', 'br.gov.bcb.pix');
  const chave = formatField('01', key);
  const merchantAccountInfo = formatField('26', `${gui}${chave}`);
  const mcc = formatField('52', '0000');
  const currency = formatField('53', '986');
  const country = formatField('58', 'BR');

  const cleanName = name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toUpperCase()
    .slice(0, 25);
  const merchantName = formatField('59', cleanName);

  const cleanCity = city
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toUpperCase()
    .slice(0, 15);
  const merchantCity = formatField('60', cleanCity);

  const txid = formatField('05', '***');
  const additionalData = formatField('62', txid);

  const rawPayload = `${payloadFormat}${merchantAccountInfo}${mcc}${currency}${country}${merchantName}${merchantCity}${additionalData}6304`;

  let crc = 0xffff;
  for (let i = 0; i < rawPayload.length; i++) {
    crc ^= rawPayload.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      if ((crc & 0x8000) !== 0) {
        crc = ((crc << 1) ^ 0x1021) & 0xffff;
      } else {
        crc = (crc << 1) & 0xffff;
      }
    }
  }

  return `${rawPayload}${crc.toString(16).toUpperCase().padStart(4, '0')}`;
}

const PIX_PAYLOAD = generatePixBacenPayload(PIX_EMAIL, BENEFICIARY_NAME);

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)');
    const onChange = () => setIsMobile(mql.matches);
    mql.addEventListener('change', onChange);
    setIsMobile(mql.matches);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  return isMobile;
}

interface PixContentProps {
  onClose: () => void;
  isMobileDrawer?: boolean;
}

function PixContent({ onClose, isMobileDrawer = false }: PixContentProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPayload, setCopiedPayload] = useState(false);

  const copyToClipboard = async (text: string, isEmail: boolean) => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }

      if (isEmail) {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 3000);
      } else {
        setCopiedPayload(true);
        setTimeout(() => setCopiedPayload(false), 3000);
      }
    } catch {}
  };

  return (
    <div className="relative z-10 w-full">
      {!isMobileDrawer && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar modal de Pix"
          className="bg-sand/80 hover:bg-sand focus:ring-primary/40 absolute top-0 right-0 z-20 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-gray-600 transition-all duration-160 ease-out hover:text-gray-900 focus:ring-2 focus:outline-none active:scale-[0.95]"
        >
          <X size={18} weight="bold" />
        </button>
      )}

      <div className={`mb-3 ${!isMobileDrawer ? 'pr-8' : ''}`}>
        <div className="border-primary/20 bg-sand/70 text-primary inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-sans text-[11px] font-semibold tracking-wider uppercase shadow-xs">
          <PixLogo size={13} weight="bold" />
          <span>Pix dos Noivos</span>
        </div>

        <h3
          id="pix-modal-title"
          className="font-Cormorant mt-1 text-2xl font-bold tracking-tight text-gray-800 sm:text-3xl"
        >
          Cotas de Lua de Mel
        </h3>

        <p className="font-Cormorant text-sm text-gray-600 italic sm:text-base">
          Contribua com qualquer valor para a nossa viagem dos sonhos.
        </p>
      </div>

      <div className="border-primary/25 rounded-2xl border-2 bg-white/95 p-3 shadow-sm sm:p-4">
        <div className="mb-1.5 flex items-center justify-between">
          <span className="text-primary flex items-center gap-1.5 font-sans text-[11px] font-bold tracking-wider uppercase">
            <EnvelopeSimple size={14} weight="bold" />
            Chave Pix (E-mail)
          </span>
          {copiedEmail ? (
            <span className="animate-in fade-in flex items-center gap-1 font-sans text-[11px] font-bold text-emerald-700 duration-150">
              <Check size={13} weight="bold" /> Copiada!
            </span>
          ) : (
            <span className="bg-primary/10 text-primary rounded-full px-2 py-0.5 font-sans text-[10px] font-semibold">
              Mais fácil
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <div
            onClick={() => copyToClipboard(PIX_EMAIL, true)}
            title="Clique para copiar"
            className="group border-primary/15 bg-sand/40 hover:border-primary/40 hover:bg-sand/70 flex flex-1 cursor-pointer items-center justify-between rounded-xl border px-3 py-2 transition-colors"
          >
            <div className="flex items-center gap-2 overflow-hidden">
              <div className="bg-primary/10 text-primary flex h-6 w-6 shrink-0 items-center justify-center rounded-md">
                <PixLogo size={15} weight="bold" />
              </div>
              <span className="selection:bg-primary/20 truncate font-mono text-xs font-semibold text-gray-800 sm:text-sm">
                {PIX_EMAIL}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => copyToClipboard(PIX_EMAIL, true)}
            className={`interactive-tactile focus:ring-primary/40 flex shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-xl px-4 py-2 font-sans text-xs font-semibold shadow-xs transition-[transform,background-color,box-shadow,color] duration-160 ease-out focus:ring-2 focus:outline-none active:scale-[0.97] sm:text-sm ${
              copiedEmail
                ? 'bg-emerald-700 text-white shadow-sm ring-2 ring-emerald-600'
                : 'bg-primary hover:bg-secondary text-white hover:shadow-sm'
            }`}
          >
            {copiedEmail ? (
              <>
                <Check size={16} weight="bold" />
                <span>Copiada!</span>
              </>
            ) : (
              <>
                <Copy size={16} weight="bold" />
                <span>Copiar Chave</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-12">
        <div className="border-primary/15 flex items-center gap-3 rounded-2xl border bg-white/80 p-2.5 sm:col-span-5 sm:flex-col sm:justify-center sm:p-3 sm:text-center">
          <div className="border-primary/10 shrink-0 rounded-xl border bg-white p-1.5 shadow-xs">
            <QRCodeSVG
              value={PIX_PAYLOAD}
              size={84}
              level="M"
              marginSize={1}
              imageSettings={{
                src: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="%23B35434" rx="40"/><path d="M128,32a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,32Zm37.66,133.66a8,8,0,0,1-11.32,0L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32L139.31,128l26.35,26.34A8,8,0,0,1,165.66,165.66Z" fill="white"/></svg>',
                x: undefined,
                y: undefined,
                height: 16,
                width: 16,
                opacity: 1,
                excavate: true,
              }}
            />
          </div>

          <div className="flex flex-col sm:items-center">
            <span className="flex items-center gap-1 font-sans text-[11px] font-semibold text-gray-700">
              <QrCode size={14} weight="bold" className="text-primary" />
              QR Code Oficial
            </span>
            <span className="font-sans text-[10px] text-gray-500">Aponte a câmera do banco</span>

            <button
              type="button"
              onClick={() => copyToClipboard(PIX_PAYLOAD, false)}
              className="text-primary hover:text-secondary mt-1 cursor-pointer text-left font-sans text-[10px] font-semibold underline underline-offset-2 transition-colors sm:text-center"
            >
              {copiedPayload ? (
                <span className="flex items-center gap-0.5 font-bold text-emerald-700">
                  <Check size={11} weight="bold" /> Copiado!
                </span>
              ) : (
                <span>Copiar código QR</span>
              )}
            </button>
          </div>
        </div>

        <div className="border-primary/15 flex flex-col justify-between rounded-2xl border bg-white/80 p-3 sm:col-span-7">
          <div>
            <div className="border-primary/10 bg-sand/50 mb-2 flex items-center gap-2 rounded-xl border p-2">
              <ShieldCheck size={22} weight="fill" className="text-primary shrink-0" />
              <div className="min-w-0">
                <p className="font-sans text-[10px] font-bold tracking-wider text-gray-500 uppercase">
                  Conferência no seu Banco
                </p>
                <p className="truncate font-sans text-xs font-bold text-gray-900">
                  Titular: <span className="text-primary">{BENEFICIARY_NAME}</span>
                </p>
              </div>
            </div>

            <div className="space-y-1 font-sans text-[11px] leading-tight text-gray-600">
              <p className="flex items-center gap-1.5">
                <span className="bg-primary/10 text-primary flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[9px] font-bold">
                  1
                </span>
                <span>
                  No app do banco, escolha <strong>Pix por E-mail</strong>
                </span>
              </p>
              <p className="flex items-center gap-1.5">
                <span className="bg-primary/10 text-primary flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[9px] font-bold">
                  2
                </span>
                <span>Cole a chave copiada e confira o nome</span>
              </p>
              <p className="flex items-center gap-1.5">
                <span className="bg-primary/10 text-primary flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[9px] font-bold">
                  3
                </span>
                <span>Defina o valor desejado e confirme!</span>
              </p>
            </div>
          </div>

          <div className="border-primary/10 font-Cormorant mt-2 flex items-center justify-center gap-1 border-t pt-1.5 text-xs text-gray-500 italic">
            <Heart size={12} weight="fill" className="text-primary" />
            <span>Muito obrigado pelo carinho com a gente!</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PixModal({ isOpen, onClose }: PixModalProps) {
  const isMobile = useIsMobile();
  const [isRendered, setIsRendered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isMobile) return;

    if (isOpen) {
      setIsRendered(true);
      const frame = requestAnimationFrame(() => {
        setIsVisible(true);
      });
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      return () => {
        cancelAnimationFrame(frame);
        document.body.style.overflow = originalOverflow;
      };
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => {
        setIsRendered(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isOpen, isMobile]);

  useEffect(() => {
    if (isMobile) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, isMobile]);

  if (isMobile) {
    return (
      <Drawer.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 z-50 bg-black/45 backdrop-blur-xs transition-opacity" />
          <Drawer.Content className="border-primary/20 bg-linen fixed right-0 bottom-0 left-0 z-50 flex max-h-[92vh] flex-col overflow-y-auto overscroll-contain rounded-t-[28px] border-t p-4 pb-7 shadow-2xl outline-none">
            <Drawer.Handle className="bg-primary/25 mx-auto mb-2.5 h-1.5 w-12 shrink-0 cursor-grab rounded-full active:cursor-grabbing" />
            <Drawer.Title className="sr-only">Cotas de Lua de Mel via Pix</Drawer.Title>
            <Drawer.Description className="sr-only">
              Chave Pix e-mail dos noivos casalgabrielayuri@gmail.com
            </Drawer.Description>
            <PixContent onClose={onClose} isMobileDrawer={true} />
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    );
  }

  if (!isRendered) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="pix-modal-title"
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 transition-opacity duration-200 ease-out sm:p-4 ${
        isVisible ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <div onClick={onClose} className="absolute inset-0 bg-black/45 backdrop-blur-xs transition-opacity" />

      <div
        className={`border-primary/20 bg-linen relative z-10 w-full max-w-lg rounded-3xl border p-5 shadow-2xl transition-[transform,opacity] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] sm:p-6 ${
          isVisible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-2 scale-[0.96] opacity-0'
        }`}
      >
        <div className="bg-primary/10 pointer-events-none absolute -top-16 left-1/2 h-36 w-72 -translate-x-1/2 rounded-full blur-3xl" />
        <div className="bg-primary/10 pointer-events-none absolute right-0 -bottom-16 h-36 w-52 rounded-full blur-3xl" />

        <PixContent onClose={onClose} isMobileDrawer={false} />
      </div>
    </div>
  );
}
