import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import Head from "next/head";
import ParallaxScrolling from "../../components/HomeComponent/User/ParallaxScrolling";
import { DataContext } from "../../store/GlobalState";
import Layout from "../../components/Layout/UserLayout/Layout";

export default function ProfilePage() {
  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;
  const router = useRouter();

  useEffect(() => {
    Object.keys(auth).length === 0 && router.push("/account/signin");
  }, [auth, router]);

  return (
    <>
      <Head>
        <title>Tài khoản - BeeYou</title>
        <meta name="keywords" content="BeeYou"></meta>
      </Head>
      <ParallaxScrolling />
      <section className="wrapper">
        <h1>Tài khoản của tôi</h1>
      </section>
    </>
  );
}

ProfilePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
