/* eslint-disable import/no-anonymous-default-export */
import connectDB from "../../../utils/connectDB";
import Orders from "../../../models/orderModel";
import auth from "../../../middleware/auth";
import Product from "../../../models/productModel";

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await createOrder(req, res);
      break;
  }
};

const createOrder = async (req, res) => {
  try {
    const result = await auth(req, res);

    const { address, mobile, cart, totalPrice, shippingPrice } = req.body;
    const newOrder = new Orders({
      user: result.id,
      address,
      mobile,
      cart,
      totalPrice,
      shippingPrice,
    });

    cart.filter((item) => {
      return sold(item._id, item.quantity, item.sold);
    });
    await newOrder.save();

    res.json({
      msg: "Order success! We will contact you to confirm the order.",
      newOrder,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const sold = async (id, quantity, oldSold) => {
  await Products.findOneAndUpdate(
    { _id: id },
    {
      //inStock: oldInStock - quantity,
      sold: quantity + oldSold,
    }
  );
};
