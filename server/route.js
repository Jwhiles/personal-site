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

const fourOhFour = {
  method: '*',
  path: '/{p*}',
  handler: (req, rep) => {
    rep('404040404004').code(404);
  }
};

module.exports = [
  home,
  files,
  fourOhFour
];
