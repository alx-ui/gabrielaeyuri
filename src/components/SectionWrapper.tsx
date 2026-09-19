interface SectionWrapperProps {
  className?: string;
  children: React.ReactNode;
}

export function SectionWrapper({ children, className }: SectionWrapperProps) {
  return (
    <div className={className}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </div>
  );
}
