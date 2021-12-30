/* eslint-disable import/no-anonymous-default-export */
import connectDB from "../../../../utils/connectDB";
import Products from "../../../../models/productModel";

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getProduct(req, res);
      break;
    case "PATCH":
      await editProduct(req, res);
      break;
  }
};

const getProduct = async (req, res) => {
  try {
    const product = await Products.findOne({ slug: req.query.slug });
    if (!product)
      return res.status(400).json({ err: "This product does not exist." });
    res.json({ product });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

const editProduct = async (req, res) => {
  try {
    const result = await auth(req, res);

    if (result.role === "admin") {
      const { id } = req.query;
      const product = req.body;

      await Products.findOneAndUpdate(
        { _id: id },
        {
          
        }
      );

      res.json({ msg: "Payment success!" });
    }
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};


