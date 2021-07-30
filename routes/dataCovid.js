var express = require("express");
var router = express.Router();
const got = require("got");
const cheerio = require("cheerio");
const jsdom = require("jsdom");
const fnVacunas = require("../helpers/fnVacunas");
const { JSDOM } = jsdom;
//URL PATH
const vgmUrl = "https://covid-vacuna-ar.vercel.app/";
/* GET users listing. */
// Routes
/**
 * @swagger
 * /data/dosis:
 *  get:
 *    description: utilizado para obtener todas las dosis aplicadas, primera y segunda dosis
 *    responses:
 *      '200':
 *        description: respuesta obtenemos un json con todas las dosis aplicadas en argentina
 */
router.get("/dosis", function (req, res, next) {
  got(vgmUrl)
    .then((response) => {
      const $ = cheerio.load(response.body);
      //llamo funcion para armar json de datos covid
      res.status(200).json({
        status: "Correcto",
        data: fnVacunas.getDosis($),
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        status: "Error",
        data: err,
      });
    });
});

/**
 * @swagger
 * /data/totaldosis:
 *  get:
 *    description: utilizado para obtener todas las dosis de las diferentes vacunas, sputnik, astrazeneca y sinhoparm
 *    responses:
 *      '200':
 *        description: respuesta obtenemos un json con todas las dosis de los diferentes laboratorios en argentina
 */
router.get("/totaldosis", function (req, res, next) {
  got(vgmUrl)
    .then((response) => {
      const $ = cheerio.load(response.body);
      //llamo funcion para armar json de datos covid

      res.status(200).json({
        status: "Total Dosis",
        //llamo helper para obtener vacunas
        data: fnVacunas.getVaccines($),
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        status: "Error",
        data: err,
      });
    });
});

/**
 * @swagger
 * /data/primeradosis:
 *  get:
 *    description: utilizado para obtener todas las priumeras dosis de las vacunas sputnik, astrazeneca y sinhoparm
 *    responses:
 *      '200':
 *        description: respuesta obtenemos un json con todas las dosis de los diferentes laboratorios en argentina
 */
router.get("/primeradosis", function (req, res, next) {
  got(vgmUrl)
    .then((response) => {
      const $ = cheerio.load(response.body);
      //llamo funcion para armar json de datos covid

      res.status(200).json({
        status: "Total Primera Dosis",
        //llamo helper para obtener vacunas
        data: fnVacunas.getVaccinesPrim($),
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        status: "Error",
        data: err,
      });
    });
});

/**
 * @swagger
 * /data/segundadosis:
 *  get:
 *    description: utilizado para obtener todas las segundas dosis de las vacunas sputnik, astrazeneca y sinhoparm
 *    responses:
 *      '200':
 *        description: respuesta obtenemos un json con todas las dosis de los diferentes laboratorios en argentina
 */
router.get("/segundadosis", function (req, res, next) {
  got(vgmUrl)
    .then((response) => {
      const $ = cheerio.load(response.body);
      //llamo funcion para armar json de datos covid

      res.status(200).json({
        status: "Total segunda Dosis",
        //llamo helper para obtener vacunas
        data: fnVacunas.getVaccinesSeg($),
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        status: "Error",
        data: err,
      });
    });
});

module.exports = router;
