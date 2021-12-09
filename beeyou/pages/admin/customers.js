import React from "react";
import Head from "next/head";
import { Form, Table } from "react-bootstrap";
export default function AdminCustomers() {
  return (
    <>
      <Head>
        <title>Customers - BeeYou</title>
        <meta name="keywords" content="BeeYou"></meta>
      </Head>

      <section>
        <div>
          <h2 className="page-header">customers</h2>
          <div className="row">
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
                        <th>Khách hàng</th>
                        <th>Địa điểm</th>
                        <th style={{ textAlign: "center" }}>Tổng đơn hàng</th>
                        <th style={{ textAlign: "center" }}>
                          Đơn hàng gần nhất
                        </th>
                        <th style={{ textAlign: "right" }}>Tổng</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <Form.Check type="checkbox" />
                        </td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td style={{ textAlign: "center" }}>2</td>
                        <td style={{ textAlign: "center" }}>DA1002</td>
                        <td style={{ textAlign: "right" }}>1,500,000₫</td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check type="checkbox" />
                        </td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td style={{ textAlign: "center" }}>2</td>
                        <td style={{ textAlign: "center" }}>DA1002</td>
                        <td style={{ textAlign: "right" }}>1,500,000₫</td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check type="checkbox" />
                        </td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td style={{ textAlign: "center" }}>2</td>
                        <td style={{ textAlign: "center" }}>DA1002</td>
                        <td style={{ textAlign: "right" }}>1,500,000₫</td>
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
