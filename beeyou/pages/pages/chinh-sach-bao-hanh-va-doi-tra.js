import React from "react";
import Head from "next/head";
import ParallaxScrolling from "../../components/HomeComponent/User/ParallaxScrolling";

export default function PolicyArrantyPage(props) {
  return (
    <>
      <Head>
        <title>Chính Sách Bảo Hành và Đổi Trả - BeeYou</title>
        <meta name="keywords" content="BeeYou"></meta>
      </Head>
      <ParallaxScrolling></ParallaxScrolling>
      <div>
        <h1>policy-warranty-and-returns</h1>
      </div>
    </>
  );
}
