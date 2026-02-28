import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UserModel } from "../models";

export const authentication = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const authToken = req.headers.authorization;

    if (!authToken) {
      res.status(200).send({ message: "invalid token 1" });
      return;
    }

    if (!authToken.startsWith("Bearer")) {
      res.status(200).send({ message: "invalid token 2" });
      return;
    }

    const token = authToken.split(" ")[1] ?? "";
    const verifiedToken = verify(token, "secretToken") as { _id: string };

    if (!verifiedToken._id) {
      res.status(200).send({ message: "invalid token 3" });
      return;
    }
    const userId = verifiedToken._id;

    const existingUser = await UserModel.findById(userId);
    if (!existingUser) {
      res.status(200).send({ message: "invalid token 4" });
      return;
    }

    req.body.user = existingUser;

    next();
  } catch (error) {
    res.status(500).send({ message: error });
  }
};
