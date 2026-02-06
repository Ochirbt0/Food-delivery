import { Request, Response } from "express";
import { FoodModel } from "../../models/food.model";

export const getFoodById = async (req: Request, res: Response) => {
  try {
    const { id, foodName, price, image, ingredients, category } = req.body;
    const getFood = await FoodModel.findById(id, {
      foodName,
      price,
      image,
      ingredients,
      category,
    });

    res.status(200).send({ message: "food appeared", data: getFood });
  } catch (error) {
    console.error(error);
    res.status(200).send(error);
  }
};
