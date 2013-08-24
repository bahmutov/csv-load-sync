var check = require('check-types');
var fs = require('fs');
var eol = '\n';

function load(filename) {
  check.verifyString(filename, 'missing filename');
  var content = fs.readFileSync(filename, 'utf-8');
  check.verifyString(content, 'missing content from ' + filename);
  var lines = content.split(eol);
  console.assert(lines.length > 1, 'invalid number of lines ' +
    lines.length + ' in file ' + filename);

  var results = [];
  var columns = getColumns(lines[0]);
  check.verifyArray(columns, 'could not get columns from first line ' +
    lines[0]);
  lines.forEach(function (line, index) {
    if (index === 0) {
      return; // we already have columns
    }
    if (!line) {
      return;
    }

    var obj = {};
    var values = getColumns(line);
    check.verifyArray(values, 'could not get values from line ' + line);
    console.assert(values.length === columns.length,
      'expected values from line ' + line + ' to match property names ' +
      ' from first line ' + lines[0]);

    values.forEach(function (value, columnIndex) {
      obj[columns[columnIndex]] = value;
    });
    results.push(obj);
  });

  return results;
}

function getColumns(line) {
  check.verifyString(line, 'missing header line');
  var columns = line.split(',');
  console.assert(columns.length > 1, 'invalid columns ' +
    JSON.stringify(columns) + ' from line ' + line);
  columns = stripQuotes(columns);
  return columns;
}

function stripQuotes(words) {
  check.verifyArray(words, 'missing an array');
  return words.map(function (word) {
    check.verifyString(word, 'expected string, found ' + word);
    word = word.trim();
    return word.replace(/"/g, '');
  });
}

module.exports = load;