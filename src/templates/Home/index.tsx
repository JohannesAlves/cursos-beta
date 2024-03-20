'use client';

import { Container } from '@/components/Container';
import { Table } from '@/components/Table';

import { formatNumberToCurrency } from '@/utils/format-number-toCurrency';
import { useHome } from './container';
import { CheckIcon, PencilIcon, XMarkIcon } from '@heroicons/react/16/solid';
import { CategorysTemplate } from '../Categorys';
import { Button } from '@/components/Button';
import { Modal } from '@/components/Modal';
import { useCategorys } from '../Categorys/container';

export const HomeTemplate = () => {
  const {
    modalCreateProduct,
    modalDeleteProduct,
    columns,
    products,
    selectedProduct,
    setSelectedProduct,
    register,
    handleSubmit,
    onSubmit,
    onSubmitDelete,

    checkedItems,
    handleCheckboxChange,
    categorys,
    modalCreateCategory,
    onSubmitCreateCategory,
  } = useHome();

  return (
    <main className="flex">
      <Container>
        <div className="flex justify-center gap-10">
          <div>
            <Button
              text="CRIAR CATEGORIA"
              onClick={() => modalCreateCategory.toggle()}
            />

            <CategorysTemplate categorys={categorys} />
          </div>

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
                    {product.categorys.map((category, index) => (
                      <span key={index}>
                        {category.title.toUpperCase()}
                        {index < product.categorys.length - 1 && ' '}
                        {' - '}
                      </span>
                    ))}
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
                    <button
                      onClick={() => {
                        modalDeleteProduct.toggle();
                        setSelectedProduct(product);
                      }}
                    >
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

      {/* Modal create product */}
      <Modal
        isOpen={modalCreateProduct.isOpen}
        onClose={modalCreateProduct.toggle}
      >
        <div className="bg-slate-800 w-[40rem] h-[35rem] overflow-x-auto rounded-lg p-8 text-gray-400">
          <h3 className="text-xl">Criar Produto</h3>
          <hr className="h-px my-8 border-0 bg-gray-700" />

          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-2 gap-2 ">
              <div>
                <label className=" mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Title
                </label>
                <input
                  {...register('title')}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                />
              </div>

              <div>
                <label className=" mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Price
                </label>
                <input
                  {...register('price')}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                />
              </div>

              <div>
                <label className=" mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Rating
                </label>
                <input
                  {...register('rating')}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                />
              </div>

              <div>
                <label className=" mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Description
                </label>
                <input
                  {...register('description')}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                />
              </div>
            </div>

            <div className="">
              <label className=" text-sm font-medium text-gray-900 dark:text-white">
                Category
              </label>
              <ul className="grid grid-cols-4 gap-2  text-sm font-medium rounded-lg  text-white">
                {categorys?.map((category) => (
                  <li
                    className=" border-b bg-gray-700  rounded-t-lg border-gray-600"
                    key={`category-${category.id}`}
                  >
                    <div className="flex items-center ps-3">
                      <input
                        type="checkbox"
                        name={String(category.id)}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
                      />
                      <label className="w-full py-3 ms-2 text-sm font-medium  text-gray-300">
                        {category.title.toUpperCase()}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <Button text="CRIAR" />
          </form>
        </div>
      </Modal>

      {/* Modal delete product */}
      <Modal
        isOpen={modalDeleteProduct.isOpen}
        onClose={modalDeleteProduct.toggle}
      >
        <div className="w-[30rem] h-[20rem] bg-slate-800 rounded-lg p-10">
          <h3 className="text-xl">
            Deletar Produto - {selectedProduct?.title}
          </h3>
          <hr className="h-px my-8 border-0 bg-gray-700" />

          <form onSubmit={handleSubmit(onSubmitDelete)}>
            <div className="flex justify-center items-center gap-10">
              <button>
                <CheckIcon
                  width={80}
                  height={80}
                  className="text-gray-400 hover:text-green-600"
                />
              </button>

              <button onClick={() => modalDeleteProduct.toggle()}>
                <XMarkIcon
                  width={80}
                  height={80}
                  className="text-gray-400 hover:text-red-500"
                />
              </button>
            </div>
          </form>
        </div>
      </Modal>

      <Modal
        isOpen={modalCreateCategory.isOpen}
        onClose={modalCreateCategory.toggle}
      >
        <div className="bg-slate-800 w-[40rem] h-[18rem] overflow-x-auto rounded-lg p-8 text-gray-400">
          <h3 className="text-xl">Criar Categoria</h3>
          <hr className="h-px my-8 border-0 bg-gray-700" />

          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmitCreateCategory)}
          >
            <div className="grid  ">
              <div>
                <label className=" mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Title
                </label>
                <input
                  {...register('title')}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
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
