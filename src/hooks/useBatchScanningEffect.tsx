import { useCallback } from 'react';
import { motion } from 'framer-motion';

/**
 * A custom hook to generate batch scanning animation components using Framer Motion.
 * @returns A function to render animated batch scanning components.
 */
export default function useBatchScanningAnimations() {
  /**
   * Creates animated batch scanning components.
   * @param {number} duration - Duration of the animation in seconds.
   * @returns {JSX.Element} Animated batch scanning components.
   */
  const createAnimations = useCallback(
    (duration: number): JSX.Element => (
      <>
        {/* First Scanning Document */}
        <motion.img
          initial={{ x: '-50%', y: '100%', scaleX: 0.9 }}
          animate={{ y: 0 }}
          transition={{ duration: duration, delay: duration + 0.2 }}
          src="/assets/img/batch-scanning/doc-batch-scanning.png"
          className="absolute -bottom-6 left-1/2 w-10/12 scale-x-90 lg:w-auto"
          alt="Batch Scanning Document"
        />
        {/* Second Scanning Document */}
        <motion.img
          src="/assets/img/batch-scanning/doc-batch-scanning.png"
          initial={{ x: '-50%', y: '100%', scaleX: 0.95 }}
          animate={{ y: 20 }}
          transition={{ duration: duration, delay: duration + 0.6 }}
          className="absolute -bottom-6 left-1/2 w-10/12 scale-x-90 lg:w-auto"
          alt="Batch Scanning Document"
        />
        {/* Third Scanning Document */}
        <motion.img
          initial={{ x: '-50%', y: '100%' }}
          animate={{ y: 40 }}
          transition={{ duration: duration, delay: duration + 1 }}
          className="absolute -bottom-6 left-1/2 w-10/12 lg:w-auto"
          src="/assets/img/batch-scanning/doc-batch-scanning.png"
          alt="Batch Scanning Document"
        />
      </>
    ),
    []
  );

  return createAnimations;
}
