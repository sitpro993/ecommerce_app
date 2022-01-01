import jwt from "jsonwebtoken";
import AdminUsers from "../models/adminUserModel";

const auth = async (req, res) => {
  const token = req.headers.authorization;
  if (!token) return res.status(400).json({ err: "Invalid Authentication." });

  const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  if (!decoded) return res.status(400).json({ err: "Invalid Authentication." });

  const user = await AdminUsers.findOne({ _id: decoded.id });
  if (!user) return res.status(404).json({ err: "User does not exist." });

  return { id: user._id };
};

export default auth;
