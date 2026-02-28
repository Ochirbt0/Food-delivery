import { Request, Response } from "express";
import { FoodCategoryModel } from "../../models";

export const postFoodCategory = async (req: Request, res: Response) => {
  try {
    const { categoryName } = req.body;

    const categoryNer = await FoodCategoryModel.findOne({ categoryName });
    if (categoryNer) {
      return res.status(400).send({ message: "Iim category bna" });
    }
    const postCategoryAPI = await FoodCategoryModel.create({ categoryName });

    res.status(200).send({
      message: "food category created successfully",
      data: postCategoryAPI,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
