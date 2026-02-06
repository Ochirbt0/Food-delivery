import { Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { UserModel } from "../../models";
import otpGenerator from "otp-generator";
import { OTPModel } from "../../models/otp-model";
import { passSolihHuselt } from "../../utils/reset-password-req-utils";

export const resetPasswordRequest = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    const hereglegch = await UserModel.findOne({ email });

    if (!hereglegch) {
      return res.status(404).send({ message: "Hereglegch oldsongui" });
    }

    const newToken = jwt.sign({ email }, process.env.JWT_SECRET as string, {
      expiresIn: "1d",
    });

    const otp = otpGenerator.generate(6, {
      digits: true,
      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
      specialChars: false,
    });
    await OTPModel.create({
      userId: hereglegch._id,
      otp,
    });
    await passSolihHuselt(
      email,
      `${process.env.BACKEND_API}/auth/reset-password-req?token=${newToken}`,
      otp,
    );

    res
      .status(200)
      .redirect(`http://localhost:3000/verify-otp?token=${newToken}`);
// end redirect hiih heregtei yu?

  } catch (error) {
    res.status(500).send({ message: "cannot reset password", error: error });
  }
};
