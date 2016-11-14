var assert = require('assert');
var check = require('check-types');

module.exports = function() {
  const typePlugin = {};
  typePlugin.getPropertyName = function() {
    return 'type';
  };

  typePlugin.addProperties = function(is, actual) {
    is.number = function() {
        if(check.number(actual)) {
          return;
        }
        assert.fail(undefined, undefined, 'Expected ' + actual + ' to be a Number.');
    };
  };

  return typePlugin;
};
