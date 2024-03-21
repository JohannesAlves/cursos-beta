import {
  CreateCategory,
  GetAllCategorys,
} from '@/mocks/useCases/products-mock';
import { useCategorys } from './container';

jest.mock('@/providers/useCases');

describe('useCategorys', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch categorys on mount', async () => {
    const mockCategorys = [
      { id: 1, title: 'Category 1' },
      { id: 2, title: 'Category 2' },
    ];
    GetAllCategorys.mockResolvedValueOnce({ value: mockCategorys });

    const { getCategorys } = useCategorys();
    await getCategorys();

    expect(GetAllCategorys).toHaveBeenCalledTimes(1);
    expect(GetAllCategorys).toHaveBeenCalledWith();
    expect(GetAllCategorys).toHaveReturnedWith(
      Promise.resolve({ value: mockCategorys })
    );
  });

  it('should call CreateCategory and toggle modal on submit', async () => {
    const mockCreatedCategory = { id: 3, title: 'New Category' };
    const mockFormData = { title: 'New Category' };
    CreateCategory.mockResolvedValueOnce({ isSuccess: true });

    const { onSubmitCreateCategory, modalCreateCategory } = useCategorys();
    await onSubmitCreateCategory(mockFormData);

    expect(CreateCategory).toHaveBeenCalledTimes(1);
    expect(CreateCategory).toHaveBeenCalledWith({ title: 'New Category' });
    expect(modalCreateCategory.isOpen).toBe(false);
  });

  it('should handle error on fetch categorys', async () => {
    const mockError = new Error('Failed to fetch categorys');
    GetAllCategorys.mockRejectedValueOnce(mockError);

    const { getCategorys } = useCategorys();
    await expect(getCategorys()).rejects.toThrowError(mockError);

    expect(GetAllCategorys).toHaveBeenCalledTimes(1);
    expect(GetAllCategorys).toHaveBeenCalledWith();
  });

  it('should handle error on create category', async () => {
    const mockError = new Error('Failed to create category');
    const mockFormData = { title: 'New Category' };
    CreateCategory.mockRejectedValueOnce(mockError);

    const { onSubmitCreateCategory, modalCreateCategory } = useCategorys();
    await onSubmitCreateCategory(mockFormData);

    expect(CreateCategory).toHaveBeenCalledTimes(1);
    expect(CreateCategory).toHaveBeenCalledWith({ title: 'New Category' });
    expect(modalCreateCategory.isOpen).toBe(true);
  });
});
