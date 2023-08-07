import api from '@/axios/config';

export default async function Character({ params }) {
  const { data } = await api.get(`/character/${params.id}`);
  console.log(data);

  return <div>{data && data.name}</div>;
}
