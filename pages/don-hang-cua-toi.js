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

  return (
    <>
      <Head>
        <title>Đơn hàng của tôi - BeeYou</title>
        <meta name="keywords" content="BeeYou"></meta>
      </Head>
      <ParallaxScrolling></ParallaxScrolling>

      <section className="wrapper" style={{ marginBottom: "30px" }}>
        <Accordion>
          {orders.length > 0 ? (
            orders.map((order, index) => (
              <Accordion.Item eventKey={index} key={index}>
                <Accordion.Header>
                  <MyOrderItemHeader order={order} />
                </Accordion.Header>
                <Accordion.Body>
                  {/* <MyOrderItemBody order={order} /> */}
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
