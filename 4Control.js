// abrir bd parking

use parking

// ver las colleciones de la bd

show collections

// ver los documentos de la coleccion ingresos

db.ingresos.find().pretty();

// CRUD (Create, Read, Update, Delete)

// Actualizar un documento especifico el atributo retiro

db.ingresos.updateOne({"_id":ObjectId("6323d412c2ab7146ce309d9d")},{
    $set : {
        "retiro": true
    }
})

// ver los documentos de la coleccion ingresos

db.ingresos.find().pretty();

// actualizar un documento especifico actualizando el atributo retiro , total y fecha de retiro

db.ingresos.updateOne({"_id":ObjectId("6323d412c2ab7146ce309d9d")},{$set : {
        "retiro": false,
        "total": 10.50, //si no hay este atributo se crea , en todos 
        "fechaRetiro":new Date()

    }
})

// ver los documentos de la coleccion locales

db.locales.find().pretty()

// actualizar todos los documentos de la coleccion con un nuevo horario

db.locales.updateMany({},{$set : {
    "horario": "Lun - Vie 5:00am am - 5:00pm"
    }
})

// Eliminar el atributo horario de la coleccion

db.locales.updateMany({},{$unset:{ //$unset elimina el atributo
    "horario":""
    }
})

// reemplazar un documento de nombre local 1 con nuevos atributos (administrador y activo)

db.locales.replaceOne({"nombre":"local 1"},{ //reemplaza los atributos por los nuevos de ahora
    "administrador":"Javichin", "activo":true
})

// Eliminar el documents de nombre Local 2

db.locales.deleteOne({"nombre":"local 2"})

//eliminar todos los documentos de la collection 

db.locales.deleteMany({})

// crear db con nombre de la seccion t4bm

use t4bn

// crear la coleccion estudiantes e insertar datos 

db.estudiantes.insertMany([{

    "nombres":"Juan Jose",

    "apellidos":"Perez",

    "distrito":"Lima",

    "fecNac":new Date("1999-04-30"),

    "nroHermanos":1

},{

    "nombres":"Luis",

    "apellidos":"Alva",

    "distrito":"Surco",

    "fecNac":new Date("1995-08-12"),

    "nroHermanos":2

},{

    "nombres":"Maria",

    "apellidos":"Nuñez",

    "distrito":"Surco",

    "fecNac":new Date("1993-12-21"),

    "nroHermanos":1

},{

    "nombres":"Rosario",

    "apellidos":"Mendez",

    "distrito":"Surquillo",

    "fecNac":new Date("1994-02-20"),

    "nroHermanos":2

},{

    "nombres":"Ricardo",

    "apellidos":"Muñante",

    "distrito":"Surquillo",

    "fecNac":new Date("1994-11-14"),

    "nroHermanos":2

},{

    "nombres":"Alberto",

    "apellidos":"Polar",

    "distrito":"Miraflores",

    "fecNac":new Date("1993-10-21"),

    "nroHermanos":2

},{

    "nombres":"Diego",

    "apellidos":"Acuña",

    "distrito":"Miraflores",

    "fecNac":new Date("1995-12-12"),

    "nroHermanos":3

},{

    "nombres":"Ana",

    "apellidos":"Rizo",

    "distrito":"Surquillo",

    "fecNac":new Date("1998-07-13"),

    "nroHermanos":4

},{

    "nombres":"Luis",

    "apellidos":"Acosta",

    "distrito":"Lima",

    "fecNac":new Date("1999-01-01"),

    "nroHermanos":0

},{

    "nombres":"Marco",

    "apellidos":"Velarde",

    "distrito":"Lima",

    "fecNac":new Date("1993-05-11"),

    "nroHermanos":0

}])

// ver los documentos de la coleccion

db.estudiantes.find().pretty()

// ver los documentos de la coleccion proyectando ciertos atributos

db.estudiantes.find({},{"nombres":1,"apellidos":1}).pretty() //0 false , 1 true , osea que si se visualice

//ver los documentos de la coleccion proyectando ciertos atributo sin el id de los campos
db.estudiantes.find({},{"nombres":1,"apellidos":1,"_id":0}).pretty()

db.estudiantes.find()