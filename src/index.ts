import express from "express";
import dotenv from "dotenv";
import { createConnection } from "typeorm";
import { Classroom } from "./entities/Classroom";
import { Student } from "./entities/Student";
import { Teacher } from "./entities/Teacher";
import { createStudentRouter } from "./routes/create_student";
import { createClassroomRouter } from "./routes/create_classroom";

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
      entities: [Classroom, Student, Teacher],
      synchronize: true,
    });

    app.use(express.json());
    app.use(createStudentRouter);
    app.use(createClassroomRouter);

    console.log("------Connect Success------");
    app.listen(8000, () => {
      console.log("Running on port 8000");
    });
  } catch (error) {
    console.log("--Connect Error--");
  }
};

main();
