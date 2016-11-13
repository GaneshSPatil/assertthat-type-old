var assert = require('assert');

module.exports = function(){
  const typePlugin = {};
  typePlugin.getPropertyName = function(){
    return 'type';
  };

  typePlugin.addProperties = function(is, actual){
    is.a = {
      number : function () {
        if (actual == 10) {
          return;
        }
        assert.fail(undefined, undefined, 'Expected '+actual+' to be a Number.');
      }
    };
  };

  return typePlugin;
};
