// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Employee from "../../../models/Employee";
import dbConnect from "../../../util/mongo";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;
  dbConnect();
  if (method === "GET") {
    try {
      const employee = await Employee.findOne({_id: id});
      res.status(200).json(employee);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "PUT") {
    try {
      const employee = await Employee.updateOne(req.body);
      res.status(201).json(employee);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "DELETE") {
    try {
      const employee = await Employee.deleteOne({_id: id});
      res.status(201).json(employee);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
