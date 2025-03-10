/* eslint-disable no-undef */
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // Your fake database
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports = server;