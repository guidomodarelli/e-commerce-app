import { ErrorHandler } from "@core/ports/UserAuth/HandleError.port";

export const errorAuthHandlerUseCase =
  <T extends string>(errorHandler: ErrorHandler<T>) =>
  (error: Error) => {
    return errorHandler.handle(error);
  };
