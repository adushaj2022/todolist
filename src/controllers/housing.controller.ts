import { Request, Response } from "express";
import { Housing } from "../Entities/Housing";

export const housing = async (req: Request, res: Response): Promise<void> => {
  const data = await Housing.find();
  res.status(200).json(data);
};
