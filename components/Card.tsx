interface CardProps {
  title: string;
  description: string;
  number?: string | number;
  variant?: 'navy' | 'light' | 'orange';
  className?: string;
}

export default function Card({ title, description, number, variant = 'light', className = '' }: CardProps) {
  const base = 'relative p-8 flex flex-col gap-4 border shadow-lg transition-all duration-200 group overflow-hidden';
  const variants = {
    navy: 'bg-navy border-orange/30 hover:border-orange text-white',
    light: 'bg-white border-gray-100 hover:border-orange/40',
    orange: 'bg-orange border-orange-dark text-white',
  };

  // Extract just the numeric part from strings like "01", "02"
  const displayNumber = number ? String(number).replace(/^0+/, '') : '';

  return (
    <div className={`${base} ${variants[variant]} ${className}`}>
      {/* Vertical accent bar */}
      <span className="absolute left-0 top-6 bottom-6 w-1 bg-orange opacity-80 group-hover:opacity-100 transition-all" aria-hidden="true" />
      {/* Number badge */}
      {number !== undefined && (
        <div className="z-10 mb-2">
          <div className="w-12 h-12 bg-orange flex items-center justify-center text-white font-display font-extrabold text-xl shadow-lg border-4 border-white/20">
            {displayNumber}
          </div>
        </div>
      )}
      <h3 className={`font-display font-extrabold text-xl leading-tight ${variant === 'light' ? 'text-navy' : 'text-white'} drop-shadow-sm`}> 
        {title}
      </h3>
      <p className={`text-base leading-relaxed ${variant === 'light' ? 'text-gray-600' : 'text-white/80'} font-medium`}> 
        {description}
      </p>
    </div>
  );
}
