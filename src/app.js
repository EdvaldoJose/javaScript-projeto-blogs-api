const express = require('express');

const userRoute = require('./routes/userRoute');

const categoryRoute = require('./routes/categoryRoute');

const postsRoute = require('./routes/postsRoutes');

const app = express();

app.use(express.json());

app.use(userRoute);

app.use(categoryRoute);

app.use(postsRoute);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
