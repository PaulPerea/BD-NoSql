use db4tbn

// agregation framework
db.pedidos.find({},{"_id":false}).pretty()

db.pedidos.aggregate([{
    $project:{
        "nombreMercaderia":"$producto",
        "precioUnitario":"$precio",
        "cantidadPedida":"$cantidad",
        "totalParcial":{"$multiply":["$precio","$cantidad"]},
        "_id":0
    }
}])

// Con 02 pipeline

// El segundo pipeline debe ordenar la salida documentos por total parcial ascendente

db.pedidos.aggregate([{
    $project:{
        "nombreMercaderia":"$producto",
        "precioUnitario":"$precio",
        "cantidadPedida":"$cantidad",
        "totalParcial":{"$multiply":["$precio","$cantidad"]},
        "_id":0
    }
},{
    $sort:{"totalParcial":1} //si quieres decentente pon -1
}])

/*Agrupamiento*/
db.pedidos.find({},{"_id":0})

// 01 pipeline para agrupar por idpedido
db.pedidos.aggregate([{
    $group:{
        _id:{"Pedido":"$idPedido"}
    }
}])

// 01 pipeline para agrupar por idpedido y hallar # de items
db.pedidos.aggregate([{
    $group:{
        _id:{"Pedido":"$idPedido"},
        "nroItems":{$sum:1}
    }
}])
// 01 pipeline para agrupar por idpedido y hallar el subtotal
db.pedidos.aggregate([{
    $group:{
        _id:{"Pedido":"$idPedido"},
        "subtotal":{$sum:{$multiply:["$cantidad","$precio"]}}
    }
}])
// crear los documentos de la coleccion orders
db.orders.insertMany([
    { "_id" : 1, "item" : "abc", "price" : 10, "quantity" : 2, "date" : ISODate("2014-01-01T08:00:00Z") },
    { "_id" : 2, "item" : "jkl", "price" : 20, "quantity" : 1, "date" : ISODate("2014-02-03T09:00:00Z") },
    { "_id" : 3, "item" : "xyz", "price" : 5, "quantity" : 5, "date" : ISODate("2014-02-03T09:05:00Z") },
    { "_id" : 4, "item" : "abc", "price" : 10, "quantity" : 10, "date" : ISODate("2014-02-15T08:00:00Z") },
    { "_id" : 5, "item" : "xyz", "price" : 5, "quantity" : 10, "date" : ISODate("2014-02-15T09:05:00Z") }
])

db.orders.insertMany([
    { "_id" : 6, "item" : "abc", "price" : 10, "quantity" : 2, "date" : ISODate("2015-01-01T08:00:00Z") },
    { "_id" : 7, "item" : "jkl", "price" : 20, "quantity" : 1, "date" : ISODate("2015-02-03T09:00:00Z") },
    { "_id" : 8, "item" : "xyz", "price" : 5, "quantity" : 5, "date" : ISODate("2016-02-03T09:05:00Z") },
    { "_id" : 9, "item" : "abc", "price" : 10, "quantity" : 10, "date" : ISODate("2016-02-15T08:00:00Z") },
    { "_id" : 10, "item" : "xyz", "price" : 5, "quantity" : 10, "date" : ISODate("2016-02-15T09:05:00Z") }
])

// 01 Pipeline para agrupar año de fecha de orden "date"
db.orders.aggregate([{
    $group:{
        _id:{"Año":{$year:"$date"}},
        
    }
}])
// 01 Pipeline para agrupar año de fecha de orden "date" y hallar el monto total por cada año
db.orders.aggregate([{
    $group:{
        _id:{"Año":{$year:"$date"}},
        "montoTotal":{$sum:{$multiply:["$price","$quantity"]}}
    }
}])
// 01 Pipeline para agrupar año de fecha de orden "date" y hallar el monto total por cada año
// y la cantidad de ordenes generados
////////////////////////////////////////
    db.orders.aggregate([
        {
            $match:{
                "item":"abc"
            }
        },{
            $group:{
                _id:{"Año":{$year:"$date"}},
                "montoTotal":{$sum:{$multiply:["$price","$quantity"]}},
                "cantidadOrdenes":{$sum:1}
            }

        }
    ])

// 01 pipeline para agrupar los estudiantes por distrito

db.estudiantes.aggregate([
    {
        $group:{
            _id:{"distrito":"$distrito"}
        }

    }
])

// 01 pipeline para agrupar los estudiantes por distrito y hallar la suma total de hermanos

db.estudiantes.aggregate([
    {
        $group:{
            _id:{"distrito":"$distrito"},
            "totalHermanos":{$sum:"$nroHermanos"}
        }

    }
])

// 02 pipeline:
//pipeline 01: para agrupar los estudiantes por distrito y hallar la suma total de hermanos
// pipeline 02: ordenar los documentos por numero de total de heramnos

db.estudiantes.aggregate([
    {
        $group:{
            _id:{"distrito":"$distrito"},
            "totalHermanos":{$sum:"$nroHermanos"}
        }

    },{
        $sort:{
            "totalHermanos":-1
        }
    }

])