// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Employee from "../../../models/Employee";
import dbConnect from "../../../util/mongo";

export default async function handler(req, res) {
  const { method, body } = req;

  dbConnect();

  if (method === "POST") {
    try {
      const employee = await Employee.findById({_id: body.employeeID});
      res.status(200).json(employee);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "PUT") {
    try {
      const employee = await Employee.updateOne(
        { username: req.body.username },
        req.body
      );
      console.log(req.body);
      res.status(201).json(employee);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
