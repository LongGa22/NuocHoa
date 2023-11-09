const Product = require('../models/productModel.js'); // Import model Product
const Cate = require('../models/cateModel');
const path = require('path');
const fs = require('fs').promises;

exports.productController = {
    createProduct: async (req, res) => {
        try {
            // const cateId = Cate.findById(req.body.cateid)
            const newProduct = new Product({
                name: req.body.name,
                price: req.body.price,
                cateid: req.body.cateid,
                qty: req.body.qty,
                cap: req.body.cap,
                des: req.body.des
            });
            // if(req, files){
            //     let path = '';
            //     req.files.forEach(function(files, index, arr){
            //         path = path + files.path + ','
            //     })
            //     path = path.substring(0, path.lastIndexOf(","))
            //     newProduct.image = path
            // }
            if(req.file){
                newProduct.image = req.file.path
            }
            const savedProduct = await newProduct.save();
            res.status(201).json(savedProduct);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
    getProduct: async(req, res) =>{
        try {
            const products = await Product.find();
            if(!products){
                res.status(400).json({message: "Không có sản phẩm" });
            }
            res.status(200).json(products);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
    getProductId: async(req, res) =>{
        try {
            const product = await Product.findById(req.params.id);
            if (!product) {
                res.status(404).json({ message: 'Sản phẩm không tồn tại' });
            } else {
                res.status(200).json(product);
            }
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
    updateProduct: async(req, res) =>{
        try {
            const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
                name: req.body.name,
                price: req.body.price,
                cateid: req.body.id,
                qty: req.body.qty,
                des: req.body.des
            }, { new: true });
            // if (req.file) {
            //     // Xóa ảnh cũ nếu người dùng gửi ảnh mới
            //     await fs.unlink(Product.image);
            // } else {
            //     // Nếu không có ảnh mới, giữ nguyên ảnh cũ
            //     updatedProduct.image = req.file
            // }
            // if (req.file) {
            //     updatedProduct.image = req.file.path
            // }
            const savedProduct = await updatedProduct.save();
            res.status(201).json(savedProduct);
            if (!updatedProduct) {
                res.status(404).json({ message: 'Sản phẩm không tồn tại' });
            } else {
                res.status(200).json(updatedProduct);
            }
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
    deleteProduct: async(req, res) =>{
        try {
            const deletedProduct = await Product.findByIdAndRemove(req.params.id);
            if (!deletedProduct) {
                res.status(404).json({ message: 'Sản phẩm không tồn tại' });
            } else {
                res.status(200).json({ message: 'Sản phẩm đã bị xóa' });
            }
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}