import express from "express";
import cors, { CorsOptions } from "cors";
import { appRoutes } from "./routes";

export const app = express();

const corsOptions: CorsOptions = {};

app.use(express.json());
app.use(cors(corsOptions));

appRoutes(app);
