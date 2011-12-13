#!/usr/bin/env node

var nodeunit = require('nodeunit')
var testrunner = nodeunit.reporters.default

process.chdir(__dirname);
testrunner.run(['nodeunit']);