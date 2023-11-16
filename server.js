// express
const express = require("express");
const dotenv = require("dotenv");

const dashboardController = require("./controllers/dashboard");
const postsRouter = require("./routers/posts");
const authRouter = require("./routers/auth");
const NotFoundMiddleware = require("./middlewares/NotFound");

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", dashboardController.index);

app.use("/", authRouter)
app.use("/posts", postsRouter);


// middleware degl errori - qui

app.use(NotFoundMiddleware)


app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
  });

  // `${req.protocol}://${req.hostname}:${process.env.PORT}/`