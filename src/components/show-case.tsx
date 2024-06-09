import { ReactNode, useState } from 'react';
 import { ShowcaseCardHeaderProps, ShowcaseCardImageProps } from './model/showcaseCardModels';

export const ANIMATION_DURATION = 0.5;

/**
 * Header component for the showcase card.
 * @param title - Title of the feature.
 * @param actionTitle - Title of the action button.
 * @param description - Description of the feature.
 */
export const ShowcaseCardHeader = ({ title, actionTitle, description }: ShowcaseCardHeaderProps) => {
  return (
    <>
      <p className="mb-3 font-bold uppercase text-action lg:mb-6">{actionTitle}</p>
      <h1 className="mb-3 text-3xl font-bold lg:mb-6">{title}</h1>
      <p className="mb-3 text-[13px] leading-7 lg:mb-8 lg:text-xl lg:leading-8">{description}</p>
    </>
  );
};

/**
 * Image component for the showcase card.
 * @param mobileImageUrl - URL of the image for mobile devices.
 * @param desktopImageUrl - URL of the image for desktop devices.
 * @param alt - Alt text for the image.
 */
export const ShowcaseCardImage:any = ({ mobileImageUrl, desktopImageUrl, alt }: ShowcaseCardImageProps) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoading = () => setLoaded((prev) => !prev);

  return (
    <picture onLoad={handleLoading} className={`${loaded ? 'h-auto' : 'h-[246px] lg:h-[600px]'}`}>
      <source srcSet={desktopImageUrl} media="(min-width: 1024px)" />
      <img className="w-auto lg:order-1 lg:justify-self-start" alt={alt} src={mobileImageUrl} />
    </picture>
  );
};


