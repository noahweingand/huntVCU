'use strict'

const express = require('express'); 
const port = 8080; 
const path = require('path'); 
const viewPath = path.join(__dirname, 'src/templates/views'); 

const app = express(); 

app.set('view engine', 'hbs'); 
app.set('views', viewPath); 

app.get('', (req, res) => {
	res.render(''); 
}); 

app.listen(port, () => {
	console.log('App is listening on port 8080'); 
}); 
