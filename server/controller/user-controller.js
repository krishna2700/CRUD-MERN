import { request, response } from "express";
import User from "../schema/user-schema.js";

export const addUser = async (request, response) => {
  const user = request.body;
  const newUser = new User(user);

  try {
    await newUser.save();
    response.status(201).json(newUser);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }

  console.log(user);
};

export const getUsers = async (request, response) => {
  try {
    const users = await User.find({});
    response.status(200).json(users);
  } catch (error) {
    response.status(404).json({ message: error });
  }
};

export const getUser = async (request, response) => {
  console.log(request.params.id);
  try {
    // const user = await User.find({ _id: request.params.id });  (this is also the right way and below is also the right way)
    const user = await User.findById(request.params.id);
    response.status(200).json(user);
  } catch (error) {
    response.status(404).json({ message: error });
  }
};

export const editUser = async (request, response) => {
  let user = request.body;
  const editUser = new User(user);
  try {
    await User.updateOne({ _id: request.params.id }, editUser);
    response.status(200).json(editUser);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
