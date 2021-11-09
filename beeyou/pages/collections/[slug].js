import React from "react";
import { getData } from "../../utils/fecthData";
import Product from "../../components/Product";

function CollectionPage(props) {
  return props.collection ? (
    <section style={{ marginTop: "30px" }}>
      <div className="wrapper">
        <div className="home-section-header">
          <h2>{props.collection.title}</h2>
        </div>
        <div className="home-featured-products">
          {props.collection.product.map((product) => (
            <div key={product.id}>
              <Product product={product}></Product>
            </div>
          ))}
        </div>
      </div>
    </section>
  ) : null;
}

CollectionPage.getInitialProps = async (context) => {
  const res = await getData(`collection/${context.query.slug}`);
  return {
    collection: res.category,
  };
};
export default CollectionPage;
