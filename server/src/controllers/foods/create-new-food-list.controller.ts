import { Request, Response } from "express";
import { FoodModel } from "../../models/food.model";

export const createNewFoodList = async (req: Request, res: Response) => {
  try {
    const { foodName, price, image, ingredients, category } = req.body;
    const foodAPI = await FoodModel.create({
      foodName,
      price,
      image,
      ingredients,
      category,
    });

    res
      .status(200)
      .send({ message: "food created successfully", data: foodAPI });
  } catch (error) {
    console.error(error);
    res.status(200).send(error);
  }
};
