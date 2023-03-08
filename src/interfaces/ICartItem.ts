export interface ICartItem {
  id: string;
  imageUrl: string;
  title: string;
  ingredients?: string;
  price: number;
  option: string;
  size: string;
  cartId: string;
  count: number;
}
