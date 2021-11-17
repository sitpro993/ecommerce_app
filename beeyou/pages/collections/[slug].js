import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getData } from "../../utils/fecthData";
import ProductList from "../../components/ProductComponent/ProductList";
import { Accordion, Col, Form, Pagination, Row } from "react-bootstrap";
import ParallaxScrolling from "../../components/HomeComponent/User/ParallaxScrolling";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Layout from "../../components/Layout/UserLayout/Layout";
import ReactPaginate from "react-paginate";
import Router from "next/router";

function CollectionPage(props) {
  const [isLoading, setLoading] = useState(false); //State for the loading indicator
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  /*
    			Posts fetching happens after page navigation,
    			so we need to switch Loading state on Router events.
    		*/
  useEffect(() => {
    //After the component is mounted set router event handlers
    Router.events.on("routeChangeStart", startLoading);
    Router.events.on("routeChangeComplete", stopLoading);

    return () => {
      Router.events.off("routeChangeStart", startLoading);
      Router.events.off("routeChangeComplete", stopLoading);
    };
  }, []);

  // const pagginationHandler = (page) => {
  //   const currentPath = props.router.pathname;
  //   const currentQuery = props.router.query;
  //   currentQuery.page = page.selected + 1;

  //   props.router.push({
  //     pathname: currentPath,
  //     query: currentQuery,
  //   });
  // };

  return props.collection ? (
    <>
      <Head>
        <title>{props.collection.title + " - BeeYou"}</title>
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

              {/* <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                activeClassName={"active"}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                initialPage={props.currentPage - 1}
                pageCount={props.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={pagginationHandler}
              /> */}
            </Col>
          </Row>
        </div>
      </section>
    </>
  ) : null;
}

CollectionPage.getInitialProps = async ({ query }) => {
  const page = query.page;
  const limit = 12;
  const res = await getData(
    `collection/${query.slug}?page=${page}&limit=${limit}`
  );
  return {
    collection: res.category,
    page: res.page,
    pageCount: Math.ceil(res.category.totalProduct / limit),
  };
};
export default CollectionPage;

CollectionPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
