import { useEffect, useState } from 'react';

import { IProduct } from '@/providers/dto/allProductsDto';
import { GetAllProducts } from '@/providers/useCases/get-all-products-usecase';

export const useHome = () => {
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
    { name: 'Rating', key: 'rating' },
    { name: 'Description', key: 'description' },
    { name: 'Category', key: 'categorys' },
    { name: '' },
    { name: '' },
  ];

  return {
    columns,
    products,
  };
};
