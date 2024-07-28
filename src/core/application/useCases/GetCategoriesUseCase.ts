import { CategoryRepository } from "@core/ports";

export const getCategoriesUseCase = (categoryRepository: CategoryRepository) => () => {
  return categoryRepository.findAll();
};
