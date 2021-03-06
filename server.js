const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

express()
    .use(express.static(path.join(__dirname, 'src')))
    .listen(PORT, () => console.info(`Listening on ${ PORT }`));