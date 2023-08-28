import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const Skeleton = ({ isLoading = true, className, ...props }) => (
  <div
    className={twMerge(
      clsx(
        'w-full h-4 mb-1 bg-gray-200 px-4 animate-pulse',
        isLoading &&
          'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent',
        className
      )
    )}
    {...props}
  />
);

export default Skeleton;
