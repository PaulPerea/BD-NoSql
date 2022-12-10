
use bdt4n

show collection


// inserter nuevos documentos a la coleccion estudiantes

db.estudiantes.insertMany([{
    "nombres":"Jose",
    "apellidos":"Valenzuela",
    "distrito":"Surco",
    "fecNac":ISODate("1996-09-25"),
    "nroHermanos":1,
    "dni":76290135
},{
    "nombres":"Martin",
    "apellidos":"Vizcarra",
    "distrito":"Surquillo",
    "fecNac":ISODate("1924-05-08"),
    "nroHermanos":3,
    "dni":8888888

}])

// Leer todos los documentos sin considerar el id, apellidosy distritos

db.estudiantes.find({},{"_id":false,"apellidos":0,"distrito":0})

// Lerr todos los dodcumentos que tienen con el dni

db.estudiantes.find({"dni":{$exists:true}},{"_id":false,"apellidos":0,"distrito":0})

// Leer todos los documentos que no tienen dni

db.estudiantes.find({"dni":{$exists:false}},{"_id":false,"apellidos":0,"distrito":0})

// Otras maneras de colocar parametros en false y true--------------

// Lerr todos los dodcumentos que tienen con el dni

db.estudiantes.find({"dni":{$exists:1}},{"_id":false,"apellidos":0,"distrito":0})

// Leer todos los documentos que no tienen dni

db.estudiantes.find({"dni":{$exists:0}},{"_id":false,"apellidos":0,"distrito":0})

//Crear 03 nuevos documentos en la coleccion estudiantes, ingresando un documento anidado

db.estudiantes.insertMany([
    {
        "nombres":"Yolanda",
        "apellidos":"Suares",
        "distrito":"Surco",
        "apoderado":{
            "nombre":"Jose",
            "ocupacion":"Ingeniero"
        }
    },
    {
        "nombres":"Pablo",
        "apellidos":"Contreras",
        "distrito":"San Martin",
        "apoderado":{
            "nombre":"Pedro",
            "ocupacion":"Montacarga"
        }
    },
    {
        "nombres":"Lucho",
        "apellidos":"Alcides",
        "distrito":"Barranca",
        "apoderado":{
            "nombre":"Friason",
            "ocupacion":"Tienda"
        }
    }
])

// crear 03 nuevos documentos que tendrá un atributo array (lista)

db.estudiantes.insertMany([
    {
        "nombres":"Liza",
        "apellidos":"Torres",
        "distrito":"Surco",
        "FecNac":ISODate("1954-02-02"),
        "nroHermanos":2,
        "dni":"9849888",
        "deportes":["Voley","Futbol"]
    },
    {
        "nombres":"Wndy",
        "apellidos":"Sanches",
        "distrito":"Surquillo",
        "FecNac":ISODate("1865-09-02"),
        "nroHermanos":4,
        "dni":"84984988",
        "deportes":["Futbol","Ajedrez"]
    },
    {db.productos.find({"categoria":"Beverage","categoria":"Seafood","precio":{$gt:50}},{"_id":0}).pretty()
        "nombres":"Paul",
        "apellidos":"Perea",
        "distrito":"San Martin",
        "FecNac":ISODate("1950-02-18"),
        "nroHermanos":4,
        "dni":"84984988",
        "deportes":["Natacion","Voley"]
    },
    {
        "nombres":"Piero",
        "apellidos":"Camacho",
        "distrito":"Comas",
        "FecNac":ISODate("1950-04-08"),
        "nroHermanos":8,
        "dni":"83348934",
        "deportes":["Dota","Valorant"]
    }
])

// Leer documentos usando proyeccion
db.estudiantes.find({},{"nombres":1,"deportes":true,"_id":false})

// Leer documentos que practiquen el deporte Futbol, tambien usando proyeccion
db.estudiantes.find({"deportes":"Futbol"},{"nombres":1,"deportes":true,"_id":false})

// leer documentos que practiquen los deportes Futbol y Voley  , tambien usando proyeccion
db.estudiantes.find({"deportes":"Futbol","deportes":"Voley"},{"_id":false})

//
db.estudiantes.find({"apoderado.ocupacion":"Doctor"},{"_id":false}).pretty()

db.estudiantes.find({"apoderado.ocupacion":"Tienda"},{"_id":false})