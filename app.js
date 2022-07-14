const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send('hello world node js')
});
const port = 8000;
app.listen(port, () => { console.log(`A Node js API is listening on port: ${port}`) });