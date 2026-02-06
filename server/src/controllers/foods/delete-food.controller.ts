import { Request, Response } from "express";
import mongoose from "mongoose";
import { FoodModel } from "../../models/food.model";

export const deleteFoodList = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;

    const deletedFood = await FoodModel.findByIdAndDelete(id);

    res
      .status(200)
      .send({ message: "list deleted successfully", data: deletedFood });
  } catch (error) {
    res.status(200).send(console.error(error));
  }
};
