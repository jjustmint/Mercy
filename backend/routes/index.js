import { Router } from "express";
import authRouter from "./auth";

const mainRouter = Router();

mainRouter.post("/auth", authRouter);

export default mainRouter;