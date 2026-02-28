import { Request, Response } from "express";
import { FoodModel, FoodOrderModel } from "../../models";
import mongoose from "mongoose";

export const postFoodOrder = async (req: Request, res: Response) => {
  try {
    const { user, orderItems } = req.body;

    const allFoods = Promise.all(
      orderItems.map(
        async ({ food, quantity }: { food: String; quantity: String }) => {
          const foundFood = await FoodModel.findById(food);

          return Number(foundFood?.price) * Number(quantity);
        },
      ),
    );

    const orderedItems = await allFoods;

    const total = orderedItems.reduce((acc, item) => acc + item, 0);

    const postFoodOrderAPI = await FoodOrderModel.create({
      user,
      totalPrice: Number(total),
      foodOrderItems: orderItems,
    });

    res.status(200).send({
      message: "Food order created successfully",
      data: postFoodOrderAPI,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
