import express from "express";
import { Student } from "../entities/Student";

const router = express.Router();

router.post("/api/student", async (req, res) => {
  const { student_name } = req.body;

  const student = Student.create({
    student_name: student_name,
  });

  await student.save();

  return res.json(student);
});

export { router as createStudentRouter };
