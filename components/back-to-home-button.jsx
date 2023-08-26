import Link from 'next/link';
import { MdArrowBack } from 'react-icons/md';

export default function BackToHomeButton() {
  return (
    <Link
      className="back-button bg-white rounded-full w-16 h-16 border-2 border-rose-900 flex items-center justify-center fixed bottom-10 right-10 shadow-2xl"
      href="/"
    >
      <MdArrowBack className="text-4xl text-rose-900" />
    </Link>
  );
}
