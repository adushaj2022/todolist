"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_controller_1 = require("../controllers/todo.controller");
const router = express_1.Router();
router.route("/todos").get(todo_controller_1.todos);
exports.default = router;
