// Inbuilt Package
const path = require('path');

// 3rd Party Package
const express = require('express');
const route = express.Router(); // In built router package

// Custom function, file and package
const rootDir = require('../util/path');
const adminData = require('./admin');

route.get('/', (req, res, next) => {
    // console.log(path.join(__dirname, '../', 'views', 'shop.html'));
    // res.send('Hello from middleware');
    // console.log(adminData.products);
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));

    res.render('shop', {
        pageTitle: 'Shop',
        prods: adminData.products,
        path: '/'
    });
});

module.exports = route;