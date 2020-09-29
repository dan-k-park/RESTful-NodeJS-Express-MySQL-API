const Sequelize = require("sequelize")
const db = require("../config/db")

const Tutorial = db.define("tutorial", {
  title: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  published: {
    type: Sequelize.BOOLEAN
  }
})

Tutorial.sync().then(() => {
  console.log("Tutorials table created")
})

module.exports = Tutorial