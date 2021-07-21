'use strict'

const Joi = require('joi')
const negocios = require('./controllers/negocio') // importamos nuestro controllador

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
        path: '/negocios',
        handler: negocios.negocios,
        options: {
            description: 'Listar todos los Negocios',
            notes: 'Lista todos los negocios registrados en la BD',
            tags: ['api','negocios','All negocios'] // ADD THIS TAG
            /*validate: {
                payload: Joi.object({
                    post: Joi.string().min(1).max(140)
                })
            }*/
        }
    }
]