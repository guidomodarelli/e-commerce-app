import { ProductRepository } from "../Domain";

export const getProductsUseCase = (productRepository: ProductRepository) => () => {
  return productRepository.findAll();
};
