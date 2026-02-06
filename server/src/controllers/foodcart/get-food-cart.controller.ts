import { Request, Response } from "express";
import { FoodCartModel } from "../../models";

export const getFoodCartController = async (req: Request, res: Response) => {
  try {
    const getfoodCart = await FoodCartModel.find().populate("foodId");
    res
      .status(200)
      .send({ message: "Food cart fetched successfully", data: getfoodCart });
  } catch (error) {
    res.status(500).send({ message: "Error creating food cart", error: error });
  }
};
