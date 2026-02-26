interface ValuePropCardProps {
  number: number;
  title: string;
  subtitle: string;
  benefits: string[];
}

export default function ValuePropCard({ number, title, subtitle, benefits }: ValuePropCardProps) {
  return (
    <div className="group relative h-full">
      {/* Background glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-br from-orange/20 to-transparent opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500 rounded-sm -z-10" />
      
      <div className="bg-white rounded-sm overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border-t-4 border-orange group-hover:border-orange/80 relative h-full flex flex-col">
        {/* Dynamic header section */}
        <div className="relative bg-navy p-8 pb-6 overflow-hidden min-h-[280px]">
          {/* Animated background overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange/10 via-transparent to-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Top accent line animation */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          
          <div className="relative flex items-start justify-between">
            <div className="flex flex-col">
              {/* Number badge with glow */}
              <div className="relative mb-4 inline-flex">
                <div className="absolute inset-0 bg-orange rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                <div className="relative w-14 h-14 bg-gradient-to-br from-orange to-orange-dark flex items-center justify-center text-white font-display font-extrabold text-xl shadow-lg border-2 border-orange/30 group-hover:scale-110 group-hover:border-orange transition-transform duration-300">
                  {String(number).padStart(2, '0')}
                </div>
              </div>
              
              {/* Title with animated underline */}
              <div className="relative inline-block min-h-[80px] flex items-start">
                <h3 className="font-display font-bold text-3xl text-white uppercase tracking-tight">
                  {title}
                </h3>
                <div className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-orange via-orange/60 to-transparent group-hover:w-full transition-all duration-700" />
              </div>
            </div>
            
            {/* Decorative dots */}
            <div className="flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              <div className="w-2 h-2 rounded-full bg-orange/60" />
              <div className="w-2 h-2 rounded-full bg-orange/40" />
              <div className="w-2 h-2 rounded-full bg-orange/20" />
            </div>
          </div>
          
          {/* Subtitle */}
          <p className="text-orange text-sm font-semibold mt-4 group-hover:text-orange/90 transition-colors duration-300">
            {subtitle}
          </p>
        </div>

        {/* Benefits section with smooth transitions */}
        <div className="p-8 bg-white flex-grow flex flex-col">
          <ul className="space-y-3 flex-grow">
            {benefits.map((benefit, idx) => (
              <li
                key={idx}
                className="flex gap-3 items-start opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  transitionDelay: `${idx * 50}ms`,
                }}
              >
                <span className="text-orange font-bold text-lg flex-shrink-0 mt-0.5 group-hover:scale-125 transition-transform duration-300">›</span>
                <p className="text-gray-700 text-base leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  {benefit}
                </p>
              </li>
            ))}
          </ul>

          {/* Bottom accent bar */}
          <div className="mt-6 pt-4 border-t-2 border-orange/0 group-hover:border-orange/20 transition-colors duration-300">
            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="flex-1 h-1 rounded-full bg-gradient-to-r from-orange/40 to-orange/20 group-hover:from-orange/80 group-hover:to-orange/40 transition-all duration-300"
                  style={{
                    transitionDelay: `${300 + i * 50}ms`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Corner accent element */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full blur-lg pointer-events-none" />
      </div>
    </div>
  );
}
