import { Router } from "express";
import { updateFoodByFoodOrderId } from "../controllers/foodOrder/update-food-order.controller";
import { getFoodOrderByUserId } from "../controllers/foodOrder/getFoodOrderByUserId.controller";
import { getFoodOrder } from "../controllers/foodOrder/getFoodOrder.controller";
import { postFoodOrder } from "../controllers/foodOrder/create-new-foodOrder.controller";
import { authentication, authorization } from "../middlewares";
import { UserRole } from "../models";

export const foodOrderRouter = Router();

foodOrderRouter.post("/", postFoodOrder);
foodOrderRouter.post(
  "/all",
  authentication,
  authorization(UserRole.ADMIN),
  getFoodOrder,
);
foodOrderRouter.get("/:userId", getFoodOrderByUserId);
foodOrderRouter.patch(
  "/:foodOrderId",
  authentication,
  authorization(UserRole.ADMIN),
  updateFoodByFoodOrderId,
);
