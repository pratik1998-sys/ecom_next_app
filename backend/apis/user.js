import express from "express";
import mongoose from "mongoose";
import { UserSchema } from "../schema/User.js";

export const UserRouter = express.Router();

const User = mongoose.model("user", UserSchema);

// 1. Register an User
UserRouter.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    console.log(User);
    let result = await user.save();
    if (result) {
      res
        .status(201)
        .send({ message: "users registered successfully", data: result });
    } else {
      console.log("user already registered");
      res.status(400).send({ message: "user already registered", data: null });
    }
  } catch (err) {
    res
      .status(500)
      .send({ message: "Something went wrong", error: err.message });
  }
});

// 2. find a User
UserRouter.post("/login", async (req, res) => {
  try {
    const result = await User.findOne({
      email: req.body.email.toString(),
      password: req.body.password.toString(),
    });
    if (result) {
      res
        .status(201)
        .send({ message: "user fetched successfully", data: result });
    } else {
      console.log("User does not exist");
      res.status(400).send({ message: "user does not exist", data: null });
    }
  } catch (err) {
    res
      .status(500)
      .send({ message: "Something went wrong", error: err.message });
  }
});

// 3. delete a User
UserRouter.delete("/:userId", async (req, res) => {
  try {
    const result = await User.findOneAndDelete({
      _id: req.params.userId.toString(),
    });
    if (result) {
      res.status(201).send(result);
    } else {
      console.log("User does not exist");
      res.status(400).send("User does not exist");
    }
  } catch (err) {
    res
      .status(500)
      .send({ message: "Something went wrong", error: err.message });
  }
});

// // 2. get all Users
// UserRouter.get("/", async (req, res) => {
//   try {
//     const result = await User.find();
//     if (result) {
//       res.status(201).send(result);
//     } else {
//       console.log("error fetching Users");
//       res.status(400).send("error feching Users");
//     }
//   } catch (err) {
//     res
//       .status(500)
//       .send({ message: "Something went wrong", error: err.message });
//   }
// });

// 4. update a User
UserRouter.put("/:userId", async (req, res) => {
  try {
    const result = await User.findOneAndUpdate(
      { _id: req.params.userId.toString() },
      req.body,
      { new: true, runValidators: true }
    );
    if (result) {
      res
        .status(200)
        .send({ message: "User updated successfully", data: result });
    } else {
      console.log("User does not exist");
      res.status(400).send("User does not exist");
    }
  } catch (err) {
    res
      .status(500)
      .send({ message: "Something went wrong", error: err.message });
  }
});
