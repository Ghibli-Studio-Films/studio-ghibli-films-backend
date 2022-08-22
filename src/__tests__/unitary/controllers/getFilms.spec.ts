import { createMock } from "ts-jest-mock";
import { getFilmsController } from "../../../controllers";
import { getFilmsService } from "../../../services";
import { useStatus } from "../../../hooks";
import { mockRequest, mockResponse } from "../../fixtures";

jest.mock("../../../services");

describe("Unitary Get Films Controller on Success", () => {
  afterAll(() => jest.resetAllMocks());

  it("should be able to get films with status NO_CONTENT", async () => {
    const { NO_CONTENT } = useStatus();

    const req = mockRequest();
    const res = mockResponse();

    const mockedService = createMock(getFilmsService);

    await getFilmsController(req, res);

    expect(mockedService).toBeCalled();
    expect(mockedService).toBeCalledTimes(1);

    expect(res.status).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(NO_CONTENT);

    expect(res.json).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledTimes(1);
  });
});
