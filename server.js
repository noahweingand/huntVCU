'use strict'

const hbs = require('hbs'); 
const express = require('express'); 
const port = 8080; 
const path = require('path'); 
const viewPath = path.join(__dirname, '/src/templates/views'); 

//create express web app
const app = express(); 

//allow app to recognize css and js files
app.use(express.static('./src/public')); 

hbs.registerPartials('./src/templates/partials')

app.set('view engine', 'hbs'); 
app.set('views', viewPath); 

app.get('', (req, res) => {
	res.render(''); 
}); 

app.listen(port, () => {
	console.log('App is listening on port ' + port); 
}); 
