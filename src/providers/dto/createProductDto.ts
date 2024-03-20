interface ICreateProduct {
  title: string;
  description: string;
  price: number;
  rating: number;
  categorys: { id: number }[] | undefined;
}
