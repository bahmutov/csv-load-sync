var path = require('path');
var load = require('../load');

gt.module('load');

gt.test('basics', function () {
  gt.arity(load, 1, 'single argument');
});

gt.test('two records', function () {
  var filename = path.join(__dirname, 'two.csv');
  var results = load(filename);
  gt.array(results, 'returns results');
  gt.equal(results.length, 2, 'two objects');
});