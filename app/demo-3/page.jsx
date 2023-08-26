import BackToHomeButton from '@/components/back-to-home-button';
import Image from 'next/image';

export default function Demo3Page() {
  return (
    <div className="flex flex-col">
      <BackToHomeButton />

      <Image
        src="/demo-3-1.jpg"
        width={3600}
        height={6000}
        alt="Welcome to Bomonti Cafe & Restaurant"
      />

      <Image
        src="/demo-3-2.jpg"
        width={3600}
        height={9160}
        alt="Bomonti Cafe & Restaurant"
      />
    </div>
  );
}
