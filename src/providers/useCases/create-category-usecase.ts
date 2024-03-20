import { fakeApiProvider } from '../fakeApi';

const provider = new fakeApiProvider();

export async function CreateCategory(data: { title: string }) {
  const category = await provider.request('POST', '/create-category', data);

  return category;
}
