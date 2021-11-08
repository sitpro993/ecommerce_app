import React from "react";
import Product from "./Product";
import Tabs from "./Tabs";
import Panel from "./Panel";
import Link from "next/link";

function HomeFeaturedProducts(props) {
  const img1 = "/images/animal_06-1_b9e6808ddc2f4087bd00420a30458efe_large.png";
  const img2 = "/images/_mg_1268-1_ce1143f3626545a1a4e54d716967ea58_large.png";
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
                <Product img={img1}></Product>
              </div>
              <div>
                <Product img={img1}></Product>
              </div>
              <div>
                <Product img={img1}></Product>
              </div>
              <div>
                <Product img={img1}></Product>
              </div>
              <div>
                <Product img={img1}></Product>
              </div>
              <div>
                <Product img={img1}></Product>
              </div>
              <div>
                <Product img={img1}></Product>
              </div>
              <div>
                <Product img={img1}></Product>
              </div>
            </div>
            <Link href="/collections/hot-products">
              <a className="btn btnViewMore">Xem tất cả sản phẩm</a>
            </Link>
          </Panel>
          <Panel title="Sản phẩm giá nóng">
            <div className="home-featured-products">
              <div>
                <Product img={img2}></Product>
              </div>
              <div>
                <Product img={img2}></Product>
              </div>
              <div>
                <Product img={img2}></Product>
              </div>
              <div>
                <Product img={img2}></Product>
              </div>
              <div>
                <Product img={img2}></Product>
              </div>
              <div>
                <Product img={img2}></Product>
              </div>
              <div>
                <Product img={img2}></Product>
              </div>
              <div>
                <Product img={img2}></Product>
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
