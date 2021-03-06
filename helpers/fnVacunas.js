/**
 * Obtiene el body de la web
 * @param {*} $ esta todo el contenido de la web para hacer el webscrapping de los valores que necesito
 * @returns retorno un objeto para devolver un json
 */

const getDosis = ($) => {
  var totalDosis = "",
    total2 = "",
    total3 = "";

  //obtengo las rutas de las etiquetas y exploro hasta llegar a P que es donde esta el value de los datos a sacar
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

  $("div.Home_card__2SdtB:nth-child(3) section div p").each(function (
    i,
    element
  ) {
    const a = $(this).text().trim(); // 51%
    total3 = a;
  });

  // creo el objeto para devolver el json
  //seteo valores totaldosis, primera dosis y segunda dosis en variables

  var obj = {};
  obj.totaldosis = totalDosis;
  obj.primdosis = total2;
  obj.segundadosis = total3;

  return obj;
};

//Retorna las vacunas totales puestas, sput , aztrazeneca y sinpharm
const getVaccines = ($) => {
  sput = "";
  aztra = "";
  sinop = "";
  $(
    "div.Home_card__2SdtB:nth-child(1) section div small:nth-child(1) span"
  ).each(function (i, element) {
    const a = $(this).text().trim(); // 51%
    sput = a;
  });
  $(
    "div.Home_card__2SdtB:nth-child(1) section div small:nth-child(2) span"
  ).each(function (i, element) {
    const a = $(this).text().trim(); // 51%
    aztra = a;
  });
  $(
    "div.Home_card__2SdtB:nth-child(1) section div small:nth-child(3) span"
  ).each(function (i, element) {
    const a = $(this).text().trim(); // 51%
    sinop = a;
  });

  //armado el objeto json con los datos recaudados en las variables del sitio
  var obj = {};
  obj.sputnik = sput;
  obj.aztrazeneca = aztra;
  obj.sinpharm = sinop;
  return obj;
};

//retorna las primeras dosis de sput, aztra y sinpharm
const getVaccinesPrim = ($) => {
  sput = "";
  aztra = "";
  sinop = "";
  $(
    "div.Home_card__2SdtB:nth-child(2) section div small:nth-child(1) span"
  ).each(function (i, element) {
    const a = $(this).text().trim(); // 51%
    sput = a;
  });
  $(
    "div.Home_card__2SdtB:nth-child(2) section div small:nth-child(2) span"
  ).each(function (i, element) {
    const a = $(this).text().trim(); // 51%
    aztra = a;
  });
  $(
    "div.Home_card__2SdtB:nth-child(2) section div small:nth-child(3) span"
  ).each(function (i, element) {
    const a = $(this).text().trim(); // 51%
    sinop = a;
  });

  //armado el objeto json con los datos recaudados en las variables del sitio
  var obj = {};
  obj.sputnik = sput;
  obj.aztrazeneca = aztra;
  obj.sinpharm = sinop;
  return obj;
};

const getVaccinesSeg = ($) => {
  sput = "";
  aztra = "";
  sinop = "";
  $(
    "div.Home_card__2SdtB:nth-child(3) section div small:nth-child(1) span"
  ).each(function (i, element) {
    const a = $(this).text().trim(); // 51%
    sput = a;
  });
  $(
    "div.Home_card__2SdtB:nth-child(3) section div small:nth-child(2) span"
  ).each(function (i, element) {
    const a = $(this).text().trim(); // 51%
    aztra = a;
  });
  $(
    "div.Home_card__2SdtB:nth-child(3) section div small:nth-child(3) span"
  ).each(function (i, element) {
    const a = $(this).text().trim(); // 51%
    sinop = a;
  });

  //armado el objeto json con los datos recaudados en las variables del sitio
  var obj = {};
  obj.sputnik = sput;
  obj.aztrazeneca = aztra;
  obj.sinpharm = sinop;
  return obj;
};

module.exports = {
  getDosis,
  getVaccines,
  getVaccinesPrim,
  getVaccinesSeg,
};
