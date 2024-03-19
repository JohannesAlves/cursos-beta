import { IAllProducts } from '../dto/allProductsDto';
import { fakeApiProvider } from '../fakeApi';

const provider = new fakeApiProvider();

export async function GetAllProducts() {
  const products = await provider.request(
    'GET',
    '/get-products',
    {} as IAllProducts
  );

  return products;
}
