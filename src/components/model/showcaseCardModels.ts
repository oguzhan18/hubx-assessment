import { ReactNode } from "react";
import { NavigationButtonProps } from "./NavigationButtonProps";

/**
 * Props for the header component of the showcase card.
 */
export interface ShowcaseCardHeaderProps {
    title?: any;
    actionTitle?: any;
    description?: any;
  }
  
  /**
   * Props for the image component of the showcase card.
   */
  export interface ShowcaseCardImageProps {
    mobileImageUrl?: string;
    desktopImageUrl?: string;
    alt?: string;
  }
  
  /**
   * Props for the main showcase card component.
   */
  export interface ShowcaseCardProps extends ShowcaseCardHeaderProps, ShowcaseCardImageProps, Omit<NavigationButtonProps, 'linkTitle'> {
    linkTitle?: string;
    linkUrl?:string;
    className?: string;
    animateAfter?: ((parentAnimationDuration: number) => ReactNode) | any;
    isActive: boolean;
  }
  