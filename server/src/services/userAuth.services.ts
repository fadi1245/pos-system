import user from "../interfaces/user.interface";
import User from "../schemas/user.schema";
import bcryptjs from "bcryptjs";
import { customError } from "../utils/cutomError";

const createUser = async (data: user): Promise<user> => {
  const newUser = await User.create(data);
  return newUser;
};

const authenticateUser = async (
  email: string,
  password: string
): Promise<user> => {
  const foundUser = await User.findOne({ email }).select("+password");

  if (!foundUser) {
    throw new customError("Incorrect email or password", 400);
  }

  const isMatch = await foundUser.comparePasswordinDb(password, foundUser.password);

  if (!isMatch) {
    throw new customError("Incorrect email or password", 400);
  }

  return foundUser;
};

export { createUser, authenticateUser };
