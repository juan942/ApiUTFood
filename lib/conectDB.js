'use strict'

const Sequelize = require('sequelize')
let sq = null

module.exports = function setupDatabase () {
  if (!sq) {
    // public constructor(database: string, username: string, password: string, options: Object)
    sq = new Sequelize(
      process.env.DB_NAME, 
      process.env.DB_USER, 
      process.env.DB_PASS, {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',
        sync: {
          force: false
        },
      pool: {
        max: 5,
        min: 0,
        idle: 300000,
        acquire: 20000
      },
      define: {
        timestamps: false
      }
    })

    sq.authenticate()
      .then(() => {
        console.log('Connection has been established successfully.')
      })
      .catch(err => {
        console.error('Unable to connect to the database:', err)
      })
  }

  return sq
}
  