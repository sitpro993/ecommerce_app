import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import CollectionsSlider from "../components/CollectionsSlider";
import HomeFeaturedProducts from "../components/HomeFeaturedProducts";
import { Col, Row } from "react-bootstrap";

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

        <section className="home-collection paddingTop30">
          <div className="wrapper">
            <div className="home-section-header">
              <h2>Bộ sưu tập</h2>
            </div>
            <div className="home-collection-thumbnail">
              <CollectionsSlider></CollectionsSlider>
            </div>
          </div>
        </section>

        <section className="home-policy paddingTop30">
          <div className="wrapper">
            <Row md={3} xs={1}>
              <Col>
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
              </Col>
              <Col>
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
              </Col>
              <Col>
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
                  <div className="policy-desc">
                    Trả lại hàng nếu không ưng ý
                  </div>
                </div>
              </Col>
            </Row>
            <div className="policy-grid "></div>
          </div>
        </section>

        <section className="home-banner paddingTop30">
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
