import BackToHomeButton from '@/components/back-to-home-button';
import Image from 'next/image';

export default function Demo2Page() {
  return (
    <div className="flex flex-col">
      <BackToHomeButton />

      <Image
        src="/demo-2/1.jpg"
        width={1920}
        height={1200}
        alt="Welcome to Bomonti Cafe & Restaurant"
        priority
      />

      <Image
        src="/demo-2/2.jpg"
        width={1920}
        height={1200}
        alt="Bomonti Cafe & Restaurant"
      />

      <Image
        src="/demo-2/3.jpg"
        width={1920}
        height={3134}
        alt="Contact Bomonti Cafe & Restaurant"
      />
    </div>
  );
}
