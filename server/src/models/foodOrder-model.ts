import mongoose, { models, ObjectId, Schema, Model } from "mongoose";

enum FoodOrderStatus {
  PENDING = "PENDING",
  CANCELED = "CANCELED",
  DELIVERED = "DELIVERED",
}

type FoodOrderType = {
  user: ObjectId;
  totalPrice: number;
  foodOrderItems: [];
  status: FoodOrderStatus;
};

const FoodOrderItem = new Schema(
  {
    food: { type: Schema.Types.ObjectId, ref: "Foods", required: true },
    quantity: { type: Number, required: true },
  },
  { _id: false },
);

export const FoodOrderSchema = new Schema<FoodOrderType>(
  {
    user: { type: Schema.Types.ObjectId, ref: "Users", required: true },
    totalPrice: { type: Number },
    foodOrderItems: [FoodOrderItem],
    status: {
      type: String,
      enum: Object.values(FoodOrderStatus),
      default: FoodOrderStatus.PENDING,
      required: true,
    },
  },
  { timestamps: true },
);
export const FoodOrderModel: Model<FoodOrderType> =
  models["FoodOrder"] || mongoose.model("FoodOrder", FoodOrderSchema);
