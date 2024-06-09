import { useRef } from 'react';
import { ReactSVG } from 'react-svg';
import { SvgProps, NavigationButtonProps } from './model/NavigationButtonInterfaces';

/**
 * Component for rendering an SVG icon.
 * 
 * @param svgPath - The path to the SVG file.
 */
const SvgIcon = ({ svgPath }: SvgProps) => {
  return <ReactSVG src={svgPath} />;
};

/**
 * Component for rendering a navigation button with an SVG icon.
 * 
 * @param label - The label for the button.
 * @param svgPath - The path to the SVG file.
 * @param isActive - Whether the button is active or not.
 * @param onClick - Function to handle button click.
 */
export default function NavigationButton({
  label,
  svgPath,
  isActive,
  onClick,
}: NavigationButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  /**
   * Handles the button click event, triggers the onClick prop function
   * and smoothly scrolls the button into view.
   */
  const handleButtonClick = () => {
    onClick();
    buttonRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  };

  return (
    <button
      ref={buttonRef}
      role="button"
      onClick={handleButtonClick}
      className={`flex h-20 w-full min-w-[280px] outline-none hover:border-action border-transparent border-2 hover:border-action
      flex-1 cursor-pointer snap-center font-bold items-center justify-center gap-x-4 border-r border-neutral-300 px-6 py-4 transition-colors last:border-r-0 xl:min-w-[270px] ${isActive ? 'animate-feature-svg bg-action/5' : 'bg-white'}`}
    >
      <NavigationButton.Svg svgPath={svgPath} />
      {label}
    </button>
  );
}

// Attach SvgIcon component as a property of NavigationButton
NavigationButton.Svg = SvgIcon;
