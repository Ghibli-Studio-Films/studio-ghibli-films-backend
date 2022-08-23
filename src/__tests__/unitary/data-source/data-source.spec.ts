import { getDataSource } from "../../../data-source";
import { DataSource } from "typeorm";
import {
  ProductionDataSource,
  DevelopmentDataSource,
  TestDataSource,
  MOCKED_DATABASE_URL,
} from "../../fixtures";

describe("Unitary Data Source on Success", () => {
  it("should be able to get production data source", () => {
    const source = getDataSource("prod", MOCKED_DATABASE_URL);

    expect(source).toBeInstanceOf(DataSource);
    expect(source.options).toEqual(
      expect.objectContaining(ProductionDataSource.options)
    );
  });

  it("should be able to get development data source", () => {
    const source = getDataSource("dev", MOCKED_DATABASE_URL);

    expect(source).toBeInstanceOf(DataSource);
    expect(source.options).toEqual(
      expect.objectContaining(DevelopmentDataSource.options)
    );
  });

  it("should be able to get test data source", () => {
    const source = getDataSource("test", MOCKED_DATABASE_URL);

    expect(source).toBeInstanceOf(DataSource);
    expect(source.options).toEqual(
      expect.objectContaining(TestDataSource.options)
    );
  });

  it("should be able to get development data source by default", () => {
    // @ts-ignore
    const source = getDataSource("", MOCKED_DATABASE_URL);

    expect(source).toBeInstanceOf(DataSource);
    expect(source.options).toEqual(
      expect.objectContaining(DevelopmentDataSource.options)
    );
  });
});

describe("Unitary Data Source on Fail", () => {
  it("should not be able to get data source without url if NODE_ENV !== test", () => {
    try {
      getDataSource("prod");
    } catch (error) {
      expect(error).toMatchObject(
        new TypeError("The url parameter should be defined for prod or dev.")
      );
    }
  });
});
