import express from "express";

import {
  registerUser,
  loginUser,
  getUsers,
  getUser
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", getUsers);
router.get("/:id", getUser);

export default router;
