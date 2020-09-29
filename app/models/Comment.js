const Sequelize = require("sequelize")
const db = require("../config/db")

const Comment = db.define("comment", {
  name: {
    type: Sequelize.STRING
  },
  text: {
    type: Sequelize.STRING
  }
})

Comment.sync().then(() => {
  console.log("Comments table created")
})

module.exports = Comment