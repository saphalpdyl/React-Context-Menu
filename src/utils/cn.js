import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs) => {
  // Combine class names from various sources (props, state, conditions)
  const combinedClasses = clsx(...inputs);

  // Ensure Tailwind classes are optimized and merged with non-Tailwind classes
  return twMerge(combinedClasses);
};

export default cn;