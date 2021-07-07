const express = require('express');
const app = express();
const port = 3032;
const path = require('path');

app.use(express.static('public'));


app.get('/',(req,res) => res.sendfile(path.join(__dirname,'views','home.html')));








app.listen(port,() => console.log('servidor corriendo en http://localhost:' + port))