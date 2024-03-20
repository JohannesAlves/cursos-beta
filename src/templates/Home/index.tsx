'use client';

import { Container } from '@/components/Container';
import { Table } from '@/components/Table';

import { formatNumberToCurrency } from '@/utils/format-number-toCurrency';
import { useHome } from './container';
import {
  LockClosedIcon,
  PencilIcon,
  XMarkIcon,
} from '@heroicons/react/16/solid';

export const HomeTemplate = () => {
  const { columns, products } = useHome();

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
              <td className="py-4 px-6">
                {formatNumberToCurrency(product.price)}
              </td>
              <td className="py-4 px-6">{product.rating}</td>
              <td className="py-4 px-6">{product.description}</td>
              <td className="py-4 px-6">
                {product.categorys.map((category) =>
                  category.title.toUpperCase()
                )}
              </td>
              <td>
                <button>
                  <PencilIcon
                    width={25}
                    height={25}
                    className="hover:text-gray-600"
                  />
                </button>
              </td>
              <td>
                <button>
                  <XMarkIcon
                    width={25}
                    height={25}
                    className="hover:text-red-500"
                  />
                </button>
              </td>
            </tr>
          ))}
        </Table>
      </Container>
    </main>
  );
};
