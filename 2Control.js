// crear una collection vacia

db.createCollection("Empleados")

// mala practica , ejemp : nombre va con commillas y lo que le domina

db.clientes.insert({
    nombre:"Juan",
    perea:"Perez",
    email:"000000001@gaaa.com"
})

// crear una colleccion definiendo 02 atributos necesarios


db.createCollection("usuarios",{
    validator:{ //el validor json
        $jsonSchema:{
            bsonType:"object", //tipo documento = objecto
            required:["usuario","status"],
            properties:{
                usuario:{
                    bsonType:"string", //como un varchar
                    maxLength:30 
                },
                status:{
                    enum:["activo","inactivo"]//para que solo me permita ingresar esos valores
                }
            }
        }
    }
})

//ingresando documnetos a la coleccion usuarios

db.usuarios.insertOne({
    usuario:'jPerez',
    status:'activo'
})

// ingresar documento fallido a la collection usuarios
//tienes que escribir los parametros escritos

db.usuarios.insertOne({
    usuario:'jnapan',
    telefono:'4846',
    dni:'2016816'
})

// corrigiendo documento fallido a la collection usuarios

db.usuarios.insertOne({
    usuario:'jnapan',
    telefono:'4846',
    dni:'2016816',
    status:'activo'
})

// ingresar documento fallido a la collection usuarios

db.usuarios.insertOne({
    usuario:'jnapan',
    status:'ACTIVO'
})

// ingresar documento fallido a la collection usuarios

db.usuarios.insertOne({
    usuario:'esto es un ejemplo de los 30 max gaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdhjfijsiesto si va a dar esta vez gaaaaaa',
    status:'correcto'
})