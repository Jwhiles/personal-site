const home = {
  method: 'GET',
  path: '/',
  handler: (req, rep) => {
    rep.file('pages/index.html');
  }
};

const files = {
  method: 'GET',
  path: '/{file*}',
  handler: {
    directory: {
      path: '.'
    }
  }
};

module.exports = [
  home,
  files
];
