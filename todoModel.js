import { randomUUID } from "crypto";

let todos = [];

export const createTodo = (title, description, userId) => {
  const todo = {
    _id: randomUUID(),
    title,
    description: description || "",
    completed: false,
    userId,
    createdAt: new Date()
  };

  todos.push(todo);
  return todo;
};

export const getTodos = (userId) => {
  return todos.filter(todo => todo.userId === userId);
};

export const getTodoById = (id, userId) => {
  return todos.find(
    todo => todo._id === id && todo.userId === userId
  );
};

export const updateTodo = (id, userId, data) => {
  const todo = getTodoById(id, userId);

  if (!todo) return null;

  if (data.title !== undefined) todo.title = data.title;
  if (data.description !== undefined) todo.description = data.description;
  if (data.completed !== undefined) todo.completed = data.completed;

  return todo;
};

export const deleteTodo = (id, userId) => {
  const index = todos.findIndex(
    todo => todo._id === id && todo.userId === userId
  );

  if (index === -1) return false;

  todos.splice(index, 1);
  return true;
};
