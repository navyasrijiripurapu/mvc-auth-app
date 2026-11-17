import {
  createUser,
  findUserByEmail,
  findUserById,
  getAllUsers
} from "../models/userModel.js";

// REGISTER
export const registerUser = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      message: "Name, email and password are required"
    });
  }

  if (findUserByEmail(email)) {
    return res.status(409).json({
      message: "User already exists"
    });
  }

  const user = createUser(name, email, password);

  const { password: _, ...safeUser } = user;

  res.status(201).json({
    message: "Registration successful",
    user: safeUser
  });
};

// LOGIN
export const loginUser = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Email and password are required"
    });
  }

  const user = findUserByEmail(email);

  if (!user || user.password !== password) {
    return res.status(401).json({
      message: "Invalid email or password"
    });
  }

  res.json({
    message: "Login successful",
    user: {
      _id: user._id,
      name: user.name,
      email: user.email
    },
    token: `mock-token-${user._id}`
  });
};

// GET ALL USERS
export const getUsers = (req, res) => {
  res.json(getAllUsers());
};

// GET USER BY ID
export const getUser = (req, res) => {
  const user = findUserById(req.params.id);

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  const { password, ...safeUser } = user;

  res.json(safeUser);
};
