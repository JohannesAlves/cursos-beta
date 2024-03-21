interface IUpdateProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  categorys: { id: number }[] | undefined;
}
