const express = require("express")
//const createError = require("http-errors")
const morgan = require("morgan")

// 4- Creating
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 5- Routing
app.use('/', require('./routes/index'))

// 6- Catch 404
// app.use(function (_req, res, next) {
//   if (process.env.NODE_ENV === "development") next(createError(404));
//   else res.status(404).send({ message: "Not Found" });
// });

module.exports = app;
