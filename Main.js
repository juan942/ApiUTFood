'use strict'

const Hapi = require('@hapi/hapi')
const routes = require('./routes')
const Inert = require('@hapi/inert')
const Vision = require('@hapi/vision')
const HapiSwagger = require('hapi-swagger')
const Pack = require('./package')

//Declaramos nuestro servidor
const server = Hapi.server({
    port: process.env.port || 3000,
    host: '0.0.0.0'
})

async function init () {
    const swaggerOptions = {
        info: {
            title: 'API Rest - Documentacion',
            version: Pack.version,
        },
    }
    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }
    ])

    try {
        server.route(routes)
        await server.start()
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
    console.log('Server running on %s', server.info.uri)
}

init ()