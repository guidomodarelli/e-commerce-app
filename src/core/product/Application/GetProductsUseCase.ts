import { ProductRepository } from "@core/product/Domain";

export const getProductsUseCase = (productRepository: ProductRepository) => () => {
  return productRepository.findAll();
};
