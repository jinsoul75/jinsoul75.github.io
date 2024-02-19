'use client';

import { motion } from 'framer-motion';
import { staggerHalf, fadeInHalf } from '@/constants/animation';
import { ReactNode } from 'react';

interface AnimationProp {
  children: ReactNode;
}

export default function Animation({ children }: AnimationProp) {
  return (
    <motion.div
      variants={staggerHalf}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div variants={fadeInHalf}>{children}</motion.div>
    </motion.div>
  );
}
