import { ProductRepository } from "@core/ports/ProductRepository.port";

export const getProductsUseCase = (productRepository: ProductRepository) => () => {
  return productRepository.findAll();
};
