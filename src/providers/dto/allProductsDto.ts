export interface ICategory {
  id: number;
  title: string;
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  categorys: ICategory[];
}

export interface IAllProducts {
  products: IProduct[];
}
