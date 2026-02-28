import mongoose, { Model, models, ObjectId, Schema } from "mongoose";

type FoodsType = {
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
  category: ObjectId;
};

export const FoodSchema = new Schema<FoodsType>(
  {
    foodName: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    ingredients: [{ type: String, required: true }],
    category: {
      type: Schema.Types.ObjectId,
      ref: "FoodCategory",
      required: true,
    },
  },
  { timestamps: true },
);

export const FoodModel: Model<FoodsType> =
  models["Foods"] || mongoose.model("Foods", FoodSchema);
