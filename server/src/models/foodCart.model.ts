import mongoose, { models, Schema } from "mongoose";

export const FoodCartSchema = new Schema(
  {
    foodId: { type: Schema.Types.ObjectId, ref: "Food", required: true },
    quantity: { type: Number, required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true },
);
export const FoodCartModel =
  models["FoodCart"] || mongoose.model("FoodCart", FoodCartSchema);
