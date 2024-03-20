import { useEffect, useState } from 'react';

import { IProduct } from '@/providers/dto/allProductsDto';
import { GetAllProducts } from '@/providers/useCases/get-all-products-usecase';
import useModal from '@/hooks/useModal';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CreateProduct } from '@/providers/useCases/create-product-usecase';

type Inputs = {
  title: string;
  price: number;
  rating: number;
  description: string;
  categorys: any;
};

export const useHome = () => {
  const modalCreateProduct = useModal();
  const [selectedProduct, setSelectedProduct] = useState<IProduct>();
  const [products, setProducts] = useState<IProduct[]>();

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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { title, price, rating, description, categorys } = data;

    try {
      const product = await CreateProduct({
        title,
        price: Number(price),
        rating: Number(rating),
        description,
      });

      if (product.isSuccess) {
        modalCreateProduct.toggle();
      }
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getProducts();
  }, [modalCreateProduct.isOpen]);

  return {
    columns,
    products,
    modalCreateProduct,
    selectedProduct,
    setSelectedProduct,

    register,
    handleSubmit,
    watch,
    onSubmit,
  };
};
