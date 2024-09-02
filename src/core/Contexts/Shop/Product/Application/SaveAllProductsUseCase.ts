import SHOP_DATA from "@/shop-data";
import { ProductRepository } from "../Domain";

export const saveAllProductsUseCase = (productRepository: ProductRepository) => () => {
  return productRepository.saveAll(SHOP_DATA);
};
