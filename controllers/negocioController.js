'use strict'

function showNegocios(req,h){
    return h.response(`¡Hola ${req.playload.name}!`)
}

module.exports = {
    negocios : showNegocios
}