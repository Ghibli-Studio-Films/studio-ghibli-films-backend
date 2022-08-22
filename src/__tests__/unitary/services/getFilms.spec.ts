import { createMock } from "ts-jest-mock";
import { DataSource } from "typeorm";
import { getFilmsService } from "../../../services";
import { ghibli } from "../../../thirdparty";
import { ghibliGetResponse } from "../../fixtures";
import { AppDataSource } from "../../../data-source";

jest.mock("../../../thirdparty/services/ghibli");

describe("Unitary Get Films Service on Success", () => {
  let connection: DataSource;

  beforeAll(async () => {
    connection = await AppDataSource.initialize();
  });

  afterAll(async () => {
    await connection.destroy();

    jest.resetAllMocks();
  });

  it("should be able to get films from thirdparty service and save them", async () => {
    const mockedThirdpartyService = createMock(ghibli.get);

    mockedThirdpartyService.mockReturnValueOnce(
      ghibliGetResponse as Promise<void>
    );

    await getFilmsService();

    expect(mockedThirdpartyService).toHaveBeenCalled();
    expect(mockedThirdpartyService).toHaveBeenCalledTimes(1);
    expect(mockedThirdpartyService).toHaveBeenCalledWith("/films?limit=50");

    expect(mockedThirdpartyService).toHaveReturned();
    expect(mockedThirdpartyService).toHaveReturnedTimes(1);
    expect(mockedThirdpartyService).toHaveReturnedWith(ghibliGetResponse);
  });
});
