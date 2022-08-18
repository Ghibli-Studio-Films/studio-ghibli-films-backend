import { Request, Response } from "express";
import { listFilmsService } from "../../services";
import { useStatus } from "../../hooks";
import { pageNumberPagination } from "../../utils";

export const listFilmsController = async (req: Request, res: Response) => {
  const { OK } = useStatus();

  const {
    query: { page, limit },
  } = req;

  const films = await listFilmsService();

  const paginatedFilms = pageNumberPagination(
    req,
    films,
    page ? Number(page) : undefined,
    limit ? Number(limit) : undefined
  );

  return res.status(OK).json(paginatedFilms);
};
