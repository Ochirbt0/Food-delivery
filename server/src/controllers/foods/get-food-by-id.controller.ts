import { Request, Response } from "express";
import { FoodModel } from "../../models/food.model";

export const getFoodById = async (req: Request, res: Response) => {
  try {
    const { foodId } = req.params;
    const getFood = await FoodModel.findById(foodId);

    res.status(200).send({ message: "food appeared", data: getFood });
  } catch (error) {
    console.error(error);
    res.status(200).send(error);
  }
};
//uunuu mendee munguu bilguune uchka
//anand temuulen ochiroo zodiac tugsuu
