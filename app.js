const express = require('express');
const app = express();
// bring in routes
const { getPosts } = require('./routes/post')

app.get("/", getPosts);
const port = 8000;
app.listen(port, () => { console.log(`A Node js API is listening on port: ${port}`) });