// crear y acceder a la base de datos parking
use parking

// comprobar que estamos dentro de la BD
db

// crear la collection ingresos ingresado 01 documento

db.ingresos.insert({
    "placa":"C0123",
    "ubicacion":"E18",
    "costoHora":2.3,
    "fechaIngreso":new Date(),  //con hora gmt, osea la fecha de sistema , puedes ingresar fecha cualquiera, 
    "fechaIngresoString":Date(), //asume la fecha de sistema sin la hora de gmt , te devuelve en string , puedes cambiar
    "numeroPasajeros":3,
    "retiro":false,
    "contacto":["39834839","2892398427","contacto@gmail.com"],
    "encargado":{ //esto se llama documento anidado
        "nombre":"Juan",
        "apellido":"Perea",
        "dni":"9238831"
    }
})

// crear una collection encargados ingresado un unico documento
db.encargados.insertOne({
    "nombre":"Jose",
    "apellidos":"Peña",
    "dni":"928392844",
    "fechaNacimiento":new Date("1975-02-21")
})

//ver documento ingresado
db.encargados.find().pretty()

// Creando coleccion locales ingreesando varios documentos
db.locales.insertMany([{
    "nombre":"local 1",
    "direccion":"Los portales",
    "horario":"Lun-Sab 08:00 am - 08:00 pm"
},{
    "nombre":"local 2",
    "direccion":"Av. Izaguirre",
    "horario":"Lun - Vie 08:00 am - 09:00 pm"
},{
    "nombre":"local 3",
    "direccion":"Av.GAAAA",
    "horario":"Lun - Mie 09:00 am - 19:30 pm"
}])