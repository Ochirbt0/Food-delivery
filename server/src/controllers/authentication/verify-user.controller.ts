import { Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { UserModel } from "../../models";

export const verifyUser = async (req: Request, res: Response) => {
  try {
    const { token } = req.query;

    const decoded = jwt.decode(String(token)) as JwtPayload;

    const verified = jwt.verify(String(token), "secretToken");
    const { _id } = decoded;

    const mailShalgah = await UserModel.findByIdAndUpdate(
      _id,
      {
        isVerified: true,
      },
      { new: true },
    );

    if (mailShalgah && String(mailShalgah?._id) === _id) {
      res.status(200).send({ message: "Success", user: mailShalgah });
    } else {
      res.status(200).send({ message: "Mail batalgaajaagui baina" });
    }
  } catch (error) {
    res.status(501).send({ message: "User not found" });
  }
};
