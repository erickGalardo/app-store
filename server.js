const express = require('express'); // modulo para crear servicios
const https = require('https'); //modulo para crear server

const port = 3000; //port http
const portssl = 3001; // port https
const app = express(); // definir app

//Modulor routers
const healthRte = require('./api/routers/health.rte');
const productRte = require('./api/routers/product.rte')


app.use(express.json());
app.use('/',healthRte);
app.use('/',productRte);



var options = {
    // key: fs.readFileSync(process.env.KEY_PATH),
    // cert: fs.readFileSync(process.env.CERT_PATH),
};

var server = https.createServer(options, app).listen(portssl, function () {
    console.log('https server listening on port ' + portssl)
    server.once('close', () => {
        connectionManagers.forEach(connectionManager => connectionManager.close());
    });
});

app.listen(port, function () {
    console.log("http server listening on port: " + port);
});