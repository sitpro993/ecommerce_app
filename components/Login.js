import React, { useState, useContext, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { DataContext } from "../store/GlobalState";
import { postData } from "../utils/fecthData";
import Cookie from "js-cookie";
import { useRouter } from "next/router";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import ParallaxScrolling from "./HomeComponent/User/ParallaxScrolling";

export default function LoginComponent() {
  const initialState = {
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState(initialState);
  const { email, password } = userData;

  const { state, dispatch } = useContext(DataContext);
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

  useEffect(() => {
    if (Object.keys(auth).length !== 0) {
      if (auth.user.role === "admin") router.push("/admin/dashboard");
      else router.push("/");
    }
  }, [auth, router]);
  return (
    <>
      <Head>
        <title>Đăng nhập - BeeYou</title>
        <meta name="keywords" content="BeeYou"></meta>
      </Head>
      <ParallaxScrolling></ParallaxScrolling>
      <section className="paddingTop30">
        <div className="wrapper">
          <div className="account-container">
            <div className="account-header">
              <h1>Đăng nhập</h1>
            </div>
            <Form onSubmit={handleSubmit} className="form-account">
              <FloatingLabel
                controlId="floatingInput"
                label="Email"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  name="email"
                  value={email}
                  onChange={handleChangeInput}
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Mật khẩu"
                className="mb-3"
              >
                <Form.Control
                  type="password"
                  placeholder="name@example.com"
                  name="password"
                  value={password}
                  onChange={handleChangeInput}
                />
              </FloatingLabel>

              <Button variant="primary" type="submit">
                Đăng nhập
              </Button>
              <Link href="/">
                <a className="displayBlock">Trở về</a>
              </Link>
              <Link href="/account/register">
                <a className="displayBlock">Đăng ký</a>
              </Link>
              <Link href="#">
                <a className="displayBlock">Quên mật khẩu?</a>
              </Link>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
}