'use client';

import { Sidebar } from '@/components/Sidebar';
import { IProduct } from '@/providers/dto/allProductsDto';
import { GetAllProducts } from '@/providers/useCases/get-all-products-usecase';
import { useEffect, useState } from 'react';
import PencilIcon from '@/assets/icons/pencil.svg';
import Image from 'next/image';
import { formatNumberToCurrency } from '@/utils/format-number-toCurrency';
import { Container } from '@/components/Container';

export const HomeTemplate = () => {
  const [products, setProducts] = useState<IProduct[]>();

  async function getProducts() {
    const data = await GetAllProducts();
    setProducts(data.value.products);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <main className="flex">
      <Container>
        <div className="flex gap-2 justify-center">
          <button className="text-gray-400 border-2 px-6 py-1 border-gray-700 rounded-lg hover:text-red-500 transition-all">
            CREATE PRODUCT
          </button>
        </div>

        <div className="mt-5 flex items-center justify-center">
          <div className="overflow-x-auto h-[80rem] relative">
            <table className="w-full text-sm text-left  text-gray-400">
              <thead className="text-xs uppercase   bg-gray-700 text-gray-400">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    ID
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Title
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Price
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Category
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Brand
                  </th>

                  <th scope="col" className="py-3 px-6">
                    Description
                  </th>

                  <th scope="col" className="py-3 px-6">
                    Rating
                  </th>

                  <th scope="col" className="py-3 px-4"></th>

                  <th scope="col" className="py-3 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {products?.map((product) => (
                  <tr
                    key={product.id}
                    className=" border-b bg-gray-800 border-gray-700"
                  >
                    <td className="py-4 px-6">{product.id}</td>
                    <td className="py-4 px-6">{product.title}</td>
                    <td className="py-4 px-6">
                      {formatNumberToCurrency(product.price)}
                    </td>
                    <td className="py-4 px-6">{product.category}</td>
                    <td className="py-4 px-6">{product.brand}</td>
                    <td className="py-4 px-6">{product.description}</td>
                    <td className="py-4 px-6">{product.rating}</td>
                    <td>
                      <button className="hover:text-red-900 transition-all text-lg text-red-500">
                        x
                      </button>
                    </td>
                    <td>
                      <button className="hover:text-red-900 transition-all text-lg text-red-500">
                        <svg
                          className={`fill-gray-600 hover:fill-gray-400`}
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18.311 2.828l2.862 2.861-15.033 15.032-3.583.722.723-3.584 15.031-15.031zm0-2.828l-16.873 16.872-1.438 7.127 7.127-1.437 16.874-16.873-5.69-5.689z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </main>
  );
};
