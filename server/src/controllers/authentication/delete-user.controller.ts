import { Request, Response } from "express";
import { UserModel } from "../../models";

export const deleteUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;

    const deletedUser = await UserModel.findByIdAndDelete(id);
    res
      .status(200)
      .send({ message: "User deleted successfully", data: deletedUser });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "error deleting user", error: error });
  }
};
