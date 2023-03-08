export interface IProduct {
  id: string;
  imageUrl: string;
  ingredients: string;
  options: string[];
  price: number;
  sizes?: {
    [x: string]: string;
  };
  title: string;
  type?: string;
}
