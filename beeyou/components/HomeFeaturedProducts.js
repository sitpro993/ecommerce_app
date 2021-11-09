import React from "react";
import Product from "./Product";
import Tabs from "./Tabs";
import Panel from "./Panel";
import Link from "next/link";

function HomeFeaturedProducts(props) {
  const product1 = {
    _id: {
      $oid: "61895e928b3104b83c9e47bc",
    },
    title: "Túi hoa",
    slug: "op-lung-animal-103",
    price: 120000,
    description: "Ốp lưng dẻo, tráng gương, uv in siêu sắc nét",
    variant: [
      {
        title: "iphone XS Max",
        img: "link ảnh",
      },
      {
        title: " iphone 7",
        img: "link ảnh",
      },
    ],
    size: ["X", "XL", "L", "S"],
    category: ["BeeCase", "Ốp lưng animal", "Ốp lưng nam"],
    checked: true,
    sold: 10,
  };
  const product2 = {
    _id: {
      $oid: "61895e928b3104b83c9e47bc",
    },
    title: "Ốp lưng Animal 103",
    slug: "op-lung-animal-103",
    price: 120000,
    description: "Ốp lưng dẻo, tráng gương, uv in siêu sắc nét",
    variant: [
      {
        title: "iphone XS Max",
        img: "link ảnh",
      },
      {
        title: " iphone 7",
        img: "link ảnh",
      },
    ],
    size: ["X", "XL", "L", "S"],
    category: ["BeeCase", "Ốp lưng animal", "Ốp lưng nam"],
    checked: true,
    sold: 10,
  };

  return (
    <section className="home-featured">
      <div className="wrapper">
        <div className="home-section-header">
          <h2>BeeYou</h2>
        </div>
        <Tabs>
          <Panel title="Sản phẩm nổi bật">
            <div className="home-featured-products">
              <div>
                <Product product={product1}></Product>
              </div>
              <div>
                <Product product={product1}></Product>
              </div>
              <div>
                <Product product={product1}></Product>
              </div>
              <div>
                <Product product={product1}></Product>
              </div>
              <div>
                <Product product={product1}></Product>
              </div>
              <div>
                <Product product={product1}></Product>
              </div>
              <div>
                <Product product={product1}></Product>
              </div>
              <div>
                <Product product={product1}></Product>
              </div>
            </div>
            <Link href="/collections/hot-products">
              <a className="btn btnViewMore">Xem tất cả sản phẩm</a>
            </Link>
          </Panel>
          <Panel title="Sản phẩm giá nóng">
            <div className="home-featured-products">
              <div>
                <Product product={product2}></Product>
              </div>
              <div>
                <Product product={product2}></Product>
              </div>
              <div>
                <Product product={product2}></Product>
              </div>
              <div>
                <Product product={product2}></Product>
              </div>
              <div>
                <Product product={product2}></Product>
              </div>
              <div>
                <Product product={product2}></Product>
              </div>
              <div>
                <Product product={product2}></Product>
              </div>
              <div>
                <Product product={product2}></Product>
              </div>
            </div>
            <Link href="/collections/onsale">
              <a className="btn btnViewMore">Xem tất cả sản phẩm</a>
            </Link>
          </Panel>
        </Tabs>
      </div>
    </section>
  );
}

export default HomeFeaturedProducts;
