import { Router } from "express";
import { todos } from "../controllers/todo.controller";
const router: Router = Router();

router.route("/todos").get(todos);

export default router;
