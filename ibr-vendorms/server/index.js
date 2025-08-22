const express = require('express');
const routes = require('./routes');
const app = express();
app.use('/api/', routes);
const port = 3000;
app.listen(port, () => console.log('App listening on port ' + port));