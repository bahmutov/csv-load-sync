# csv-load-sync

Sync loading routine for a small comma-separated values file (.csv). Returns an array of objects, takes property names from
the first line. Assumes everything is a string in quotes.

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

