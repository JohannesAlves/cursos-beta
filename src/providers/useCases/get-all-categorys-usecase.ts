import { ICategory } from '../dto/allProductsDto';
import { fakeApiProvider } from '../fakeApi';

const provider = new fakeApiProvider();

export async function GetAllCategorys() {
  const products = await provider.request(
    'GET',
    '/get-categorys',
    {} as ICategory
  );

  return products;
}
