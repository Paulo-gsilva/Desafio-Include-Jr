const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

const routeHome = require('./Routes/routerHome');
app.use('/', routeHome);

app.listen(3000, () => {
    console.log('SERVER IS ON');
});