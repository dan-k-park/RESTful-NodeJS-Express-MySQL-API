const express = require("express");
const cors = require("cors");

// Database
const db = require("./app/config/db")

// Test DB
db.authenticate()
.then(() => console.log('Database connected'))
.catch(err => console.log('Error ' + err))

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db")
// })
const app = express();

var corsOptions = {
  origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

// Parse requests of content-type: application/json
app.use(express.json());

// Parse requests of content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/tutorials', require("./app/routes/tutorial.routes"))

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})