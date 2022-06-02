// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Post from "../../../models/Post";
import dbConnect from "../../../util/mongo";

export default async function handler(req, res) {
  const { method } = req;

  dbConnect();

  if (method === "GET") {
    try {
      const post = await Post.find();
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "POST") {
    try {
      const post = await Post.create(req.body);
      res.status(201).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "PUT") {
    try {
      const post = await Post.updateOne(
        // { username: req.body.username },
        req.body
      );
      res.status(201).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
