import { motion } from 'framer-motion';
import { ShowcaseCardProps, ShowcaseCardHeaderProps, ShowcaseCardImageProps } from './model/showcaseCardModels';
import NavigationButton from './navigation-button';
import { ANIMATION_DURATION, ShowcaseCardHeader, ShowcaseCardImage } from './show-case';


/**
 * Main showcase card component.
 * @param props - Props for the showcase card.
 */
export default function ShowCaseCard({
  title,
  actionTitle,
  description,
  linkUrl,
  linkTitle = 'Learn More',
  desktopImageUrl,
  mobileImageUrl,
  alt,
  className = '',
  animateAfter,
  isActive,
}: ShowcaseCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: ANIMATION_DURATION }}
      className={`w-full grid-cols-1 place-items-center overflow-hidden lg:grid-cols-2 ${className} ${isActive ? 'grid' : 'hidden'}`}
    >
      <div className="text-center lg:order-2 lg:text-right">
        <ShowcaseCardHeader title={title || ''} actionTitle={actionTitle || ''} description={description || ''} />
        <NavigationButton url={linkUrl} title={linkTitle} /> 
      </div>
      <motion.div
        className="relative"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ duration: ANIMATION_DURATION, delay: ANIMATION_DURATION - 0.2 }}
      >
        <ShowcaseCardImage alt={alt || ''} desktopImageUrl={desktopImageUrl || ''} mobileImageUrl={mobileImageUrl || ''} />
        {animateAfter && animateAfter(ANIMATION_DURATION)}
      </motion.div>
    </motion.article>
  );
}


// Assigning sub components to the main component
ShowCaseCard.Header = ShowcaseCardHeader;
ShowCaseCard.Image = ShowcaseCardImage;
ShowCaseCard.ActionButton = NavigationButton;
