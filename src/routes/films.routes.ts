import express from "express";
import { getFilmsController, listFilmsController } from "../controllers";

const routes = express.Router();

export const filmsRoutes = () => {
  routes.get("/", listFilmsController);
  routes.get("/ghibli", getFilmsController);

  return routes;
};
