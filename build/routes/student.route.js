"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const student_controller_1 = require("../controllers/student.controller");
const router = express_1.Router();
router.route("/students").get(student_controller_1.students);
router.route("/new_student").post(student_controller_1.new_student);
router.route("/remove_student/:id").delete(student_controller_1.remove_student);
exports.default = router;
