'use strict'

const app = require('./app');
const port = 3800;

// START SERVER
app.listen(port, () => {
    console.log("Server created on: http://localhost:3800");
});