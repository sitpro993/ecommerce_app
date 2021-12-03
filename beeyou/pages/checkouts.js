import React from "react";
import Head from "next/head";
import ParallaxScrolling from "../components/HomeComponent/User/ParallaxScrolling";
import withAuth from "../components/HOCs/withAuth";

function CheckoutsPage() {
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

export default withAuth(CheckoutsPage);
