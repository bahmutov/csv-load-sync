var check = require('check-more-types');
var fs = require('fs');
var eol = '\n';

function load(filename, options) {
  check.verify.string(filename, 'missing filename');
  var content = fs.readFileSync(filename, 'utf-8');
  check.verify.string(content, 'missing content from ' + filename);
  var lines = content.split(eol);
  console.assert(lines.length > 1, 'invalid number of lines ' +
    lines.length + ' in file ' + filename);

  var splitToColumns = options && check.fn(options.getColumns)
    ? options.getColumns : getColumns;

  var results = [];
  var columns = stripQuotes(splitToColumns(lines[0], 0));

  check.verify.array(columns, 'could not get columns from first line ' +
    lines[0]);
  lines.forEach(function (line, index) {
    if (index === 0) {
      return; // we already have columns
    }
    if (!line) {
      return;
    }

    var obj = {};
    var values = stripQuotes(splitToColumns(line, index));

    check.verify.array(values, 'could not get values from line ' + line);
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
  check.verify.string(line, 'missing header line');
  var columns = line.split(',');
  console.assert(columns.length >= 1, 'invalid columns ' +
    JSON.stringify(columns) + ' from line ' + line);
  return columns;
}

function stripQuotes(words) {
  check.verify.array(words, 'missing an array');
  return words.map(function (word) {
    check.verify.string(word, 'expected string, found ' + word);
    word = word.trim();
    return word.replace(/"/g, '');
  });
}

module.exports = load;
