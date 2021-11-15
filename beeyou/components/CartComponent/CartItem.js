import React from "react";
import Image from "next/image";
import { decrease, deleteFromCart, increase } from "../../store/Actions";

export default function CartItem({ item, dispatch, cart }) {
  const handleDeleteFromCart = () => {
    dispatch({
      type: "NOTIFY",
      payload: { success: "Đã xóa khỏi giỏ hàng" },
    });
    dispatch(deleteFromCart(cart, item._id));
  };

  return (
    <tr>
      <td colSpan="1" className="align-middle">
        <Image
          width={64}
          height={64}
          src="/images/_mg_1268-1_ce1143f3626545a1a4e54d716967ea58_large.png"
          alt="GIAO HÀNG TOÀN QUỐC"
        />
      </td>
      <td colSpan="4" className="align-middle">
        <strong>{item.title}</strong>
      </td>
      <td colSpan="1" className="align-middle">
        {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </td>
      <td className="align-middle" colSpan="1">
        <div className="change-qty">
          <button
            className="btn btn-outline-secondary"
            onClick={() => dispatch(decrease(cart, item._id))}
            disabled={item.quantity === 1 ? true : false}
          >
            -
          </button>

          <span className="px-3">{item.quantity}</span>

          <button
            className="btn btn-outline-secondary"
            onClick={() => dispatch(increase(cart, item._id))}
          >
            +
          </button>
        </div>
      </td>
      <td colSpan="1" className="align-middle">
        {(item.quantity * item.price)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </td>
      <td className="align-middle">
        <i
          className="far fa-trash-alt text-danger"
          aria-hidden="true"
          style={{ fontSize: "18px", cursor: "pointer" }}
          onClick={handleDeleteFromCart}
        ></i>
      </td>
    </tr>
  );
}
