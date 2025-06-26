!function() {
  var hostInput = document.querySelector('#host')
  var tokenInput = document.querySelector('#token')
  var dbInput = document.querySelector('#db');
  var tbInput = document.querySelector('#tb');
  var payloadInput = document.querySelector('#payload');
  var requestBtn = document.querySelector('#request');
  var display = document.querySelector('#display');

  requestBtn.addEventListener('click', function(evt) {
    evt.preventDefault();

    if (!tokenInput.value) return alert('Need token');
    if (!dbInput.value) return alert('Need database');
    if (!tbInput.value) return alert('Need table');

    var host = hostInput.value;
    var token = tokenInput.value;
    var db = dbInput.value;
    var table = tbInput.value;
    var payloadText = payloadInput.value || "{}";
    var payloadJson = {}

    try {
      payloadJson = JSON.parse(payloadText);
    } catch {
      payloadJson = {};
    }

    td.fetchPersonalization(
      {
        endpoint: host || 'p13n-api-development.treasuredata.com',
        database: db,
        table: table,
        token: token
      }, 
      payloadJson, 
      function(data) {
        display.textContent = JSON.stringify(data, null, 2);
      }, 
      function(e) {
        console.error(e);
      }
    );
  });
}()
