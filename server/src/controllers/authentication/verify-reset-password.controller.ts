import { Request, Response } from "express";
import { OTPModel } from "../../models/otp-model";
import jwt, { JwtPayload } from "jsonwebtoken";
import { UserModel } from "../../models";

export const verifyOTP = async (req: Request, res: Response) => {
  try {
    const { otp } = req.body;
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new Error("Invalid token");
    }
    const token = authHeader.split(" ")[1];
    const verifyDecoded = jwt.verify(
      String(token),
      process.env.JWT_SECRET as string,
    ) as JwtPayload;
    console.log(verifyDecoded);
    const { _id } = verifyDecoded;
    console.log(_id);
    const user = await UserModel.findOne({ _id });

    if (!user) {
      return res.status(404).send({ message: "user oldsongui" });
    }
    const userId = user?._id;

    const shalgahOTP = await OTPModel.findOne({ userId });
    if (!shalgahOTP) {
      return res.status(404).send({ message: "OTP oldsongui" });
    }

    console.log(otp, shalgahOTP.otp);
    if (otp !== shalgahOTP.otp) {
      return res.status(200).send({ message: "failed" });
    } else {
      const tokenThird = jwt.sign({ id: userId }, "secretToken", {
        expiresIn: "1d",
      });

      console.log({ tokenThird });
      res
        .status(200)
        .redirect(`http://localhost:3000/reset-password?token=${tokenThird}`);
    }
  } catch (error) {
    console.log(error);
    res.status(501).send({ message: "error", error: error });
  }
};
// otp shalgahgu bn
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5OTI3ZmNkNzNkZjRlNDBkMGFiZTgzNCIsImlhdCI6MTc3MTIxMDMwOSwiZXhwIjoxNzcxMjk2NzA5fQ.fqVBnqvMbmBYwJuWzKk7dwRfmKMvEZiwRZ7if-32F5E
