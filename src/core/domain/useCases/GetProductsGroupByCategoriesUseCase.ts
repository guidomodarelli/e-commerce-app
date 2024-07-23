import { ProductRepository } from "@core/ports/ProductRepository.port";
import "core-js/proposals/array-grouping-v2";
import { Product } from "../entities";

export const getProductsGroupByCategoriesUseCase = (productRepository: ProductRepository) => async () => {
  const products = await productRepository.findAll();
  return Object.groupBy(products, (product) => {
    return product.category ?? "";
  }) as Record<string, Product[]>;
};
