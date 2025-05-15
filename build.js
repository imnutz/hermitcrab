#!/usr/bin/env node
var glob = require("glob");
var fs = require("fs");
var dotenv = require("dotenv");

dotenv.config();

var fakeInfo = "xxxxxxxxxx";

function replaceTdInfo(
  path,
  database,
  host,
  apiKey,
  segmentToken,
  profileToken,
  rtEndpoint,
  wp13nToken
) {
  database = database || fakeInfo;
  host = host || fakeInfo;
  apiKey = apiKey || fakeInfo;
  segmentToken = segmentToken || fakeInfo;

  var files = glob.sync(path);
  files.forEach((fileName) => {
    var data = fs.readFileSync(fileName, "utf-8");
    var replacedData = data
      .replace(/database:.*('|")/g, `database: '${database}'`)
      .replace(/host:.*('|")/g, `host: '${host}'`)
      .replace(/writeKey:.*('|")/g, `writeKey: '${apiKey}'`)
      .replace(/audienceToken:.*\[.*\]/g, `audienceToken: ['${segmentToken}']`)
      .replace(/token:.*\[.*\]/g, `token: '${profileToken}'`);

    fs.writeFileSync(fileName, replacedData, "utf-8");
  });
}

function replaceRTPersonalizationInfo(
  path,
  database,
  host,
  apiKey,
  rtEndpoint,
  wp13nToken
) {
  database = database || fakeInfo;
  host = host || fakeInfo;
  apiKey = apiKey || fakeInfo;

  var files = glob.sync(path);
  files.forEach((fileName) => {
    var data = fs.readFileSync(fileName, "utf-8");
    var replacedData = data
      .replace(/database:.*('|")/g, `database: '${database}'`)
      .replace(/host:.*('|")/g, `host: '${host}'`)
      .replace(/writeKey:.*('|")/g, `writeKey: '${apiKey}'`)
      .replace(/endpoint:.*('|")/g, `endpoint: '${rtEndpoint}'`)
      .replace(/token:.*('|")/g, `token: '${wp13nToken}'`);

    fs.writeFileSync(fileName, replacedData, "utf-8");
  });
}

function fastApiKey() {
  var data = fs.readFileSync("./audiences/test_audiences.html", "utf-8");
  var replacedData = data.replace(
    "TD_MASTER_API_KEY",
    process.env.td_prod_api_key,
  );

  fs.writeFileSync("./audiences/test_audiences.html", replacedData, "utf-8");
}

let { database, tdHost, apiKey, segmentToken, c360Host, profileToken } =
  process.env;

replaceTdInfo("./*.html", database, c360Host, apiKey, segmentToken);

replaceTdInfo(
  "./c360/*.html",
  database,
  c360Host,
  apiKey,
  segmentToken,
  profileToken,
);
replaceTdInfo(
  "./cors/*.html",
  database,
  c360Host,
  apiKey,
  segmentToken,
  profileToken,
);
replaceTdInfo(
  "./cors2/*.html",
  database,
  c360Host,
  apiKey,
  segmentToken,
  profileToken,
);

replaceTdInfo(
  "./capi/*.html",
  database,
  c360Host,
  apiKey,
  segmentToken,
  profileToken,
);

let { databaseAp03, tdHostAp03, apiKeyAp03, segmentTokenAp03 } = process.env;

replaceTdInfo(
  "./ap03/*.html",
  databaseAp03,
  tdHostAp03,
  apiKeyAp03,
  segmentTokenAp03,
);


let { awsDevApiKey, awsDevWp13nToken, awsDevP13nEndpoint } = process.env;
replaceRTPersonalizationInfo(
  "./rt_personalization.html",
  database,
  tdHostAp03,
  awsDevApiKey,
  awsDevP13nEndpoint,
  awsDevWp13nToken
);

fastApiKey();
