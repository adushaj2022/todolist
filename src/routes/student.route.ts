import { Router } from "express";
import {
  new_student,
  remove_student,
  students,
} from "../controllers/student.controller";

const router: Router = Router();

router.route("/students").get(students);
router.route("/new_student").post(new_student);
router.route("/remove_student/:id").delete(remove_student);

export default router;
