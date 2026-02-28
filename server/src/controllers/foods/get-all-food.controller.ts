import { Request, Response } from "express";
import { FoodModel } from "../../models";

export const buhHoolAvah = async (req: Request, res: Response) => {
  try {
    const getAllFood = await FoodModel.find().populate("FoodCategory");
    console.log({ getAllFood });
    res.status(200).send({
      message: "all Food fetched successfully",
      data: getAllFood,
    });
  } catch (error) {
    res.status(500).send(console.error(console.error(error)));
  }
};
