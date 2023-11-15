const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const postsRouter = require("./routers/posts");
app.use("/posts", postsRouter);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
  });

  // `${req.protocol}://${req.hostname}:${process.env.PORT}/`