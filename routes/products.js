const express = require('express');
const router = express.Router();

const multer  = require('multer')
const { storage } = require('../cloudinary');
const upload = multer({ storage: storage })

const { Product } = require('../models/product.js');

router.get("/", async (req, res) => {
    const foundProducts = await Product.find({});
    res.render("products/index", { products: foundProducts });
});
router.post("/", upload.single('image'), async (req, res) => {
    const { title } = req.body;
    console.log(req.file);
    const image = req.file.path;
    const addProduct = new Product({
        title: title,
        price: 20,
        category: 'fruit',
        images: image
    })
    const result = await addProduct.save();
    res.redirect("/products");
});

router.patch("/:id", async (req, res) => {
    const { id } = req.params;
    const { updatedname } = req.body;
    const product = await Product.updateOne({_id: id},{title: updatedname});
    res.redirect('/products');
});

router.get("/create-page", (req, res) => {
    res.render("products/createproduct");
});
router.get("/update/:id", (req, res) => {
    const { id } = req.params;
    res.render("products/update", { id });
});

module.exports = router;