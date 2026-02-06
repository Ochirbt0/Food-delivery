import { createNewFoodList, updateFoodList } from "../controllers";
import { Router } from "express";
import { deleteFoodList } from "../controllers/foods/delete-food.controller";
import { getFoodById } from "../controllers/foods/get-food-by-id.controller";
import { authentication, authorization } from "../middlewares";
import { UserModel, UserRole } from "../models";

export const foodRouter = Router();
// userRouter.route("/food-list").post(createNewFoodList);
foodRouter.post(
  "/create-food",
  authentication,
  authorization(UserRole.ADMIN),
  createNewFoodList,
);
foodRouter.get("/:foodId", getFoodById);
foodRouter.delete("/:foodId", deleteFoodList);
foodRouter.patch("/:foodId", updateFoodList);

// userRouter.post("/create-user", createNewFoodList);
// userRouter.post(
//   "/get-user-by-post-request/:groupId/:userId",
//   getUserByIdAndPost,
// );
// userRouter.get("/get-user-by-get-request", getUserByIdAndGet);
// userRouter.delete("/delete-by-id", deleteNewUser);

// userRouter.route("/user").post(createNewUser).delete(deleteNewUser);
