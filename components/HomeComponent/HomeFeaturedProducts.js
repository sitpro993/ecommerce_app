import React from "react";
import Tabs from "../MyTabs/Tabs";
import Panel from "../MyTabs/Panel";
import Link from "next/link";
import ProductList from "../ProductComponent/ProductList";

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
          img: "https://res.cloudinary.com/beeyou/image/upload/v1636734594/beecase/%E1%BB%90P%20L%C6%AFNG%20ANIMAL/upload_e5eb4f9b789d4418a02909ba3b87b16c_large_wardtj.jpg",
        },
        {
          title: " iphone 7",
          img: "https://res.cloudinary.com/beeyou/image/upload/v1636734594/beecase/%E1%BB%90P%20L%C6%AFNG%20ANIMAL/upload_46e17cac7eaf49de9dc13e73af999dce_large_q9xvjx.jpg",
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
        <Tabs
          class="featured-tab-panel"
          classSelected="featured-tab-panel-selected"
        >
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
