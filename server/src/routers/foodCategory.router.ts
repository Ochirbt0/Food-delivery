import { Router } from "express";
import { postFoodCategory } from "../controllers/foodCategory/create-new-category.controller";
import { updateFoodCategoryByFoodOrderId } from "../controllers/foodCategory/update-category.controller";
import { deleteFoodCategory } from "../controllers/foodCategory/delete-food-category.controller";
import { getFoodCategory } from "../controllers/foodCategory/get-food-category.controller";
import { authentication, authorization } from "../middlewares";
import { UserRole } from "../models";

export const foodCategoryRouter = Router();
foodCategoryRouter.post(
  "/",
  authentication,
  authorization(UserRole.ADMIN),
  postFoodCategory,
);
foodCategoryRouter.get("/", getFoodCategory);

foodCategoryRouter.delete(
  "/:foodCategoryId",
  authentication,
  authorization(UserRole.ADMIN),
  deleteFoodCategory,
);

foodCategoryRouter.patch(
  "/:foodCategoryId",
  authentication,
  authorization(UserRole.ADMIN),
  updateFoodCategoryByFoodOrderId,
);
