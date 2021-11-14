import React, { useState, useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import valid from "../../utils/valid";
import { DataContext } from "../../store/GlobalState";
import { postData } from "../../utils/fecthData";
import { Form, Button } from "react-bootstrap";
import ParallaxScrolling from "../../components/ParallaxScrolling";

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
      <ParallaxScrolling></ParallaxScrolling>
      <section className="paddingTop30">
        <div className="wrapper">
          <div className="account-container">
            <div className="account-header">
              <h1>Tạo tài khoản</h1>
            </div>
            <Form onSubmit={handleSubmit} className="form-account">
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Họ"
                  name="lastName"
                  value={lastName}
                  onChange={handleChangeInput}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Tên"
                  name="firstName"
                  value={firstName}
                  onChange={handleChangeInput}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={handleChangeInput}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Mật khẩu"
                  name="password"
                  value={password}
                  onChange={handleChangeInput}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Nhập lại mật khẩu"
                  name="cf_password"
                  value={cf_password}
                  onChange={handleChangeInput}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Đăng nhập
              </Button>
              <Link href="/account/signin">
                <a className="displayBlock">Đăng nhập</a>
              </Link>
              <Link href="/">
                <a className="displayBlock">Trở về</a>
              </Link>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
}
