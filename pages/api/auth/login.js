/* eslint-disable import/no-anonymous-default-export */
import connectDB from "../../../utils/connectDB";
import AdminUsers from "../../../models/adminUserModel";
import {
  createAccessToken,
  createRefreshToken,
} from "../../../utils/generateToken";
import bcrypt from "bcryptjs";
import runMiddleware, { cors } from "../../../middleware/config-cors";

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await login(req, res);
      break;
  }
};

const login = async (req, res) => {
  try {
    await runMiddleware(req, res, cors);
    const { email, password } = req.body;
    const user = await AdminUsers.findOne({ email });
    if (!user)
      return res
        .status(400)
        .json({ err: "Tài khoản không tồn tại.", errCode: 1 });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ err: "Mật khẩu không đúng.", errCode: 2 });

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
      },
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
