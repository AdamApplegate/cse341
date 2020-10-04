////////////////////////////////////////
// Represents a single product entity
///////////////////////////////////////

const fs = require('fs');
const path = require('path');

const rootDir = require('../util/path');

module.exports = class Product {
    constructor(tags, imageUrl, price, name, description) {
        this.tags = tags;
        this.imageUrl = imageUrl;
        this.price = price;
        this.name = name;
        this.description = description;
    }

    
}