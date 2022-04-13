'use strict'
const falso = require('@ngneat/falso')
const foods = [...Array(10)].map(() => ({
  name: falso.randFood({ origin: 'india' }),
  origin: 'India'
}))
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('foods', foods)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('foods')
  }
}