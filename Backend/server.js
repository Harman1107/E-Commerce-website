import express from "express";
import data from './data.js';
const app = express();
const port = process.env.PORT || 5000;

app.get('/api/products', (req,res) => {
    res.send(data.products)
})

app.get('/', (req, res) => {
    res.send('server is ready.');
});

app.listen(5000, () =>{
    console.log(`serve at http://localhost:${port}`)
})