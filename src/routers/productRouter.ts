import { Router } from "express";
import { ProductController } from "../controllers/productController";
import { authMiddleware } from "../middlewares/authMiddleware";
const router = Router();

router.get('/discouts', ProductController.getDescountProduct);
router.get("/", ProductController.getProducts);
export default router;