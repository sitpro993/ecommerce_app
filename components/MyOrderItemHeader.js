import React from "react";
import moment from 'moment';


export default function MyOrderItemHeader({ order, index }) {
  const convertDateShip = (createdDate) => {
    return moment(createdDate).format('DD/MM/YYYY HH:mm:ss');
  }
  return (
    <div className="row information-order" style={{ width: "100%" }}>
      <div className="col-1">{index}</div>
      <div className="col-2 col-status">{order.isPaid && order.isDelivere ? <span>Hoàn thành</span> : <span>Đang giao dịch</span>}</div>
      <div className="col-1">{order.isPaid ? <i class="fas fa-circle"></i> : <i class="far fa-circle"></i>}</div>
      <div className="col-1">{order.isDelivered ? <i class="fas fa-circle"></i> : <i class="far fa-circle"></i>}</div>
      <div className="col-2">{order.totalPrice} VND</div>
      <div className="col-2">{convertDateShip(order.createdAt)}</div>
      <div className="col-2">{convertDateShip(order.updatedAt)}</div>
    </div>
  );
}
