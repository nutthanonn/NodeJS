import express from "express";
import { Classroom } from "../entities/Classroom";

const router = express.Router();

router.post("/api/classroom", async (req, res) => {
  const { classroom_name } = req.body;

  const classroom = Classroom.create({
    classroom_name: classroom_name,
  });

  try {
    await classroom.save();
  } catch (err) {
    if (err)
      return res.json({
        message: err.message,
      });
  }

  return res.json(classroom);
});

export { router as createClassroomRouter };
