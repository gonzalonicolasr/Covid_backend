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

//return: title of web, scrapping html
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
router.get("/vacunas", function (req, res, next) {
  got(vgmUrl)
    .then((response) => {
      const $ = cheerio.load(response.body);
      //llamo funcion para armar json de datos covid

      res.status(200).json({
        status: "Correcto",
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

module.exports = router;
