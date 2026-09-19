interface CardProps {
  icon: React.ReactNode;
  name: string;
  info: string;
  description?: string;
  disabled?: boolean;
}

export function Card({ icon, name, info, description, disabled }: CardProps) {
  return (
    <div
      className={`h-52 w-full flex-shrink-0 rounded-[24px] p-6 shadow-md transition-all duration-160 ease-out md:h-64 md:w-[430px] ${
        disabled
          ? 'cursor-not-allowed opacity-60 grayscale'
          : 'cursor-pointer hover:-translate-y-1 hover:shadow-xl active:scale-[0.98]'
      }`}
      style={{
        backgroundImage: 'linear-gradient(135deg, #B35434 0%, #DB856B 60%, #ECA38D 100%)',
      }}
    >
      <div className="flex h-full flex-col justify-end font-sans text-white">
        <div className="mb-1 text-3xl opacity-90 drop-shadow-sm">{icon}</div>
        <div className="relative mb-3 flex items-center">
          <div className="font-Cormorant mr-2 text-2xl font-bold tracking-wide drop-shadow-sm md:text-3xl">{name}</div>
        </div>
        <div className="text-linen mb-1 text-xs font-medium opacity-90 drop-shadow-sm md:text-sm">{description}</div>
        <div className="text-cream text-sm font-semibold tracking-wide drop-shadow-sm md:text-base">{info}</div>
      </div>
    </div>
  );
}
