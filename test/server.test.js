const tape = require('tape');
const server = require('../server/server');

tape('It should be able to start the server', (t) => {
  server.start((err) => {
    if (err) {
      t.error();
    } else {
      t.pass(`It's running`);
    }
    server.stop({}, t.end);
  });
});

tape('It should handle a request', (t) => {
  const opts = {
    method: `GET`,
    url: `/`
  };

  server.start((err) => {
    if (err) {
      t.error();
    } else {
      server.inject(opts, (res) => {
        t.equal(res.statusCode, 200, 'should recieve status code 200');
      });
    }
  });
});
