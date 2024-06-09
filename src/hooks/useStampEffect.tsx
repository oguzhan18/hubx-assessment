import { useCallback } from 'react';
import { motion } from 'framer-motion';
 
/**
 * Hook to generate an animated signature stamp effect.
 * 
 * @returns A callback function that takes a duration and returns animated signature stamp elements.
 */
export default function useSignatureStampEffect() {
  /**
   * Creates the animated signature stamp elements.
   * 
   * @param duration - The duration of the animation.
   * @returns JSX.Element containing the animated signature stamps.
   */
  return useCallback(
    (duration: number): JSX.Element => (
      <>
        <motion.img
          initial={{ scale: 0, x: '50%', y: '-50%' }}
          animate={{ scale: 1 }}
          transition={{ duration: duration, delay: duration + 0.2 }}
          src="../assets/img/stamp-images/stamp-left.png"
          className="absolute -left-1/2 top-2/3 w-36 lg:w-auto"
          alt="Stamp image in left"
        />
        <motion.img
          initial={{ scale: 0, x: '-50%' }}
          animate={{ scale: 1 }}
          transition={{ duration: duration, delay: duration + 0.5 }}
          src="../assets/img/stamp-images/stamp-right.png"
          className="absolute -right-1/2 top-28 w-36 lg:top-36 lg:w-auto"
          alt="Stamp image in right"
        />
      </>
    ),
    [],
  );
}
