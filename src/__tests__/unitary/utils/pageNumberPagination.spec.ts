import { pageNumberPagination } from "../../../utils";
import { Film } from "../../../models";
import { useError } from "../../../hooks";
import {
  req,
  filmsData,
  withEmptyArray,
  withPageAndLimit,
  withoutPageAndLimit,
} from "../../fixtures";

describe("Unitary Page Number Pagination on Success", () => {
  afterAll(() => jest.resetAllMocks());

  it("should be able to paginate with defined page and limit", () => {
    const data = filmsData as Film[];

    const paginated = pageNumberPagination(req, data, 2, 12);

    expect(paginated).toEqual(expect.objectContaining(withPageAndLimit));
  });

  it("should be able to paginate with undefined page and limit", () => {
    const data = filmsData as Film[];

    const paginated = pageNumberPagination(req, data);

    expect(paginated).toEqual(expect.objectContaining(withoutPageAndLimit));
  });

  it("should be able to paginate with an empty array", () => {
    const data: Array<any> = [];

    const paginated = pageNumberPagination(req, data);

    expect(paginated).toEqual(expect.objectContaining(withEmptyArray));
  });

  it("should be able to paginate with negative off-range page and limit", () => {
    const data = filmsData as Film[];

    const paginated = pageNumberPagination(req, data, -1, -10);

    expect(paginated).toEqual(expect.objectContaining(withoutPageAndLimit));
  });

  it("should be able to paginate with positive off-range page and limit", () => {
    const data = filmsData as Film[];

    const paginated = pageNumberPagination(req, data, 4, 23);

    expect(paginated).toEqual(expect.objectContaining(withoutPageAndLimit));
  });
});

describe("Unitary Page Number Pagination on Fail", () => {
  it("should not be able to paginate with page wrong type", () => {
    const { PAGINATION_ERROR } = useError();

    const data = filmsData as Film[];

    try {
      //@ts-ignore
      pageNumberPagination(req, data, "a", 12);
    } catch (error) {
      expect(error).toMatchObject(PAGINATION_ERROR);
    }
  });

  it("should not be able to paginate with limit wrong type", () => {
    const { PAGINATION_ERROR } = useError();

    const data = filmsData as Film[];

    try {
      //@ts-ignore
      pageNumberPagination(req, data, 2, "b");
    } catch (error) {
      expect(error).toMatchObject(PAGINATION_ERROR);
    }
  });
});
