const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// HANDLEBARS
app.set('view engine','hbs');
hbs.registerPartials(__dirname+'/views/partials');

//servir contenido estatico.
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('home',{
        nombre: 'Pedro Fernando Flores Palmeros',
        titulo: 'Curso de Node'
    });
});


app.get('/index',(req,res)=>{
    //res.sendFile(__dirname + '/public/index.html')
    res.render('home',{
        nombre: 'Pedro Fernando Flores Palmeros',
        titulo: 'Curso de Node'
    });
});

app.get('/generic',(req,res)=>{
    res.render('generic',{
        nombre: 'Pedro Fernando Flores Palmeros',
        titulo: 'Curso de Node'
    });
});

app.get('/elements',(req,res)=>{
    res.render('elements',{
        nombre: 'Pedro Fernando Flores Palmeros',
        titulo: 'Curso de Node'
    });
});


app.get('/hola-mundo', (req,res)=>{
    res.send('Hola mundo en su respectiva ruta');
});

app.get('*',(req,res)=>{
    res.send('404 | Page not found');
});

app.listen(port);