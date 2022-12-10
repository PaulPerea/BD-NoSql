use dbt4bn

// Visualizar los indices de una coleccion
db.estudiantes.getIndexes()


// crear e eliminar
db.pedidos.createIndex({"nombre":1}) //al crear le añade un _1, se configura eso

db.pedidos.dropIndex("nombre_1")

//crear un index con nombre en especifico
db.pedidos.createIndex({"nombre":1},{"name":"idxnombre"})


db.estudiantes.dropIndex("apeliidos_1")

// crear 1 index de 2 soluciones
db.estudiantes.createIndex({"nombre":1,"apellidos":1},{"name":"idxcompNomAp"})

// Es recomendable crear indexes a medida de lo necesario regular ya que consume espacio

// Crear un back

>cd C:\Program Files\MongoDB\Tools\100\bin
>mongodump --db dbt4bn --out "C:\data\db\dump" --host "localhost:27017"

db.dropDatabase()

>mongorestore --db dbt4bn C:\data\db\dump\dbt4bn