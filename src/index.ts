import "reflect-metadata";
import * as dotenv from "dotenv-safe";
import express from "express";
import { createConnection } from "typeorm";
import todoRouter from "./routes/todo.routes";
import cors from "cors";
import { ToDo } from "./Entities/ToDo";
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
    database: "typedo",
    logging: true,
    host: process.env.HOST,
    synchronize: true,
    port: process.env.DATABASE_PORT,
    entities: [ToDo],
  });

  if (connection.isConnected) {
    console.log("Connected to Postgres");
  }

  //routes
  app.use("/", todoRouter);

  app.listen(port, (): void => {
    console.log(`Server is running on port ${port}`);
  });
};

main().catch((err) => {
  console.log(err);
});
