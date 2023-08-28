import MainFrame from '@/components/main-frame';
import Image from 'next/image';
import Link from 'next/link';
import Choose from './choose';

const demos = [
  { id: 1, title: 'DEMO-1', image: '/demo-1/thumb.jpg', link: '/demo-1' },
  { id: 2, title: 'DEMO-2', image: '/demo-2/thumb.jpg', link: '/demo-2' },
  { id: 3, title: 'DEMO-3', image: '/demo-3/thumb.jpg', link: '/demo-3' },
];

export default function Home() {
  return (
    <div className="flex w-full max-h-full bg-gray-700">
      <MainFrame
        className="grid grid-cols-2 grid-rows-2 gap-2 overflow-scroll py-5 px-3 mx-auto w-full max-w-screen-sm"
        style={{ minWidth: '370px' }}
      >
        <Choose />

        {demos.map((demo) => (
          <div
            key={demo.id}
            className="demo p-0.5 pb-14 overflow-hidden w-full h-full bg-white rounded-lg border border-rose-800 hover:border-2 hover:border-blue-500 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <Link href={demo.link}>
              <div className="title m-3 text-rose-900 font-semibold">
                {demo.title}
              </div>
              <div className="image overflow-hidden max-h-full rounded-md">
                <Image
                  className="w-full"
                  src={demo.image}
                  width={300}
                  height={1315}
                  alt={demo.title}
                />
              </div>
            </Link>
          </div>
        ))}
      </MainFrame>
    </div>
  );
}
