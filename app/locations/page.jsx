import Link from 'next/link';
import api from '../../axios/config';

export default async function Locations() {
  const { data } = await api.get('/location');
  console.log(data);

  return (
    <main className='bg-zinc-200 min-h-full p-4'>
      <ul>
        {data &&
          data.results &&
          data.results.map((location) => (
            <li key={location.id}>
              <Link href={`/locations/${location.id}`}>{location.name}</Link>
            </li>
          ))}
      </ul>
    </main>
  );
}
