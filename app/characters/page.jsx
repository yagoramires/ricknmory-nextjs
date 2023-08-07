import Link from 'next/link';
import api from '../../axios/config';

export default async function Characters() {
  const { data } = await api.get('/character');
  console.log(data);

  return (
    <main className='bg-zinc-200 min-h-full p-4'>
      <ul>
        {data &&
          data.results &&
          data.results.map((character) => (
            <li key={character.id}>
              <Link href={`/characters/${character.id}`}>{character.name}</Link>
            </li>
          ))}
      </ul>
    </main>
  );
}
