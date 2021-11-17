import React from "react";
import Head from "next/head";
import Layout from "../components/Layout/UserLayout/Layout";
import ParallaxScrolling from "../components/HomeComponent/User/ParallaxScrolling";

export default function CheckoutsPage() {
  return (
    <>
      <Head>
        <title>Thanh toán đơn hàng - BeeYou</title>
        <meta name="keywords" content="BeeYou"></meta>
      </Head>
      <ParallaxScrolling></ParallaxScrolling>
      <section className=""></section>
    </>
  );
}
