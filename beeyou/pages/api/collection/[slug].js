/* eslint-disable import/no-anonymous-default-export */
import connectDB from "../../../utils/connectDB";
import Categories from "../../../models/categoryModel";
import product from "../../../models/productModel";

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getCollection(req, res);
      break;
  }
};

const getCollection = async (req, res) => {
  try {
    const category = await Categories.findOne({
      slug: req.query.slug,
    }).populate("product");
    res.json({
      category,
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
