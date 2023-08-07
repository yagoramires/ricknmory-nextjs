'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const path = usePathname();

  console.log(path);

  return (
    <header className='flex justify-between items-center gap-4 p-4'>
      <Link
        href='/'
        className={`font-mediumedium ${
          path === '/' &&
          'bg-zinc-700 px-[12px] py-[2px] rounded-full text-white'
        }`}
      >
        Home
      </Link>
      <Link
        href='/characters'
        className={`font-medium ${
          path === '/characters' &&
          'bg-zinc-700 px-[12px] py-[2px] rounded-full text-white'
        }`}
      >
        Characters
      </Link>
      <Image
        src='/assets/logo.png'
        width={200}
        height={100}
        alt='logo'
        priority
        style={{ filter: 'grayscale(100%) invert(200%)' }}
      />
      <Link
        href='/episodes'
        className={`font-medium ${
          path === '/episodes' &&
          'bg-zinc-700 px-[12px] py-[2px] rounded-full text-white'
        }`}
      >
        Episodes
      </Link>
      <Link
        href='/locations'
        className={`font-medium ${
          path === '/locations' &&
          'bg-zinc-700 px-[12px] py-[2px] rounded-full text-white'
        }`}
      >
        Locations
      </Link>
    </header>
  );
}
