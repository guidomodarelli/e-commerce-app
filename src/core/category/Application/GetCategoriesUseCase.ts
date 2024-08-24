import { CategoryRepository } from "@core/category/Domain";

export const getCategoriesUseCase = (categoryRepository: CategoryRepository) => () => {
  return categoryRepository.findAll();
};
