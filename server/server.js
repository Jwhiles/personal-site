const hapi = require('hapi');
const inert = require('inert');
const path = require('path');
const server = new hapi.Server();

server.connection({
  port: (process.env.PORT || 8080)
});

server.register(inert, (err) => {
  if (err) { throw err; }
  server.route([{
    path: `/`,
    method: `GET`,
    handler: (req, rep) => {
      console.log('hi');
      rep.file(path.join(__dirname, `../src/pages/index.html`));
    }
  }, {
    path: '/src/{folder}/{file}',
    method: `GET`,
    handler: (req, rep) => {
      rep.file(`./src/${req.params.folder}/${req.params.file}`);
    }
  }]);
});

module.exports = server;
