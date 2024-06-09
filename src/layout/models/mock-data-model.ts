import { ShowcaseCardProps } from "#components/model/showcaseCardModels";
import { AnimationType } from "./animationTypes";
 
/**
 * Interface for feature box data, extending ShowcaseCardProps except isActive.
 */
export interface MockDataModel extends Omit<ShowcaseCardProps, 'isActive'> {
    key?: AnimationType;
  }
  