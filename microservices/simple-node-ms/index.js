const express = require('express');
const rewrite = require('express-urlrewrite')
const cors = require('cors');
const logger = require('morgan');
const contextPath = process.env.SERVER_SERVLET_CONTEXT_PATH

const app = express();
app.use(rewrite(contextPath + '/*', '/$1'));
app.use(logger('dev'));
app.use(cors());

//Hello World API
app.get('/api/hello', function (req, res) {
    const helloResponse = {"greeting":"Hello World!", "timestamp":Date.now()};
    res.status(200).json(helloResponse);
});

//Health API
const healthResponse = {"status":"UP"};
app.get('/api/health', function (req, res) {
    res.status(200).json(healthResponse);
});

const port = 8081;
app.listen(port, function () {
    console.log('Listening to Port ' + port);
});
