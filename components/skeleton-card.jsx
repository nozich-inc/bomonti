import clsx from 'clsx';

const SkeletonCard = ({ isLoading = true, className, ...props }) => (
  <div
    className={clsx(
      'rounded-2xl bg-gray-100/80 p-4 animate-pulse',
      isLoading &&
        'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent',
      className
    )}
    {...props}
  >
    <div className="space-y-3">
      <div className="h-14 rounded-lg bg-gray-200" />
      <div className="h-3 w-11/12 rounded-lg bg-gray-200" />
      <div className="h-3 w-8/12 rounded-lg bg-gray-200" />
    </div>
  </div>
);

export default SkeletonCard;
