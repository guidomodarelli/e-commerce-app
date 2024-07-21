import { ProductRepository } from "@/core/ports/ProductRepository.port";
import { Product } from "../entities/Product";

export const saveAllProductsUseCase = (productRepository: ProductRepository) => (products: Product[]) => {
  return productRepository.saveAll(products);
};
