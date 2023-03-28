const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Client = require('./models/clients')

app.use(express.urlencoded({ extended: true }));

// RESTful_ROUTE TO NEW CLIENT PAGE
app.get('/clients/new', (req, res) => {
    res.render('new.ejs');
});
// RESTful_ROUTE TO CREATE NEW CLIENT
app.post('/clients/', (req, res) => {
    // if (req.body.payment === 'on') {
    //     req.body.payment = 'Paid in full'
    // } else {
    //     req.body.payment = 'Pending Payment'
    // }
    Client.create(req.body).then((err, addedClient)=>
        res.send(addedClient));
    });


app.get('/clients', async (req, res) => {
    const clients = await Client.find({})
    res.render('index.ejs', {clients})
});

app.listen(3000, () => {
    console.log('listening...');
});

mongoose.connect('mongodb://localhost:27017/simplecrud').then(() =>
    console.log('Mongod connection established'));

 