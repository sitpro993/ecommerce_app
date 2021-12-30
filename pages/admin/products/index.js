import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Form } from "react-bootstrap";
export default function AdminProducts() {
  return (
    <>
      <Head>
        <title>Products - BeeYou</title>
        <meta name="keywords" content="BeeYou"></meta>
      </Head>
      <section>
        <div>
          <div className="header-section">
            <h2 className="page-header">products</h2>
            <Link href="/admin/products/create">
              <a>
                <i className="far fa-plus-square"></i>
                Thêm sản phẩm
              </a>
            </Link>
          </div>
          <div className="row" style={{ width: "100%", margin: 0 }}>
            <div
              className="card"
              style={{ padding: "30px", borderRadius: "10px" }}
            >
              <div className="col-12">
                <div className="table-wrapper">
                  <table className="">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Tên sản phẩm </th>
                        <th style={{ textAlign: "center" }}>Khả dụng</th>
                        <th style={{ textAlign: "center" }}>Tồn</th>
                        <th style={{ textAlign: "center" }}>Đặt</th>
                        <th style={{ textAlign: "center" }}>Đã bán</th>
                        <th>Trạng thái</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <Form.Check type="checkbox" />
                        </td>
                        <td>Ốp lưng animal 103</td>
                        <td style={{ textAlign: "center" }}>9</td>
                        <td style={{ textAlign: "center" }}>8</td>
                        <td style={{ textAlign: "center" }}>1</td>
                        <td style={{ textAlign: "center" }}>10</td>
                        <td>Đăng bán</td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check type="checkbox" />
                        </td>
                        <td>Mark</td>
                        <td style={{ textAlign: "center" }}>9</td>
                        <td style={{ textAlign: "center" }}>8</td>
                        <td style={{ textAlign: "center" }}>1</td>
                        <td style={{ textAlign: "center" }}>10</td>
                        <td>Ẩn</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
