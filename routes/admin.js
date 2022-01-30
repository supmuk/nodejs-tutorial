// Inbuilt Package
const path = require('path');

// 3rd Party Package
const express = require('express');
const route = express.Router(); // In built router package

// Custom function, file and package
const rootDir = require('../util/path');

const products = [];
// route.use() function is used for all function
route.get('/add-product', (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product', {
        pageTitle: 'Add product',
        path: '/admin/add-product'
    });
});

route.post('/add-product', (req, res) => {
    products.push({title: req.body.title});
    res.redirect('/');
});


// Export Route
// module.exports = route;

exports.routes = route;
exports.products = products;