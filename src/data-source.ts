import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { NODE_ENV, DATABASE_URL } from "./global";

const getDataSource = (env: string, url: string): DataSource => {
  let options: DataSourceOptions;

  switch (env) {
    case "prod":
      options = {
        type: "postgres",
        url,
        ssl: { rejectUnauthorized: false },
        synchronize: false,
        logging: false,
        entities: ["dist/src/entities/*.js"],
        migrations: ["dist/src/migrations/*.js"],
      };
      break;

    case "test":
      options = {
        type: "sqlite",
        database: ":memory:",
        entities: ["src/entities/*.ts"],
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
  NODE_ENV as string,
  DATABASE_URL as string
);
