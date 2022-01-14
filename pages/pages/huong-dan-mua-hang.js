import React from "react";
import Head from "next/head";
import ParallaxScrolling from "../../components/HomeComponent/ParallaxScrolling";

export default function ShoppingGuidePage(props) {
  return (
    <>
      <Head>
        <title>Hướng Dẫn Mua Hàng - BeeYou</title>
        <meta name="keywords" content="BeeYou"></meta>
      </Head>
      <ParallaxScrolling></ParallaxScrolling>
      <div>
        <h1>Shopping Guide</h1>
      </div>
    </>
  );
}
