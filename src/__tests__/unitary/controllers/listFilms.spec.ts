import { createMock } from "ts-jest-mock";
import { IPaginated } from "../../../interfaces";
import { Film } from "../../../models";
import { listFilmsController } from "../../../controllers";
import { listFilmsService } from "../../../services";
import { pageNumberPagination } from "../../../utils";
import { useStatus } from "../../../hooks";
import {
  mockRequest,
  mockResponse,
  filmsData,
  paginatedFilms,
} from "../../fixtures";

jest.mock("../../../services");
jest.mock("../../../utils");

describe("Unitary List Films Controller on Success", () => {
  afterAll(() => jest.resetAllMocks());

  it("should be able to list paginated films with status OK", async () => {
    const { OK } = useStatus();

    const req = mockRequest();
    const res = mockResponse();

    const mockedService = createMock(listFilmsService);
    const mockedUtil = createMock(pageNumberPagination);

    mockedService.mockReturnValueOnce(filmsData as Promise<Film[]>);
    mockedUtil.mockReturnValueOnce(paginatedFilms as IPaginated);

    await listFilmsController(req, res);

    expect(mockedService).toBeCalled();
    expect(mockedService).toBeCalledTimes(1);
    expect(mockedService).toHaveReturned();
    expect(mockedService).toHaveReturnedTimes(1);
    expect(mockedService).toHaveReturnedWith(filmsData);

    expect(mockedUtil).toBeCalled();
    expect(mockedUtil).toBeCalledWith(
      req,
      filmsData,
      req.query.page,
      req.query.limit
    );
    expect(mockedUtil).toBeCalledTimes(1);
    expect(mockedUtil).toHaveReturned();
    expect(mockedUtil).toHaveReturnedTimes(1);
    expect(mockedUtil).toHaveReturnedWith(paginatedFilms);

    expect(res.status).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(OK);

    expect(res.json).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith(paginatedFilms);
  });
});
