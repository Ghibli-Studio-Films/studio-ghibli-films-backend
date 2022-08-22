import { handleErrorsMiddleware } from "../../../middlewares";
import {
  MockedError,
  mockRequest,
  mockResponse,
  MockedAppError,
  mockNextFunction,
  handleErrorsErrorResponse,
  handleErrorsAppErrorResponse,
} from "../../fixtures";

describe("Unitary Handle Errors Middleware on Success", () => {
  it("should be able to respond with an AppError", () => {
    const req = mockRequest();
    const res = mockResponse();
    const next = mockNextFunction();

    handleErrorsMiddleware(MockedAppError, req, res, next);

    expect(res.status).toBeCalled();
    expect(res.status).toBeCalledTimes(1);
    expect(res.status).toBeCalledWith(MockedAppError.statusCode);
    expect(res.status).toHaveReturned();
    expect(res.status).toHaveReturnedTimes(1);

    expect(res.json).toBeCalled();
    expect(res.json).toBeCalledTimes(1);
    expect(res.json).toBeCalledWith(handleErrorsAppErrorResponse);
    expect(res.json).toHaveReturned();
    expect(res.json).toHaveReturnedTimes(1);
  });

  it("should be able to respond with an Error", () => {
    const req = mockRequest();
    const res = mockResponse();
    const next = mockNextFunction();

    handleErrorsMiddleware(MockedError, req, res, next);

    expect(res.status).toBeCalled();
    expect(res.status).toBeCalledTimes(1);
    expect(res.status).toBeCalledWith(handleErrorsErrorResponse.status_code);
    expect(res.status).toHaveReturned();
    expect(res.status).toHaveReturnedTimes(1);

    expect(res.json).toBeCalled();
    expect(res.json).toBeCalledTimes(1);
    expect(res.json).toBeCalledWith(handleErrorsErrorResponse);
    expect(res.json).toHaveReturned();
    expect(res.json).toHaveReturnedTimes(1);
  });
});
