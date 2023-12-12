const express = require('express')
const app = express()  
const port = 3000

const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/apiLaunch');

app.use(express.urlencoded());
app.use(express.json())

const launchRoute = require('./routes/launchRoute.js');
//toutes les routes définies dans postRoute seront préfixées par /posts
app.use('/', launchRoute);

//méthode d express pour lancer le serveur sur le port défini
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

