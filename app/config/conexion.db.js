const mongoose = require('mongoose');
const uri = 'mongodb://127.0.0.1:27017/db-store?authSource=admin';

mongoose.connect(uri, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
}).catch(err => {
    console.error("App starting error:", err.message);
    process.exit(1);
});

const db = mongoose.connection;

db.on('open', conn => {
    console.log("Conexion establecida");
});
db.on('error', err => {
    console.error("Ocurrion un error" + err);
});