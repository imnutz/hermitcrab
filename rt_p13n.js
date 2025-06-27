!function() {
  var requestBtn = document.querySelector('#request');
  var addToCartBtn = document.querySelector('#add_to_cart');
  var buyNowBtn = document.querySelector('#bn_btn');
  var addToWishlist = document.querySelector('#add_to_wishlist');
  var subscribeBtn = document.querySelector('#subscribe');
  var display = document.querySelector('#display');

  var sendRequest = function(payload) {
    var hostInput = document.querySelector('#host');
    var tokenInput = document.querySelector('#token');
    var dbInput = document.querySelector('#db');
    var tbInput = document.querySelector('#tb');
    var payloadInput = document.querySelector('#payload');

    if (!tokenInput.value) return alert('Need token');
    if (!dbInput.value) return alert('Need database');
    if (!tbInput.value) return alert('Need table');

    var host = hostInput.value;
    var token = tokenInput.value;
    var db = dbInput.value;
    var table = tbInput.value;
    var payloadText = payloadInput.value;
    var parsedPayload = null;
    var payloadJson = {}

    try {
      parsedPayload = JSON.parse(payloadText);
    } catch {
      parsedPayload = null;
    }

    payloadJson = payload || parsedPayload || "{}"

    var apiKeyInput = document.querySelector('#apikey');
    if (apiKeyInput.value) {
      td.client.writeKey = apiKeyInput.value
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

  }

  requestBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    sendRequest()
  });
  addToCartBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    sendRequest({
      "td_path": "auto_1",
      "td_browser": "Chrome",
      "email": "auto_1@gmail.com" 
    });
  });
  buyNowBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    sendRequest({
      "td_path": "auto_2",
      "td_language": "English",
      "email": "auto_2@gmail.com"
    });
  });
  addToWishlist.addEventListener('click', function(evt) {
    evt.preventDefault();
    sendRequest({
      "td_path": "auto_3",
      "email": "ak_20250603_1@gmail.com"
    });
  });
  subscribeBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    sendRequest({
      "td_path": "auto_4",
      "td_language": "English",
      "number_of_clicks": 5,
      "email": "auto_4@gmail.com"
    });
  });
}()
