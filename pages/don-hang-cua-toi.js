import React, { useContext, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { DataContext } from "../store/GlobalState";
import ParallaxScrolling from "../components/HomeComponent/ParallaxScrolling";
import { Accordion } from "react-bootstrap";
import MyOrderItemHeader from "../components/MyOrderItemHeader";
import MyOrderItemBody from "../components/MyOrderItemBody";
import { getData } from "../utils/fecthData";
import { useState } from "react";

export default function MyOrders() {
  const { state, dispatch } = useContext(DataContext);
  const { auth, cart } = state;
  const [orders, setOrders] = useState([{}]);

  const router = useRouter();
  useEffect(() => {
    if (!auth.token) {
      router.push("/account/signin");
    }
  }, [auth.token, router]);

  useEffect(() => {
    const getOrders = async () => {
      const data = await getData("users/orders", auth.token);
      setOrders(data);

    };
    if (auth.token) {
      getOrders();
    }
  }, [auth.token]);
  console.log(orders);
  return (
    <>
      <Head>
        <title>Đơn hàng của tôi - BeeYou</title>
        <meta name="keywords" content="BeeYou"></meta>
      </Head>
      <ParallaxScrolling></ParallaxScrolling>

      <section className="wrapper" style={{ marginBottom: "50px" }}>
        <h3 className="text-center mt-5 mb-5">Thông tin đơn hàng của tôi</h3>
        <Accordion>
          <Accordion.Item>
            <div className="row col-information-order">
              <div className="col-1">Đơn hàng</div>
              <div className="col-2">Trạng thái</div>
              <div className="col-1 col-left">Thanh toán</div>
              <div className="col-1 col-left">Giao hàng</div>
              <div className="col-2 col-left">Tổng thanh toán</div>
              <div className="col-2 col-left">Ngày tạo đơn hàng</div>
              <div className="col-2 col-left">Ngày cập nhật cuối</div>
            </div>
          </Accordion.Item>
          {orders.length > 0 ? (
            orders.map((order, index) => (
              <Accordion.Item eventKey={index} key={index}>
                <Accordion.Header>
                  <MyOrderItemHeader order={order} index={index + 1} />
                </Accordion.Header>
                <Accordion.Body>
                  <MyOrderItemBody order={order} />
                </Accordion.Body>
              </Accordion.Item>
            ))
          ) : (
            <p>Tài khoản bạn chưa có đơn hàng nào. Đi mua hàng </p>
          )}
        </Accordion>
      </section>
    </>
  );
}
3;
