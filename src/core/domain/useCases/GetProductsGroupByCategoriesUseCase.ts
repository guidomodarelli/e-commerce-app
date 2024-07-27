import { ProductRepository } from "@core/ports";

export const getProductsUseCase = (productRepository: ProductRepository) => () => {
  return productRepository.findAll();
};
