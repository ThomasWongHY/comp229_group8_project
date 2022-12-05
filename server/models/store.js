"use strict"
class Product
{
    constructor(_id = "", name = "", ptype ="", description="", price = 0, quantity = 0, imageurl = "")
    {
        this._id = _id;
        this.name = name;
        this.ptype = ptype;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.imageurl = imageurl;
    }

    toString()
    {
        return "_id          :" + this._id + "\n" +
               " name        : " + this.name + "\n" +
               " ptype       : " + this.ptype + "\n" +
               " description :" + this.description + "\n" +
               " price       :" + this.price + "\n" +
               " quantity    :" + this.quantity + "\n" +
               " imageurl    :" + this.imageurl;
    }
}

class Line
{
    constructor(product = new Product(), quantity = 1)
    {
        this.product = product;
        this.quantity  = quantity;
    }

    toString()
    {
        return "{" + this.product.toString() + "}, \n" +
            " quantity: " + this.quantity;
    }

    total()
    {
        return this.product.price * this.quantity;
    }
}

class Cart
{
    constructor(lines = [], itemCount = 0, cartPrice = 0)
    {
        this.lines = lines;
        this.itemCount = itemCount;
        this.cartPrice = cartPrice;
    }

    toString() 
    {
        let outputString = "";
        let count = 0;
        
        for(let line of this.lines)
        {
        outputString += "{" + line.toString();
        count++;
        outputString += (count > this.lines.length) ? "}, \n" : "} \n";
        }
        outputString += ", itemCount: " + this.itemCount + "\n";
        outputString += ", cartPrice: " + this.cartPrice;
        return outputString;
    }

    addLine(line)
    {
        this.lines.push(line);
        this.cartPrice += line.total();
    }

    empty()
    {
        this.lines = [];
        this.itemCount = 0;
        this.cartPrice = 0;
    }
}

module.exports.Cart = Cart;
module.exports.Line = Line;
module.exports.Product = Product;