'use strict'
const CategoriaMenu = require("../models/categoriaMenuModel")

/**
 * Metodo para obtener todas las Categorias del Menu
 * @param {*} req - No se reciben elementos en el payload
 * @param {*} h - Objecto respuesta para envio de datos
 * @returns Collección de todas las categorias de Menu disponibles
 */
async function getCategoriasMenu (req, h) {
    const records = await CategoriaMenu.findAll()
    console.log(records)
    return h.response(records).code(200).type('application/json')
}


module.exports = {
  getCategorias : getCategoriasMenu
}