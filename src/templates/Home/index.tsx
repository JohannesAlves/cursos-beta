'use client';
import { useEffect, useState } from 'react';

import { Container } from '@/components/Container';
import { Table } from '@/components/Table';

import { IProduct } from '@/providers/dto/allProductsDto';
import { GetAllProducts } from '@/providers/useCases/get-all-products-usecase';

export const HomeTemplate = () => {
  const [products, setProducts] = useState<IProduct[]>();

  async function getProducts() {
    try {
      const data = await GetAllProducts();
      setProducts(data.value);
    } catch (error) {
      return error;
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  const columns = [
    { name: 'ID', key: 'id' },
    { name: 'Title', key: 'title' },
    { name: 'Price', key: 'price' },
    { name: 'Category', key: 'categorys' },
    { name: 'Brand', key: 'brand' },
    { name: 'Description', key: 'description' },
    { name: 'Rating', key: 'rating' },
  ];

  return (
    <main className="flex">
      <Container>
        <div className="flex gap-2 justify-center">
          <button className="text-gray-400 border-2 px-6 py-1 border-gray-700 rounded-lg hover:text-red-500 transition-all">
            CREATE PRODUCT
          </button>
        </div>

        <Table cols={columns}>
          {products?.map((product) => (
            <tr
              key={product.id}
              className="border-b bg-gray-800 border-gray-700"
            >
              <td className="py-4 px-6">{product.id}</td>
              <td className="py-4 px-6">{product.title}</td>
              <td className="py-4 px-6">{product.description}</td>
              <td className="py-4 px-6">{product.price}</td>
              <td className="py-4 px-6">{product.rating}</td>
              <td className="py-4 px-6">
                {product.categorys.map((category) =>
                  category.title.toUpperCase()
                )}
              </td>
            </tr>
          ))}
        </Table>
      </Container>
    </main>
  );
};
