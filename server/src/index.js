
const express = require("express");
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors");
const estacionRoutes = require("./routes/estacionRoutes");


//Configurando el servidor
app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())
app.use(express.json());


//Database
require("./database");


//ruta al servidor
app.use("/", estacionRoutes)

//Starting server
app.listen(app.get("port"), () => {
  console.log("Server on port: ", app.get("port"));
});



