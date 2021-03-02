import { Request, Response } from "express";
import { Student } from "../Entities/Student";

export const students = async (req: Request, res: Response): Promise<void> => {
  const data = await Student.find();
  res.status(201).send(data);
};

export const new_student = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { firstName, lastName, major } = req.body;
  await Student.insert({
    firstName,
    lastName,
    major,
  });
  res.status(201).send("data inserted");
};

export const remove_student = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = parseInt(req.params.id);

  const student = await Student.findOne({ id });

  if (!student) {
    res.send(200).send({ status: false });
  } else {
    await Student.delete({ id });
    res.status(201).send({ status: true });
  }
};
