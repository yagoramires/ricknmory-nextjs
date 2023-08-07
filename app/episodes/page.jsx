import api from '../../axios/config';

export default async function Episodes() {
  const { data } = await api.get('/episode');
  console.log(data);

  return (
    <main className='bg-zinc-200 min-h-full p-4'>
      <ul>
        {data &&
          data.results &&
          data.results.map((character) => <li>{character.name}</li>)}
      </ul>
    </main>
  );
}
