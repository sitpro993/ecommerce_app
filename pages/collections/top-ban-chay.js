import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Accordion, Col, Form, Row } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ParallaxScrolling from "../../components/HomeComponent/ParallaxScrolling";
import { getData } from "../../utils/fecthData";
import ProductList from "../../components/ProductComponent/ProductList";

function hotProduct(props) {
  return props.collection ? (
    <>
      <Head>
        <title>Top bán chạy - BeeYou</title>
        <meta name="keywords" content="BeeYou"></meta>
      </Head>
      <ParallaxScrolling></ParallaxScrolling>
      <section className="">
        <div className="wrapper">
          <Row>
            <Col xs={3}>
              <div className="sidebar-container">
                <Accordion defaultActiveKey="1" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="sidebar-title-2">
                      Sản phẩm nổi bật
                    </Accordion.Header>
                    <Accordion.Body className="card-product">
                      <Link href="/products/op-lung-animal-103">
                        <a className="sidebar-product-item">
                          <Image
                            width={65}
                            height={65}
                            src="/images/animal_06-1_b9e6808ddc2f4087bd00420a30458efe_large.png"
                            alt="BeeYou - Thời trang Chất"
                          />
                          <div className="sidebar-product-content">
                            <p>Noi dung</p>
                            <span className="sidebar-product-price">
                              129.000d
                            </span>
                          </div>
                        </a>
                      </Link>
                      <Link href="/products/op-lung-animal-103">
                        <a className="sidebar-product-item">
                          <Image
                            width={65}
                            height={65}
                            src="/images/animal_06-1_b9e6808ddc2f4087bd00420a30458efe_large.png"
                            alt="BeeYou - Thời trang Chất"
                          />
                          <div className="sidebar-product-content">
                            <p>Noi dung</p>
                            <span className="sidebar-product-price">
                              129.000d
                            </span>
                          </div>
                        </a>
                      </Link>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Col>
            <Col>
              <div className="collection-header">
                <h1>{props.collection.title}</h1>
                <p>
                  Hơn 10.000 mẫu thiết kế từ hàng trăm Designer toàn quốc, với
                  chất liệu bền đẹp, tốt nhất trên thị trường, hình ảnh in siêu
                  sắc nét, không bong tróc, không trầy xước, không phai màu.
                </p>
                <LazyLoadImage
                  effect="blur"
                  width="100%"
                  src="https://res.cloudinary.com/beeyou/image/upload/v1636945692/banner/marble-banner_1024x1024_feolzg.webp"
                  alt="BeeYou - Thời trang Chất"
                />
              </div>
              <div className="collection-products paddingTop30">
                <ProductList products={props.collection}></ProductList>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  ) : null;
}
export default hotProduct;

export const getServerSideProps = async () => {
  const res = await getData(`products/hot?limit=12`);

  return {
    props: { collection: res },
  };
};
