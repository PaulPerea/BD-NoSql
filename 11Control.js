use dbt4bn

db.createCollection("pop")

db.pop.insertMany([
    {
        "_id":"R001",
        "region":"Lima",
        "Clima":"Templado",
        "provincia":[
            {
                "nombre":"Yauyos",
                "tipo":"Rural",
                "distritos":[
                    {
                        "nombre":"Colonia",
                        "consumo":[
                            {
                                "nombreBebida":"CocaCola",
                                "cantidadPersonas":2300
                            },
                            {
                                "nombreBebida":"Inka Cola",
                                "cantidadPersonas":4300
                            },
                            {
                                "nombreBebida":"Agua Cielo",
                                "cantidadPersonas":300
                            }
                        ]
                    },
                    {
                        "nombre":"Tauripampa",
                        "consumo":[
                            {
                                "nombreBebida":"CocaCola",
                                "cantidadPersonas":2300
                            },
                            {
                                "nombreBebida":"Inka Cola",
                                "cantidadPersonas":4300
                            },
                            {
                                "nombreBebida":"Agua Cielo",
                                "cantidadPersonas":300
                            }
                        ]
                    },
                    {
                        "nombre":"Omas",
                        "consumo":[
                            {
                                "nombreBebida":"CocaCola",
                                "cantidadPersonas":2300
                            },
                            {
                                "nombreBebida":"Inka Cola",
                                "cantidadPersonas":4300
                            },
                            {
                                "nombreBebida":"Agua Cielo",
                                "cantidadPersonas":300
                            }
                        ]
                    },
                    {
                        "nombre":"Laraos",
                        "consumo":[
                            {
                                "nombreBebida":"CocaCola",
                                "cantidadPersonas":2300
                            },
                            {
                                "nombreBebida":"Inka Cola",
                                "cantidadPersonas":4300
                            },
                            {
                                "nombreBebida":"Agua Cielo",
                                "cantidadPersonas":1300
                            }
                        ]
                    }
                ]
            },
            {
                "nombre":"Lima",
                "tipo":"Urbana",
                "distritos":[
                    {
                        "nombre":"Comas",
                        "consumo":[
                            {
                                "nombreBebida":"CocaCola",
                                "cantidadPersonas":6300
                            },
                            {
                                "nombreBebida":"Inka Cola",
                                "cantidadPersonas":9300
                            },
                            {
                                "nombreBebida":"Agua Cielo",
                                "cantidadPersonas":4300
                            }
                        ]
                    },
                    {
                        "nombre":"San Borja",
                        "consumo":[
                            {
                                "nombreBebida":"CocaCola",
                                "cantidadPersonas":14300
                            },
                            {
                                "nombreBebida":"Inka Cola",
                                "cantidadPersonas":18300
                            },
                            {
                                "nombreBebida":"Agua Cielo",
                                "cantidadPersonas":3700
                            }
                        ]
                    },
                    {
                        "nombre":"La Molina",
                        "consumo":[
                            {
                                "nombreBebida":"CocaCola",
                                "cantidadPersonas":7300
                            },
                            {
                                "nombreBebida":"Inka Cola",
                                "cantidadPersonas":5300
                            },
                            {
                                "nombreBebida":"Agua Cielo",
                                "cantidadPersonas":2300
                            }
                        ]
                    },
                    {
                        "nombre":"Independencia",
                        "consumo":[
                            {
                                "nombreBebida":"CocaCola",
                                "cantidadPersonas":6300
                            },
                            {
                                "nombreBebida":"Inka Cola",
                                "cantidadPersonas":9300
                            },
                            {
                                "nombreBebida":"Agua Cielo",
                                "cantidadPersonas":7300
                            }
                        ]
                    },
                    {
                        "nombre":"Surco",
                        "consumo":[
                            {
                                "nombreBebida":"CocaCola",
                                "cantidadPersonas":5300
                            },
                            {
                                "nombreBebida":"Inka Cola",
                                "cantidadPersonas":122300
                            },
                            {
                                "nombreBebida":"Agua Cielo",
                                "cantidadPersonas":19300
                            }
                        ]
                    } 
                ]
            },
            
        ]
    },
    {
        "_id":"R002",
        "region":"Arequipa",
        "Clima":"Frio",
        "provincia":[
            {
                "nombre":"Camaná",
                "tipo":"Rural",
                "distritos":[
                    {
                        "nombre":"Ocoña",
                        "consumo":[
                            {
                                "nombreBebida":"CocaCola",
                                "cantidadPersonas":1300
                            },
                            {
                                "nombreBebida":"Inka Cola",
                                "cantidadPersonas":3300
                            },
                            {
                                "nombreBebida":"Agua Cielo",
                                "cantidadPersonas":3700
                            }
                        ]
                    },
                    {
                        "nombre":"Quilca",
                        "consumo":[
                            {
                                "nombreBebida":"CocaCola",
                                "cantidadPersonas":3300
                            },
                            {
                                "nombreBebida":"Inka Cola",
                                "cantidadPersonas":7300
                            },
                            {
                                "nombreBebida":"Agua Cielo",
                                "cantidadPersonas":2300
                            }
                        ]
                    },
                    {
                        "nombre":"Mariscal Cáceres",
                        "consumo":[
                            {
                                "nombreBebida":"CocaCola",
                                "cantidadPersonas":5300
                            },
                            {
                                "nombreBebida":"Inka Cola",
                                "cantidadPersonas":3300
                            },
                            {
                                "nombreBebida":"Agua Cielo",
                                "cantidadPersonas":3300
                            }
                        ]
                    },
                    {
                        "nombre":"San Jerónimo",
                        "consumo":[
                            {
                                "nombreBebida":"CocaCola",
                                "cantidadPersonas":6300
                            },
                            {
                                "nombreBebida":"Inka Cola",
                                "cantidadPersonas":4200
                            },
                            {
                                "nombreBebida":"Agua Cielo",
                                "cantidadPersonas":2300
                            }
                        ]
                    }
                ]
            },
            {
                "nombre":"Caravelí",
                "tipo":"Rural",
                "distritos":[
                    {
                        "nombre":"Acari",
                        "consumo":[
                            {
                                "nombreBebida":"CocaCola",
                                "cantidadPersonas":6300
                            },
                            {
                                "nombreBebida":"Inka Cola",
                                "cantidadPersonas":9300
                            },
                            {
                                "nombreBebida":"Agua Cielo",
                                "cantidadPersonas":4300
                            }
                        ]
                    },
                    {
                        "nombre":"Atico",
                        "consumo":[
                            {
                                "nombreBebida":"CocaCola",
                                "cantidadPersonas":14300
                            },
                            {
                                "nombreBebida":"Inka Cola",
                                "cantidadPersonas":18300
                            },
                            {
                                "nombreBebida":"Agua Cielo",
                                "cantidadPersonas":3700
                            }
                        ]
                    },
                    {
                        "nombre":"Bella Unión",
                        "consumo":[
                            {
                                "nombreBebida":"CocaCola",
                                "cantidadPersonas":5300
                            },
                            {
                                "nombreBebida":"Inka Cola",
                                "cantidadPersonas":3500
                            },
                            {
                                "nombreBebida":"Agua Cielo",
                                "cantidadPersonas":2300
                            }
                        ]
                    },
                    {
                        "nombre":"Quilcaña",
                        "consumo":[
                            {
                                "nombreBebida":"CocaCola",
                                "cantidadPersonas":2300
                            },
                            {
                                "nombreBebida":"Inka Cola",
                                "cantidadPersonas":7200
                            },
                            {
                                "nombreBebida":"Agua Cielo",
                                "cantidadPersonas":7300
                            }
                        ]
                    },
                    {
                        "nombre":"Lomas",
                        "consumo":[
                            {
                                "nombreBebida":"CocaCola",
                                "cantidadPersonas":5300
                            },
                            {
                                "nombreBebida":"Inka Cola",
                                "cantidadPersonas":122300
                            },
                            {
                                "nombreBebida":"Agua Cielo",
                                "cantidadPersonas":19300
                            }
                        ]
                    } 
                ]
            },
            {
                "nombre":"Castilla",
                "tipo":"Rural",
                "distritos":[
                    {
                        "nombre":"Andaua",
                        "consumo":[
                            {
                                "nombreBebida":"CocaCola",
                                "cantidadPersonas":1300
                            },
                            {
                                "nombreBebida":"Inka Cola",
                                "cantidadPersonas":3300
                            },
                            {
                                "nombreBebida":"Agua Cielo",
                                "cantidadPersonas":700
                            }
                        ]
                    },
                    {
                        "nombre":"Orcopampa",
                        "consumo":[
                            {
                                "nombreBebida":"CocaCola",
                                "cantidadPersonas":5300
                            },
                            {
                                "nombreBebida":"Inka Cola",
                                "cantidadPersonas":8300
                            },
                            {
                                "nombreBebida":"Agua Cielo",
                                "cantidadPersonas":5300
                            }
                        ]
                    }
                ]
            }
        ]
    }
])

// Indices

db.estudiantes.find()

db.estudiantes.getIndexes()

// Crear indice

db.estudiantes.createIndex({"apeliidos":1}) //si quieres en forma de atras ponle -1

db.estudiantes.createIndex({"nombres":-1},{name:"idxNombre"})