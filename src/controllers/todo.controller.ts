import { Request, Response } from "express";
import { ToDo } from "../Entities/ToDo";

export const todos = async (req: Request, res: Response): Promise<void> => {
  const data = await ToDo.find();
  res.status(200).json(data);
};

export const todo = async (req: Request, res: Response): Promise<void> => {
  const { task } = req.body;
  await ToDo.insert({
    task,
    isCompleted: false,
  });

  res.status(201).json({ message: "To Do added" });
};

export const complete = async (req: Request, res: Response): Promise<void> => {
  const id: number = parseInt(req.body?.id);
  const t = await ToDo.findOne({ id });
  if (t) {
    t.isCompleted = true;
    await t.save();
    res.status(200).json({ message: "To Do changed to completed" });
  } else {
    res.status(404).end();
  }
};
