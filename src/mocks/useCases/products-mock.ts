// Arquivo de mocks (por exemplo, useCases.mocks.ts)

export const GetAllCategorys = jest
  .fn()
  .mockResolvedValue({ value: [{ id: 1, title: 'Category 1' }] });

export const CreateCategory = jest
  .fn()
  .mockImplementation(async (data: { title: string }) => {
    // Simulating a successful creation
    return { isSuccess: true };
  });
