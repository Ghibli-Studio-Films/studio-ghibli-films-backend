import { AppError } from "../../errors";
import { useStatus } from "../../hooks";

const { INTERNAL_SERVER_ERROR } = useStatus();

export const MockedAppError = new AppError(400, "Mocked teste error message.");

export const MockedError = new Error();

export const handleErrorsAppErrorResponse = {
  status_code: MockedAppError.statusCode,
  message: MockedAppError.message,
};

export const handleErrorsErrorResponse = {
  status_code: INTERNAL_SERVER_ERROR,
  message:
    "Internal server error. If this persists contact the development team.",
};
