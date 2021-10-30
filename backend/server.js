require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const app = express();

//connect to DB
connectDB()

app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});

// router
app.use("/api/products", productRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
