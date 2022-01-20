// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Employee from "../../../models/Employee";
import User from "../../../models/User";
import { signToken } from "../../../util/auth";
import dbConnect from "../../../util/mongo";

export default async function handler(req, res) {
  dbConnect();
  const {
    method,
    // query: { id },
  } = req;
  const { username, password } = req.body;

  if (method === "POST") {
    try {
      const user = await User.findOne({ username });
      const employee = await Employee.findOne({ username });
      if (user && password === user.password) {
        const token = signToken(user);
        res.send({
          token,
          _id: user._id,
          username: user.username,
          isAdmin: user.isAdmin,
          employeeID: employee? employee._id : null,
        });
      } else {
        res.status(401).send({ message: "Invalid username or password" });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
  // if (method === "GET") {
  //   try {
  //     const user = await User.findOne({ username });
  //   } catch (error) {
  //     res.status(500).json(error);
  //   }
  // }
}
