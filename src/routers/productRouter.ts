import { Router } from "express";
import { ProductController } from "../controllers/productController";
const router = Router();

router.get("/all", ProductController.getAllProducts);

export default router;