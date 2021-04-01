import { Router } from "express";
import { complete, todo, todos } from "../controllers/todo.controller";
const router: Router = Router();

router.route("/todos").get(todos);
router.route("/todo").post(todo);
router.route("/todo/complete").put(complete);

export default router;
