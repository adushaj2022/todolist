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
