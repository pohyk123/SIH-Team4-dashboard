//Load required libs
require('dotenv').config()
const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const csvjson = require('csvjson');
const readFile = require('fs').readFile;

//configure port
const PORT = process.env.PORT || 3000;


//Create an instance of Express
app = express();
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req,resp) => {
  resp.render('animate', { subscriptionKey: process.env.subscriptionKey });
});

//route GET /district
app.get('/district', (req, resp) => {
    resp.render('alloc', { subscriptionKey: process.env.subscriptionKey });
})

app.get('/population/:file', (req,resp) => {
    console.log('Fetching ' + req.params.file);
    resp.sendFile(__dirname + '/data/' + req.params.file);
})

app.get('/geojson', (req,resp) => {
    resp.sendFile(__dirname + '/data/india_telengana.json');
})

app.get('/sc_network', async (req,resp) => {

    readFile('./data/sc_data.csv', 'utf-8', async (err, fileContent) => {
        if(err) {
            console.log(err); // Do something to handle the error or just throw it
            throw new Error(err);
        }
        const jsonObj = await csvjson.toObject(fileContent);
        resp.send(jsonObj);
    });

    
})

//For serving static resources
app.use(express.static(__dirname + '/public'))

//Start the server
app.listen(PORT, () => {
    console.log("Application started at %s on port %d", new Date(), PORT);
})