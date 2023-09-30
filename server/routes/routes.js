import express from "express";
import { addUser, getUsers, getUser } from "../controller/user-controller.js";

const router = express.Router();

router.post("/add", addUser);
router.get("/all", getUsers);
router.get("/:id", getUser);

export default router;
