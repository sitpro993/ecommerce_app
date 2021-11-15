import React, { useContext } from "react";
import Link from "next/link";
import { DataContext } from "../../store/GlobalState";
import { addToCart } from "../../store/Actions";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Product({ product }) {
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;

  if (product) {
    const link = `/products/${product.slug}`;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product, cart));
    dispatch({
      type: "NOTIFY",
      payload: { success: "Đã thêm vào giỏ hàng" },
    });
  };

  return product ? (
    <div className="product-item">
      <div className="product-img">
        <Link href={`/products/${product.slug}`}>
          <a className="img-resize">
            <LazyLoadImage
              effect="blur"
              width="100%"
              layout="intrinsic"
              src="/images/animal_06-1_b9e6808ddc2f4087bd00420a30458efe_large.png"
              alt={product.title}
            />
          </a>
        </Link>
        <div className="product-actions">
          <Link href={`/products/${product.slug}`}>
            <a className="btn-controls btnQuickView">
              <i className="fa fa-eye" aria-hidden="true"></i>
            </a>
          </Link>
          <button type="button" className="btn-controls btnBuyNow">
            Mua Ngay
          </button>
          <button
            type="button"
            className="btn-controls btnAddToCart"
            onClick={handleAddToCart}
          >
            <i className="fa fa-cart-plus" aria-hidden="true"></i>
          </button>
        </div>
        <div className="discount-tag">-7%</div>
      </div>
      <div className="product-title">
        <Link href={`/products/${product.slug}`}>
          <a>{product.title}</a>
        </Link>
      </div>
      <div className="product-price">
        <span className="current-price">
          {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}₫
        </span>
        {/* <span className="original-price">
          <s>149,000₫</s>
        </span> */}
      </div>
    </div>
  ) : null;
}

export default Product;
