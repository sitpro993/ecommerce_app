import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link"
import { getData } from "../../utils/fecthData";
import ProductList from "../../components/ProductList";
import { Accordion, Col, Form, Row } from "react-bootstrap";

function CollectionPage(props) {
  return props.collection ? (
    <>
      <Head>
        <title>{props.collection.title + " - BeeYou"}</title>
        <meta name="keywords" content="BeeYou"></meta>
      </Head>
      <section className="paddingTop30">
        <div className="wrapper">
          <Row>
            <Col xs={3}>
              <div className="sidebar-container">
                <Accordion defaultActiveKey="0" flush>
                  
                  <Accordion.Item eventKey="1">
                    <Accordion.Header className="sidebar-title-2">Sản phẩm nổi bật</Accordion.Header>
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
                            <span className="sidebar-product-price">129.000d</span>
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
                            <span className="sidebar-product-price">129.000d</span>
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
                <Image
                  width={1024}
                  height={205}
                  src="/images/marble-banner_1024x1024.png"
                  alt="BeeYou - Thời trang Chất"
                />
              </div>
              <div className="collection-products paddingTop30">
                <Form.Group
                  controlId="formGridState"
                  className="collection-filter"
                >
                  <Form.Label>Sắp xếp</Form.Label>
                  <Form.Select defaultValue="title-ascending">
                    <option value="best-selling">Sản phẩm bán chạy</option>
                    <option value="title-ascending">
                      Theo bảng chữ cái từ A-Z
                    </option>
                    <option value="title-descending">
                      Theo bảng chữ cái từ Z-A
                    </option>
                    <option value="price-ascending">Giá từ thấp tới cao</option>
                    <option value="price-descending">
                      Giá từ cao tới thấp
                    </option>{" "}
                    <option value="created-descending">Mới nhất</option>
                    <option value="created-ascending">Cũ nhất</option>
                  </Form.Select>
                </Form.Group>

                <ProductList products={props.collection.product}></ProductList>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  ) : null;
}

CollectionPage.getInitialProps = async (context) => {
  const res = await getData(`collection/${context.query.slug}`);
  return {
    collection: res.category,
  };
};
export default CollectionPage;
