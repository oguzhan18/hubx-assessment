/**
 * Animation types for different components.
 */
export const AnimationTypes = {
  DOCUMENT_SCANNER: 'DOCUMENT_SCANNER',
  SIGN_STAMP: 'SIGN_STAMP',
  BATCH_SCANNING: 'BATCH_SCANNING',
  ADVANCED_FILTERS: 'ADVANCED_FILTERS',
  EXPORT_SHARE: 'EXPORT_SHARE',
} as const;

export type AnimationType = typeof AnimationTypes[keyof typeof AnimationTypes];
