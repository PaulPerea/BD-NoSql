// abrir data

use db4bn


db.sales.insertMany([

    { "_id" : 1, "item" : "abc", "precio" : NumberDecimal("10"), "cantidad" : NumberInt("2"), "fechaVta" : ISODate("2014-03-01T08:00:00Z") },
  
    { "_id" : 2, "item" : "jkl", "precio" : NumberDecimal("20"), "cantidad" : NumberInt("1"), "fechaVta" : ISODate("2014-03-01T09:00:00Z") },
  
    { "_id" : 3, "item" : "xyz", "precio" : NumberDecimal("5"), "cantidad" : NumberInt( "10"), "fechaVta" : ISODate("2014-03-15T09:00:00Z") },
  
    { "_id" : 4, "item" : "xyz", "precio" : NumberDecimal("5"), "cantidad" :  NumberInt("20") , "fechaVta" : ISODate("2014-04-04T11:21:39.736Z") },
  
    { "_id" : 5, "item" : "abc", "precio" : NumberDecimal("10"), "cantidad" : NumberInt("10") , "fechaVta" : ISODate("2014-04-04T21:23:13.331Z") },
  
    { "_id" : 6, "item" : "def", "precio" : NumberDecimal("7.5"), "cantidad": NumberInt("20" ) , "fechaVta" : ISODate("2015-06-04T05:08:13Z") },
  
    { "_id" : 7, "item" : "def", "precio" : NumberDecimal("7.5"), "cantidad": NumberInt("10") , "fechaVta" : ISODate("2015-09-10T08:43:00Z") },
  
    { "_id" : 8, "item" : "abc", "precio" : NumberDecimal("10"), "cantidad" : NumberInt("5" ) , "fechaVta" : ISODate("2016-02-06T20:20:13Z") },
  
    { "_id" : 9, "item" : "abc", "precio" : NumberDecimal("10"), "cantidad" : NumberInt("2"), "fechaVta" : ISODate("2016-03-01T08:00:00Z") },
  
    { "_id" : 10, "item" : "jkl", "precio" : NumberDecimal("20"), "cantidad" : NumberInt("10"), "fechaVta" : ISODate("2014-03-01T09:00:00Z") },
  
    { "_id" : 11, "item" : "xyz", "precio" : NumberDecimal("5"), "cantidad" : NumberInt( "10"), "fechaVta" : ISODate("2015-03-15T09:00:00Z") },
  
    { "_id" : 12, "item" : "xyz", "precio" : NumberDecimal("5"), "cantidad" :  NumberInt("20") , "fechaVta" : ISODate("2017-02-04T11:21:39.736Z") },
  
    { "_id" : 13, "item" : "abc", "precio" : NumberDecimal("10"), "cantidad" : NumberInt("10") , "fechaVta" : ISODate("2016-03-04T21:23:13.331Z") },
  
    { "_id" : 14, "item" : "def", "precio" : NumberDecimal("7.5"), "cantidad": NumberInt("5" ) , "fechaVta" : ISODate("2017-04-04T05:08:13Z") },
  
    { "_id" : 15, "item" : "abc", "precio" : NumberDecimal("7.5"), "cantidad": NumberInt("10") , "fechaVta" : ISODate("2015-02-10T08:43:00Z") },
  
    { "_id" : 16, "item" : "abc", "precio" : NumberDecimal("10"), "cantidad" : NumberInt("21"), "fechaVta" : ISODate("2016-03-01T08:00:00Z") },
    
    { "_id" : 17, "item" : "jkl", "precio" : NumberDecimal("20"), "cantidad" : NumberInt("1"), "fechaVta" : ISODate("2015-11-01T09:00:00Z") },

    { "_id" : 18, "item" : "xyz", "precio" : NumberDecimal("5"), "cantidad" : NumberInt( "10"), "fechaVta" : ISODate("2016-12-15T09:00:00Z") },

    { "_id" : 19, "item" : "xyz", "precio" : NumberDecimal("5"), "cantidad" :  NumberInt("20") , "fechaVta" : ISODate("2014-04-04T11:21:39.736Z") },

    { "_id" : 20, "item" : "abc", "precio" : NumberDecimal("10"), "cantidad" : NumberInt("10") , "fechaVta" : ISODate("2017-04-04T21:23:13.331Z") },

    { "_id" : 21, "item" : "def", "precio" : NumberDecimal("7.5"), "cantidad": NumberInt("50" ) , "fechaVta" : ISODate("2015-06-04T05:08:13Z") },

    { "_id" : 22, "item" : "def", "precio" : NumberDecimal("7.5"), "cantidad": NumberInt("10") , "fechaVta" : ISODate("2017-02-10T08:43:00Z") }
])

// operadores de fecha y agrupacion

// operadores de fecha

db.sales.aggregate([
    {
        $project:{
            "año":{$year:"$fechaVta"},
            "mes":{$month:"$fechaVta"},
            "diaSemana":{$dayOfWeek:"$fechaVta"},
            "diaMes":{$dayOfMonth:"$fechaVta"},
            "diaAño":{$dayOfYear:"$fechaVta"},
            "semana":{$week:"$fechaVta"}
        }
    }
])

// Agrupar las ventas (sales)por el atributo item

db.sales.aggregate([
    {
        $group:{
            _id:"$item"
        }
    }
])

// agregacion con un pipeline para agrupar por item y totalizar las cantidades vendidas

db.sales.aggregate([
    {
        $group:{
            _id:"$item",
            "totalCantidadesVendida":{$sum:"$cantidad"}
        }
    }
])

db.sales.aggregate([
    {
        $group:{
            _id:"$item",
            "totalCantidadesVendida":{$sum:"$cantidad"}
        }
    }
])

db.sales.aggregate([
    {
        $group:{
            _id:"$item",
            "totalCantidadesVendida":{$sum:"$cantidad"},
            "promedioCantidadVentidas":{$avg:"$cantidad"}
        }
    }
])

// --------------

db.sales.aggregate([
    {
        $group:{
            _id:"$item",
            "totalCantidadesVendida":{$sum:"$cantidad"},
            "promedioCantidadVentidas":{$avg:"$cantidad"}
        }
    }
]).pretty()

// agregacion con un pipeline para agrupar por item y totalizar las cantidades vendidas, 
// tambien el promedio de las mismas y de igual forma la cantidad maxima y minima vendida

db.sales.aggregate([
    {
        $group:{
            _id:"$item",
            "totalCantidadesVendida":{$sum:"$cantidad"},
            "promedioCantidadVendidas":{$avg:"$cantidad"},
            "cantidadMaxima":{$max:"$cantidad"},
            "cantidadMaxima":{$min:"$cantidad"},
        }
    }
])

// ---------

db.sales.aggregate([
    {
        $group:{
            _id:"$item",
            "totalCantidadesVendida":{$sum:"$cantidad"},
            "promedioCantidadVendidas":{$avg:"$cantidad"},
            "cantidadMaxima":{$max:"$cantidad"},
            "cantidadMaxima":{$min:"$cantidad"},
        }
    }
]).pretty()

// AF con un pipeline para obtener el año de la fecha de venta, y el total parcial que
// será el producto de multiplicar cantidad y precio

db.sales.aggregate([
    {
        $project:{
            "año":{$year:"$fechaVta"},
            "total":{$multiply:["$precio", "$cantidad"]},
            "_id":0,
        }
    }
])

// AF con un pipeline para obtener el año de la fecha de venta, y el total parcial que
// será el producto de multiplicar cantidad y precio, ocultando el _id

// pipeline 02: Para agrupar por año y sumar los totales que sera el totalVenta

db.sales.aggregate([
    {
        $project:{
            "año":{$year:"$fechaVta"},
            "total":{$multiply:["$precio", "$cantidad"]},
            "_id":0,
        }
    },
    {
        $group:{
            _id:"$año",
            "totalVentas":{$sum:"$total"}
        }
    }
])

// AF con un pipeline para obtener el año de la fecha de venta, y el total parcial que
// será el producto de multiplicar cantidad y precio, ocultando el _id

// pipeline 02: Para agrupar por año y sumar los totales que sera el totalVenta
// pipeline 03 : Para ordenar por año ascendente

db.sales.aggregate([
    {
        $project:{
            "año":{$year:"$fechaVta"},
            "total":{$multiply:["$precio", "$cantidad"]},
            "_id":0,
        }
    },
    {
        $group:{
            _id:"$año",
            "totalVentas":{$sum:"$total"}
        }
    },
    {
        $sort:{
            "año":1
        }
    }
])

// AF con 03 pipeline
// pipeline 01: Filtrar la venta de los items xyz
// pipeline 02 : Para para obtener el año de la fecha de venta, y el total parcial que
// será el producto de multiplicar cantidad y precio, ocultando el _id
// pipeline 03 : Para agrupar por año y sumar los totales que sera el totalVenta

db.sales.aggregate([
    {
        $match:{
            "item":"xyz"
        }
    },
    {
        $project:{
            "año":{$year:"$fechaVta"},
            "total":{$multiply:["$precio", "$cantidad"]},
            "_id":0,
        }
    },
    {
        $group:{
            _id:"$año",
            "totalVentas":{$sum:"$total"}
        }
    },
])

// AF con 03 pipeline
// pipeline 01: Filtrar la venta de los items abc y xyz
// pipeline 02 : Para para obtener el año de la fecha de venta, y el total parcial que
// será el producto de multiplicar cantidad y precio, ocultando el _id
// pipeline 03 : Para agrupar por año y sumar los totales que sera el totalVenta

db.sales.aggregate([
    {
        $match:{
            "item":{$in:["abc","xyz"]}
        }
    },
    {
        $project:{
            "año":{$year:"$fechaVta"},
            "total":{$multiply:["$precio", "$cantidad"]},
            "_id":0,
        }
    },
    {
        $group:{
            _id:"$año",
            "totalVentas":{$sum:"$total"}
        }
    },
])

// AF con 03 pipeline:
// pipeline 01: Para obtener el año de la fecha de venta y el total 
// multiplicar cantidad x precio, ocultar el id.
// pipeline 02 : Filtrar los años de ventas de los años 2014 y 2016
// será el producto de multiplicar cantidad y precio, ocultando el _id
// pipeline 03 : Para agrupar por año y hallar el total ventas qu es la suatoria de total

    db.sales.aggregate([
        {
            $project:{
                "año":{$year:"$fechaVta"},
                "total":{$multiply:["$precio", "$cantidad"]},
                "_id":0,
            }
        },
        {
            $match:{
                "año":{$in:[2014,2016]}
            }
        },
        {
            $group:{
                _id:"$año",
                "totalVentas":{$sum:"$total"}
            }
        }
    ])