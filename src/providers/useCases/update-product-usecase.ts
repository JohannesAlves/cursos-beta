import { fakeApiProvider } from '../fakeApi';

const provider = new fakeApiProvider();

export async function UpdateProduct(data: IUpdateProduct) {
  const product = await provider.request('POST', '/update-product', data);

  return product;
}
