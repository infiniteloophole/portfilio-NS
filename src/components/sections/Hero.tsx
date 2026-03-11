import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Database, Smartphone, Globe, ArrowDownRight, Server, Cpu } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const stickers = [
    { id: 'java', icon: <Code2 size={isMobile ? 24 : 32} />, label: "JAVA", color: "bg-orange-400", x: isMobile ? -100 : -420, y: isMobile ? -120 : -200, rotate: -8 },
    { id: 'spring', icon: <Server size={isMobile ? 24 : 32} />, label: "SPRING BOOT", color: "bg-green-400", x: isMobile ? 100 : 440, y: isMobile ? 140 : 250, rotate: 6 },
    { id: 'kafka', icon: <Globe size={isMobile ? 24 : 32} />, label: "KAFKA", color: "bg-blue-400", x: isMobile ? -90 : -460, y: isMobile ? 160 : 320, rotate: -12 },
    { id: 'redis', icon: <Database size={isMobile ? 24 : 32} />, label: "REDIS", color: "bg-red-400", x: isMobile ? 110 : 420, y: isMobile ? -160 : -280, rotate: 12 },
    { id: 'microservices', icon: <Cpu size={isMobile ? 24 : 32} />, label: "MICROSERVICES", color: "bg-purple-400", x: isMobile ? 0 : 60, y: isMobile ? -240 : -380, rotate: 15 },
  ];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-32 lg:py-40"
      data-bgcolor="hsl(0, 0%, 100%)" 
    >
      {/* Central Content */}
      <div className="container mx-auto px-4 z-10 text-center flex flex-col items-center pointer-events-none">
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "circOut" }}
          className="relative z-20 pointer-events-auto"
        >
          <div className="border-2 border-black dark:border-white bg-white dark:bg-black px-4 py-1 mb-8 shadow-neubrutalism dark:shadow-neubrutalism-dark rotate-[-1deg] inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold text-sm tracking-widest uppercase">Open to work</span>
          </div>
          
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black tracking-tighter mb-6 leading-[0.85] uppercase">
            NAJMUS<br/>
            <span className="text-black dark:text-white">SAQUIB</span>
          </h1>

          <div className="bg-black dark:bg-white text-white dark:text-black p-4 inline-block transform rotate-1 shadow-neubrutalism-lg dark:shadow-neubrutalism-dark border-2 border-white dark:border-black max-w-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `
                linear-gradient(45deg, transparent 30%, rgba(0, 0, 0, 0.1) 50%, transparent 70%)
              `,
              pointerEvents: 'none'
            }}></div>
             <h2 className="text-xl md:text-4xl font-black uppercase relative z-10">Software Engineer · Java · Spring Boot</h2>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 max-w-xl mx-auto flex flex-col items-center gap-8 pointer-events-auto"
        >
          <p className="font-bold text-lg md:text-xl leading-relaxed text-balance">
            4+ years architecting production healthcare systems. Specialized in distributed systems, microservices, and high-throughput API design with zero critical incidents.
          </p>

          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center gap-2 bg-white dark:bg-black border-2 border-black dark:border-white px-8 py-4 font-black text-xl shadow-neubrutalism dark:shadow-neubrutalism-dark hover:translate-y-[4px] hover:shadow-none transition-all duration-300 ease-out uppercase"
          >
            Contact Me <ArrowDownRight className="group-hover:rotate-45 transition-transform duration-300" />
          </button>
        </motion.div>

      </div>

      {/* Draggable Playground Layer */}
      <div className="absolute inset-0 z-30 pointer-events-none hidden md:block">
        <div className="w-full h-full relative flex items-center justify-center">
            {stickers.map((sticker) => (
              <motion.div
                key={sticker.id}
                drag
                dragConstraints={containerRef}
                dragElastic={0.1}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                whileHover={{ scale: 1.1, cursor: "grab" }}
                whileDrag={{ scale: 1.1, cursor: "grabbing" }}
                initial={{ x: 0, y: 0, rotate: 0, opacity: 0 }}
                animate={{ x: sticker.x, y: sticker.y, rotate: sticker.rotate, opacity: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 80,
                  damping: 15,
                  delay: 0.8 + (stickers.indexOf(sticker) * 0.1)
                }}
                className={`absolute pointer-events-auto flex flex-col items-center justify-center p-4 border-2 border-black shadow-neubrutalism ${sticker.color} w-32 h-32 rounded-none cursor-grab active:cursor-grabbing select-none`}
              >
                <div className="flex flex-col items-center justify-center pointer-events-none">
                  <div className="bg-white/30 p-2 border-2 border-black mb-2">
                    {sticker.icon}
                  </div>
                  <span className="font-black text-xs uppercase tracking-tight text-center leading-none">{sticker.label}</span>
                </div>
              </motion.div>
            ))}
        </div>
      </div>

    </section>
  );
};
