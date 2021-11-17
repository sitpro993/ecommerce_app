import React from "react";
import Head from "next/head";
import ParallaxScrolling from "../../components/HomeComponent/User/ParallaxScrolling";
import Layout from "../../components/Layout/UserLayout/Layout";

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

ShoppingGuidePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
