import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { getData } from "../../utils/fecthData";





export const getServerSideProps = async ({ params: { slug } }) => {
  const res = await getData(`product/${slug}`);
  return {
    props: { product: res.product }, // will be passed to the page component as props
  };
};

export default function ProductDetail() {

  const [img, setImg] = useState(0);


  const product = {
    _id: {
      $oid: "61895e928b3104b83c9e47bc"
    },
    title: "Ốp lưng Animal 103",
    slug: "op-lung-animal-103",
    price: 120000,
    description: "Ốp lưng dẻo, tráng gương, uv in siêu sắc nét",
    variant: [
      {
        id: 0,
        title: "iphone XS Max",
        img: "/images/animal_06-1_b9e6808ddc2f4087bd00420a30458efe_large.png"
      },
      {
        id: 1,
        title: " iphone 7",
        img: "/images/_mg_1268-1_ce1143f3626545a1a4e54d716967ea58_large.png"
      }
    ],
    size: ["X", "XL", "L", "S"],
    category: ["BeeCase", "Ốp lưng animal", "Ốp lưng nam"],
    checked: true,
    sold: 10
  }
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
      <div className="app-detail">
        <div className="details-product-single">
          <div className="details-img-product">
            <ul className="small-image-product">
              {
                product.variant.map((item, index) => (
                  <li key={item.id} className="details-thumbnail-item">
                    <Image
                      width={86}
                      height={86}
                      src={item.img}
                      alt={item.title}
                    />
                  </li>
                ))
              }
            </ul>
            <Image
              width={374}
              height={374}
              src="/images/_mg_1268-1_ce1143f3626545a1a4e54d716967ea58_large.png"
              alt=""
            />
          </div>

          <div className="box-detail">
            <div className="row">
              <h2>{product.title}</h2>
              <span>{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}đ</span>
              <p className="infor-details">Túi vải đeo chéo thời trang, chất vải canvas mềm mịn, không xù nhão; mẫu mã cập nhật xu hướng thị trường mới nhất. Bee đảm bảo chất lượng túi...</p>
            </div>
            <div className="detail-title-infor">
              <p>Tiêu đề</p>
              <select className="select-details">
                <option>Túi trắng</option>
                <option>Túi xanh</option>
                <option>Túi đen</option>
                <option>Túi vàng</option>
              </select>
            </div>
            <div className="detail-title-infor">
              <p>Size</p>
              <select className="select-details">
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
              </select>
            </div>
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
          <div className="detail-infor-ship">
            <div class="infor-ship-all">
              <p className="first">SẢN PHẨM NÀY SẼ TỚI TAY BẠN CHỈ TRONG 2-4 NGÀY LÀM VIỆC</p>
              <ul className="border-ship">
                <li className="infor-ship">
                  <img src="/images/policy_icon_1.png" />
                  <div className="infor-ship-2">
                    <span className="two">GIAO HÀNG TOÀN QUỐC</span>
                    <span className="three">Có hình thức Giao hàng khi thanh toán (COD)</span>
                  </div>
                </li>
                <li className="infor-ship">
                  <img src="/images/policy_icon_2.png" />
                  <div className="infor-ship-2">
                    <span className="two">CHẤT LƯỢNG ĐẢM BẢO</span>
                    <span className="three">Chất liệu cao cấp, mực in thân thiện môi trường</span>
                  </div>
                </li>
                <li className="infor-ship">
                  <img src="/images/policy_icon_3.png" />
                  <div className="infor-ship-2">
                    <span className="two">ĐỔI TRẢ DỄ DÀNG</span>
                    <span className="three">Trả lại hàng nếu không ưng ý</span>
                  </div>
                </li>
                <li className="infor-ship">
                  <img src="/images/policy_icon_4.png" />
                  <div className="infor-ship-2">
                    <span className="two">HOTLINE HỖ TRỢ</span>
                    <span className="three">Gọi ngay <b>0901 70 70 11</b></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}
