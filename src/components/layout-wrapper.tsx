import { ReactElement } from 'react';
import { ComponentsModel } from './model/components-model';



/**
 * Container component for general consistent layout.
 * It wraps the content in a section with specified styling.
 *
 * @param {string} className - Additional class names for the container.
 * @param {ReactElement} children - The content to be wrapped inside the container.
 * @returns {ReactElement} The styled container component.
 */
export default function LayoutWrapper({ className, children }: ComponentsModel): ReactElement {
  return (
    <section
      className={`mx-auto flex w-full max-w-[1200px] flex-col items-center justify-center px-3 ${className}`}
    >
      {children}
    </section>
  );
}
