import { Request, Response } from "express";
import { getFilmsService } from "../../services";
import { useStatus } from "../../hooks";

export async function getFilmsController(req: Request, res: Response) {
  const { NO_CONTENT } = useStatus();

  await getFilmsService();

  return res.status(NO_CONTENT).json();
}
