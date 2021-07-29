var express = require("express");
var router = express.Router();
const got = require("got");
const cheerio = require("cheerio");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
//URL PATH
const vgmUrl = "https://covid-vacuna-ar.vercel.app/";
/* GET users listing. */

//return: title of web, scrapping html
router.get("/", function (req, res, next) {
  got(vgmUrl)
    .then((response) => {
      const $ = cheerio.load(response.body);
      //llamo funcion para armar json de datos covid

      var arResult = [];
      //:nth-child(2) para obtener el siguiente elemento en el mismo nivel

      res.status(200).json({
        status: "Correcto",
        data: resultJsonVac($),
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

function resultJsonVac($) {
  var totalDosis = "",
    total2 = "";

  $("div.Home_card__2SdtB:nth-child(1) section div p").each(function (
    i,
    element
  ) {
    const a = $(this).text().trim(); // 51%
    totalDosis = a;
  });
  $("div.Home_card__2SdtB:nth-child(2) section div p").each(function (
    i,
    element
  ) {
    const a = $(this).text().trim(); // 51%
    total2 = a;
  });
  /* $("div.Home_card__2SdtB:nth-child(3) section div p").each(function (
    i,
    element
  ) {
    const a = $(this).text().trim(); // 51%
    arResult.push(a);
  });*/
  var resultado = JSON.stringify({
    totaldosis1: totalDosis,
    totalVacunados1: total2,
  });
  return resultado;
}

module.exports = router;
