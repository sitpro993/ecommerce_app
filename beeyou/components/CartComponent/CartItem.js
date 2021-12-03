import React from "react";
import Image from "next/image";
import Link from "next/link";
import { decrease, deleteFromCart, increase } from "../../store/Actions";

export default function CartItem({ item, dispatch, cart }) {
  const handleDeleteFromCart = () => {
    dispatch({
      type: "NOTIFY",
      payload: { success: "Đã xóa khỏi giỏ hàng" },
    });
    dispatch(deleteFromCart(cart, item._id, item.indexVariant, item.indexSize));
  };

  return (
    <tr>
      <td colSpan="1" className="align-middle">
        <Link href={`/products/${item.slug}`}>
          <a>
            <Image
              width={64}
              height={64}
              src={item.variant[item.indexVariant].img}
              alt="GIAO HÀNG TOÀN QUỐC"
            />
          </a>
        </Link>
      </td>
      <td colSpan="1" className="align-middle ">
        <Link href={`/products/${item.slug}`}>
          <a>
            <strong style={{ color: "#333", fontSize: "16px" }}>
              {item.title +
                "-" +
                item.variant[item.indexVariant].title +
                (item.indexSize !== -1 ? "-" + item.size[item.indexSize] : "")}
            </strong>
          </a>
        </Link>
      </td>
      <td colSpan="1" className="align-middle">
        {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </td>
      <td className="align-middle" colSpan="1">
        <div className="change-qty">
          <button
            className="btn btn-outline-secondary"
            onClick={() =>
              dispatch(
                decrease(cart, item._id, item.indexVariant, item.indexSize)
              )
            }
            disabled={item.quantity === 1 ? true : false}
          >
            -
          </button>

          <span className="px-3">{item.quantity}</span>

          <button
            className="btn btn-outline-secondary"
            onClick={() =>
              dispatch(
                increase(cart, item._id, item.indexVariant, item.indexSize)
              )
            }
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
