import Link from 'next/link';
import api from '../../axios/config';

export default async function Episodes() {
  const { data } = await api.get('/episode');
  console.log(data);

  return (
    <main className='bg-zinc-200 min-h-full p-4'>
      <ul>
        {data &&
          data.results &&
          data.results.map((episode) => (
            <li key={episode.id}>
              <Link href={`/episodes/${episode.id}`}>{episode.name}</Link>
            </li>
          ))}
      </ul>
    </main>
  );
}
