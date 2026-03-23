import { Hono } from "hono";
import { authRouter } from "./auth";

const mainRouter = new Hono();

mainRouter.route("/auth", authRouter);
// mainRouter.route("/private", privateRouter);

export { mainRouter };