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
    const page = req.query.page > 1 ? req.query.page : 1;
    const limit = req.query.limit > 1 ? req.query.limit : 12;
    const skip = (page - 1) * limit;

    const sort_by = req.query.sort_by;
    let sortParams;

    if (sort_by == "best-selling") {
      sortParams = { sold: -1 };
    } else if (sort_by == "title-ascending") {
      sortParams = { title: 1 };
    } else if (sort_by == "title-descending") {
      sortParams = { title: -1 };
    } else if (sort_by == "price-ascending") {
      sortParams = { price: 1 };
    } else if (sort_by == "price-descending") {
      sortParams = { price: -1 };
    } else if (sort_by == "created-ascending") {
      sortParams = { createdAt: 1 };
    } else if (sort_by == "created-descending") {
      sortParams = { createdAt: -1 };
    } else {
      sortParams = { title: 1 };
    }

    // switch (sort_by) {
    //   case "best-selling":
    //     sortParams = { sold: -1 };
    //   case "title-ascending":
    //     sortParams = { title: 1 };
    //   case "title-descending":
    //     sortParams = { title: -1 };
    //   case "price-ascending":
    //     sortParams = { price: "asc" };
    //   case "price-descending":
    //     sortParams = { price: "desc" };
    //   case "created-ascending":
    //     sortParams = { createdAt: 1 };
    //   case "created-descending":
    //     sortParams = { createdAt: -1 };
    //   default:
    //     sortParams = { title: 1 };
    // }

    const category = await Categories.findOne({
      slug: req.query.slug,
    }).populate({
      path: "product",
      options: {
        limit,
        skip,
        sort: sortParams,
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
