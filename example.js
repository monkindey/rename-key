var keyModifier = require('./index.js');

var person = require('./fixture.js');

const modified = keyModifier(person, function(key) {
  return 'my_' + key;
});

module.exports = {
  initial: person,
  modified
};
