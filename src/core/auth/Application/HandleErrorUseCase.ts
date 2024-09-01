import { ErrorHandler } from "@core/Contexts/Shared/Domain";

export const errorAuthHandlerUseCase =
  <T extends string>(errorHandler: ErrorHandler<T>) =>
  (error: Error) => {
    return errorHandler.handle(error);
  };
