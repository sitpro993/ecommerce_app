import React from "react";
import Head from "next/head";
import ParallaxScrolling from "../../components/ParallaxScrolling";

export default function AboutUsPage(props) {
  return (
    <>
      <Head>
        <title>Giới thiệu - BeeYou</title>
        <meta name="keywords" content="BeeYou"></meta>
      </Head>
      <ParallaxScrolling></ParallaxScrolling>
      <h1>Giới thiệu</h1>
    </>
  );
}
