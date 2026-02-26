interface ServiceCardProps {
  number: number;
  title: string;
  description: string;
}

export default function ServiceCard({ number, title, description }: ServiceCardProps) {
  return (
    <div className="group relative h-full perspective">
      {/* Multi-layer background with dynamic effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange/5 via-transparent to-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm" />
      <div className="absolute inset-0 bg-gradient-to-tr from-navy to-navy/90 opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-sm" />
      
      {/* Animated background glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-orange/20 via-transparent to-orange/20 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500 rounded-sm -z-10" />
      
      <div className="relative bg-navy rounded-sm p-8 border border-orange/20 group-hover:border-orange/50 transition-all duration-300 overflow-hidden h-full flex flex-col group-hover:shadow-2xl group-hover:shadow-orange/20">
        
        {/* Top accent line - animates in */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        
        {/* Left side accent bar - slides in */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange via-orange/50 to-transparent/0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
        
        {/* Animated corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-3xl" />
        
        {/* Number section with enhanced animations */}
        <div className="relative mb-6 flex items-start justify-between">
          <div className="relative">
            {/* Number badge container */}
            <div className="relative inline-flex">
              {/* Outer glow ring */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange/30 to-orange/10 rounded-full blur-sm transform scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Main badge */}
              <div className="relative w-16 h-16 bg-gradient-to-br from-orange via-orange to-orange-dark flex items-center justify-center rounded-full shadow-lg border border-orange/40 group-hover:border-orange group-hover:scale-110 transition-transform duration-300 group-hover:shadow-orange/50 group-hover:shadow-xl">
                <span className="font-display font-black text-2xl text-white group-hover:scale-125 transition-transform duration-300">
                  {String(number).padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>
          
          {/* Decorative dots that appear on hover */}
          <div className="flex gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            <div className="w-1.5 h-1.5 rounded-full bg-orange/60 group-hover:bg-orange transition-colors duration-300" />
            <div className="w-1.5 h-1.5 rounded-full bg-orange/40 group-hover:bg-orange/60 transition-colors duration-300" />
            <div className="w-1.5 h-1.5 rounded-full bg-orange/20 group-hover:bg-orange/40 transition-colors duration-300" />
          </div>
        </div>

        {/* Title with smooth transitions */}
        <h3 className="font-display font-bold text-2xl text-white mb-3 leading-tight uppercase tracking-wide group-hover:text-orange/90 transition-colors duration-300">
          {title}
        </h3>

        {/* Description with smooth fade and color transition */}
        <p className="text-white/60 text-base leading-relaxed flex-grow group-hover:text-white/85 transition-all duration-300 group-hover:tracking-wide">
          {description}
        </p>

        {/* Bottom accent elements - appear on hover */}
        <div className="mt-6 pt-6 border-t border-orange/0 group-hover:border-orange/20 transition-colors duration-300">
          <div className="flex gap-3 justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-orange/40 group-hover:bg-orange/80 transition-all duration-300"
                  style={{
                    transitionDelay: `${100 + i * 50}ms`,
                  }}
                />
              ))}
            </div>
            <div className="w-6 h-px bg-gradient-to-r from-orange to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        {/* Hover overlay accent */}
        <div className="absolute inset-0 pointer-events-none rounded-sm">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full blur-2xl" />
        </div>
      </div>
    </div>
  );
}

