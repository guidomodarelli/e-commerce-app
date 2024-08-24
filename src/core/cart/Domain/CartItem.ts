export interface CartItem {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  categoryId?: string;
  quantity: number;
}
