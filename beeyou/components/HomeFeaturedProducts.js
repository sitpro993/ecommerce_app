import React from "react";
import Product from "./Product";
import Tabs from "./Tabs";
import Panel from "./Panel";
import Link from "next/link";
import ProductList from "./ProductList";

function HomeFeaturedProducts(props) {
  const product1 = [
    {
      _id: "61895e928b3104b83c9e47ba",

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
    },
  ];

  return (
    <section className="home-featured paddingTop30">
      <div className="wrapper">
        <div className="home-section-header">
          <h2>BeeYou</h2>
        </div>
        <Tabs>
          <Panel title="Sản phẩm nổi bật">
            <ProductList products={product1}></ProductList>

            <Link href="/collections/hot-products">
              <a className="btnViewMore">Xem tất cả sản phẩm</a>
            </Link>
          </Panel>
          <Panel title="Sản phẩm giá nóng">
            <ProductList products={product1}></ProductList>
            <Link href="/collections/onsale">
              <a className="btnViewMore">Xem tất cả sản phẩm</a>
            </Link>
          </Panel>
        </Tabs>
      </div>
    </section>
  );
}

export default HomeFeaturedProducts;
