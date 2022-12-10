
// Combinacion

db.notas.insertMany([

    {
  
    "idMatricula":"i9494949494",
  
    "nombres":"Juan Perez",
  
    "ciclo":"2022-01",
  
    "cursos":[
  
      {
  
        "codCurso":"MAT-I",
  
        "nombreCurso":"Matematica I",
  
        "notas":[
  
          {"nroExamen":"Practica I","nota":16},
  
          {"nroExamen":"Practica II","nota":18},
  
          {"nroExamen":"Practica III","nota":14},
  
          {"nroExamen":"Practica IV","nota":16}]
  
      },
  
      {
  
        "codCurso":"FIS-I",
  
        "nombreCurso":"Fisica I",
  
        "notas":[
  
          {"nroExamen":"Practica I","nota":12},
  
          {"nroExamen":"Practica II","nota":12},
  
          {"nroExamen":"Practica III","nota":11},
  
          {"nroExamen":"Practica IV","nota":13}]
  
  
  
      },
  
      {
  
        "codCurso":"QU-I",
  
        "nombreCurso":"Quimica I",
  
        "notas":[
  
          {"nroExamen":"Practica I","nota":18},
  
          {"nroExamen":"Practica II","nota":16},
  
          {"nroExamen":"Practica III","nota":14},
  
          {"nroExamen":"Practica IV","nota":19}]
  
  
  
      }]
  
    }
  
  ])

//   Combinar el documento principal con el subdocumento cursos

db.notas.aggregate([
    {
        $unwind:"$cursos" //unwind es como un join = combinar
    }
]).pretty()

//Combinar el documento principal con el subdocumento cursos y con el subdocumento notas

db.notas.aggregate([
    {
        $unwind:"$cursos"
    },
    {
        $unwind:"$cursos.notas"
    }
]).pretty()

//Combinar el documento principal con el subdocumento cursos y con el subdocumento notas
// Proyectar ciertos atributo

db.notas.aggregate([
    {
        $unwind:"$cursos"
    },
    {
        $unwind:"$cursos.notas"
    },
    {
        $project:{
            "_id":0,
            "nombres":1,
            "cursos.nombreCurso":1,
            "cursos.notas.nroExamen":1,
            "cursos.notas.nota":1
        }
    }
])

// Combinando con 02 subdocumentos(cursos - notas), agrupar y definir atributos a proyectar

db.notas.aggregate([
    {
        $unwind:"$cursos"
    },
    {
        $unwind:"$cursos.notas"
    },
    {
        $group:{
            _id:{"nombres":"$nombres","curso":"$cursos.nombreCurso"},
            "promedio":{"$avg":"$cursos.notas.nota"}
        }
    },
    {
        $project:{
            "_id":0,
            "Alumno":"$_id.nombres",
            "Curso":"$_id.curso",
            "promedio":1
        }
    }
]) 