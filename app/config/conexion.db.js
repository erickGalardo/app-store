const mongoose = require('mongoose');
const uri = 'mongodb://127.0.0.1:27017/db-store?authSource=admin';
// const uri = 'mongodb:/root:root1@127.0.0.1:27017/app-store-db';

mongoose.connect(uri, {
    useNewUrlParser: true
}).catch(err => console.log(err));

const db = mongoose.connection;

db.on('open', conn => {
    console.log("Conexion establecida");
});
db.on('error', err => {
    console.error("Ocurrion un error" + err);
});