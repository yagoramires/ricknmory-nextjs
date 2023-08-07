import Image from 'next/image';

export default function Home() {
  return (
    <main className='p-4 flex flex-col lg:flex-row items-center justify-center gap-8 relative'>
      <div className=' w-full lg:w-1/2'>
        <h1 className='font-extrabold text-zinc-600 text-4xl mb-2'>
          Rick & <br /> Morty API
        </h1>

        <h3 className='mb-4 font-medium pl-2 border-l-2 border-zinc-700 text-zinc-700'>
          Find your favorites rick and morty
          <br /> characters
        </h3>

        <form className='w-full'>
          <button type='submit'></button>
          <input
            type='text'
            className='px-4 py-2 w-full lg:w-[400px] rounded-full'
            placeholder='Search...'
          />
        </form>
      </div>
      <Image
        src='/assets/home-img.png'
        width={400}
        height={300}
        alt='logo'
        priority
      />
      <Image
        src='/assets/background.jpeg'
        width={1280}
        height={2000}
        alt='logo'
        priority
        className='absolute top-0 left-0 object-cover min-h-full opacity-20'
        style={{ filter: 'grayscale(100%) invert(200%)' }}
      />
    </main>
  );
}
