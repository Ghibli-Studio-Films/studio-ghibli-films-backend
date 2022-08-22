import { useStatus } from "./useStatus";
import { AppError } from "../errors";

export const useError = () => {
  const { BAD_REQUEST } = useStatus();

  return {
    PAGINATION_ERROR: new AppError(
      BAD_REQUEST,
      "Page and limit should be integers."
    ),
  };
};
