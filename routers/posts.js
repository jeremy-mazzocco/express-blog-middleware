const express = require("express");
const multer = require("multer");
const router = express.Router();
const postsController = require("../controllers/posts");


// index
router.get("/", postsController.index)

// create
router.get("/create", postsController.create)

// store
// router.post("/", express.urlencoded({ extended: true }), postsController.store);
router.post("/", multer({ dest: "public/imgs/posts" }).single("image"), postsController.store);


// show
router.get("/:id", postsController.show)

//delete
router.delete("/:id", postsController.destroy);

// download
router.get("/:slug/download", postsController.download)



module.exports = router;