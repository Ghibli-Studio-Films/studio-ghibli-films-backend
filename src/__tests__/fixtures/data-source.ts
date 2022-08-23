import { DataSourceOptions } from "typeorm";
import { DataSource } from "typeorm";

export const MOCKED_DATABASE_URL = "postgres://user:password@host:port/dbname";

const productionOptions: DataSourceOptions = {
  type: "postgres",
  url: MOCKED_DATABASE_URL,
  ssl: { rejectUnauthorized: false },
  synchronize: false,
  logging: false,
  entities: ["dist/models/*.js"],
  migrations: ["dist/migrations/*.js"],
};

const developmentOptions: DataSourceOptions = {
  type: "postgres",
  url: MOCKED_DATABASE_URL,
  ssl: false,
  synchronize: true,
  logging: false,
  entities: ["src/models/*.ts"],
  migrations: ["src/migrations/*.ts"],
};

const testingOptions: DataSourceOptions = {
  type: "better-sqlite3",
  database: ":memory:",
  entities: ["src/models/*.ts"],
  logging: false,
  synchronize: true,
};

export const ProductionDataSource = new DataSource(productionOptions);

export const DevelopmentDataSource = new DataSource(developmentOptions);

export const TestDataSource = new DataSource(testingOptions);
