const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Client = require('./models/clients')

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// RESTful_ROUTE TO NEW CLIENT PAGE
app.get('/clients/new', (req, res) => {
    res.render('new.ejs');
});
// RESTful_ROUTE TO CREATE NEW CLIENT
app.post('/clients/', (req, res) => {
    if (req.body.payment === 'on') {
        req.body.payment = true
    } else {
        req.body.payment = false
    }
    Client.create(req.body).then((err, addedClient)=>
        res.redirect('/clients'));
    });

// RESTful_ROUTE TO INDEX PAGE 
// since Mongoose update 7.0.3, call back function do not work, ASYNC functions work perfectly fine
app.get('/clients', async (req, res) => {
    const clients = await Client.find({})
    res.render('index.ejs', {clients})
});

// RESTful_ROUTE TO SHOW PAGE 
app.get('/clients/:id', async (req, res) => {
    const client = await Client.findById(req.params.id)
    res.render('show.ejs', { client })
})

// RESTful_ROUTE TO DELETE PAGE 
app.delete('/clients/:id', async (req, res) => {
    await Client.findByIdAndRemove(req.params.id)
    res.redirect('/clients')
})
app.listen(3000, () => {
    console.log('listening...');
});

mongoose.connect('mongodb://localhost:27017/simplecrud').then(() =>
    console.log('Mongod connection established'));

 