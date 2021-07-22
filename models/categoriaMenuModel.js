'use strict'

const Sequelize = require('sequelize')
//importamos nuestra conexion a BD
const setupDatabase = require('../lib/conectDB') 
const sequelize = setupDatabase()

const CtgMenu = sequelize.define('categoria_menu', {
  ID_Ctg_Menu: {
    type: Sequelize.INTEGER,
    allownNull: false,
    primaryKey: true
  },
  Descripcion: {
    type: Sequelize.STRING(200),
    allownNull: false
  }
},
{
  freezeTableName: true,
  timestamps:false
})

module.exports = {
  CategoriaMenu: CtgMenu
}
