import { Request, Response } from "express";
import { OTPModel } from "../../models/otp-model";
import jwt, { JwtPayload } from "jsonwebtoken";
import { UserModel } from "../../models";

export const verifyOTP = async (req: Request, res: Response) => {
  try {
    const { otp } = req.body;
    const { token } = req.headers;
    const verifyDecoded = jwt.verify(
      String(token),
      process.env.JWT_SECRET as string,
    ) as JwtPayload;

    const { email } = verifyDecoded;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).send({ message: "user oldsongui" });
    }
    const userId = user?._id;

    const shalgahOTP = await OTPModel.findOne({ userId });
    if (!shalgahOTP) {
      return res.status(404).send({ message: "OTP oldsongui" });
    }

    console.log(shalgahOTP);

    // const id = shalgahOTP.userId;
    console.log(otp, shalgahOTP.otp);
    if (otp !== shalgahOTP.otp) {
      return res.status(200).send({ message: "failed" });
    } else {
      const tokenThird = jwt.sign({ id: user._id }, "nuuts", {
        expiresIn: "1d",
      });
      res
        .status(200)
        .redirect(`http://localhost:3000/reset-password?token=${tokenThird}`);
    }
  } catch (error) {
    console.log(error);
    res.status(501).send({ message: "error", error: error });
  }
};
// otp irehgui bn