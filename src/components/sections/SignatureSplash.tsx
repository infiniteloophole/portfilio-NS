import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const SignatureSplash = ({ onComplete }: { onComplete: () => void }) => {
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    setIsDrawing(true);
    const timer = setTimeout(() => {
      onComplete();
    }, 3800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[9999] bg-amber-50 dark:bg-amber-900 flex items-center justify-center overflow-hidden"
    >
      {/* Paper texture background */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 2px,
            rgba(139, 90, 43, 0.1) 2px,
            rgba(139, 90, 43, 0.1) 4px
          ),
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(139, 90, 43, 0.1) 2px,
            rgba(139, 90, 43, 0.1) 4px
          )
        `,
        backgroundSize: '4px 4px'
      }} />

      {/* Paper lines - notebook style */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(
            0deg,
            transparent 24%,
            rgba(139, 90, 43, 0.3) 25%,
            rgba(139, 90, 43, 0.3) 26%,
            transparent 27%,
            transparent 74%,
            rgba(139, 90, 43, 0.3) 75%,
            rgba(139, 90, 43, 0.3) 76%,
            transparent 77%,
            transparent
          )
        `,
        backgroundSize: '100% 50px'
      }} />

      <div className="relative w-full h-full flex flex-col items-center justify-center gap-4">
        {/* Pen signature SVG */}
        <svg
          viewBox="0 0 1000 400"
          width="800"
          height="320"
          className="overflow-visible"
          style={{
            filter: 'drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.2))'
          }}
        >
          {/* Handwritten Najmus - flowing cursive strokes */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* N */}
            <motion.path
              d="M 80 220 L 80 100 Q 85 90 100 95 Q 140 110 160 200 L 160 220"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              className="text-amber-900 dark:text-amber-100"
              initial={{ strokeDasharray: 500, strokeDashoffset: 500 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            />
            {/* a */}
            <motion.path
              d="M 220 160 Q 200 100 240 85 Q 270 75 290 100 Q 300 115 300 160 L 300 220"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              className="text-amber-900 dark:text-amber-100"
              initial={{ strokeDasharray: 400, strokeDashoffset: 400 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.15 }}
            />
            {/* j */}
            <motion.path
              d="M 350 100 L 350 210 Q 350 240 330 250 Q 310 255 300 245"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              className="text-amber-900 dark:text-amber-100"
              initial={{ strokeDasharray: 350, strokeDashoffset: 350 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.3 }}
            />
            {/* m */}
            <motion.path
              d="M 380 220 L 380 140 Q 380 100 410 100 Q 435 100 445 130 L 445 220 M 445 130 Q 445 100 475 100 Q 500 100 510 130 L 510 220"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              className="text-amber-900 dark:text-amber-100"
              initial={{ strokeDasharray: 600, strokeDashoffset: 600 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.45 }}
            />
            {/* u */}
            <motion.path
              d="M 550 100 L 550 170 Q 550 200 580 200 Q 610 200 610 170 L 610 100 M 610 200 L 610 220"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              className="text-amber-900 dark:text-amber-100"
              initial={{ strokeDasharray: 450, strokeDashoffset: 450 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.6 }}
            />
            {/* s */}
            <motion.path
              d="M 680 100 Q 660 90 680 85 Q 700 80 710 100 Q 720 115 700 125 Q 680 135 690 155 Q 700 175 720 180"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              className="text-amber-900 dark:text-amber-100"
              initial={{ strokeDasharray: 400, strokeDashoffset: 400 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.75 }}
            />
          </motion.g>

          {/* NEW LINE */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.9 }}
          >
            {/* S */}
            <motion.path
              d="M 150 280 Q 120 260 150 250 Q 170 245 180 260 Q 190 275 165 285 Q 140 295 155 315 Q 165 330 190 330"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              className="text-amber-900 dark:text-amber-100"
              initial={{ strokeDasharray: 400, strokeDashoffset: 400 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            />
            {/* a */}
            <motion.path
              d="M 250 280 Q 230 230 270 215 Q 300 210 320 235 Q 330 250 330 280 L 330 330"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              className="text-amber-900 dark:text-amber-100"
              initial={{ strokeDasharray: 400, strokeDashoffset: 400 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.15 }}
            />
            {/* q */}
            <motion.path
              d="M 380 220 Q 360 210 380 210 Q 410 210 420 240 Q 425 265 420 295 L 420 340"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              className="text-amber-900 dark:text-amber-100"
              initial={{ strokeDasharray: 400, strokeDashoffset: 400 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.3 }}
            />
            {/* u */}
            <motion.path
              d="M 460 250 L 460 290 Q 460 320 490 320 Q 520 320 520 290 L 520 250 M 520 320 L 520 335"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              className="text-amber-900 dark:text-amber-100"
              initial={{ strokeDasharray: 400, strokeDashoffset: 400 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.45 }}
            />
            {/* i - dot and line */}
            <motion.circle
              cx="560"
              cy="215"
              r="4"
              fill="currentColor"
              className="text-amber-900 dark:text-amber-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            />
            <motion.path
              d="M 560 235 L 560 330"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              className="text-amber-900 dark:text-amber-100"
              initial={{ strokeDasharray: 200, strokeDashoffset: 200 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.6 }}
            />
            {/* b */}
            <motion.path
              d="M 600 210 L 600 330 M 600 285 Q 600 255 630 255 Q 660 255 660 285 Q 660 315 630 315 Q 600 315 600 285"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              className="text-amber-900 dark:text-amber-100"
              initial={{ strokeDasharray: 500, strokeDashoffset: 500 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.75 }}
            />
          </motion.g>

          {/* Decorative signature flourish/underline */}
          <motion.path
            d="M 120 360 Q 400 350 680 360"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            className="text-amber-900 dark:text-amber-100"
            initial={{ strokeDasharray: 600, strokeDashoffset: 600 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              delay: 1.6,
            }}
          />
        </svg>

        {/* Subtle signature indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.5 }}
          className="text-center text-amber-900 dark:text-amber-100"
        >
          <p className="text-sm font-bold tracking-widest italic">Software Engineer</p>
        </motion.div>
      </div>
    </motion.div>
  );
};
