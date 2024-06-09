/**
 * Interface for SVG properties used in the navigation button.
 */
export interface SvgProps {
  svgPath: string;
}

/**
 * Interface for the navigation button properties.
 */
export interface NavigationButtonProps extends SvgProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}
