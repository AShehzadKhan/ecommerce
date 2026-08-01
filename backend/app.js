import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import productRoute from "./routes/productRoute.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send(
    `<h1 style="text-align: center; font-size: xx-large;">Home Page</h1>`,
  );
});

app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
