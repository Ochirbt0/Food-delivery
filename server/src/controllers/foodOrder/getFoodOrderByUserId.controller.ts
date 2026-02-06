import { Request, Response } from "express";
import { FoodOrderModel } from "../../models";

export const getFoodOrderByUserId = async (req: Request, res: Response) => {
  try {
    const getfoodOrderByUserId = await FoodOrderModel.find().populate("User");
    res
      .status(200)
      .send({
        message: "Food cart fetched successfully",
        data: getfoodOrderByUserId,
      });
  } catch (error) {
    res.status(500).send({ message: "Error creating food cart", error: error });
  }
};
//user id aar find hiine