#!/usr/bin/env node
var glob = require("glob");
var fs = require('fs')
var dotenv = require('dotenv');

dotenv.config()

console.log(process.env);

var fakeInfo = "xxxxxxxxxx";

function replaceTdInfo (path, database, host, apiKey, segmentToken) {
  database = database || fakeInfo
  host = host || fakeInfo
  apiKey = apiKey || fakeInfo
  segmentToken = segmentToken || fakeInfo

  var files = glob.sync(path)
  files.forEach(fileName => {
    var data = fs.readFileSync(fileName, 'utf-8')
    var replacedData = data
      .replace(/database:.*'/g, `database: '${database}'`)
      .replace(/host:.*'/g, `host: '${host}'`)
      .replace(/writeKey:.*'/g, `writeKey: '${apiKey}'`)
      .replace(/audienceToken:.*\[.*\]/g, `audienceToken: ['${segmentToken}']`)
      .replace(/token:\[.*\]/g, `token: '${segmentToken}'`)

    fs.writeFileSync(fileName, replacedData, 'utf-8')
  })
}

let {
  database,
  tdHost,
  apiKey,
  segmentToken,
  c360Host
} = process.env

replaceTdInfo(
  './*.html',
  database,
  tdHost,
  apiKey,
  segmentToken
);

replaceTdInfo(
  './c360/*.html',
  database,
  c360Host,
  apiKey,
  segmentToken
);


let { databaseAp03, tdHostAp03, apiKeyAp03, segmentTokenAp03 } = process.env;

replaceTdInfo(
  './ap03/*.html',
  databaseAp03,
  tdHostAp03,
  apiKeyAp03,
  segmentTokenAp03
);
