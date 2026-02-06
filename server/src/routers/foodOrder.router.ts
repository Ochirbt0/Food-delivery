import { Router } from "express";
import { updateFoodByFoodOrderId } from "../controllers/foodOrder/update-food-order.controller";
// import { postFoodOrder } from "../controllers/foodOrder/create-new-foodOrder.controller";
import { getFoodOrderByUserId } from "../controllers/foodOrder/getFoodOrderByUserId.controller";
import { getFoodOrder } from "../controllers/foodOrder/getFoodOrder.controller";

export const foodOrderRouter = Router();
// foodOrderRouter.post("/", postFoodOrder);
foodOrderRouter.get("/", getFoodOrder);
foodOrderRouter.get("/", getFoodOrderByUserId);
foodOrderRouter.patch("/", updateFoodByFoodOrderId);
