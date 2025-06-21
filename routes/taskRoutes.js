
import express from "express"
import { taskValidationRules } from "../validations/validateTask.js";
import { createTask, getAllTasks } from "../controllers/taskController.js";

const router = express.Router();

router.post('/tasks', taskValidationRules, createTask);
router.get('/tasks', getAllTasks);

export default router