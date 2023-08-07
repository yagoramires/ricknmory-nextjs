import api from '@/axios/config';

export default async function Episode({ params }) {
  const { data } = await api.get(`/episode/${params.id}`);
  console.log(data);

  return <div>{data && data.name}</div>;
}
