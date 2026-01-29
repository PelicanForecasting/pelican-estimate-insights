import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  accentBorder?: 'left' | 'top' | 'none';
  bottomBorder?: boolean;
  delay?: number;
}

const FloatingCard = ({
  children,
  className,
  accentBorder = 'none',
  bottomBorder = false,
  delay = 0
}: FloatingCardProps) => {
  const topBorderClasses = {
    left: 'border-l-4 border-l-accent',
    top: 'border-t-4 border-t-accent',
    none: ''
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className={cn(
        "bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl",
        "p-8 sm:p-10 md:p-12",
        topBorderClasses[accentBorder],
        bottomBorder && "border-b-4 border-b-pelican-navy",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default FloatingCard;
