import { AppDataSource } from "../data-source";
import { Film } from "../models";

export const useRepo = () => ({
  films: AppDataSource.getRepository(Film),
});
