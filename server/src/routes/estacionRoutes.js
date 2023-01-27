"use strict"
//Api de Express
const express = require('express')
const router = express.Router()
const pool = require("../database")
const fs = require("fs")
const path = require("path")
const axios = require("axios")
const { resolve } = require('path')
const { rejects } = require('assert')

const utm = require("utm")


//Guardando en la base de dato. Minha controladora



/*const downloadTxt = async () => {
  const url = "http://www.uhu.es/jluis.dominguez/AGI/estaciones.txt"
  const txtPath = path.resolve(__dirname, "estaciones.txt")
  const writer = fs.createWriteStream(txtPath).to
  const response = await axios({
    url: url,
    method: "GET",
    responseType: "stream"
  })

  response.data.pipe(writer)

  return new Promise((resolve, reject) => {
    writer.on("finish", resolve)
    writer.on("error", reject)
  })

}*/


let estaciones = ""

const tratamiento = () => {
  //Leer los datos
  let buffer = fs.readFileSync(__dirname + "/" + "estaciones.txt", "latin1")
  estaciones = buffer.toString()
  estaciones = estaciones.split("\n").join(",");
  estaciones = estaciones.split("\r").join("")
  estaciones = estaciones.split("PROVINCIA,NOMBRE,XUTM,YUTM,")
  estaciones = estaciones[1].split(",")

 
}

//tratamiento()

//isertar datos en la bd pg
const insertarEstaciones = async (req, res) => {
  for (let index = 0; index < estaciones.length; index++) {
    let provincia = estaciones.shift()
    let nombre = estaciones.shift()
    const latLon = utm.toLatLon(estaciones.shift(), estaciones.shift(), 30, 'N');
    let lat = latLon.latitude
    let lang = latLon.longitude

    pool.query('INSERT INTO public."ESTACIONES"(provincia, nombre, latitud, longitud)VALUES ($1, $2, $3, $4)', [provincia, nombre, lat, lang], (err, value) => {
      if (value != undefined) {

      } else {
        console.log(err)

      }
    })
  }
}

//insertarEstaciones()

const getAll = async (req, res) => {
  pool.query('SELECT * FROM "ESTACIONES"', (err, value) => {
    if (value != undefined) {
      res.send(value.rows)

    } else {
      console.log(err)

    }
  })
}


const getByProvince = async (req, res) => {
  const { provincia } = req.params
  pool.query('SELECT distinct provincia, nombre, latitud, longitud FROM "ESTACIONES" WHERE provincia=$1', [provincia], (err, value) => {
    if (value != undefined) {
      res.send(value.rows)

    } else {
      console.log(err)

    }
  })
}

const getAllProvince = async (req, res) => {
  const { provincia } = req.params
  pool.query('SELECT distinct  provincia FROM "ESTACIONES"', (err, value) => {
    if (value != undefined) {
      res.send(value.rows)

    } else {
      console.log(err)

    }
  })
}


router.get('/getAll', getAll);
router.get('/getByProvince/:provincia', getByProvince);
router.get('/getAllProvince', getAllProvince);


module.exports = router;
