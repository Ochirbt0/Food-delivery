import { Request, Response } from "express";
import mongoose from "mongoose";
import { FoodModel } from "../../models/food.model";

export const updateFoodCategoryByFoodOrderId = async (
  req: Request,
  res: Response,
) => {
  try {
    const categoryName = req.body.categoryName;
    const { foodCategoryId } = req.query;

    const updatedFoodCategory = await FoodModel.findByIdAndUpdate(
      foodCategoryId,
      {
        categoryName,
      },
      { new: true },
    );

    res.status(200).send({
      message: "list updated successfully",
      data: updatedFoodCategory,
    });
  } catch (error) {
    res.status(200).send(console.error(error));
  }
};
