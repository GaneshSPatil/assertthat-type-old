var assert = require('assertthat');
var typePlugin = require('../src/assertthat-plugin.js');

describe('assertthat-type', function() {
  describe('validate_keys', function() {

    it('should contain getPropertyName function', function() {
      var allKeys = Object.keys(typePlugin());
      assert.that(allKeys).is.containing('getPropertyName');

      var getPropertyName = typePlugin()['getPropertyName'];
      assert.that(getPropertyName).is.ofType('function');
    });

    it('should contain addProperties function', function() {
      var allKeys = Object.keys(typePlugin());
      assert.that(allKeys).is.containing('addProperties');

      var addProperties = typePlugin()['addProperties'];
      assert.that(addProperties).is.ofType('function');
    });
  });

  describe('Property name', function() {
    it('should return the property name of the plugin', function() {
      var name = typePlugin().getPropertyName();
      assert.that(name).is.equalTo('type');
    });
  });

  describe('Add Properties', function() {
    it('should add the properties to the assertthat-is', function() {
      var is = {};
      var actual = 'actual-value';
      var addProperties = typePlugin().addProperties;

      assert.that(Object.keys(is).length).is.equalTo(0);

      addProperties(is, actual);
      assert.that(Object.keys(is).length).is.greaterThan(0);
    });

    it('should contain numeric type-check property', function() {
      var is = {};
      var actual = 12;
      var addProperties = typePlugin().addProperties;

      assert.that(Object.keys(is).length).is.equalTo(0);

      addProperties(is, actual);
      assert.that(Object.keys(is)).is.containing('number');
      assert.that(is.number).is.not.throwing('Expected `12` to be a Number');
    });

    it('should contain string type-check property', function() {
      var is = {};
      var actual = 'foo';
      var addProperties = typePlugin().addProperties;

      assert.that(Object.keys(is).length).is.equalTo(0);

      addProperties(is, actual);
      assert.that(Object.keys(is)).is.containing('number');
      assert.that(is.string).is.not.throwing('Expected `foo` to be a String');
    });

    it('should contain boolean type-check property', function() {
      var is = {};
      var actual = true;
      var addProperties = typePlugin().addProperties;

      assert.that(Object.keys(is).length).is.equalTo(0);

      addProperties(is, actual);
      assert.that(Object.keys(is)).is.containing('number');
      assert.that(is.boolean).is.not.throwing('Expected `true` to be boolean');
    });

    it('should contain object type-check property', function() {
      var is = {};
      var actual = {};
      var addProperties = typePlugin().addProperties;

      assert.that(Object.keys(is).length).is.equalTo(0);

      addProperties(is, actual);
      assert.that(Object.keys(is)).is.containing('number');
      assert.that(is.object).is.not.throwing('Expected `true` to be an Object');
    });

    it('should contain array type-check property', function() {
      var is = {};
      var actual = [1, 2, 3];
      var addProperties = typePlugin().addProperties;

      assert.that(Object.keys(is).length).is.equalTo(0);

      addProperties(is, actual);
      assert.that(Object.keys(is)).is.containing('number');
      assert.that(is.array).is.not.throwing('Expected `true` to be an Array');
    });

    it('should contain date type-check property', function() {
      var is = {};
      var actual = new Date();
      var addProperties = typePlugin().addProperties;

      assert.that(Object.keys(is).length).is.equalTo(0);

      addProperties(is, actual);
      assert.that(Object.keys(is)).is.containing('number');
      assert.that(is.date).is.not.throwing('Expected `true` to be a Date');
    });

    it('should contain function type-check property', function() {
      var is = {};
      var actual = function(){ return true; };
      var addProperties = typePlugin().addProperties;

      assert.that(Object.keys(is).length).is.equalTo(0);

      addProperties(is, actual);
      assert.that(Object.keys(is)).is.containing('number');
      assert.that(is.function).is.not.throwing('Expected `true` to be a Function');
    });
  });

  describe('Type Check Errors', function() {
    it('should throw error when type is not number', function() {
      var is = {};
      var actual = 'foo';
      typePlugin().addProperties(is, actual);
      assert.that(is.number).is.throwing('Expected `foo` to be a Number.');
    });

    it('should throw error when type is not string', function() {
      var is = {};
      var actual = 12;
      typePlugin().addProperties(is, actual);
      assert.that(is.string).is.throwing('Expected `12` to be a String.');
    });

    it('should throw error when type is not boolean', function() {
      var is = {};
      var actual = 12;
      typePlugin().addProperties(is, actual);
      assert.that(is.boolean).is.throwing('Expected `12` to be boolean.');
    });

    it('should throw error when type is not object', function() {
      var is = {};
      var actual = 12;
      typePlugin().addProperties(is, actual);
      assert.that(is.object).is.throwing('Expected `12` to be an Object.');
    });

    it('should throw error when type is not array', function() {
      var is = {};
      var actual = 12;
      typePlugin().addProperties(is, actual);
      assert.that(is.array).is.throwing('Expected `12` to be an Array.');
    });

    it('should throw error when type is not date', function() {
      var is = {};
      var actual = 12;
      typePlugin().addProperties(is, actual);
      assert.that(is.date).is.throwing('Expected `12` to be a Date.');
    });

    it('should throw error when type is not function', function() {
      var is = {};
      var actual = 12;
      typePlugin().addProperties(is, actual);
      assert.that(is.function).is.throwing('Expected `12` to be a Function.');
    });
  });
});