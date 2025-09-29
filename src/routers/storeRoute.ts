import { Router } from "express"; 
import { StoreController } from "../controllers/storeController";
const router = Router();

router.post("/dashboard", StoreController.dashboard);
router.post("/product", StoreController.setStoreProduct);
export default router;