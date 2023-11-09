const express = require('express');
const path = require('path');

let configViewEngine = (app) => {
    app.use(express.static("./public"));
    app.set("application/javascript","js");
    // app.set("text/css","css");
    app.set("views", path.join(__dirname,"views"));
    app.set("view engine", "ejs");
    app.set("views", "./views");
    app.use(express.static(path.join(__dirname,"public")));
}

module.exports = configViewEngine;