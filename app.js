const express = require('express');
const app = express();
const morgan = require('morgan');

// bring in routes
const { getPosts } = require('./routes/post')
const myOwnMiddleware = (req, res, next) => {
    console.log('my own middleware applied!!!');
    next();
};

// middleware 
app.use(morgan("dev"));
app.use(myOwnMiddleware)

app.get("/", getPosts);
const port = 8000;
app.listen(port, () => { console.log(`A Node js API is listening on port: ${port}`) });