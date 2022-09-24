var express = require('express');
var router = express.Router();
var conexion = require("../conexion/conexion")

/* GET seccion productos */
router.get('/', function (req, res, next) {

    conexion.query("SELECT * FROM producto WHERE idproducto <10", function (err, datosResultado) {
        if (!err) {
            console.log(datosResultado);
           
            res.render('productos', { title: 'nuestros productos', productos:datosResultado });
        }

    })

});

module.exports = router;