let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

// create a reference to the model
let Product = require('../models/product');

module.exports.displayProductList = (req, res, next) => {
    Product.find((err, productList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(ProductList);

            /*
            res.render('product/list', 
            {title: 'Products', 
            ProductList: productList, 
            displayName: req.user ? req.user.displayName : ''});      
            */

            res.json(productList);
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    /*
    res.render('product/add', {title: 'Add Product', 
    displayName: req.user ? req.user.displayName : ''});
    */
   
    res.json({success: true, msg: 'Succesfully Displayed Add Page'});
}

module.exports.processAddPage = (req, res, next) => {
    let newProduct = Product({
        "name": req.body.name,
        "ptype": req.body.ptype,
        "description": req.body.description,
        "price": req.body.price,
        "quantity": req.body.quantity,
        "imageurl": req.body.imageurl
    });

    Product.create(newProduct, (err, Product) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the product list
            //res.redirect('/product-list');

            res.json({success: true, msg: 'Successfully Added New Product'});
        }
    });

}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Product.findById(id, (err, productToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            /*
            res.render('product/edit', {title: 'Edit Product', product: productToEdit, 
            displayName: req.user ? req.user.displayName : ''});
            */

            res.json({success: true, msg: 'Successfully Displayed Product to Edit', product: productToEdit});
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedProduct = Product({
        "_id": id,
        "name": req.body.name,
        "ptype": req.body.ptype,
        "description": req.body.description,
        "price": req.body.price,
        "quantity": req.body.quantity,
        "imageurl": req.body.imageurl
    });

    Product.updateOne({_id: id}, updatedProduct, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the product list
            //res.redirect('/product-list');

            res.json({success: true, msg: 'Successfully Edited Product', product: updatedProduct});
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Product.deleteOne({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the product list
             //res.redirect('/product-list');

             res.json({success: true, msg: 'Successfully Deleted Product'});
        }
    });
}