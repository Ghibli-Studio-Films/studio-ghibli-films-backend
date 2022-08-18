import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errors";
import { useStatus } from "../../hooks";

export const handleErrorMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  _: NextFunction
) => {
  const { INTERNAL_SERVER_ERROR } = useStatus();

  if (error instanceof AppError) {
    const { statusCode, message } = error;

    return res.status(statusCode).json({ status_code: statusCode, message });
  }

  return res.status(INTERNAL_SERVER_ERROR).json({
    status_code: INTERNAL_SERVER_ERROR,
    message:
      "Internal server error. If this persists contact the dvelopment team.",
  });
};
