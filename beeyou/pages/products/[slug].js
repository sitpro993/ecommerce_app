import React, { useEffect } from "react";

import { getData } from "../../utils/fecthData";

export default function ProductDetail(props) {
  console.log(props.product);

  return (
    <div>
      <h1>Product Details</h1>
    </div>
  );
}
export async function getServerSideProps({ params: { slug } }) {
  const res = await getData(`product/${slug}`);
  // server side rendering
  return {
    props: { product: res.product }, // will be passed to the page component as props
  };
}
