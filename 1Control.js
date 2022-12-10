// creando la base de datos NoSql y usando la misma

use ecomerce

// Creando una coleccion a partir de un ingreso de un documento

db.clientes.insert({
    "nombre":"Juan",
    "apellidos":"Perez",
    "dni":"000000001"
})

// consultar el documento insertado

db.clientes.find()

// una consulta mas ordenada

db.clientes.find().pretty()

// Insertar otro documento

db.clientes.insertOne({
    "_id":"C001",
    "nombre":"Jorge",
    "apellidos":"Anto"
})

// Crear una nueva collecion

db.createCollection("Empleados")

// Ver colleciones creadas

show Collection

// Insertar nuevos documento a la coleccion creada

db.Empleados.insertOne({
    "_id":"C002",
    nombre:"Luo",
    apellidos:"lopez",
    email:"lipe@gmail.com"
})