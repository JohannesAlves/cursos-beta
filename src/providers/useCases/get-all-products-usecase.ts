import { DummyJsonProvider } from '../DummyJsonApi';
import { IAllProducts } from '../dto/allProductsDto';

const provider = new DummyJsonProvider();

export async function GetAllProducts() {
  const products = await provider.request(
    'GET',
    '/products',
    {} as IAllProducts
  );

  return products;
}
