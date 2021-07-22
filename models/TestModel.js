'use strict'
const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

const sequelize = setupDatabase()

const TestModel = sequelize.define('dbo_procesos', {
  id: {
    type: Sequelize.INTEGER,
    allownNull: false,
    primaryKey: true
  },
  id_robot: {
    type: Sequelize.INTEGER,
    allownNull: false
  },
  fecha: {
    type: Sequelize.DATE,
    allownNull: true
  },
  inicio: {
    type: Sequelize.TIME,
    allownNull: true
  },
  fin: {
    type: Sequelize.TIME,
    allownNull: true
  },
  estatus: {
    type: Sequelize.SMALLINT,
    allownNull: false
  }
})

// TestModel.sync()

module.exports = {
  TestModel: TestModel
}
