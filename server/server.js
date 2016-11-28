const hapi = require('hapi');
const inert = require('inert');
const path = require('path');
const routes = require('./route.js');
const server = new hapi.Server();

server.connection({
  port: (process.env.PORT || 8080),
  host: process.env.IP || '0.0.0.0',
  routes: {
    files: {
      relativeTo: path.join(__dirname, '../src')
    }
  }
});

server.register(inert, () => {
  server.route(routes);
}
);

module.exports = server;
