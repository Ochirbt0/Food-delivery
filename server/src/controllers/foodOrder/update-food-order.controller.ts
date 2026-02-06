import { Request, Response } from "express";
import mongoose from "mongoose";
import { FoodModel } from "../../models/food.model";

export const updateFoodByFoodOrderId = async (req: Request, res: Response) => {
  try {
    const { id, user, totalPrice, foodOrderItems, status } = req.body;

    const updatedFoodOrder = await FoodModel.findByIdAndUpdate(
      id,
      {
        user,
        totalPrice,
        foodOrderItems,
        status  ,
      },
      { new: true },
    );

    res
      .status(200)
      .send({ message: "list updated successfully", data: updatedFoodOrder });
  } catch (error) {
    res.status(200).send(console.error(error));
  }
};
