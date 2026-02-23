interface CardProps {
  title: string;
  description: string;
  number?: string | number;
  variant?: 'navy' | 'light' | 'orange';
  className?: string;
}

export default function Card({ title, description, number, variant = 'light', className = '' }: CardProps) {
  const base = 'rounded-sm p-6 flex flex-col gap-3 border transition-all duration-200';
  const variants = {
    navy: 'bg-navy border-orange/30 hover:border-orange text-white',
    light: 'bg-white border-gray-100 hover:border-orange/40 shadow-sm',
    orange: 'bg-orange border-orange-dark text-white',
  };

  return (
    <div className={`${base} ${variants[variant]} ${className}`}>
      {number !== undefined && (
        <div className="w-10 h-10 rounded-full bg-orange flex items-center justify-center text-white font-display font-bold text-lg flex-shrink-0 mb-1">
          {number}
        </div>
      )}
      <h3 className={`font-display font-bold text-lg leading-tight ${variant === 'light' ? 'text-navy' : 'text-white'}`}>
        {title}
      </h3>
      <p className={`text-sm leading-relaxed ${variant === 'light' ? 'text-gray-600' : 'text-white/75'}`}>
        {description}
      </p>
    </div>
  );
}
