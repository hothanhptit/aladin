// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import User from "../../../models/User";
import { signToken } from "../../../util/auth";
import dbConnect from "../../../util/mongo";

export default async function handler(req, res) {
  dbConnect();
  const {
    method,
    // query: { id },
  } = req;
  const { username } = req.body;

  if (method === "POST") {
    try {
      const userExisted = await User.findOne({ username });
      if (!userExisted) {
        const user = await User.create(req.body);
        const token = signToken(user);
        res.send({
          token,
          _id: user._id,
          username: user.username,
        });
      } else {
        res.status(401).send({ message: "Username existed!" });
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
