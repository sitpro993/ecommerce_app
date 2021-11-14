import React from "react";
import Head from "next/head";
import Image from "next/image";
import { getData } from "../../utils/fecthData";
import ProductList from "../../components/ProductList";
import { Accordion, Col, Form, Row } from "react-bootstrap";
import ParallaxScrolling from "../../components/ParallaxScrolling";

function CollectionPage(props) {
  return props.collection ? (
    <>
      <Head>
        <title>{props.collection.title + " - BeeYou"}</title>
        <meta name="keywords" content="BeeYou"></meta>
      </Head>
      <ParallaxScrolling></ParallaxScrolling>
      <section className="paddingTop30">
        <div className="wrapper">
          <Row>
            <Col xs={3}>
              <div className="sidebar-container">
                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
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
