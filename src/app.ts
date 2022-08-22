import "express-async-errors";
import express from "express";
import cors, { CorsOptions } from "cors";
import { appRoutes } from "./routes";
import { handleErrorsMiddleware } from "./middlewares";

export const app = express();

const corsOptions: CorsOptions = {};

app.use(express.json());
app.use(cors(corsOptions));

appRoutes(app);

app.use(handleErrorsMiddleware);
