import { ErrorHandler } from "@core/Shared/Domain";

export const errorAuthHandlerUseCase =
  <T extends string>(errorHandler: ErrorHandler<T>) =>
  (error: Error) => {
    return errorHandler.handle(error);
  };
