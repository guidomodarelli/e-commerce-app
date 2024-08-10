import { HandleError } from "@core/ports/UserAuth/HandleError.port";

export const handleErrorUseCase =
  <T extends string>(handleError: HandleError<T>) =>
  (error: Error) => {
    return handleError.handle(error);
  };
