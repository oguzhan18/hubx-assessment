import { useCallback } from 'react';
import { motion } from 'framer-motion';
 
/**
 * A custom hook to generate animated image components using Framer Motion.
 * @returns A function to render animated image components.
 */
export default function useImageAnimations() {
  /**
   * Creates animated image components.
   * @param {number} duration - Duration of the animation in seconds.
   * @returns {JSX.Element} Animated image components.
   */
  const createAnimations = useCallback(
    (duration: number): JSX.Element => (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: duration, delay: duration + 0.2 }}
        >
          <img
            src="/src/assets/img/advanced-image/animated-image-left.png"
            className="absolute -left-5 bottom-4 w-7 lg:-left-9 lg:w-auto"
            alt="Animated Icon Left"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: duration, delay: duration + 0.5 }}
        >
          <img
            src="/src/assets/img/advanced-image/animated-image-right.png"
            className="absolute -right-5 bottom-4 w-7 lg:-right-9 lg:w-auto"
            alt="Animated Icon Right"
          />
        </motion.div>
      </>
    ),
    []
  );

  return createAnimations;
}
