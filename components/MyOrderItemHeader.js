import React from "react";

export default function MyOrderItemHeader({ order }) {
  return (
    <div className="row" style={{ width: "100%" }}>
      <div className="col-3">{order._id}</div>
      <div className="col-3">{order.totalPrice}</div>
      <div className="col-3">{order.createdAt}</div>
    </div>
  );
}
