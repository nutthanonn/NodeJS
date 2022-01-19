import express from "express";
import { Student } from "../entities/Student";
import { createQueryBuilder } from "typeorm";

const router = express.Router();

router.get("/api/student/:student_number", async (req, res) => {
  const { student_number } = req.params;
  const student = await createQueryBuilder("student")
    .select("student.student_name")
    .from(Student, "student")
    .where("student.student_number = :number", {
      number: student_number,
    })
    .getOne();

  return res.json(student);
});

export { router as fetchStudentRouter };
