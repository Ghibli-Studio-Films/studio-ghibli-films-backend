import { DataSource } from "typeorm";

export const MOCKED_DATABASE_URL = "postgres://user:password@host:port/dbname";

export const ProductionDataSource = new DataSource({
  type: "postgres",
  url: MOCKED_DATABASE_URL,
  ssl: { rejectUnauthorized: false },
  synchronize: false,
  logging: false,
  entities: ["dist/src/models/*.js"],
  migrations: ["dist/src/migrations/*.js"],
});

export const DevelopmentDataSource = new DataSource({
  type: "postgres",
  url: MOCKED_DATABASE_URL,
  ssl: false,
  synchronize: true,
  logging: false,
  entities: ["src/models/*.ts"],
  migrations: ["src/migrations/*.ts"],
});

export const TestDataSource = new DataSource({
  type: "better-sqlite3",
  database: ":memory:",
  entities: ["src/models/*.ts"],
  logging: false,
  synchronize: true,
});
