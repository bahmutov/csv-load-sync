# csv-load-sync

Sync loading routine for a small comma-separated values file (.csv). Returns an array of objects, takes property names from
the first line. Assumes everything is a string in quotes.

[![Package info][nodei.co]](https://npmjs.org/package/csv-load-sync)

[![Build status][ci-image]][ci-status]
[![dependencies][dependencies-image]][dependencies-url]
[![endorse][endorse-image]][endorse-url]

Requires nodejs, install using `npm install csv-load-sync`

Example CSV file with two records

    "deviceId","description"
    "1","iPhone 4"
    "2","iPhone 4S"

Example CSV file with three records

    "id","firstName","lastName","country","lastLogin"
    "1","John","Smith","US","2013-08-04 23:57:38"
    "2","Greg","Smith","US","2013-07-12 13:27:18"
    "3","Harold","Smith","GB","2013-07-16 21:17:28"

## Usage

```javascript
var loader = require('csv-load-sync');
var csv = loader('path/to/file.csv');
// csv is an Array of objects
```

### Fine print

Author: Gleb Bahmutov <gleb.bahmutov@gmail.com>
License: MIT
Copyright &copy; 2013 Gleb Bahmutov

[ci-image]: https://secure.travis-ci.org/bahmutov/csv-load-sync.png?branch=master
[ci-status]: http://travis-ci.org/#!/bahmutov/csv-load-sync
[nodei.co]: https://nodei.co/npm/csv-load-sync.png?downloads=true
[dependencies-image]: https://david-dm.org/bahmutov/csv-load-sync.png
[dependencies-url]: https://david-dm.org/bahmutov/csv-load-sync
[endorse-image]: https://api.coderwall.com/bahmutov/endorsecount.png
[endorse-url]: https://coderwall.com/bahmutov