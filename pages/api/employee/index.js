// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Employee from "../../../models/Employee";
import dbConnect from "../../../util/mongo";

export default async function handler(req, res) {
  const {
    method
  } = req;
  dbConnect();

  if (method === "GET") {
    try {
      const product = await Employee.find();
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "POST") {
    try {
      const product = await Employee.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
