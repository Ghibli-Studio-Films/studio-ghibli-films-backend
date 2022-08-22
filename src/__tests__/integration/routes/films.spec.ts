import request from "supertest";
import { app } from "../../../app";
import { AppDataSource } from "../../../data-source";
import { DataSource } from "typeorm";
import { AppError } from "../../../errors";
import { useError, useStatus } from "../../../hooks";

describe("Integration Films Routes on Success", () => {
  let connection: DataSource;
  let TEST_OK: number;
  let TEST_NO_CONTENT: number;

  beforeAll(async () => {
    connection = await AppDataSource.initialize();

    const { OK, NO_CONTENT } = useStatus();

    TEST_OK = OK;
    TEST_NO_CONTENT = NO_CONTENT;
  });

  afterAll(async () => await connection.destroy());

  it("should be able to list films on /films without films in database with status OK", async () => {
    const res = await request(app).get("/films");

    expect(res.status).toBe(TEST_OK);

    expect(res.body).toHaveProperty("data_count");
    expect(res.body.data_count).toBe(0);

    expect(res.body).toHaveProperty("total_pages");
    expect(res.body.total_pages).toBe(0);

    expect(res.body).toHaveProperty("page");
    expect(res.body.page).toBeFalsy();

    expect(res.body).toHaveProperty("per_page");
    expect(res.body.per_page).toBeFalsy();

    expect(res.body).toHaveProperty("previous");
    expect(res.body.previous).toBeFalsy();

    expect(res.body).toHaveProperty("next");
    expect(res.body.next).toBeFalsy();

    expect(res.body).toHaveProperty("results");
    expect(res.body.results).toBeTruthy();
    expect(res.body.results).toHaveProperty("forEach");
    expect(res.body.results).toHaveLength(0);
  });

  it("should be able to update films on /films/ghibli with status NO_CONTENT", async () => {
    const res = await request(app).get("/films/ghibli");

    expect(res.status).toBe(TEST_NO_CONTENT);
    expect(res.body).toMatchObject({});
  });

  it("should be able to list films on /films with status OK", async () => {
    const res = await request(app).get("/films");

    expect(res.status).toBe(TEST_OK);

    expect(res.body).toHaveProperty("data_count");
    expect(res.body.data_count).toBeTruthy();
    expect(res.body.data_count).toBeLessThanOrEqual(50);

    expect(res.body).toHaveProperty("total_pages");
    expect(res.body.total_pages).toBeTruthy();
    expect(res.body.total_pages).toBeLessThanOrEqual(5);

    expect(res.body).toHaveProperty("page");
    expect(res.body.page).toBeTruthy();
    expect(res.body.page).toBeLessThanOrEqual(5);

    expect(res.body).toHaveProperty("per_page");
    expect(res.body.per_page).toBeTruthy();
    expect(res.body.per_page).toBe(10);

    expect(res.body).toHaveProperty("previous");
    expect(res.body.previous).toBeFalsy();

    expect(res.body).toHaveProperty("next");
    expect(res.body.next).toBeTruthy();
    expect(res.body.next).toContain("page=2");

    expect(res.body).toHaveProperty("results");
    expect(res.body.results).toBeTruthy();
    expect(res.body.results).toHaveProperty("forEach");
    expect(res.body.results.length).toBeLessThanOrEqual(10);
  });

  it("should be able to list films on /films?page=2 with status OK", async () => {
    const res = await request(app).get("/films?page=2");

    expect(res.status).toBe(TEST_OK);

    expect(res.body).toHaveProperty("data_count");
    expect(res.body.data_count).toBeTruthy();
    expect(res.body.data_count).toBeLessThanOrEqual(50);

    expect(res.body).toHaveProperty("total_pages");
    expect(res.body.total_pages).toBeTruthy();
    expect(res.body.total_pages).toBeLessThanOrEqual(5);

    expect(res.body).toHaveProperty("page");
    expect(res.body.page).toBeTruthy();
    expect(res.body.page).toBeLessThanOrEqual(5);

    expect(res.body).toHaveProperty("per_page");
    expect(res.body.per_page).toBeTruthy();
    expect(res.body.per_page).toBe(10);

    expect(res.body).toHaveProperty("previous");
    expect(res.body.previous).toBeTruthy();
    expect(res.body.previous).toContain("page=1");

    expect(res.body).toHaveProperty("next");
    expect(res.body.next).toBeTruthy();
    expect(res.body.next).toContain("page=3");

    expect(res.body).toHaveProperty("results");
    expect(res.body.results).toBeTruthy();
    expect(res.body.results).toHaveProperty("forEach");
    expect(res.body.results.length).toBeLessThanOrEqual(10);
  });

  it("should be able to list films on /films?page=1&limit=15 with status OK", async () => {
    const res = await request(app).get("/films?page=1&limit=15");

    expect(res.status).toBe(TEST_OK);

    expect(res.body).toHaveProperty("data_count");
    expect(res.body.data_count).toBeTruthy();
    expect(res.body.data_count).toBeLessThanOrEqual(50);

    expect(res.body).toHaveProperty("total_pages");
    expect(res.body.total_pages).toBeTruthy();
    expect(res.body.total_pages).toBeLessThanOrEqual(2);

    expect(res.body).toHaveProperty("page");
    expect(res.body.page).toBeTruthy();
    expect(res.body.page).toBeLessThanOrEqual(1);

    expect(res.body).toHaveProperty("per_page");
    expect(res.body.per_page).toBeTruthy();
    expect(res.body.per_page).toBe(15);

    expect(res.body).toHaveProperty("previous");
    expect(res.body.previous).toBeFalsy();

    expect(res.body).toHaveProperty("next");
    expect(res.body.next).toBeTruthy();
    expect(res.body.next).toContain("page=2");

    expect(res.body).toHaveProperty("results");
    expect(res.body.results).toBeTruthy();
    expect(res.body.results).toHaveProperty("forEach");
    expect(res.body.results.length).toBeLessThanOrEqual(15);
  });
});

describe("Integration Films Routes on Fail", () => {
  let connection: DataSource;
  let TEST_PAGINATION_ERROR: AppError;

  beforeAll(async () => {
    connection = await AppDataSource.initialize();

    const { PAGINATION_ERROR } = useError();

    TEST_PAGINATION_ERROR = PAGINATION_ERROR;
  });

  afterAll(async () => await connection.destroy());

  it("should not be able to list films on /films?page=a with a PAGINATION_ERROR", async () => {
    const res = await request(app).get("/films?page=a");

    expect(res.status).toBe(TEST_PAGINATION_ERROR.statusCode);
    expect(res.body.status_code).toBe(TEST_PAGINATION_ERROR.statusCode);
    expect(res.body.message).toBe(TEST_PAGINATION_ERROR.message);
  });

  it("should not be able to list films on /films?limit=b with a PAGINATION_ERROR", async () => {
    const res = await request(app).get("/films?limit=b");

    expect(res.status).toBe(TEST_PAGINATION_ERROR.statusCode);
    expect(res.body.status_code).toBe(TEST_PAGINATION_ERROR.statusCode);
    expect(res.body.message).toBe(TEST_PAGINATION_ERROR.message);
  });

  it("should not be able to list films on /films?page=1.5 with a PAGINATION_ERROR", async () => {
    const res = await request(app).get("/films?page=1.5");

    expect(res.status).toBe(TEST_PAGINATION_ERROR.statusCode);
    expect(res.body.status_code).toBe(TEST_PAGINATION_ERROR.statusCode);
    expect(res.body.message).toBe(TEST_PAGINATION_ERROR.message);
  });

  it("should not be able to list films on /films?limit=10.5 with a PAGINATION_ERROR", async () => {
    const res = await request(app).get("/films?limit=10.5");

    expect(res.status).toBe(TEST_PAGINATION_ERROR.statusCode);
    expect(res.body.status_code).toBe(TEST_PAGINATION_ERROR.statusCode);
    expect(res.body.message).toBe(TEST_PAGINATION_ERROR.message);
  });

  it("should not be able to list films on /films?page=a&limit=b with a PAGINATION_ERROR", async () => {
    const res = await request(app).get("/films?limit=10.5");

    expect(res.status).toBe(TEST_PAGINATION_ERROR.statusCode);
    expect(res.body.status_code).toBe(TEST_PAGINATION_ERROR.statusCode);
    expect(res.body.message).toBe(TEST_PAGINATION_ERROR.message);
  });
});
