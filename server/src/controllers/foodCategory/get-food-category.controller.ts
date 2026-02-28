import { Request, Response } from "express";
import { FoodCategoryModel, FoodModel } from "../../models";

export const getFoodCategory = async (req: Request, res: Response) => {
  try {
    const getFoodCategoryAPI = await FoodCategoryModel.find().populate("foods");

    const allFoods = await FoodModel.find();

    // console.log(allFoods);
    // const grouped = getFoodCategoryAPI.map(({_id})=> allFoods.filter(_id===??)=>{??})

    const grouped = getFoodCategoryAPI.map((category) => {
      const foods = allFoods.filter(
        (food) => food.category?.toString() === category._id.toString(),
      );

      return {
        category,
        foods,
      };
    });

    res.status(200).send({
      message: "Food category fetched successfully",
      data: grouped,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
