import React from "react";
import Image from "next/image";

function Product(props) {
  return (
    <div className="product-item">
      <div className="product-img">
        <a href="/products/tui-totebag-xuongrong" className="img-resize">
          <Image
            width={300}
            height={300}
            layout="intrinsic"
            src={props.img}
            alt="Túi Totebag Xuongrong"
          ></Image>
        </a>
        <div className="product-actions">
          <a
            className="btn-controls btnQuickView"
            href="/products/tui-totebag-xuongrong"
          >
            <i className="fa fa-eye" aria-hidden="true"></i>
          </a>
          <button
            type="button"
            className="btn-controls btnBuyNow"
            data-handle="/products/tui-totebag-xuongrong"
          >
            Mua Ngay
          </button>
          <button
            type="button"
            className="btn-controls btnAddToCart"
            data-id="1044064210"
          >
            <i className="fa fa-cart-plus" aria-hidden="true"></i>
          </button>
        </div>
        <div className="discount-tag">-7%</div>
      </div>
      <div className="product-title">
        <a href="/products/tui-totebag-xuongrong">Túi Totebag Xuongrong</a>
      </div>
      <div className="product-price">
        <span className="current-price">129,000₫</span>
        <span className="original-price">
          <s>149,000₫</s>
        </span>
      </div>
    </div>
  );
}

export default Product;
