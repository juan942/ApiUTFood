'use strict'

// Agragamos la Lib Joi para validar la Data que recibimos desde el Front
const Joi = require('joi')

// Aqui importaremos todos los controllers a usar en cada Handler
const categoria_Menu = require('./controllers/categoriaMenuController') // importamos nuestro controllador

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Hello World!'
        }
    },
    {
        method: 'GET',
        path: '/ctgmenus',
        handler: categoria_Menu.getCategorias,
        options: {
            description: 'Retornar todas las categorias de Menus disponibles',
            notes: 'Lista todas las categorias de Menus registrados en la BD',
            tags: ['api','categorias','menu'] // ADD THIS TAG
            /*validate: {
                payload: Joi.object({
                    post: Joi.string().min(1).max(140)
                })
            }*/
        }
    }
]