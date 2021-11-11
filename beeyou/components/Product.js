import React from "react";
import Image from "next/image";
import Link from "next/link";

function Product(props) {
  if (props.product) {
    const link = `/products/${props.product.slug}`;
  }

  return props.product ? (
    <div className="product-item">
      <div className="product-img">
        <Link href={`/products/${props.product.slug}`}>
          <a className="img-resize">
            <Image
              width={300}
              height={300}
              layout="intrinsic"
              src="/images/animal_06-1_b9e6808ddc2f4087bd00420a30458efe_large.png"
              alt={props.product.title}
            ></Image>
          </a>
        </Link>
        <div className="product-actions">
          <Link href={`/products/${props.product.slug}`}>
            <a className="btn-controls btnQuickView">
              <i className="fa fa-eye" aria-hidden="true"></i>
            </a>
          </Link>
          <button type="button" className="btn-controls btnBuyNow">
            Mua Ngay
          </button>
          <button type="button" className="btn-controls btnAddToCart">
            <i className="fa fa-cart-plus" aria-hidden="true"></i>
          </button>
        </div>
        <div className="discount-tag">-7%</div>
      </div>
      <div className="product-title">
        <Link href={`/products/${props.product.slug}`}>
          <a>{props.product.title}</a>
        </Link>
      </div>
      <div className="product-price">
        <span className="current-price">{props.product.price}₫</span>
        {/* <span className="original-price">
          <s>149,000₫</s>
        </span> */}
      </div>
    </div>
  ) : null;
}

export default Product;
