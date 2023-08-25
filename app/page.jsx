import MainFrame from '@/components/main-frame';
import Image from 'next/image';
import Link from 'next/link';
import Choose from './choose';

const demos = [
  { id: 1, title: 'DEMO-1', image: '/demo-1.jpg', link: '/demo-1' },
  { id: 2, title: 'DEMO-2', image: '/demo-2.jpg', link: '/demo-2' },
  { id: 3, title: 'DEMO-3', image: '/demo-3.jpg', link: '/demo-3' },
];

export default function Home() {
  return (
    <MainFrame className="grid grid-cols-2 grid-rows-2 gap-2 overflow-scroll min-w-0 py-5 px-3 mx-auto w-full">
      <Choose />

      {demos.map((demo) => (
        <div
          key={demo.id}
          className="demo border overflow-hidden w-full h-full bg-white dark:bg-black rounded-lg"
        >
          <Link href={demo.link}>
            <div className="title m-3 text-rose-900 font-semibold">
              {demo.title}
            </div>

            <div className="image">
              <Image
                className="w-full"
                src={demo.image}
                width={180}
                height={380}
                alt={demo.title}
              />
            </div>
          </Link>
        </div>
      ))}
    </MainFrame>
  );
}
