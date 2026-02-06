import { Request, Response } from "express";
import { FoodCartModel } from "../../models";

export const createFoodCartController = async (req: Request, res: Response) => {
  const { foodId, quantity } = req.body;
  try {
    const foodCart = await FoodCartModel.create({ foodId, quantity });
    res
      .status(200)
      .send({ message: "Food cart created successfully", data: foodCart });
  } catch (error) {
    res.status(500).send({ message: "Error creating food cart", error: error });
  }
};
