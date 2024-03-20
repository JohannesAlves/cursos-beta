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
import Categorys from '@/app/categorys/page';
import { CategorysTemplate } from '../Categorys';
import { Button } from '@/components/Button';

export const HomeTemplate = () => {
  const { columns, products } = useHome();

  return (
    <main className="flex">
      <Container>
        <div className="flex justify-center gap-10">
          <CategorysTemplate />

          <div>
            <Button text="CRIAR PRODUTO" />
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
          </div>
        </div>
      </Container>
    </main>
  );
};
