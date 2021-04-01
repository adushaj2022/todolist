import { Request, Response } from "express";
import { Dtodo, ToDo } from "../Entities/ToDo";

export const todos = async (req: Request, res: Response): Promise<void> => {
  const data: Dtodo[] = await ToDo.find();
  res.status(200).json(data);
};

export const onetodo = async (req: Request, res: Response): Promise<void> => {
  const id: number = parseInt(req.params?.id);
  try {
    const t: Dtodo | undefined = await ToDo.findOne({ id });
    res.status(200).json(t);
  } catch (error) {
    res.status(404).json({ error });
  }
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
    res.status(404).json({ message: "No To Do found" });
  }
};

export const remove = async (req: Request, res: Response): Promise<void> => {
  const id: number = parseInt(req.params?.id);
  try {
    const t = await ToDo.delete({ id });
    res.status(204).json({ message: "To Do successfully deleted" });
  } catch (error) {
    res.status(404).json({ error });
  }
};
