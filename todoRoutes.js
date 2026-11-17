import express from "express";

import {
  addTodo,
  getAllTodos,
  getSingleTodo,
  editTodo,
  removeTodo
} from "../controllers/todoController.js";

const router = express.Router();

router.post("/", addTodo);
router.get("/", getAllTodos);
router.get("/:id", getSingleTodo);
router.put("/:id", editTodo);
router.delete("/:id", removeTodo);

export default router;
