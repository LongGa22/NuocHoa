const Cate = require('../models/cateModel');
const express = require('express');
const router = express.Router();

exports.cateController = {
    //Tao danh muc
    createCate: async(req, res) => {
        try {
            let category = new Cate({
                name: req.body.name,
            })
            const data = await category.save();
            res.status(200).json({ success: true, data})
        } catch (error) {
            res.status(500).json(error);
        }
        
    },

    //Read
    readCate: async(req, res) => {
        try {
            let categorylist = await Cate.find();
            if(!categorylist) {
                res.status(500).json({success: false})
            }
            res.status(200).send(categorylist);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    readCateid: async(req, res) =>{
        try {
            let categoryid = await Cate.findById(req.params.id);
            if(!categoryid) {
                res.status(500).json({message: 'Không có dang mục sản phẩm này'});
            }
            res.status(200).send(categoryid);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    //Sua thoong tin
    modiCate: async(req, res)=>{
        try {
            let item = await Cate.findByIdAndUpdate(req.params.id,{
                name: req.body.name
            }, { new: true})
            if(!item) {
                res.status(400).send('Không sửa đước!');
            }else{
                res.status(200).send('Sửa thành công!');
            }
            res.send(item);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    deleteCate: async(req, res) => {
        try {
            let item = await Cate.findByIdAndRemove(req.params.id)
            if(item) {
                return res.status(200).json({success: true, message: 'Đã xóa!'})
            }else {
                console.log('Danh mục đã được xóa thành công.');
                return res.status(500).json({message: 'Không tìm thấy danh mục để xóa.'});
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }
}