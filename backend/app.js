import express from "express";
import * as dotenv from "dotenv";
import indexRouter from "./routes/index.js";
import booksRouter from "./routes/books.js";
import dbConnection from "./db/config.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`app is listining to port ${port}`);
});

dbConnection();
// routers
app.use("/", indexRouter);
app.use("/books", booksRouter);
