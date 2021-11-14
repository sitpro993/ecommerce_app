/* eslint-disable import/no-anonymous-default-export */
import connectDB from "../../../utils/connectDB";
import Users from "../../../models/userModel";
import {
  createAccessToken,
  createRefreshToken,
} from "../../../utils/generateToken";
import bcrypt from "bcryptjs";

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await sign(req, res);
      break;
  }
};

const sign = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Users.findOne({ email });
    if (!user)
      return res.status(400).json({ err: "Tài khoản không tồn tâij." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ err: "Mật khẩu không đúng." });

    const access_token = createAccessToken({ id: user._id });
    const refresh_token = createRefreshToken({ id: user._id });

    res.json({
      msg: "Chào, " + user.firstName + " quay trở lại",
      refresh_token,
      access_token,
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        root: user.root,
      },
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
