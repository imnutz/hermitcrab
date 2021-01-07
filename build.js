#!/usr/bin/env node
var glob = require('glob')
var fs = require('fs')

var fakeInfo = 'xxxxxxxxxx'

function replaceTdInfo (database, host, apiKey) {
  database = database || fakeInfo
  host = host || fakeInfo
  apiKey = apiKey || fakeInfo

  var files = glob.sync('index.html')
  files.forEach(fileName => {
    var data = fs.readFileSync(fileName, 'utf-8')
    var replacedData = data
      .replace(/database:.*'/g, `database: '${database}'`)
      .replace(/host:.*'/g, `host: '${host}'`)
      .replace(/writeKey:.*'/g, `writeKey: '${apiKey}'`)

    fs.writeFileSync(fileName, replacedData, 'utf-8')
  })
}

let {
  database,
  tdHost,
  apiKey
} = process.env

replaceTdInfo(database, tdHost, apiKey)
