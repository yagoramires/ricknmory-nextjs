import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex justify-between items-center gap-4 p-4'>
      <Link href='/' className=''>
        Home
      </Link>
      <Link href='/characters'>Characters</Link>
      <Image
        src='/assets/logo.png'
        width={200}
        height={100}
        alt='logo'
        priority
      />
      <Link href='/episodes'>Episodes</Link>
      <Link href='/locations'>Locations</Link>
    </header>
  );
}
