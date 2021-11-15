import React from "react";
import Head from "next/head";
import ParallaxScrolling from "../../components/HomeComponent/User/ParallaxScrolling";

export default function PolicyPage(props) {
  return (
    <>
      <Head>
        <title>Chính Sách Bảo Mật - BeeYou</title>
        <meta name="keywords" content="BeeYou"></meta>
      </Head>
      <ParallaxScrolling></ParallaxScrolling>
      <div>
        <h1>Chính sách bảo mật</h1>
      </div>
    </>
  );
}
