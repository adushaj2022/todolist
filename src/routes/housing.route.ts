import { Router } from "express";
import { housing } from "../controllers/housing.controller";
const router: Router = Router();

router.route("/housing").get(housing);

export default router;
