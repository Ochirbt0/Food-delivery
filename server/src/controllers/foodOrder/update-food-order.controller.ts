import { Request, Response } from "express";
import { FoodOrderModel } from "../../models";
import { TotalPriceUtils } from "../../utils/totalPrice-utils";

export const updateFoodByFoodOrderId = async (req: Request, res: Response) => {
  try {
    const { status } = req.body;
    const { foodOrderId } = req.params;

    const updatedFoodOrder = await FoodOrderModel.findByIdAndUpdate(
      foodOrderId,
      {
        status,
      },
      { new: true },
    );

    res
      .status(200)
      .send({ message: "list updated successfully", data: updatedFoodOrder });
  } catch (error) {
    res.status(500).send(console.error(error));
  }
};
