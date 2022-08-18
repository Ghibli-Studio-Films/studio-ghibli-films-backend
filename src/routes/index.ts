import { Express } from "express";
import { filmsRoutes } from "./films.routes";

export const appRoutes = (app: Express) => {
  app.use("/films", filmsRoutes());
};
