let express = require('express');
let router = express.Router();

let Order = require('../models/order');

let Store = require('../models/store');
let Cart = Store.Cart;
let Product = Store.Product;

module.exports.displayOrderList = (req, res, next) => {
    Order.find((err, orderList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.json(orderList);
        }
    });
}

module.exports.processAddPage = (req, res, next) => {
    // SERIALIZE THE CART DATA
    let cart = new Cart();

    // Serialize the Line Data
    for(let line of req.body.cart.lines)
    {
        console.log(line);
        let product = new Product(
          line.product._id,
          line.product.name,
          line.product.ptype,
          line.product.description,
          line.product.price,
          line.product.quantity,
          line.product.imageurl  
        );
        let quantity = line.quantity;
        cart.lines.push({product, quantity});
    }
    cart.itemCount = req.body.cart.itemCount;
    cart.cartPrice = req.body.cart.cartPrice;

    // Create a new Order Object
    let newOrder = Order({
        "name": req.body.name,
        "address": req.body.address,
        "city": req.body.city,
        "province": req.body.province,
        "postalCode": req.body.postalCode,
        "country": req.body.country,
        "shipped": req.body.shipped,
        "cart": cart
    });

    // Add new Order Object to the Database
    Order.create(newOrder, (err, Order) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.json({success: true, msg: 'Successfully Added New Order'});
        }
    }); 
}

// let express = require('express');
// let router = express.Router();

// let Order = require('../models/order');

// let Store = require('../models/store');
// let Cart = Store.Cart;
// let Book = Store.Book;

// module.exports.displayOrderList = (req, res, next) => {
//     Order.find((err, orderList) => {
//         if(err)
//         {
//             return console.error(err);
//         }
//         else
//         {
//             res.json(orderList);
//         }
//     });
// }

// module.exports.processAddPage = (req, res, next) => {
//     // SERIALIZE THE CART DATA
//     let cart = new Cart();

//     // Serialize the Line Data
//     for(let line of req.body.cart.lines)
//     {
//         let book = new Book(
//           line.book._id,
//           line.book.name,
//           line.book.author,
//           line.book.description,
//           line.book.price  
//         );
//         let quantity = line.quantity;
//         cart.lines.push({book, quantity});
//     }
//     cart.itemCount = req.body.cart.itemCount;
//     cart.cartPrice = req.body.cart.cartPrice;

//     // Create a new Order Object
//     let newOrder = Order({
//         "name": req.body.name,
//         "address": req.body.address,
//         "city": req.body.city,
//         "province": req.body.province,
//         "postalCode": req.body.postalCode,
//         "country": req.body.country,
//         "shipped": req.body.shipped,
//         "cart": cart
//     });

//     // Add new Order Object to the Database
//     Order.create(newOrder, (err, Order) => {
//         if(err)
//         {
//             console.log(err);
//             res.end(err);
//         }
//         else
//         {
//             res.json({success: true, msg: 'Successfully Added New Order'});
//         }
//     }); 
// }