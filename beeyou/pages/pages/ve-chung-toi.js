import React from "react";
import Head from "next/head";
import ParallaxScrolling from "../../components/HomeComponent/User/ParallaxScrolling";
import Layout from "../../components/Layout/UserLayout/Layout";
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

AboutUsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
