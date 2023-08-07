import api from '@/axios/config';

export default async function Location({ params }) {
  console.log(params);

  const { data } = await api.get(`/location/${params.id}`);
  console.log(data);

  return <div>{data && data.name}</div>;
}
