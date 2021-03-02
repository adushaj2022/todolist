import express, { Request, Response } from "express";
import { createConnection } from "typeorm";
import { Student } from "./Entities/Student";
import studentRouter from "./routes/student.route";
import cors from "cors";
import { Housing } from "./Entities/Housing";
const main = async (): Promise<void> => {
  const app = express();
  app.use(express.json());
  app.use(cors());
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
    entities: [Student, Housing],
  });

  if (connection.isConnected) {
    console.log("Connected to Postgres");
  }

  app.use("/", studentRouter);

  app.listen(4000, (): void => {
    console.log(`Server is running on port ${port}`);
  });
};

main().catch((err) => {
  console.log(err);
});
