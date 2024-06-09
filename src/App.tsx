import React, { useState, useCallback } from 'react';
import { MockDataList } from '#layout/mock-data';
import ShowCaseCard from '#components/ShowCaseCard';
import {
  useBatchScanningAnimation,
  useExportShareAnimation,
  useSignStampAnimation
} from '#hooks/types';
import useImageAnimations from '#hooks/useImageAnimations';
import { AnimationType, AnimationTypes } from './layout/AnimationType';
import LayoutWrapper from '#components/layout-wrapper';
import InteractiveIconTrigger from '#components/interactive-icon-trigger';

const App: React.FC = (): JSX.Element => {
  const initialAnimation: AnimationType = AnimationTypes.DOCUMENT_SCANNER;
  const [activeFeature, setActiveFeature] = useState<AnimationType>(initialAnimation);

  const handleButtonClick = useCallback(
    (clickedFeature: AnimationType) => () => {
      setActiveFeature(clickedFeature);
    },
    []
  );

  const handleSignStampAnimation = useSignStampAnimation();
  const handleBatchScanningAnimation = useBatchScanningAnimation();
  const handleAdvancedFiltersAnimation = useImageAnimations();
  const handleExportShareAnimation = useExportShareAnimation();

  // Ensure callbackData keys are of type AnimationType
  const callbackData: Record<AnimationType, any> = {
    [AnimationTypes.DOCUMENT_SCANNER]: undefined,
    [AnimationTypes.STAMP]: handleSignStampAnimation,
    [AnimationTypes.BATCH_SCANNING]: handleBatchScanningAnimation,
    [AnimationTypes.ADVANCED_FILTERS]: handleAdvancedFiltersAnimation,
    [AnimationTypes.EXPORT_SHARE]: handleExportShareAnimation,
  };

  return (
    <main className="flex min-h-full flex-col justify-center overflow-y-auto bg-gray-100">
      <LayoutWrapper>
        {MockDataList.map((data) => {
          const { key, ...rest } = data;
          // Asserting key is of type AnimationType
          return (
            <ShowCaseCard
              key={activeFeature === key ? key : `inactive-${key}`}
              animateAfter={callbackData[key as AnimationType]} // Type assertion here
              isActive={activeFeature === key}
              {...rest}
            />
          );
        })}
      </LayoutWrapper>
      <section id="navigation-tabs" className="no-scrollbar flex snap-x justify-between overflow-x-auto">
        <InteractiveIconTrigger
          svgPath="src/assets/svg/document-scanner.svg"
          label="Document Scanner"
          isActive={activeFeature === AnimationTypes.DOCUMENT_SCANNER}
          onClick={handleButtonClick(AnimationTypes.DOCUMENT_SCANNER)}
        />
        <InteractiveIconTrigger
          svgPath="src/assets/svg/sign-stamp.svg"
          label="Sign & Stamp"
          isActive={activeFeature === AnimationTypes.STAMP}
          onClick={handleButtonClick(AnimationTypes.STAMP)}
        />
        <InteractiveIconTrigger
          svgPath="src/assets/svg/batch-scanning.svg"
          label="Batch Scanning"
          isActive={activeFeature === AnimationTypes.BATCH_SCANNING}
          onClick={handleButtonClick(AnimationTypes.BATCH_SCANNING)}
        />
        <InteractiveIconTrigger
          svgPath="src/assets/svg/advanced-filters.svg"
          label="Advanced Filters"
          isActive={activeFeature === AnimationTypes.ADVANCED_FILTERS}
          onClick={handleButtonClick(AnimationTypes.ADVANCED_FILTERS)}
        />
        <InteractiveIconTrigger
          svgPath="src/assets/svg/export-share.svg"
          label="Export & Share"
          isActive={activeFeature === AnimationTypes.EXPORT_SHARE}
          onClick={handleButtonClick(AnimationTypes.EXPORT_SHARE)}
        />
      </section>
    </main>
  );
}

export default App;
