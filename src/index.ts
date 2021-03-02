import "reflect-metadata";
import * as dotenv from "dotenv-safe";
import express from "express";
import { createConnection } from "typeorm";
import { Student } from "./Entities/Student";
import studentRouter from "./routes/student.route";
import housingRouter from "./routes/housing.route";
import cors from "cors";
import { Housing } from "./Entities/Housing";
dotenv.config({
  allowEmptyValues: true,
  example: "./.env",
});

const main = async (): Promise<void> => {
  const app = express();

  //middlewares
  app.use(express.json());
  app.use(cors());

  const port = process.env.PORT || 5000;
  const connection = await createConnection({
    type: "postgres",
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: "School",
    logging: true,
    host: process.env.HOST,
    synchronize: true,
    port: process.env.DATABASE_PORT,
    entities: [Student, Housing],
  });

  if (connection.isConnected) {
    console.log("Connected to Postgres");
  }

  //routes
  app.use("/", studentRouter);
  app.use("/", housingRouter);

  app.listen(port, (): void => {
    console.log(`Server is running on port ${port}`);
  });
};

main().catch((err) => {
  console.log(err);
});
