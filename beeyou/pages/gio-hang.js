import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { DataContext } from "../store/GlobalState";
import { Table } from "react-bootstrap";
import CartItem from "../components/CartItem";
import ParallaxScrolling from "../components/ParallaxScrolling";

export default function CartPage() {
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.price * item.quantity;
      }, 0);

      setTotal(res);
    };

    getTotal();
  }, [cart]);
  return (
    <>
      <Head>
        <title>Giỏ Hàng - BeeYou</title>
        <meta name="keywords" content="BeeYou"></meta>
      </Head>
      <ParallaxScrolling />
      <section className="paddingTop30">
        <div className="wrapper">
          <div className="page-header">
            <h1>Giỏ hàng</h1>
          </div>
          <hr></hr>
          {cart.length > 0 ? (
            <>
              <Table striped hover>
                <thead>
                  <tr>
                    <th colSpan="1">Image</th>
                    <th colSpan="4">Sản phẩm</th>
                    <th colSpan="1">Đơn giá</th>
                    <th colSpan="1">Số lượng</th>
                    <th colSpan="1">Thành tiền</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <CartItem
                      key={item._id}
                      item={item}
                      dispatch={dispatch}
                      cart={cart}
                    ></CartItem>
                  ))}
                </tbody>
              </Table>
              <hr></hr>
              <div className="row">
                <div className="col-8 cart-note">
                  <label htmlFor="CartSpecialInstructions">
                    Chú thích cho chủ cửa hàng
                  </label>
                  <textarea name="note" id="CartSpecialInstructions"></textarea>
                </div>
                <div className="col-4 total-price">
                  <p>
                    <span>Tổng tiền</span>
                    <span>
                      {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}đ
                    </span>
                  </p>
                </div>
              </div>
            </>
          ) : (
            <p>
              Không có sản phẩm.
              <Link href="/">
                <a>Đi đến trang chủ</a>
              </Link>
            </p>
          )}
        </div>
      </section>
    </>
  );
}
