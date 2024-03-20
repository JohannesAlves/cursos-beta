import useModal from '@/hooks/useModal';
import { ICategory } from '@/providers/dto/allProductsDto';
import { CreateCategory } from '@/providers/useCases/create-category-usecase';
import { GetAllCategorys } from '@/providers/useCases/get-all-categorys-usecase';
import { useEffect, useState } from 'react';

export const useCategorys = () => {
  const [categorys, setCategorys] = useState<ICategory[]>();
  const modalCreateCategory = useModal();

  async function getCategorys() {
    try {
      const data = await GetAllCategorys();
      setCategorys(data.value);
    } catch (error) {
      return error;
    }
  }

  const onSubmitCreateCategory = async (data: { title: string }) => {
    try {
      const category = await CreateCategory({ title: data.title });
      if (category.isSuccess) return modalCreateCategory.toggle();
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getCategorys();
  }, [modalCreateCategory.isOpen]);

  const cols = [
    { name: 'ID', key: 'id' },
    { name: 'Title', key: 'title' },
  ];

  return {
    categorys,
    cols,
    onSubmitCreateCategory,
    modalCreateCategory,
    getCategorys,
  };
};
