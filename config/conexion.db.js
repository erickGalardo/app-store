const mongoose = require('mongoose');
const userBD = "root";
const passBD = "root1";
const hostBD = "127.0.0.1";
const portBD = "27017";
const authSourceDB= "admin";
const database = "db_store" 
const certDB = "ssl/ca.crt";
let usingCert = certDB != null;
let uriConn = "";
// const userBD = "rwuser";
// const passBD = "qYFY98vN5qiWHMJ!1!1";
// const hostBD = "94.74.68.50";
// const portBD = "8635";
// const authSourceDB= "admin";
// const database = "db_store" 
// const certDB = "ssl/ca.crt";
// let usingCert = certDB != null;
// let uriConn = "";

if((  hostBD == "127.0.0.1" || hostBD == "localhost") && certDB == ""){
    uriConn = 'mongodb://'+userBD+':'+passBD+'@'+hostBD+':'+portBD+'/'+database+'?authSource='+authSourceDB;
} else {
    uriConn = 'mongodb://'+userBD+':'+passBD+'@'+hostBD+':'+portBD+'/'+database+'?authSource='+authSourceDB;
} 

console.info("Cadena de conexion: " + uriConn);



mongoose.connect(uriConn, {
    useNewUrlParser: true,
    ssl: usingCert,
    sslValidate: false,
    sslCA: usingCert ? require('fs').readFileSync(`./${certDB}`) : ""
}).catch(err => console.log(err));

const db = mongoose.connection;

db.once('open', conn => {
    console.log("Conexion establecida");
});
db.on('error', err => {
    console.error("Ocurrion un error" + err);
});