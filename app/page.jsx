import MainFrame from '@/components/main-frame';
import Image from 'next/image';
import Link from 'next/link';

const demos = [
  { id: 1, title: 'DEMO-1', image: '/demo-1.png', link: '/demo-1' },
  { id: 2, title: 'DEMO-2', image: '/demo-2.png', link: '/demo-2' },
  { id: 3, title: 'DEMO-3', image: '/demo-3.png', link: '/demo-3' },
];

export default function Home() {
  return (
    <MainFrame>
      <div className="demo">Choose a demo</div>

      {demos.forEach((demo) => (
        <div className="demo">
          <Link href={demo.link}>
            <div className="title">{demo.title}</div>

            <div className="image">
              <Image
                src={'/demo-1.png'}
                width={180}
                height={380}
                alt="Demo-1"
              />
            </div>
          </Link>
        </div>
      ))}
    </MainFrame>
  );
}
