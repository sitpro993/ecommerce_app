import React, { useState, useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import valid from "../../utils/valid";
import { DataContext } from "../../store/GlobalState";
import { postData } from "../../utils/fecthData";

export default function RegisterPage() {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cf_password: "",
  };
  const [userData, setUserData] = useState(initialState);
  const { firstName, lastName, email, password, cf_password } = userData;

  const [state, dispatch] = useContext(DataContext);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errMsg = valid(firstName, lastName, email, password, cf_password);

    if (errMsg) return dispatch({ type: "NOTIFY", payload: { error: errMsg } });

    dispatch({
      type: "NOTIFY",
      payload: { loading: true },
    });
    const res = await postData("auth/register", userData);
    return dispatch({
      type: "NOTIFY",
      payload: { success: res.msg },
    });
  };
  return (
    <>
      <Head>
        <title>Đăng ký - BeeYou</title>
        <meta name="keywords" content="BeeYou"></meta>
      </Head>
      <div style={{ margin: "30px" }}>
        <h1>Tạo tài khoản</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Tên"
            id="name"
            name="firstName"
            value={firstName}
            onChange={handleChangeInput}
          ></input>
          <input
            type="text"
            placeholder="Họ"
            name="lastName"
            value={lastName}
            onChange={handleChangeInput}
          ></input>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChangeInput}
          ></input>
          <input
            type="password"
            placeholder="Mật khẩu"
            name="password"
            value={password}
            onChange={handleChangeInput}
          ></input>
          <input
            type="password"
            placeholder="Nhập lại mật khẩu"
            name="cf_password"
            value={cf_password}
            onChange={handleChangeInput}
          ></input>
          <button type="submit">Đăng ký</button>
          <Link href="/account/signin">
            <a>Đăng nhập</a>
          </Link>
          <Link href="/">
            <a>Trở về</a>
          </Link>
        </form>
      </div>
    </>
  );
}
