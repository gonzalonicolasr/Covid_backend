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
