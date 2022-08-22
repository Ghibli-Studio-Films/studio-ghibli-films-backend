import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { NODE_ENV, DATABASE_URL } from "./global";

export const getDataSource = (
  env: "prod" | "dev" | "test",
  url: string
): DataSource => {
  if (!url) {
    throw new TypeError("The url parameter should be defined.");
  }

  let options: DataSourceOptions;

  switch (env) {
    case "prod":
      options = {
        type: "postgres",
        url,
        ssl: { rejectUnauthorized: false },
        synchronize: false,
        logging: false,
        entities: ["dist/src/models/*.js"],
        migrations: ["dist/src/migrations/*.js"],
      };
      break;

    case "test":
      options = {
        type: "better-sqlite3",
        database: ":memory:",
        entities: ["src/models/*.ts"],
        logging: false,
        synchronize: true,
      };
      break;

    default:
      options = {
        type: "postgres",
        url,
        ssl: false,
        synchronize: true,
        logging: false,
        entities: ["src/models/*.ts"],
        migrations: ["src/migrations/*.ts"],
      };
      break;
  }

  return new DataSource(options);
};

export const AppDataSource = getDataSource(
  NODE_ENV as "prod" | "dev" | "test",
  DATABASE_URL as string
);
