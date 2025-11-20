import jwt from "jsonwebtoken";

export interface AuthPayload {
  id: string;
}

export const generateToken = (payload: AuthPayload): string => {
  return jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: "30d",
  });
};
