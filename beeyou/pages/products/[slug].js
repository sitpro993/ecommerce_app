import React, { useEffect } from "react";

import { getData } from "../../utils/fecthData";

export const getServerSideProps = async ({ params: { slug } }) => {
  const res = await getData(`product/${slug}`);
  return {
    props: { product: res.product }, // will be passed to the page component as props
  };
};

export default function ProductDetail(props) {
  return (
    <div>
      <h1>Product Details</h1>
    </div>
  );
}
