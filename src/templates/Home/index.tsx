'use client';

import { Container } from '@/components/Container';
import { Table } from '@/components/Table';

import { formatNumberToCurrency } from '@/utils/format-number-toCurrency';
import { useHome } from './container';
import { PencilIcon, XMarkIcon } from '@heroicons/react/16/solid';
import { CategorysTemplate } from '../Categorys';
import { Button } from '@/components/Button';
import { Modal } from '@/components/Modal';

export const HomeTemplate = () => {
  const {
    modalCreateProduct,
    columns,
    products,
    register,
    handleSubmit,
    onSubmit,
  } = useHome();

  return (
    <main className="flex">
      <Container>
        <div className="flex justify-center gap-10">
          <CategorysTemplate />

          <div>
            <Button
              text="CRIAR PRODUTO"
              onClick={() => modalCreateProduct.toggle()}
            />
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

      <Modal
        isOpen={modalCreateProduct.isOpen}
        onClose={modalCreateProduct.toggle}
      >
        <div className="bg-slate-800 w-[40rem] h-[32rem] rounded-lg p-8 text-gray-400">
          <h3 className="text-xl">Criar Produto</h3>
          <hr className="h-px my-8 border-0 bg-gray-700" />

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 grid-rows-4 gap-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Title
                </label>
                <input
                  {...register('title')}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Price
                </label>
                <input
                  {...register('price')}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Rating
                </label>
                <input
                  {...register('rating')}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Description
                </label>
                <input
                  {...register('description')}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Category
                </label>
                <input
                  {...register('categorys')}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                />
              </div>
            </div>

            <Button text="CRIAR" />
          </form>
        </div>
      </Modal>
    </main>
  );
};
