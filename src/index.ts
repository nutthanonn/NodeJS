import express from "express";
import dotenv from "dotenv";
import { createConnection } from "typeorm";
import { Student } from "./entities/Student";
import { Teacher } from "./entities/Teacher";
import { Classroom } from "./entities/Classroom";
import { createStudentRouter } from "./routes/create_student";
import { createClassroomRouter } from "./routes/create_classroom";
import { deleteClassroomRouter } from "./routes/delete_classroom";
import { fetchStudentRouter } from "./routes/fetch_student";
import { createTeacherRouter } from "./routes/create_teacher";

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

    //create
    app.use(createStudentRouter);
    app.use(createClassroomRouter);
    app.use(createTeacherRouter);

    //update
    app.use(fetchStudentRouter);

    //delele
    app.use(deleteClassroomRouter);

    console.log("------Connect Success------");
    app.listen(8000, () => {
      console.log("Running on port 8000");
    });
  } catch (error) {
    console.log("--Connect Error--");
  }
};

main();
