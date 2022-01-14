import React from "react";

export default function MyOrderItemBody({ order }) {
  if (order) {
    const address = `${order.address.apartmentNumber}, ${order.address.ward}, ${order.address.district}, ${order.address.province}`;
    return (
      <div>
        <p>
          Địa chỉ:{address}
          {}
        </p>
        <p>
          Trạng thái thanh toán:{" "}
          {order.isPaid ? "Đã thanh toán" : "Chưa thanh toán"}
        </p>
        <p>
          Trạng thái giao hàng:{" "}
          {order.isDelivered ? "Đã giao hàng" : "Chưa giao hàng"}
        </p>
      </div>
    );
  } else {
    return null;
  }
}
