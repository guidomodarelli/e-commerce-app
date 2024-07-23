import { CategoryRepository } from "@core/ports/CategoryRepository.port";

export const getCategoriesUseCase = (categoryRepository: CategoryRepository) => () => {
  return categoryRepository.findAll();
};
