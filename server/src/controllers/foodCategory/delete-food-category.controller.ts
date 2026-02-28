import { Request, Response } from "express";
import mongoose from "mongoose";
import { FoodModel } from "../../models/food.model";
import { FoodCategoryModel } from "../../models";

export const deleteFoodCategory = async (req: Request, res: Response) => {
  try {
    const { foodCategoryId } = req.params;

    const deletedFoodCategory =
      await FoodCategoryModel.findByIdAndDelete(foodCategoryId);

    res.status(200).send({
      message: "list deleted successfully",
      data: deletedFoodCategory,
    });
  } catch (error) {
    res.status(200).send(console.error(error));
  }
};
