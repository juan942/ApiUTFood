'use strict'
const uuidv1 = require('uuid/v1')
const { IngParaModel } = require('../Models/ing_parametricas')
const { IngCatBancosModel } = require('../Models/ing_cat_bancos')

async function getBancos (req, h) {
  const records = await IngCatBancosModel.findAll({})

  return h.response(records).code(200).type('application/json')
}

async function insertBanco (req, h) {
  /*const newRecord = await IngCatBancosModel.findOrCreate({
    where:{
      id_cnbv: req.payload.id_cnbv
    },
    defaults:{
      id_cnbv: req.payload.id_cnbv,
      nombre: req.payload.nombre,
      nombre_corto: req.payload.nombre
    }
  })*/
 console.log(uuidv1())
  const newRecord = IngParaModel.create({
    name: '',
    modified_user_id:  1,
    created_by: 1,
    description: null,
    deleted:  0,
    assigned_user_id: null,
    id_catalogo: 'ing_cat_bancos',
    id_interno: 150,
    id_investa: 150,
    descripcion: req.payload.nombre,
    ing_visible: 1
  })

return h.response(newRecord).code(200).type('application/json')
}

module.exports = {
    getBancos: getBancos,
    insertBanco: insertBanco
}
