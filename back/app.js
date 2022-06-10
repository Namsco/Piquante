const express = require ('express'); 
const app = express(); 
const mongoose = require('mongoose'); 
const path = require('path')


const userRoutes = require('./routes/user-router')
const sauceRoutes = require('./routes/sauce-router')


mongoose.connect('mongodb+srv://Namsco:PiquanteP6@cluster0.zfow9fn.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  
app.use(express.json());


app.use ('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/auth', userRoutes); 
app.use('/api/sauces', sauceRoutes);



module.exports = app; 