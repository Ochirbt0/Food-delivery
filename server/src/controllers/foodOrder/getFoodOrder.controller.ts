import { Request, Response } from "express";
import { FoodOrderModel } from "../../models";

export const getFoodOrder = async (req: Request, res: Response) => {
  try {
    const getFoodOrderAPI = await FoodOrderModel.find().populate(
      "foodOrderItems.food",
    );
    console.log({ getFoodOrderAPI });
    res.status(200).send({
      message: "Food order fetched successfully",
      data: getFoodOrderAPI,
    });
  } catch (error) {
    res.status(500).send(console.error(error));
  }
};
// authorization tavina
// buh hoolnii order avna
