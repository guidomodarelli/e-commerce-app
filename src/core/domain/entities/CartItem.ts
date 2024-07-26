import { Product } from "./Product";

export class CartItem implements Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  categoryId?: string | undefined;
  quantity = 1;

  constructor(product: Product, quantity = 1) {
    this.id = product.id;
    this.name = product.name;
    this.imageUrl = product.imageUrl;
    this.price = product.price;
    this.categoryId = product.categoryId;
    this.quantity = quantity;
  }

  increment() {
    this.quantity += 1;
  }

  decrement() {
    this.quantity -= 1;
  }
}
