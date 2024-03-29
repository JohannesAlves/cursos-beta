import { useEffect, useState } from 'react';

import { IProduct } from '@/providers/dto/allProductsDto';
import { GetAllProducts } from '@/providers/useCases/get-all-products-usecase';
import useModal from '@/hooks/useModal';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CreateProduct } from '@/providers/useCases/create-product-usecase';
import { DeleteProduct } from '@/providers/useCases/delete-product-usecase';
import { useCategorys } from '../Categorys/container';
import { useRouter } from 'next/router';
import { UpdateProduct } from '@/providers/useCases/update-product-usecase';

type Inputs = {
  id?: number;
  title: string;
  price: number;
  rating: number;
  description: string;
  categorys: any;
};

export const useHome = () => {
  const { categorys, modalCreateCategory, onSubmitCreateCategory } =
    useCategorys();
  const modalCreateProduct = useModal();
  const modalUpdateProduct = useModal();
  const modalDeleteProduct = useModal();
  const [selectedProduct, setSelectedProduct] = useState<IProduct>();
  const [products, setProducts] = useState<IProduct[]>();
  const [checkedItems, setCheckedItems] = useState<
    { id: number }[] | undefined
  >();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  async function getProducts() {
    try {
      const data = await GetAllProducts();
      setProducts(data.value);
    } catch (error) {
      return error;
    }
  }

  const columns = [
    { name: 'ID', key: 'id' },
    { name: 'Title', key: 'title' },
    { name: 'Price', key: 'price' },
    { name: 'Rating', key: 'rating' },
    { name: 'Description', key: 'description' },
    { name: 'Category', key: 'categorys' },
    { name: '' },
    { name: '' },
  ];

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    setCheckedItems((prev) => {
      if (prev) {
        return [...prev, { id: Number(name) }];
      } else {
        // Handle the case where prev is null or undefined
        return [{ id: Number(name) }];
      }
    });
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { title, price, rating, description } = data;

    try {
      const product = await CreateProduct({
        title,
        price: Number(price),
        rating: Number(rating),
        description,
        categorys: checkedItems,
      });

      if (product.isSuccess) {
        modalCreateProduct.toggle();
      }
    } catch (error) {
      return error;
    }
  };

  const onSubmitDelete = async () => {
    try {
      await DeleteProduct({ id: Number(selectedProduct?.id) });
      modalDeleteProduct.toggle();
    } catch (error) {
      return error;
    }
  };

  const onSubmitUpdate: SubmitHandler<Inputs> = async (data) => {
    const { title, price, rating, description } = data;

    try {
      if (selectedProduct) {
        const updatedProduct = await UpdateProduct({
          id: selectedProduct.id,
          title,
          price: Number(price),
          rating: Number(rating),
          description,
          categorys: checkedItems,
        });

        if (updatedProduct.isSuccess) modalUpdateProduct.toggle();
      }
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getProducts();
  }, [
    modalCreateProduct.isOpen,
    modalDeleteProduct.isOpen,
    modalCreateCategory.isOpen,
    modalUpdateProduct.isOpen,
  ]);

  return {
    columns,
    products,
    modalCreateProduct,
    modalDeleteProduct,
    modalUpdateProduct,
    selectedProduct,
    setSelectedProduct,

    register,
    handleSubmit,
    watch,

    onSubmit,
    onSubmitDelete,
    onSubmitUpdate,

    checkedItems,
    handleCheckboxChange,

    categorys,
    modalCreateCategory,
    onSubmitCreateCategory,
  };
};
