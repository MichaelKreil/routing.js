"use strict";

const fs = require('fs');
const GTFS = require('./lib/gtfs.js');

var gtfs = new GTFS('../gtfs/db2017');

var result = gtfs.extract(new Date('2017-05-12'), new Date('2017-05-21'));

fs.writeFileSync('gtfs.json',JSON.stringify(result),'utf8');