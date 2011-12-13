var util = require('util')
,   nodeunit = require('nodeunit')
,   testrunner = nodeunit.reporters.default
,   basic = require('../../lib/basic.js')
;
    

exports['basic hello returns a value of Hello World'] = function (test) {
  var basic_hello = basic.Hello;

  test.equals(basic_hello, "Hello World", "Run it");
  test.done();
};
