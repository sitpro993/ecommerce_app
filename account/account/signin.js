import React, { useState, useContext, useEffect } from "react";


import Head from "next/head";
import Link from "next/link";
import { DataContext } from "../../store/GlobalState";
import { postData } from "../../utils/fecthData";
import Cookie from "js-cookie";
import { useRouter } from "next/router";
/* import "../styles/globals.scss";
 */

export default function SigninPage() {
  const initialState = {
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState(initialState);
  const { email, password } = userData;

  const [state, dispatch] = useContext(DataContext);
  const { auth } = state;

  const router = useRouter();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch({
      type: "NOTIFY",
      payload: { loading: true },
    });

    const res = await postData("auth/signin", userData);

    if (res.err)
      return dispatch({
        type: "NOTIFY",
        payload: { err: res.err },
      });

    dispatch({
      type: "NOTIFY",
      payload: { success: res.msg },
    });

    dispatch({
      type: "AUTH",
      payload: {
        token: res.access_token,
        user: res.user,
      },
    });

    Cookie.set("refreshtoken", res.refresh_token, {
      path: "api/auth/accessToken",
      expires: 7,
    });

    localStorage.setItem("firstLogin", true);
  };

  console.log(process.env.REFRESH_TOKEN_SECRET);
  useEffect(() => {
    if (Object.keys(auth).length !== 0) router.push("/");
  }, [auth, router]);
  return (
    <>
      
      <Head>
        <title>Đăng nhập - BeeYou</title>
        <meta name="keywords" content="BeeYou"></meta>
      </Head>
      <div className="_user">
      <div style={{ margin: "30px" }}>
        <h1>Đăng nhập</h1>
        <form onSubmit={handleSubmit}>
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
          <Link href="/account/register">
            <a className="a1">Đăng ký</a>
          </Link>
          <Link href="#">
            <a className="a2">Quên mật khẩu?</a>
          </Link>
          <button type="submit">Đăng nhập</button>
        </form>
      </div>
      </div>
    </>
  );
}
