/* eslint-disable import/no-anonymous-default-export */
import connectDB from "../../../utils/connectDB";
import Products from "../../../models/productModel";
import { jsUcfirst } from "../../../utils/someFunc";

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getProducts(req, res);
      break;
    case "POST":
      await createProduct (req, res);
      break;
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Products.find({});

    res.json({
      products,
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const result = await auth(req, res);
    if (result.role !== "admin")
      return res.status(400).json({ err: "Authentication is not valid." });

    const { title, price, inStock, description, content, category, images } =
      req.body;

    
    //checkvalidate
    if (
      !title ||
      !price ||
      !inStock ||
      !description ||
      !content ||
      !category ||
      images.length === 0
    )
      return res.status(400).json({ err: "Please add all the fields." });
    
    //tạo obj mới
    const newProduct = new Products({
      title: jsUcfirst(title.toLowerCase()),
      price,
      inStock,
      description,
      content,
      category,
      images,
    });

    await newProduct.save();

    res.json({ msg: "Success! Created a new product" });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
