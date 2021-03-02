"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const housing_controller_1 = require("../controllers/housing.controller");
const router = express_1.Router();
router.route("/housing").get(housing_controller_1.housing);
exports.default = router;
