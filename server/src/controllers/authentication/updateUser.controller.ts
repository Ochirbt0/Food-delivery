import { Request, Response } from "express";
import { UserModel } from "../../models";

export const updateUserController = async (req: Request, res: Response) => {
  try {
    const { id, email, password, phoneNumber, address, role } = req.body;

    const updatedUser = await UserModel.findByIdAndUpdate(
      id,
      {
        email,
        password,
        phoneNumber,
        address,
        role,
      },
      { new: true },
    );
    res
      .status(200)
      .send({ message: "User updated successfully", data: updatedUser });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "error creating user", error: error });
  }
};
