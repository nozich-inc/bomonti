import BackToHomeButton from '@/components/back-to-home-button';
import Image from 'next/image';

export default function Demo3Page() {
  return (
    <div className="flex flex-col">
      <BackToHomeButton />

      <Image
        src="/demo-3/1.jpg"
        width={1920}
        height={1200}
        alt="Welcome to Bomonti Cafe & Restaurant"
        priority
      />

      <Image
        src="/demo-3/2.jpg"
        width={1920}
        height={1200}
        alt="Bomonti Cafe & Restaurant"
      />

      <Image
        src="/demo-3/3.jpg"
        width={1920}
        height={1200}
        alt="Menu Bomonti Cafe & Restaurant"
      />

      <Image
        src="/demo-3/4.jpg"
        width={1920}
        height={1200}
        alt="Staff Bomonti Cafe & Restaurant"
      />

      <Image
        src="/demo-3/5.jpg"
        width={1920}
        height={7648}
        alt="Contact Bomonti Cafe & Restaurant"
      />
    </div>
  );
}
