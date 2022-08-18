import { useRepo } from "../../hooks";

export const listFilmsService = async () => {
  const { films } = useRepo();

  return await films.find();
};
