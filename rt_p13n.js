!function() {
  var hostInput = document.querySelector('#host')
  var tokenInput = document.querySelector('#token')
  var dbInput = document.querySelector('#db');
  var tbInput = document.querySelector('#tb');
  var payloadInput = document.querySelector('#payload');
  var requestBtn = document.querySelector('#request');
  var addToCartBtn = document.querySelector('#add_to_cart');
  var buyNowBtn = document.querySelector('#buynow');
  var addToWishlist = document.querySelector('#add_to_wishlist');
  var subscribeBtn = document.querySelector('#subscribe');
  var display = document.querySelector('#display');

  var sendRequest = function(payload) {
    if (!tokenInput.value) return alert('Need token');
    if (!dbInput.value) return alert('Need database');
    if (!tbInput.value) return alert('Need table');

    var host = hostInput.value;
    var token = tokenInput.value;
    var db = dbInput.value;
    var table = tbInput.value;
    var payloadText = payload || payloadInput.value || "{}";
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

  }

  requestBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    sendRequest()
  });
  addToCartBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    sendRequest(JSON.stringify({
      "td_path": "auto_1",
      "td_browser": "Chrome",
      "email": "auto_1@gmail.com" 
    }));
  });
  buyNowBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    sendRequest(JSON.stringify({
      "td_path": "auto_2",
      "td_language": "English",
      "email": "auto_2@gmail.com"
    }));
  });
  addToWishlist.addEventListener('click', function(evt) {
    evt.preventDefault();
    sendRequest(JSON.stringify({
      "td_path": "auto_3",
      "email": "ak_20250603_1@gmail.com"
    }));
  });
  subscribeBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    sendRequest(JSON.stringify({
      "td_path": "auto_3",
      "email": "ak_20250603_1@gmail.com"
    }));
  });
}()
