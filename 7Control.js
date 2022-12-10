// abrir la database

use bdt4n

// leer los documentos de la coleccion estudiantes
db.estudiantes.find({},{"_id":0,"nombres":1,"deportes":1}) //?

// leer los documentos de la coleccion estudiantes que practican deporte algunos
db.estudiantes.find({"deportes":{$exists:1}},{"_id":0,"nombres":1,"deportes":1})

// leer los documentos de la coleccion estudiantes que practican 2 deportes
db.estudiantes.find({"deportes":{$size:2}},{"_id":0,"nombres":1,"deportes":1})

// leer los documentos de la coleccion estudiante mostrando los 2 primeros deportes
db.estudiantes.find({"deportes":{$exists:1}},{"_id":0,"nombres":1,"deportes":{$slice:2}}) //el slice se aplica cuando el atributo es un arreglo

// leer los documentos de la coleccion estudiante mostrando los 1 primeros deportes
db.estudiantes.find({"deportes":{$exists:1}},{"_id":0,"nombres":1,"deportes":{$slice:1}})

// leer los documentos de la coleccion estudiante mostrando el ultimo deporte
db.estudiantes.find({"deportes":{$exists:1}},{"_id":0,"nombres":1,"deportes":{$slice:-1}})

// Leer los documentos de la coleccion estudiantemostrnado de forma ordenado por 
// el atributo nombres
db.estudiantes.find({},{"_id":0,"nombres":1})

db.estudiantes.find({},{"_id":0,"nombres":1}).sort({"nombres":1}) //sort = ordenar por abc

// Leer los documentos de la coleccion estudiantemostrnado de forma ordenado por 
// el atributo nroHermanos en sentido descendente
db.estudiantes.find({},{"_id":0,"nombres":1,"nroHermanos":1})

db.estudiantes.find({},{"_id":0,"nombres":1,"nroHermanos":1}).sort({"nroHermanos":-1})

db.estudiantes.find({"nroHermanos":{$exists:1}},
{"_id":0,"nombres":1,"nroHermanos":1}).sort({"nroHermanos":-1,"nombres":1})

// Conteo de documentos
db.estudiantes.find().count()

// Conocer la cantidad de documentos  estudiantes que cuentan con dni
db.estudiantes.find({"dni":{$exists:1}},{}).count()

// Conocer la cantidad de estudiantes que tienen 2 hermanos
db.estudiantes.find({"nroHermanos":{$eq:2}},{}) //te devuelve la info de todos los que tieene 2 hrns 

// Conocer la cantidad de estudiantes que tienen mayor de 2 hermanos
db.estudiantes.find({"nroHermanos":{$gt:2}},{}).count()

// Conocer la cantidad de estudiantes que tienen mayor o igual a 2 hermanos
db.estudiantes.find({"nroHermanos":{$gte:2}},{}).count()

// Muestre los 03 primeros documentos de estudio ordenado por nombres saltando 2 documentos
db.estudiantes.find({},{"_id":0,"nombres":1,"apellidos":1}).sort({"nombres":1}).skip(2).limit(3)

// agregar un framework

// crear documentos a la coleccion pedidos 
db.pedidos.insertMany([{

    "nombre":"Juan",
  
    "idPedido":"PED001",
  
    "producto":"Zapatilla",
  
    "cantidad":2,
  
    "precio":234.90,
  
    "activo":true
  
  },{
  
    "nombre":"Juan",
  
    "idPedido":"PED001",
  
    "producto":"Camisa",
  
    "cantidad":1,
  
    "precio":120.00,
  
    "activo":true
  
  },{
  
    "nombre":"Juan",
  
    "idPedido":"PED001",
  
    "producto":"Medias",
  
    "cantidad":3,
  
    "precio":15.90,
  
    "activo":false
  
  },{
  
    "nombre":"Jose",
  
    "idPedido":"PED002",
  
    "producto":"Polo",
  
    "cantidad":4,
  
    "precio":23.50,
  
    "activo":true
  
  },{
  
    "nombre":"Jose",
  
    "idPedido":"PED002",
  
    "producto":"Sandalias",
  
    "cantidad":4,
  
    "precio":39.90,
  
    "activo":true
  
  }])

//   crear una Canalizacion pipeline o stage para convertir a mayusculas el atributo
//   producto , renombrar la salida de este atributo por nombreProducto, generar 02 atributos calculados

db.pedidos.aggregate([{
    $project:{
        "NombreProducto":{$toUpper:"$producto"}, //tienes que poner $ para que el contenido de producto todo sea en mayus
        "precio":1,
        "cantidad":1,
        "subtotal":{$multiply:["$precio","$cantidad"]},
        "cantidadmas10":{$add:["$cantidad",10]},
        "_id":0
    }
}])

// Utilizando 02 pipeline
// Canal1: Convertir a mayuscula el atributo producto,renombrar la salida de este atributo
//         por NombreProduct, generar 02 atributos calculados

// Canal2: Organizar la salida de los atributos

db.pedidos.aggregate([{ //este es el canal 1
    $project:{
        "NombreProducto":{$toUpper:"$producto"}, //tienes que poner $ para que el contenido de producto todo sea en mayus
        "precio":1,
        "cantidad":1,
        "subtotal":
        "cantidadmas10":{$add:["$cantidad",10]},
        "_id":0
    } 
},{ //este es el canal 2
    $replaceRoot:{
        newRoot:{
            "NombreProducto":"$NombreProducto",
            "precio":"$precio",
            "cantidad":"$cantidad",
            "subtotal":"$subtotal",
            "cantidadmas10":"$cantidadmas10"
        }
    }

}])