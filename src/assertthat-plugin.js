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
        assert.fail(undefined, undefined, 'Expected `' + actual + '` to be a Number.');
    };

    is.string = function() {
      if(check.string(actual)) {
        return;
      }
      assert.fail(undefined, undefined, 'Expected `' + actual + '` to be a String.');
    };

    is.boolean = function() {
      if(check.boolean(actual)) {
        return;
      }
      assert.fail(undefined, undefined, 'Expected `' + actual + '` to be boolean.');
    };

    is.object = function() {
      if(check.object(actual)) {
        return;
      }
      assert.fail(undefined, undefined, 'Expected `' + actual + '` to be an Object.');
    };

    is.array = function() {
      if(check.object(actual)) {
        return;
      }
      assert.fail(undefined, undefined, 'Expected `' + actual + '` to be an Array.');
    };

    is.date = function() {
      if(check.date(actual)) {
        return;
      }
      assert.fail(undefined, undefined, 'Expected `' + actual + '` to be a Date.');
    };

    is.function = function() {
      if(check.function(actual)) {
        return;
      }
      assert.fail(undefined, undefined, 'Expected `' + actual + '` to be a Function.');
    };

  };

  return typePlugin;
};
