import React from 'react';
import { NavigationButtonProps } from './model/NavigationButtonProps';

/**
 * NavigationButton component renders an anchor tag with styled classes and hover/focus effects.
 *
 * @param {NavigationButtonProps} props - The props for the NavigationButton component.
 *
 * @returns {JSX.Element} The rendered navigation button component.
 *
 * @example
 * <NavigationButton url="https://example.com" title="Example Link" />
 */
const NavigationButton: React.FC<NavigationButtonProps> = ({ url, title }) => {
  return (
    <a
      href={url}
      className="mb-5 inline-block border border-neutral-200 px-4 py-3 transition-colors hover:border-action hover:bg-action hover:text-white focus:border-action focus:bg-action focus:text-white lg:mb-9 lg:px-5 lg:py-4 lg:text-xl"
    >
      {title}
    </a>
  );
};

export default NavigationButton;
