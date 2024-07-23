import { ProductRepository } from "@core/ports/ProductRepository.port";
import { Category } from "../entities";

export const getProductsGroupByCategoriesUseCase =
  (productRepository: ProductRepository) => (): Promise<Category[]> => {
    return productRepository.findAllGroupByCategory();
  };
