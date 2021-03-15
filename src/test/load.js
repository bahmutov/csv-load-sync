// var path = require('path');
// var load = require('../load');

// gt.module('load');

// gt.test('basics', function () {
//   gt.arity(load, 2, 'two arguments');
// });

// gt.test('custom parsing', function () {
//   function split(line, lineNumber) {
//     if (lineNumber === 0) {
//       // title line
//       return line.split(',')
//     }
//     // our line will be <location>,<lat>,<lon>
//     // and we want to combine lat and lon
//     var parts = line.split(',')
//     return [parts[0], parts[1] + ',' + parts[2]];
//   }

//   var filename = path.join(__dirname, 'gps.csv');
//   var results = load(filename, {
//     getColumns: split
//   });

//   gt.array(results, 'returns results');
//   gt.equal(results.length, 2, 'two records');
//   gt.equal(results[0].place, 'home');
// });

// gt.test('one column of three records', function () {
//   var filename = path.join(__dirname, 'one.csv');
//   var results = load(filename);
//   gt.array(results, 'returns results');
//   gt.equal(results.length, 3, 'three objects');
// });

// gt.test('two records', function () {
//   var filename = path.join(__dirname, 'two.csv');
//   var results = load(filename);
//   gt.array(results, 'returns results');
//   gt.equal(results.length, 2, 'two objects');
// });

// gt.test('three records', function () {
//   var filename = path.join(__dirname, 'three.csv');
//   var results = load(filename);
//   gt.array(results, 'returns results');
//   gt.equal(results.length, 3, 'three objects');
// });

// gt.test('property values', function () {
//   var filename = path.join(__dirname, 'two.csv');
//   var results = load(filename);

//   gt.equal(results[0].deviceId, '1');
//   gt.equal(results[0].description, 'iPhone 4');

//   gt.equal(results[1].deviceId, '2');
//   gt.equal(results[1].description, 'iPhone 4S');
// });

// gt.test('loading 100 records', function () {
//   var filename = path.join(__dirname, '100.csv');
//   gt.faster('loading 100 records should take less 100 ms',
//     function () {
//       var results = load(filename);
//       gt.equal(results.length, 100, 'loaded 100 records');
//     }, 100);
// });
