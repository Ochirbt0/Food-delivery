import cors from "cors";
import { configDotenv } from "dotenv";
import express, { Application, Request, Response } from "express";
import connectToMongoDB from "./mongodb";
import { foodRouter } from "./routers/food.router";
import { foodCartRouter, foodCategoryRouter, userRouter } from "./routers";
import { foodOrderRouter } from "./routers/foodOrder.router";

configDotenv();
const port = 10000;
const app: Application = express();
app.use(cors());
app.use(express.json());
app.use("/food", foodRouter);
app.use("/", foodCartRouter);
app.use("/auth", userRouter);
app.use("/food-category", foodCategoryRouter);
app.use("/food-order", foodOrderRouter);
// app.post("/backEndSecond", async (req: Request, res: Response) => {
//   res.status(200).send(req.body);
// });

// app.put("/backEndThird", async (req: Request, res: Response) => {
//   const user = req.body;
//   const ugugdul = {
//     name: "Ochirbat",
//     email: "Ochrbt0@gmail.com",
//     password: "123456",
//   };

//   const updatedUser = {
//     ...ugugdul,
//     ...user,
//   };

//   res
//     .status(200)
//     .send({ message: "User updated successfully", data: updatedUser });
// });

// app.delete("/backEndFourth", async (req: Request, res: Response) => {
//   const user = req.body;
//   const deleted = `successfully deleted`;

//   // const newUser = { ...user, name: deleted };

//   res.status(200).send(deleted);
// });

// app.get("/sda", async (req: Request, res: Response) => {
//   // const user = req.body;
//   const userList = [
//     {
//       id: 1,
//       name: "Ochirbat",
//       email: "ochirbat@gmail.com",
//       password: "111111",
//     },
//     {
//       id: 2,
//       name: "Temuulen",
//       email: "temuulen@gmail.com",
//       password: "111112",
//     },
//     { id: 3, name: "Turuu", email: "turuu@gmail.com", password: "111113" },
//     { id: 4, name: "Horloo", email: "horloo@gmail.com", password: "111114" },
//     { id: 5, name: "Uchka", email: "uchka@gmail.com", password: "111115" },
//   ];

//   // const finder = userList.find((user) => user.id === Number(req.query.id));
//   // console.log(finder);
//   // res.status(200).send(finder);
// });

// app.get("/completedStatus", async (req: Request, res: Response) => {
//   const taskModel = [
//     {
//       id: 1,
//       title: "dodge",
//       description: "dodge challenger",
//       createdAt: "usa",
//       updatedAt: "usa",
//       completed: true,
//     },
//     {
//       id: 2,
//       title: "BMW",
//       description: "M5 competition",
//       createdAt: "gernamy",
//       updatedAt: "germany",
//       completed: true,
//     },
//     {
//       id: 3,
//       title: "masserati",
//       description: "masserati",
//       createdAt: "france",
//       updatedAt: "france",
//       completed: false,
//     },
//     {
//       id: 4,
//       title: "toyota",
//       description: "toyota supra mk4",
//       createdAt: "japan",
//       updatedAt: "japan",
//       completed: true,
//     },
//     {
//       id: 5,
//       title: "hyundai",
//       description: "sonata-7",
//       createdAt: "korean",
//       updatedAt: "korean",
//       completed: false,
//     },
//   ];

//   const finder = taskModel.filter(
//     (user) => user.completed === Boolean(req.body.completed),
//   );
//   res.status(200).send(finder);
// });

// app.post("/create-user", async (req: Request, res: Response) => {
//   const { name, email } = req.body;

//   const user = await UserModel.create({ name, email });
//   res.status(200).send({ message: "user created successfully", data: user });
// });

// app.put("/update-user", async (req: Request, res: Response) => {
//   const { name, email, id } = req.body;

//   try {
//     const user = await UserModel.findByIdAndUpdate(
//       id,
//       { email },
//       { new: true },
//     );
//     res.status(200).send({ message: "user updated successfully", data: user });
//   } catch (error) {
//     console.log(error);
//   }
// });
// app.delete("/delete-user", async (req: Request, res: Response) => {
//   const { name, email, id } = req.body;

//   try {
//     const user = await UserModel.findByIdAndDelete(id, { email });
//     res.status(200).send({ message: "user deleted successfully", data: user });
//   } catch (error) {
//     console.log(error);
//   }
// });

// // app.get("/get-users", async (req: Request, res: Response) => {
// //   const users = await UserModel.find();
// //   res.status(200).send({ message: "user fetched successfully", data: users });
// // });

// app.get("/get-userList", async (req: Request, res: Response) => {
//   const getId = req.body.id;
//   const user = await UserModel.findById(getId).exec();

//   res.status(200).send({ message: "list created successfully", data: user });
// });
connectToMongoDB();
app.listen(port, async () => {
  console.log(`Server is running on ${port}`);
});
