import { Request, Response, NextFunction } from "express";

export const mockRequest = () => {
  return {
    params: {},
    query: {},
    body: {},
  } as Request;
};

export const mockResponse = () => {
  const res = {} as Response;

  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);

  return res;
};

export const mockNextFunction = () => {
  return jest.fn() as NextFunction;
};
