import express from "express";
import { foodRouter } from "./food.router";
import { getFoodCartController } from "../controllers/foodcart/get-food-cart.controller";
import { createFoodCartController } from "../controllers/foodcart/create-food-cart.controller";

export const foodCartRouter = express.Router();

foodCartRouter.post("/add-to-cart", createFoodCartController);
foodCartRouter.get("/get-cart", getFoodCartController);
