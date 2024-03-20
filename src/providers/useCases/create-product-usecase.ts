import { fakeApiProvider } from '../fakeApi';

const provider = new fakeApiProvider();

export async function CreateProduct(data: ICreateProduct) {
  const product = await provider.request('POST', '/create-product', data);

  return product;
}
