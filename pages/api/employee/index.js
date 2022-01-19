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
      const employee = await Employee.find();
      res.status(200).json(employee);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "POST") {
    try {
      const employee = await Employee.create(req.body);
      res.status(201).json(employee);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "PUT") {
    try {
      const employee = await Employee.findOne(req.body);
      res.status(201).json(employee);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
