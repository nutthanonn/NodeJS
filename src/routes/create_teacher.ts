import express from "express";
import { Teacher } from "../entities/Teacher";

const router = express.Router();

router.post("/api/teacher", async (req, res) => {
  const { teacher_name } = req.body;

  const teacher = Teacher.create({
    teacher_name: teacher_name,
  });

  await teacher.save();

  return res.json(teacher);
});

export { router as createTeacherRouter };
