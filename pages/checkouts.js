import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ParallaxScrolling from "../components/HomeComponent/User/ParallaxScrolling";
import withAuth from "../components/HOCs/withAuth";
import { DataContext } from "../store/GlobalState";
import Cookie, { set } from "js-cookie";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";

function CheckoutsPage() {
  // const { state, dispatch } = useContext(DataContext);
  // const { auth, cart } = state;

  // const [subTotal, setSubTotal] = useState(0);
  // const [shippingPrice, setShippingPrice] = useState(0);
  // const [total, setTotal] = useState(0);
  // const [shipping, setShipping] = useState("delivery");

  // const handleLogout = () => {
  //   Cookie.remove("refreshtoken", { path: "/api/auth/accessToken" });
  //   localStorage.removeItem("firstLogin");
  //   dispatch({ type: "AUTH", payload: {} });
  //   dispatch({
  //     type: "NOTIFY",
  //     payload: { success: "Đăng xuất thành công" },
  //   });
  // };

  // useEffect(() => {
  //   const getTotal = () => {
  //     const res = cart.reduce((prev, item) => {
  //       return prev + item.price * item.quantity;
  //     }, 0);

  //     setSubTotal(res);
  //   };

  //   getTotal();
  // }, [cart]);

  // useEffect(() => {
  //   const res = subTotal + shippingPrice;
  //   setTotal(res);
  // }, [subTotal, shippingPrice]);
  //console.log(shipping);

  return (
    <>
      {/* <Head>
        <title>Thanh toán đơn hàng - BeeYou</title>
        <meta name="keywords" content="BeeYou"></meta>
      </Head>
      <ParallaxScrolling></ParallaxScrolling>
      <section
        className="wrapper paddingTop30 "
        style={{ marginBottom: "30px" }}
      >
        <div className="row">
          <div className="col-7">
            <div className="order-main">
              <div className="main-header">
                <Link href="/">
                  <a className="logo">
                    <h1 className="logo-text">BeeYou</h1>
                  </a>
                </Link>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/gio-hang">
                      <a>Giỏ hàng</a>
                    </Link>
                  </li>

                  <li className="breadcrumb-item breadcrumb-item-current">
                    Thông tin vận chuyển
                  </li>
                </ul>
              </div>
              <div className="main-content">
                <h2 className="section-title">Thông tin thanh toán</h2>
                <div className="logged-in-customer-information">
                  <div className="logged-in-customer-information-avatar-wrapper">
                    <div className="logged-in-customer-information-avatar gravatar"></div>
                  </div>
                  {auth.use.firstName && (
                    <p className="logged-in-customer-information-paragraph">
                      {auth.user.firstName} {auth.user.lastName} (
                      {auth.user.email})
                      <br />
                      <button type="button" onClick={handleLogout}>
                        Đăng xuất
                      </button>
                    </p>
                  )}
                </div>

                <FloatingLabel
                  controlId="floatingInput"
                  label="Họ và tên"
                  className="mb-3"
                >
                  <Form.Control type="text" placeholder="Họ và tên" />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Số điện thoại"
                  className="mb-4"
                >
                  <Form.Control type="text" placeholder="Số điện thoại" />
                </FloatingLabel>

                <div className="shipping-form">
                  <div className="radio-wrapper content-box-now">
                    <label className="radio-label">
                      <div className="radio-input">
                        <input
                          type="radio"
                          id="customer_pick_at_location_false"
                          name="customer_pick_at_location"
                          className="input-radio"
                          value="delivery"
                          checked={shipping === "delivery"}
                          onChange={(e) => setShipping(e.target.value)}
                        />
                      </div>
                      <span className="radio-label-primary">Giao hàng</span>
                    </label>
                  </div>
                  {shipping === "delivery" && (
                    <div className="address-form content-box-now">
                      <FloatingLabel
                        controlId="floatingInputGrid"
                        label="Số nhà"
                        className="mb-3"
                      >
                        <Form.Control type="text" placeholder="Số nhà" />
                      </FloatingLabel>
                      <Row className="g-3">
                        <Col md>
                          <FloatingLabel
                            controlId="floatingInputGrid"
                            label="Phường/Xã"
                          >
                            <Form.Control type="text" placeholder="Phường/Xã" />
                          </FloatingLabel>
                        </Col>
                        <Col md>
                          <FloatingLabel
                            controlId="floatingInputGrid"
                            label="Quận/Huyện"
                          >
                            <Form.Control
                              type="text"
                              placeholder="Quận/Huyện"
                            />
                          </FloatingLabel>
                        </Col>
                        <Col md>
                          <FloatingLabel
                            controlId="floatingSelectGrid"
                            label="Thành Phố/Tỉnh"
                          >
                            <Form.Control
                              type="text"
                              placeholder="Thành Phố/Tỉnh"
                            />
                          </FloatingLabel>
                        </Col>
                      </Row>
                    </div>
                  )}

                  <div className="radio-wrapper content-box-now">
                    <label className="radio-label">
                      <div className="radio-input">
                        <input
                          type="radio"
                          id="customer_pick_at_location_false"
                          name="customer_pick_at_location"
                          className="input-radio"
                          value="at shop"
                          checked={shipping === "at shop"}
                          onChange={(e) => setShipping(e.target.value)}
                        />
                      </div>
                      <span className="radio-label-primary">
                        Nhận tại của hàng
                      </span>
                    </label>
                  </div>

                  {shipping === "at shop" && (
                    <div className="store-list content-box-now">
                      <span>Không tìm thấy thông tin cửa hàng</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-5">
            <div className="order-sidebar">
              <div className="product-list">
                <table className="product-table">
                  <tbody>
                    {cart.map((item, index) => (
                      <tr key={index}>
                        <td className="product-thumbnail">
                          <Image
                            width={70}
                            height={70}
                            src={item.variant[item.indexVariant].img}
                            alt="GIAO HÀNG TOÀN QUỐC"
                          />

                          <span className="badge rounded-pill product-quantity">
                            1
                          </span>
                        </td>
                        <td className="product-description">
                          <span>{item.title}</span>
                          <span>
                            {item.variant[item.indexVariant].title +
                              (item.indexSize !== -1
                                ? "- size: " + item.size[item.indexSize]
                                : "")}
                          </span>
                        </td>
                        <td className="product-price">
                          <span>
                            {(item.quantity * item.price)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            ₫
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className=" sale-code-input">
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Mã giảm giá"
                  className="sale-code"
                >
                  <Form.Control
                    type="text"
                    placeholder="Mã giảm giá"
                    style={{ height: "45px" }}
                  />
                </FloatingLabel>
                <button className="btn btn-outline-secondary" type="button">
                  Sử dụng
                </button>
              </div>

              <div className="total-price">
                <table className="total-line-table">
                  <tbody>
                    <tr className="total-line total-line-subtotal">
                      <td className="total-line-name">Tạm tính</td>
                      <td className="total-line-price">
                        <span className="order-summary-emphasis">
                          {subTotal
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          ₫
                        </span>
                      </td>
                    </tr>

                    <tr className="total-line total-line-shipping">
                      <td className="total-line-name">Phí ship</td>
                      <td className="total-line-price">
                        <span className="order-summary-emphasis">
                          {shippingPrice === 0 ? "—" : shippingPrice}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot className="total-line-table-footer">
                    <tr className="total-line">
                      <td className="total-line-name payment-due-label">
                        <span className="payment-due-label-total">
                          Tổng tiền
                        </span>
                      </td>
                      <td className="total-line-name payment-due">
                        <span className="payment-due-currency">VND</span>
                        <span className="payment-due-price">
                          {total
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          ₫
                        </span>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <div
                className=""
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <button className="btn-pay" onClick={() => router.push("/")}>
                  Đặt hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default CheckoutsPage;
