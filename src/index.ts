import express, { Request, Response } from "express";
import { createConnection } from "typeorm";
import { Student } from "./Entities/Student";

const main = async (): Promise<void> => {
  const app = express();
  const port = process.env.PORT || 4000;

  const connection = await createConnection({
    type: "postgres",
    username: "postgres",
    password: "4512",
    database: "School",
    logging: true,
    host: "127.0.0.1",
    synchronize: true,
    port: 5432,
    entities: [Student],
  });

  if (connection.isConnected) {
    console.log("Connected to Postgres");
  }

  app.get("/", (req: Request, res: Response): void => {
    res.status(200).send("hi");
  });

  app.listen(4000, (): void => {
    console.log(`Server is running on port ${port}`);
  });
};

main().catch((err) => {
  console.log(err);
});
