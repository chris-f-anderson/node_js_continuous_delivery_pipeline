const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('How To Create a Continuous Delivery Pipeline to demonstrate DevOps'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);