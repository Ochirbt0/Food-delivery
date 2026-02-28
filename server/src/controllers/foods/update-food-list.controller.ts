import { Request, Response } from "express";
import mongoose from "mongoose";
import { FoodModel } from "../../models/food.model";

export const updateFoodList = async (req: Request, res: Response) => {
  try {
    const { foodName, price, image, ingredients, category } = req.body;

    const { foodId } = req.params;

    const updatedFood = await FoodModel.findByIdAndUpdate(
      foodId,
      {
        foodName,
        price,
        image,
        ingredients,
        category,
      },
      { new: true },
    );

    res
      .status(200)
      .send({ message: "Food updated successfully", data: updatedFood });
  } catch (error) {
    res.status(200).send(console.error(error));
  }
};
// app.put("/update-user", async (req: Request, res: Response) => {
//   const { name, email, id } = req.body;

//   try {
//     const user = await UserModel.findByIdAndUpdate(
//       id,
//       { email },
//       { new: true },
//     );
//     res.status(200).send({ message: "user updated successfully", data: user });
//   } catch (error) {
//     console.log(error);
//   }
// });
