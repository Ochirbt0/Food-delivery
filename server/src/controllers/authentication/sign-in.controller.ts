import { Request, Response } from "express";
import { UserModel } from "../../models";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const signInController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const userAPI = await UserModel.findOne({ email });

    if (!userAPI) return res.status(404).send({ message: "user not found" });

    const isPasswordValid = await bcrypt.compare(password, userAPI.password);

    if (!isPasswordValid) {
      res.status(401).send({ message: "Email esvel pass buruu bna" });
      return;
    }
    const tokenSignIn = jwt.sign({ _id: userAPI._id }, "secretToken", {
      expiresIn: "1d",
    });
    res
      .status(200)
      .send({
        message: "User signed in successfully",
        data: userAPI,
        token: tokenSignIn,
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "error signing in", error: error });
  }
};
