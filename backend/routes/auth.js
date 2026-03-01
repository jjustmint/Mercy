import { Router } from "express";
import Register from "../controllers/register";
import Login from "../controllers/Login";

const authRouter = Router();

authRouter.post("/register", Register);
authRouter.post("/login", Login);

export default authRouter;