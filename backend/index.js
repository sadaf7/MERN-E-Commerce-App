const express = require('express');
const connectToMongo = require("./config/db");
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config();
const app = express();
const port = 4000;

connectToMongo();

app.use(cors())
app.use(express.json());

// available routes
app.use('/api/auth', require("./routes/authRoutes"));
app.use('/api/user', require("./routes/userRoutes"));
app.use('/api/products', require("./routes/productRoutes"));
app.use('/api/admin/products', require("./routes/adminProductRoutes"));
app.use('/api/cart', require("./routes/cartRoutes"));
app.use('/api/cart_items', require("./routes/cartItemRoutes"));
app.use('/api/orders', require("./routes/orderRoutes"));
app.use('/api/admin/orders', require("./routes/adminOrderRoutes"));
app.use('/api/reviews', require("./routes/reviewRoutes"));
app.use('/api/ratings', require("./routes/ratingRoutes"));


app.listen(port, () => {
    console.log(` App started on port ${port}`);
  })