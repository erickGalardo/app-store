require('./app/config/conexion.db');
const Product = require('./app/models/producto.model');

const prod = new Product({
    name:"Envy 13.3 color black",
    code:"laptop133envy",
    description:"Laptop de color negro, modelo delux, procesador intel i5, 8GB ram",
    suggestedPrice:32000
})


prod.save((err,document) => {
    if (err){
        console.log(err)
    }
    console.log(document)
})