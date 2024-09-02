import { CategoryRepository } from "../Domain";

export const getCategoriesUseCase = (categoryRepository: CategoryRepository) => () => {
  return categoryRepository.findAll();
};
