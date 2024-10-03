const Product = require('../models/product.models');


const getProducts = async (req, res) => {
     try {
       const products = await Product.find();
       res.status(200).json(products);
     } catch (err) {
       res.status(500).json(err);
     }
}

const getProduct = async (req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findById(id);
        res.status(200).json(product);
    }
    catch(err){
        res.status(500).json(err);
    }
}

const createProduct = async (req, res) => {
    try {
      const product = await Product.create(req.body);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
}

const updateProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findByIdAndUpdate(id, req.body);

      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      const updatedProduct = await Product.findById(id);
      res.status(200).json(updatedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
}

const deleteProduct = async (req, res) => {
     try {
       const { id } = req.params;
       const product = await Product.findByIdAndDelete(id);
       if (!product) {
         return res.status(404).json({ message: "Product not found" });
       }
       res.status(200).json(product);
     } catch (err) {
       res.status(500).json(err);
     }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}