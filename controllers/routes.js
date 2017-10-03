let compliments = require('../compliments.js');

module.exports = function(app) {
  app.get('/', (req, res) => {
    res.render('home.hbs', {
      compliments: compliments.getCompliment(),
    })
  }).get('/:name', (req, res) => {
    let name = req.params.name;
    name = titleCase(name);
    res.render('home.hbs', {
      compliments: compliments.getCompliment(),
      name,
    })
  })
};


function titleCase(name, req) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}