import { Request, Response } from "express";
import { UserModel } from "../../models";
import bcrypt from "bcrypt";
import { verifyUserEmail } from "../../utils/mail-utils";
import jwt from "jsonwebtoken";

export const signUpController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, phoneNumber } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const userAPI = await UserModel.create({
      name,
      email,
      password: hashedPassword,
      phoneNumber,
    });

    const token = jwt.sign({ _id: userAPI._id }, "secretToken", {
      expiresIn: "1d",
    });

    await verifyUserEmail(
      email,
      `${process.env.BACKEND_API}/auth/verify-user?token=${token}`,
    );

    res.status(200).send({
      message: "batalgaajuulah link emailruu ilgeegdsen",
      userAPI,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "error creating user", error: error });
  }
};
