import { randomUUID } from "crypto";

let users = [];

export const createUser = (name, email, password) => {
  const user = {
    _id: randomUUID(),
    name,
    email,
    password
  };

  users.push(user);
  return user;
};

export const findUserByEmail = (email) => {
  return users.find(user => user.email === email);
};

export const findUserById = (id) => {
  return users.find(user => user._id === id);
};

export const getAllUsers = () => {
  return users.map(({ password, ...user }) => user);
};
