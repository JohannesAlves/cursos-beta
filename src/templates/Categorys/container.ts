import { ICategory } from '@/providers/dto/allProductsDto';
import { GetAllCategorys } from '@/providers/useCases/get-all-categorys-usecase';
import { useEffect, useState } from 'react';

export const useCategorys = () => {
  const [categorys, setCategorys] = useState<ICategory[]>();

  async function getCategorys() {
    try {
      const data = await GetAllCategorys();
      setCategorys(data.value);
    } catch (error) {
      return error;
    }
  }

  useEffect(() => {
    getCategorys();
  }, []);

  const cols = [
    { name: 'ID', key: 'id' },
    { name: 'Title', key: 'title' },
  ];

  return {
    categorys,
    cols,
  };
};
