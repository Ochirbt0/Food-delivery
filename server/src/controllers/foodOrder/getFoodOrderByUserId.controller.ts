import { Request, Response } from "express";
import { FoodOrderModel } from "../../models";
import mongoose, { isValidObjectId, Schema, Types } from "mongoose";

export const getFoodOrderByUserId = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const getfoodOrderByUserId = await FoodOrderModel.find({
      user: userId as Object,
    })
      .populate("user")
      .populate("foodOrderItems.food");

    console.log(getfoodOrderByUserId);
    console.log(userId);
    res.status(200).send({
      message: "Food cart fetched successfully",
      data: getfoodOrderByUserId,
    });
  } catch (error) {
    res.status(500).send({ message: "Error getting food cart", error: error });
  }
};
//user id aar find hiine
