import { Router } from "express";
import {
  complete,
  onetodo,
  remove,
  todo,
  todos,
} from "../controllers/todo.controller";
const router: Router = Router();

router.route("/todos").get(todos);
router.route("/todo/:id").get(onetodo);
router.route("/todo").post(todo);
router.route("/todo/complete").put(complete);
router.route("/todo/:id").delete(remove);

export default router;
