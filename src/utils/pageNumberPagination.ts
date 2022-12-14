import { Request } from "express";
import { IPaginated } from "../interfaces";
import { useError } from "../hooks";

export const pageNumberPagination = (
  req: Request,
  dataArray: Array<any>,
  page: number = 1,
  limit: number = 10
): IPaginated => {
  const { PAGINATION_ERROR } = useError();

  if (!Number.isInteger(page) || !Number.isInteger(limit)) {
    throw PAGINATION_ERROR;
  }

  if (page < 1) {
    page = 1;
  }

  if (limit < 10) {
    limit = 10;
  }

  if (dataArray.length === 0) {
    return {
      data_count: 0,
      total_pages: 0,
      page: null,
      per_page: null,
      previous: null,
      next: null,
      results: [],
    };
  }

  const getLink = (
    req: Request,
    page: number,
    limit: number,
    opt: string = "next"
  ) => {
    return `${req.protocol}://${req.get("host")}${req.baseUrl}?page=${
      opt === "next" ? page + 1 : page - 1
    }&limit=${limit}`;
  };

  const data_count = dataArray.length;

  if (data_count < limit) {
    limit = 10;
  }

  const total_pages = Math.ceil(data_count / limit);

  if (total_pages < page) {
    page = 1;
  }

  const start = (page - 1) * limit;
  const end = start + limit;

  const results = dataArray.slice(start, end);

  const previous = start > 1 ? getLink(req, page, limit, "prev") : null;
  const next = end < data_count ? getLink(req, page, limit, "next") : null;

  return {
    data_count,
    total_pages,
    page,
    per_page: limit,
    previous,
    next,
    results,
  };
};
