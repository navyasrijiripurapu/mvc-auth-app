import {
  createTodo,
  getTodos,
  getTodoById,
  updateTodo,
  deleteTodo
} from "../models/todoModel.js";

// CREATE TODO
export const addTodo = (req, res) => {
  const { title, description, userId } = req.body;

  if (!title || !userId) {
    return res.status(400).json({
      message: "Title and userId are required"
    });
  }

  const todo = createTodo(title, description, userId);

  res.status(201).json({
    message: "Todo created successfully",
    todo
  });
};

// GET ALL TODOS
export const getAllTodos = (req, res) => {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({
      message: "userId is required"
    });
  }

  res.json(getTodos(userId));
};

// GET SINGLE TODO
export const getSingleTodo = (req, res) => {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({
      message: "userId is required"
    });
  }

  const todo = getTodoById(req.params.id, userId);

  if (!todo) {
    return res.status(404).json({
      message: "Todo not found"
    });
  }

  res.json(todo);
};

// UPDATE TODO
export const editTodo = (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({
      message: "userId is required"
    });
  }

  const todo = updateTodo(req.params.id, userId, req.body);

  if (!todo) {
    return res.status(404).json({
      message: "Todo not found"
    });
  }

  res.json({
    message: "Todo updated successfully",
    todo
  });
};

// DELETE TODO
export const removeTodo = (req, res) => {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({
      message: "userId is required"
    });
  }

  const deleted = deleteTodo(req.params.id, userId);

  if (!deleted) {
    return res.status(404).json({
      message: "Todo not found"
    });
  }

  res.json({
    message: "Todo deleted successfully"
  });
};
