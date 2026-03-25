const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
router.get("/", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});
router.post("/", async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
router.delete("/:id", async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: "Product deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;