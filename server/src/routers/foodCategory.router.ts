import { Router } from "express";
import { postFoodCategory } from "../controllers/foodCategory/create-new-category.controller";
import { updateFoodCategoryByFoodOrderId } from "../controllers/foodCategory/update-category.controller";
import { deleteFoodCategory } from "../controllers/foodCategory/delete-food-category.controller";
import { getFoodCategory } from "../controllers/foodCategory/get-food-category.controller";

export const foodCategoryRouter = Router();
foodCategoryRouter.post("/", postFoodCategory);
foodCategoryRouter.get("/", getFoodCategory);
foodCategoryRouter.delete("/:foodCategoryId", deleteFoodCategory);
foodCategoryRouter.patch("/:foodCategoryId", updateFoodCategoryByFoodOrderId);
