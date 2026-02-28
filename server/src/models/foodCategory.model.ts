import mongoose, { Model, models, ObjectId, Schema } from "mongoose";

type FoodCategoryType = {
  categoryName: string;
  foods: [{ type: Schema.Types.ObjectId; ref: "Foods" }];
};

export const FoodCategorySchema = new Schema<FoodCategoryType>(
  {
    categoryName: { type: String, required: true },
    foods: [{ type: Schema.Types.ObjectId, ref: "Foods" }],
  },
  { timestamps: true },
);
export const FoodCategoryModel: Model<FoodCategoryType> =
  models["FoodCategory"] || mongoose.model("FoodCategory", FoodCategorySchema);
