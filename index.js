/**
 * Design an API service for a Blog Post plateform,
 * this service will be responsible for doing all CRUD operations on a Blog Post.
 *
 * */

const PORT = 3000;
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', require('./api'))

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

