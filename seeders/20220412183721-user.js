'use strict'
const falso = require('@ngneat/falso')
const users = [...Array(100)].map(() => ({
  username: falso.randUserName(),
  email: falso.randEmail(),
  password: falso.randPassword()
}))
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', users)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users')
  }
}
