/* eslint-disable import/no-anonymous-default-export */
import connectDB from "../../../utils/connectDB";
import Categories from "../../../models/categoryModel";

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
    const page = req.query.page > 1 ? req.query.page : 1;
    const limit = req.query.limit > 1 ? req.query.limit : 3;
    const skip = (page - 1) * limit;

    const category = await Categories.findOne({
      slug: req.query.slug,
    }).populate({
      path: "product",
      options: {
        limit,
        skip,
      },
    });

    res.json({
      category,
      page,
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
