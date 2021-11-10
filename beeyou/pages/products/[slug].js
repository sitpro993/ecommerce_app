import React, { useRef, useState } from "react";
import Head from "next/head";

import { getData } from "../../utils/fecthData";
import Colors from "../../components/Colors";
import DetailsThumb from "../../components/DetailsThumb";

export const getServerSideProps = async ({ params: { slug } }) => {
  const res = await getData(`product/${slug}`);
  return {
    props: { product: res.product }, // will be passed to the page component as props
  };
};

export default function ProductDetail({ product }) {
  const [index, setIndex] = useState();
  const colors = ["red", "black", "crimson", "teal"];
  const myRef = useRef();
  const handleTab = (index) => {
    setIndex(index);
    const images = myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };
  return (
    <>
      <Head>
        <title>{product.title + " - BeeYou"}</title>
        <meta name="keywords" content="BeeYou"></meta>
      </Head>
      <div className="app">
        <div className="details">
          <div className="big-img">
            <img
              src="/images/animal_06-1_b9e6808ddc2f4087bd00420a30458efe_large.png"
              alt=""
            />
          </div>

          <div className="box">
            <div className="row">
              <h2>{product.title}</h2>
              <span>{product.price}đ</span>
            </div>
            <Colors colors={colors} />

            <p>{product.description}</p>
            <p>lorem ipsum dolor sit</p>

            <DetailsThumb
              images={product.variant}
              tab={handleTab}
              myRef={myRef}
            />
            <button className="cart">Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
