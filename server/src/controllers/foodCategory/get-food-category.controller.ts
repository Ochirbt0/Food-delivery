import { Request, Response } from "express";
import { FoodCategoryModel } from "../../models";

export const getFoodCategory = async (req: Request, res: Response) => {
  try {
    const getFoodCategoryAPI = await FoodCategoryModel.find();
    res.status(200).send({
      message: "Food category fetched successfully",
      data: getFoodCategoryAPI,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
