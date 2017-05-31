var example = require('./example.js');
var assert = require('assert');

describe('rename key', () => {
  it('should rename every key with my_ prefix', () => {
    var expected = {
      my_name: 'monkindey',
      my_age: '**',
      my_sex: 'man'
    };

	assert.deepEqual(expected, example.modified);
  });
});
