const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const 

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const rootDir = require('./util/path');

// Express exported as a function but inside it contain objects
// So that why we call express as a function
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(rootDir, 'public'))); // Serve file statically and register folder statically

app.use(shopRoutes);
app.use('/admin', adminData.routes);

// 404 Page
app.use((req, res, next) => {
    res.status(404).render('404', {
        pageTitle : 'Page not found',
        path: null
    });
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html')); // way to access view file
});

app.listen(3000);

// Alternative to router
// app.use('/')
// app.get('/')
// app.post('/')


// // Middleware
// app.use((req, res, next)=>{
//     console.log('Inside the middleware');
//     next(); // Allow the request to continue to the next middleware in line
// });

// app.use((req, res, next)=>{
//     console.log('Inside the middleware');
//     // Send function automatically set header as HTML
//     res.send('<h1>Hello from express js</h1>');
// });
