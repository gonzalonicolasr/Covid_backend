var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const DEFAULT_PORT = 6420;
const port = DEFAULT_PORT;

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var dataRouter = require("./routes/dataCovid");
var app = express();
// Configurar cabeceras y cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//Extended swagger docu
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Covid Api ",
      description: "Api para obtener valores de vacunacion en argentina",
      contact: {
        name: "Gonzalo Rocca",
        email: "gonn.nicolas@gmail.com",
      },
      servers: ["http://localhost:6420"],
    },
  },
  // ['.routes/*.js']
  apis: ["./routes/dataCovid.js"],
};
//creo servidor con la configuracion swagger
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
// Routes
/**
 * @swagger
 * /data/dosis:
 *  get:
 *    description: utilizado para obtener todas las dosis aplicadas
 *    responses:
 *      '200':
 *        description: respuesta obtenemos un json con todas las dosis aplicadas en argentina
 */

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/data", dataRouter);

app.listen(port);
console.log("Server iniciado en puerto: " + port + "...");
module.exports = app;
