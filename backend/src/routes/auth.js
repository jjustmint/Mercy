import { Hono } from "hono";
import { LoginController } from "../controllers/Login";
import { RegisController } from "../controllers/register";

const authRouter = new Hono();

authRouter.post("/register", RegisController);
authRouter.post("/login", LoginController);

export { authRouter };