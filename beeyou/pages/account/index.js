import React, { useContext, useEffect } from "react";
import Head from "next/head";
import ParallaxScrolling from "../../components/HomeComponent/User/ParallaxScrolling";
import { DataContext } from "../../store/GlobalState";
import withAuth from "../../components/HOCs/withAuth";

function ProfilePage() {
  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;

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
        <div className="row align-items-start">
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <h3>Thông tin đăng nhập</h3>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Số điện thoại</td>
                  <td>0867064901</td>
                  <td>Thay đổi</td>
                </tr>
                <tr>
                  <td>E-mail</td>
                  <td>sitpro993@gmail.com</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <h3>Thông tin cá nhân</h3>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default withAuth(ProfilePage);
