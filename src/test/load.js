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

gt.test('three records', function () {
  var filename = path.join(__dirname, 'three.csv');
  var results = load(filename);
  gt.array(results, 'returns results');
  gt.equal(results.length, 3, 'three objects');
});

gt.test('property values', function () {
  var filename = path.join(__dirname, 'two.csv');
  var results = load(filename);

  gt.equal(results[0].deviceId, '1');
  gt.equal(results[0].description, 'iPhone 4');

  gt.equal(results[1].deviceId, '2');
  gt.equal(results[1].description, 'iPhone 4S');
});