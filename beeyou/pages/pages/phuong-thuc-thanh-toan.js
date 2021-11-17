import React from "react";
import Head from "next/head";
import ParallaxScrolling from "../../components/HomeComponent/User/ParallaxScrolling";
import Layout from "../../components/Layout/UserLayout/Layout";

export default function PaymentMethodsPage(props) {
  return (
    <>
      <Head>
        <title>Phương Thức Thanh Toán - BeeYou</title>
        <meta name="keywords" content="BeeYou"></meta>
      </Head>
      <ParallaxScrolling></ParallaxScrolling>
      <div>
        <h1>Payment Methods</h1>
      </div>
    </>
  );
}
