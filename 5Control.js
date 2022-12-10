use dbt4bn

db.createCollection("salespera")

// en la cmd , para utilizar el mongo, luego para ingresar el array json

cd C:\Program Files\MongoDB\Tools\100\bin 

mongoimport --db dbt4bn --collection salespera --jsonArray C:\persona.json

// visualizacion sin el id
db.estudiantes.find({},{"_id":0}).pretty()

db.estudiantes.find({"apellidos":"Perez"},{"_id":0}).pretty() //primer {lo que quieres que se vea} , el otro { que no quieres que se vea}

// visualizacion sin el id y sin hermnanos

db.estudiantes.find({"nroHermanos":0},{"_id":0}).pretty()

// visualizacion sin el id y sin hermnanos y en distrito lima

db.estudiantes.find({"nroHermanos":0,"distrito":"Lima"},{"_id":0}).pretty()


db.estudiantes.find({$or:[{"nroHermanos":1 , "distrito":"Surco"}]},{"_id":0}).pretty() // el or es unir condiciones

db.estudiantes.find({"distrito":{$in:["Lima","Surco","Surquillo"]}},{"_id":0}).pretty()

db.estudiantes.find({"nroHermanos":{$gt:3}},{"_id":0}).pretty() //gt(great than) = mayor que

db.estudiantes.find({"nroHermanos":{$gte:3}},{"_id":0}).pretty() ////gte(great than equal) = mayor igual que

db.estudiantes.find({"nroHermanos":{$lt:3}},{"_id":0, "distrito":0,"fecNac":0}).pretty() ////gte(great than) = menor 

db.estudiantes.find({"nroHermanos":{$lte:3}},{"_id":0, "distrito":0,"fecNac":0}).pretty() ////gte(great than) = menor igual que

// para definir rangos entre

db.estudiantes.find({"nroHermanos":{$gte:3, $lte:4}},{"_id":0, "distrito":0,"fecNac":0}).pretty() // >= 3 <=4

db.estudiantes.find({"nroHermanos":{$ne:2}},{"_id":false,"distrito":0,"fecNac":0}).pretty() //ne not equal , que sea diferente que 

db.estudiantes.find({"nombres":/R.*/},{"_id":false}).pretty()

