import React, { useContext, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import ParallaxScrolling from "../../components/HomeComponent/ParallaxScrolling";
import { DataContext } from "../../store/GlobalState";
import { useRouter } from "next/router";

function ProfilePage() {
  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;

  const router = useRouter();

  useEffect(() => {
    if (!auth.token) {
      router.push("/account/signin");
    }
  }, [auth.token, router]);

  return (
    <>
      <Head>
        <title>Tài khoản - BeeYou</title>
        <meta name="keywords" content="BeeYou"></meta>
      </Head>
      <ParallaxScrolling />
      <section className="wrapper">
        <div className="page-header">
          <h1>Tài khoản của tôi</h1>
        </div>
        <hr></hr>
        {auth.user ? (
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="card" style={{ height: "100%" }}>
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <Image
                      src="https://res.cloudinary.com/beeyou/image/upload/v1641721299/logo/avatar7_jkzd2h.png"
                      alt="avatar"
                      className="rounded-circle"
                      width={150}
                      height={150}
                    />
                    <div className="mt-3">
                      <h4>{`${auth.user.lastName} ${auth.user.firstName}`}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Tên</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {auth.user.firstName}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Họ</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {auth.user.lastName}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Số điện thoại</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {auth.user.phone}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">E-mail</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {auth.user.email}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Địa chỉ</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {auth.user.address}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </section>
    </>
  );
}

export default ProfilePage;
