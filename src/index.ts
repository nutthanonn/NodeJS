import express from "express";
import dotenv from "dotenv";
import { createConnection } from "typeorm";
import { Classroom } from "./entities/Classroom";
import { Student } from "./entities/Student";

const app = express();
dotenv.config();

const main = async () => {
  try {
    await createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: "postgres",
      entities: [Classroom, Student],
      synchronize: true,
    });

    app.use(express.json());

    app.listen(8000, () => {
      console.log("Running on port 8000");
    });
    console.log("------Connect Success------");
  } catch (error) {
    console.log("--Connect Error--");
  }
};

main();
