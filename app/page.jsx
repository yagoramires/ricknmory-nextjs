import Image from 'next/image';
import SearchForm from '../components/SearchForm';

export default function Home() {
  return (
    <main className='relative'>
      <div
        className='absolute top-[300px] md:top-[330px] left-[50%] z-10 flex flex-col lg:flex-row items-center justify-center gap-16'
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <div>
          <h1 className='font-extrabold text-zinc-600 text-4xl lg:text-7xl mb-4'>
            Rick & <br /> Morty API
          </h1>

          <h3 className='mb-4 font-medium pl-2 border-l-4 border-zinc-700 text-zinc-700 ml-[3px]'>
            Find your favorites rick and morty
            <br /> characters
          </h3>

          <SearchForm />
        </div>
        <Image
          src='/assets/home-img.png'
          width={400}
          height={300}
          alt='logo'
          priority
        />
      </div>
      <Image
        src='/assets/background.jpeg'
        width={1280}
        height={2000}
        alt='logo'
        priority
        className='absolute top-0 left-0 object-cover h-[70vh] opacity-20 rounded-md'
        style={{ filter: 'grayscale(100%) invert(200%)' }}
      />
    </main>
  );
}
