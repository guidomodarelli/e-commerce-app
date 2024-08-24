import { ErrorHandler } from "@core/common/Domain";

export const errorAuthHandlerUseCase =
  <T extends string>(errorHandler: ErrorHandler<T>) =>
  (error: Error) => {
    return errorHandler.handle(error);
  };
