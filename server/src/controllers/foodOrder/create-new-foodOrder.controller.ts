// import { Request, Response } from "express";
// import { FoodOrderModel } from "../../models";
// import mongoose from "mongoose";

// export const postFoodOrder = async (req: Request, res: Response) => {
//   try {
//     const { user, totalPrice, foodOrderItems, status } = req.body;

//     // user -> token

//     jwt.decoced;

    
//     const postFoodOrderAPI = await FoodOrderModel.create({
//       user: userId,
//       totalPrice,
//       foodOrderItems,
//       status,
//     });

//     // if(!mongoose.Types.ObjectId.isValid){

//     // }

//     res.status(200).send({
//       message: "Food category created successfully",
//       data: postFoodOrderAPI,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(200).send(error);
//   }
// };
