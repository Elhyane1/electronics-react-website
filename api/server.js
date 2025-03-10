/* eslint-disable no-undef */
const express = require("express");
const jsonServer = require("json-server");

const app = express();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use(router);

// Export the serverless function
module.exports = app;
