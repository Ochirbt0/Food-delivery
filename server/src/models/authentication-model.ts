import { model, models, ObjectId, Schema, Model } from "mongoose";

export enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN",
}

type User = {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  role: UserRole;
  orderedFoods: ObjectId;
  ttl: Date;
  isVerified: boolean;
};

export const UserSchema = new Schema<User>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String },
    role: {
      type: String,
      enum: Object.values(UserRole),
      default: UserRole.USER,
      required: true,
    },
    orderedFoods: [{ type: Schema.Types.ObjectId, ref: "Foods" }],
    ttl: { type: Date },
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export const UserModel: Model<User> =
  models["Users"] || model("Users", UserSchema);
