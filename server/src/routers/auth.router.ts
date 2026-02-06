import { Router } from "express";
import { signInController, signUpController } from "../controllers";
import { updateUserController } from "../controllers/authentication/updateUser.controller";
import { verifyUser } from "../controllers/authentication/verify-user.controller";
import { deleteUserController } from "../controllers/authentication/delete-user.controller";
import { resetPasswordRequest } from "../controllers/authentication/reset-password-request.controller";
import { UserRole } from "../models";
import { verifyOTP } from "../controllers/authentication/verify-reset-password.controller";
import { newPassword } from "../controllers/authentication/reset-password.controller";

export const userRouter = Router();
userRouter.post("/sign-in", signInController);
userRouter.post("/sign-up", signUpController);
userRouter.patch("/update-user", updateUserController);
userRouter.get("/verify-user", verifyUser);
userRouter.delete("/delete-user", deleteUserController);
userRouter.post("/reset-password-req", resetPasswordRequest);
userRouter.post("/verify-reset-password-request", verifyOTP);
userRouter.post("/reset-password", newPassword);

// userRouter.post(
//   "/get-user-by-post-request/:groupId/:userId",
//   getUserByIdAndPost,
// );
// userRouter.get("/get-user-by-get-request", getUserByIdAndGet);
// userRouter.delete("/delete-by-id", deleteNewUser);

// userRouter.route("/user").post(createNewUser).delete(deleteNewUser);
