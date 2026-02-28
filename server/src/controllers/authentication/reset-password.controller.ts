import { Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { UserModel } from "../../models";
import bcrypt from "bcrypt";

// new password -> user iiin password update hiine.
export const newPassword = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization;
    const { password } = req.body;
    const hashed = await bcrypt.hash(password, 10);
    const decoded = jwt.decode(String(token?.split(" ")[1])) as JwtPayload;

    const { id } = decoded;

    const updateduser = await UserModel.findByIdAndUpdate(
      id,
      {
        password: hashed,
      },
      { new: true },
    );
    res.status(200).send({ message: "success", updateduser });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "error", error: error });
  }
};
//   res
//       .status(308)
//       .redirect(`http://localhost:3000/reset-password?token=${newToken}`);
