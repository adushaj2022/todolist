import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req: Request, res: Response): void => {
  res.status(200).send("hi");
});

app.listen(4000, (): void => {
  console.log(`Server is running on port ${port}`);
});
