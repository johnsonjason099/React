const express = require('express');
const app = express();

//middleware
const fruits = ['apple', 'banana', 'pear'];

//index
app.get('/fruits', (req, res) => {
    res.send(fruits);
});
//New

//Delete

//Update

//Create

//Edit

//Show

app.listen(3000, () => {
    console.log('listening');
});