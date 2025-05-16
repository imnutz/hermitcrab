!function() {
  var tokenInput = document.querySelector('#token')
  var dbInput = document.querySelector('#db');
  var tbInput = document.querySelector('#tb');
  var payloadInput = document.querySelector('#payload');
  var requestBtn = document.querySelector('#request');

  requestBtn.addEventListener('click', function(evt) {
    evt.preventDefault();

    if (!tokenInput.value) return alert('Need token');
    if (!dbInput.value) return alert('Need database');
    if (!tbInput.value) return alert('Need table');

    var token = tokenInput.value;
    var db = dbInput.value;
    var table = tbInput.value;
    var payloadText = payloadInput.value || {};
    var payloadJson = JSON.parse(payloadText);

    td.fetchPersonalization(
      {
        endpoint: 'p13n-api-development.treasuredata.com',
        database: db,
        table: table,
        token: token
      }, 
      payloadJson, 
      function(data) {
        console.log(data);
      }, 
      function(e) {
        console.error(e);
      }
    );
  });
}()
