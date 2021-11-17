import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import ParallaxScrolling from "../../components/HomeComponent/User/ParallaxScrolling";
import { getData } from "../../utils/fecthData";
import Tabs from "../../components/MyTabs/Tabs";
import Panel from "../../components/MyTabs/Panel";
import Layout from "../../components/Layout/UserLayout/Layout";

export const getServerSideProps = async ({ params: { slug } }) => {
  const res = await getData(`product/${slug}`);
  return {
    props: { product: res.product },
  };
};

export default function ProductDetail() {
  const [img, setImg] = useState(0);

  const product = {
    _id: {
      $oid: "61895e928b3104b83c9e47bc",
    },
    title: "Ốp lưng Animal 103",
    slug: "op-lung-animal-103",
    price: 120000,
    description: "Ốp lưng dẻo, tráng gương, uv in siêu sắc nét",
    variant: [
      {
        id: 0,
        title: "iphone XS Max",
        img: "/images/animal_06-1_b9e6808ddc2f4087bd00420a30458efe_large.png",
      },
      {
        id: 1,
        title: " iphone 7",
        img: "/images/_mg_1268-1_ce1143f3626545a1a4e54d716967ea58_large.png",
      },
    ],
    size: ["X", "XL", "L", "S"],
    category: ["BeeCase", "Ốp lưng animal", "Ốp lưng nam"],
    checked: true,
    sold: 10,
  };
  const [value, setValue] = useState(1);
  const handleIncrease = () => {
    let tmp = value + 1;
    setValue(tmp);
  };
  const handleDecrease = () => {
    let tmp = value - 1;
    setValue(tmp);
  };

  return (
    <>
      <Head>
        <title>{product.title + " - BeeYou"}</title>
        <meta name="keywords" content="BeeYou"></meta>
      </Head>
      <ParallaxScrolling />
      <section className="wrapper">
        <div className="row product-detail">
          <div className="col-5">
            <div className="details-img-product">
              <ul className="small-image-product">
                {product.variant.map((item, index) => (
                  <li key={item.id} className="details-thumbnail-item">
                    <Image
                      width={78}
                      height={78}
                      src={item.img}
                      alt={item.title}
                      onClick={() => setImg(index)}
                    />
                  </li>
                ))}
              </ul>
              <div className="details-main-img">
                <Image
                  width={374}
                  height={374}
                  src={product.variant[img].img}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="box-detail">
              <h2>{product.title}</h2>
              <p>
                <span>
                  {product.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  ₫
                </span>
                <s>149,000₫</s>
              </p>
              <p className="infor-details">{product.description}</p>
              <div className="detail-title-infor">
                <p>Tiêu đề</p>
                <select
                  className="select-details"
                  value={img}
                  onChange={(e) => {
                    setImg(e.target.value);
                  }}
                >
                  {product.variant.map((item, index) => (
                    <option key={index} value={index}>
                      {item.title}
                    </option>
                  ))}
                </select>
              </div>
              {product.size.length > 0 ? (
                <div className="detail-title-infor">
                  <p>Size</p>
                  <select className="select-details">
                    {product.size.map((item, index) => (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              ) : null}

              <div className="detail-title-infor">
                <p>Số lượng</p>
                <div className="number-product">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => handleDecrease()}
                    disabled={value === 1 ? true : false}
                  >
                    -
                  </button>
                  <span>{value}</span>
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => handleIncrease()}
                  >
                    +
                  </button>
                </div>
              </div>
              <button className="details-cart">
                <span>Mua ngay</span>
              </button>
            </div>
          </div>
          <div className="col-3">
            <div className="detail-infor-ship">
              <div className="infor-ship-all">
                <p>SẢN PHẨM NÀY SẼ TỚI TAY BẠN CHỈ TRONG 2-4 NGÀY LÀM VIỆC</p>
                <ul className="border-ship">
                  <li className="infor-ship">
                    <Image
                      width={40}
                      height={40}
                      layout="fixed"
                      src="https://res.cloudinary.com/beeyou/image/upload/v1636945718/logo/policy_icon_1_xlnjtq.png"
                      alt=""
                    />
                    <div className="infor-ship-content">
                      <p>GIAO HÀNG TOÀN QUỐC</p>
                      <p>Có hình thức Giao hàng khi thanh toán (COD)</p>
                    </div>
                  </li>
                  <li className="infor-ship">
                    <Image
                      width={40}
                      height={40}
                      layout="fixed"
                      src="https://res.cloudinary.com/beeyou/image/upload/v1636945720/logo/policy_icon_2_cxcdcl.png"
                      alt=""
                    />
                    <div className="infor-ship-content">
                      <p>CHẤT LƯỢNG ĐẢM BẢO</p>
                      <p>Chất liệu cao cấp, mực in thân thiện môi trường</p>
                    </div>
                  </li>
                  <li className="infor-ship">
                    <Image
                      width={40}
                      height={40}
                      layout="fixed"
                      src="https://res.cloudinary.com/beeyou/image/upload/v1636945722/logo/policy_icon_3_iiujly.png"
                      alt=""
                    />
                    <div className="infor-ship-content">
                      <p>ĐỔI TRẢ DỄ DÀNG</p>
                      <p>Trả lại hàng nếu không ưng ý</p>
                    </div>
                  </li>
                  <li className="infor-ship">
                    <Image
                      width={40}
                      height={40}
                      layout="fixed"
                      src="https://res.cloudinary.com/beeyou/image/upload/v1636945725/logo/policy_icon_4_su5xtn.webp"
                      alt=""
                    />
                    <div className="infor-ship-content">
                      <p>HOTLINE HỖ TRỢ</p>
                      <p>
                        Gọi ngay{" "}
                        <a href="tel:0867064901">
                          <b>0867 064 901</b>
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="wrapper paddingTop30"
        style={{ paddingBottom: "30px" }}
      >
        <div className="row">
          <div className="col-9">
            <Tabs
              class="detail-tab-panel"
              classSelected="detail-tab-panel-selected"
            >
              <Panel title="Mô tả sản phẩm"></Panel>
              <Panel title="Bình luận"></Panel>
            </Tabs>
          </div>
          <div className="col-3">
            <Image
              width={273}
              height={665}
              layout="fixed"
              src="https://res.cloudinary.com/beeyou/image/upload/v1636945662/banner/banner_doc_f2_vqpv2v.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
