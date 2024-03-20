import { fakeApiProvider } from '../fakeApi';

const provider = new fakeApiProvider();

export async function DeleteProduct(data: { id: number }) {
  const product = await provider.request('POST', '/delete-product', data);

  return product;
}
