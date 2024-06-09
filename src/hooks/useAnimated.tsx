import { useCallback } from 'react';
import { motion } from 'framer-motion';
import { AnimationConfig } from './models/animation-config'; // Assuming we have animationInterfaces.ts with AnimationProps interface

/**
 * A custom hook to generate export and share animation components using Framer Motion.
 * @returns A function to render animated export and share components.
 */
export default function useShareExportAnimations() {
  /**
   * Creates animated export and share components.
   * @param {number} duration - Duration of the animation in seconds.
   * @returns {JSX.Element} Animated export and share components.
   */
  const createAnimations = useCallback(
    (duration: number): JSX.Element => (
      <div className="absolute inset-0">
        {/* Animated Share Arrow */}
        <motion.img
          initial={{ y: '200%' }}
          animate={{ y: '0' }}
          transition={{ duration: duration - 0.1, delay: duration + 0.5 }}
          className="absolute -left-12 bottom-6"
          src="/assets/img/animated-icons/animated-share-arrow-icon.png"
          alt="Animated Share Arrow Icon"
        />
        {/* Animated PDF */}
        <motion.img
          initial={{ y: '200%', x: '-50%' }}
          animate={{ y: '0' }}
          transition={{ duration: duration - 0.2, delay: duration + 0.7 }}
          className="absolute bottom-12 left-6 w-24 lg:w-auto"
          src="/assets/img/animated-icons/animated-pdf-icon.png"
          alt="Animated PDF Icon"
        />
        {/* Animated JPG */}
        <motion.img
          initial={{ y: '200%', x: '-50%' }}
          animate={{ y: '0' }}
          transition={{ duration: duration - 0.2, delay: duration + 1 }}
          className="absolute bottom-20 left-1/2 w-20 lg:w-auto"
          src="/assets/img/animated-icons/animated-image-icon.png"
          alt="Animated JPG Icon"
        />
        {/* Animated TXT */}
        <motion.img
          initial={{ y: '200%', x: '50%' }}
          animate={{ y: '0' }}
          transition={{ duration: duration - 0.2, delay: duration + 1.3 }}
          className="absolute bottom-12 right-6 w-24 lg:w-auto"
          src="/assets/img/animated-icons/export-txt-icon.png"
          alt="Animated TXT Icon"
        />
      </div>
    ),
    []
  );

  return createAnimations;
}
