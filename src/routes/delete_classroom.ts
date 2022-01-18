import express from "express";
import { Classroom } from "../entities/Classroom";

const router = express.Router();

router.delete("/api/classroom/:classroom_id", async (req, res) => {
  const { classroom_id } = req.params;

  const response = await Classroom.delete(classroom_id);

  return res.json(response);
});

export { router as deleteClassroomRouter };
