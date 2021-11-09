import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import CollectionsSlider from "../components/CollectionsSlider";
import HomeFeaturedProducts from "../components/HomeFeaturedProducts";
import Accordion from "react-bootstrap/Accordion";

import { useEffect, useState } from "react";

import { getData } from "../utils/fecthData";

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>BeeYou - Thời trang chất</title>
        <meta name="keywords" content="BeeYou"></meta>
      </Head>
      <>
        <section className="thumbnail" style={{ display: "block" }}>
          <Image
            width={1400}
            height={500}
            layout="responsive"
            src="/images/slideshow_1.png"
            alt="BeeYou Collection"
          />
        </section>

        <section className="home-collection">
          <div className="wrapper">
            <div className="home-section-header">
              <h2>Bộ sưu tập</h2>
            </div>
            <div className="home-collection-thumbnail">
              <CollectionsSlider></CollectionsSlider>
            </div>
          </div>
        </section>

        <section className="home-policy">
          <div className="wrapper">
            <div className="policy-grid">
              <div className="policy-item">
                <div className="policy-icon">
                  <Image
                    width={64}
                    height={64}
                    src="/images/policy_icon_1.png"
                    alt="GIAO HÀNG TOÀN QUỐC"
                  />
                </div>
                <div className="policy-title">GIAO HÀNG TOÀN QUỐC</div>
                <div className="policy-desc">
                  Có hình thức Giao hàng khi thanh toán (COD)
                </div>
              </div>

              <div className="policy-item">
                <div className="policy-icon">
                  <Image
                    width={64}
                    height={64}
                    src="/images/policy_icon_2.png"
                    alt="CHẤT LƯỢNG ĐẢM BẢO"
                  />
                </div>
                <div className="policy-title">CHẤT LƯỢNG ĐẢM BẢO</div>
                <div className="policy-desc">
                  Chất liệu cao cấp, mực in thân thiện môi trường
                </div>
              </div>

              <div className="policy-item">
                <div className="policy-icon">
                  <Image
                    width={64}
                    height={64}
                    src="/images/policy_icon_3.png"
                    alt="ĐỔI TRẢ DỄ DÀNG"
                  />
                </div>
                <div className="policy-title">ĐỔI TRẢ DỄ DÀNG</div>
                <div className="policy-desc">Trả lại hàng nếu không ưng ý</div>
              </div>
            </div>
          </div>
        </section>

        <section className="home-banner">
          <div className="wrapper">
            <div className="banner-grid">
              <div className="banner-item">
                <Link href="/collections/all">
                  <a>
                    <Image
                      width={280}
                      height={280}
                      src="/images/banner_img_1.png"
                      alt="BeeYou - Thời trang Chất"
                    />
                  </a>
                </Link>
              </div>
              <div className="banner-item">
                <Link href="/collections/all">
                  <a>
                    <Image
                      width={280}
                      height={280}
                      src="/images/banner_img_3.png"
                      alt="BeeYou - Thời trang Chất"
                    />
                  </a>
                </Link>
              </div>
              <div className="banner-item">
                <Link href="/collections/all">
                  <a>
                    <Image
                      width={720}
                      height={375}
                      src="/images/banner_img_2.png"
                      alt="BeeYou - Thời trang Chất"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <HomeFeaturedProducts></HomeFeaturedProducts>
      </>
    </>
  );
}

// export async function getServerSideProps() {
//   const res = await getData("collection");
//   // server side rendering
//   return {
//     props: { products: res.categories }, // will be passed to the page component as props
//   };
// }
