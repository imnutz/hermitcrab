!function() {
  var requestBtn = document.querySelector('#request');
  var addInlineMsgBtn = document.querySelector('#add_inline_msg');
  var addToCartBtn = document.querySelector('#add_to_cart');
  var buyNowBtn = document.querySelector('#bn_btn');
  var addToWishlist = document.querySelector('#add_to_wishlist');
  var subscribeBtn = document.querySelector('#subscribe');
  var display = document.querySelector('#display');
  var playloadArea = document.querySelector('#payload');

  var o1Inline = document.querySelector('#o_1_inline');
  var o1Inline1Pop = document.querySelector('#o_1_in_1_pop');
  var o2Pop = document.querySelector('#o_2_pop');
  var o2Inline = document.querySelector('#o_2_in');
  var o5 = document.querySelector('#o_5');

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
      if (td.client) {
        td.client.writeKey = apiKeyInput.value
      } else if (td.config) {
        td.setWriteKey(apiKeyInput.value)
      }
    }

    td.setPersonalizationConfig({
      endpoint: host,
      database: db,
      token: token,
      payload: payloadJson
    })
 
    td.trackPageview(
      'pageviews', 
      function(data) {
        display.value = JSON.stringify(data, null, 2);
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

  addInlineMsgBtn.addEventListener('click', function(evt) {
    evt.preventDefault();

    var inlineMsgDiv = document.createElement('div');
    inlineMsgDiv.classList.add('inline-msg');
    inlineMsgDiv.id = 'inline_message'
    document.body.prepend(inlineMsgDiv)
  });

  o1Inline.addEventListener('click', function(evt) {
    evt.preventDefault();
    playloadArea.value = JSON.stringify({
      "td_client_id": "2026-02-10",
      "page": "in_browser_1_inline"
    }, null, 2)

  });
  o1Inline1Pop.addEventListener('click', function(evt) {
    evt.preventDefault();
    playloadArea.value = JSON.stringify({
      "td_client_id": "2026-02-10",
      "page": "in_browser_2_both_popup_inline"
    }, null, 2)

  });
  o2Pop.addEventListener('click', function(evt) {
    evt.preventDefault();
    playloadArea.value = JSON.stringify({
      "td_client_id": "2026-02-10",
      "page": "in_browser_2_popup"
    }, null, 2)

  });
  o2Inline.addEventListener('click', function(evt) {
    evt.preventDefault();
    playloadArea.value = JSON.stringify({
      "td_client_id": "2026-02-10",
      "page": "in_browser_2_inline"
    }, null, 2)

  });
  o5.addEventListener('click', function(evt) {
    evt.preventDefault();
    playloadArea.value = JSON.stringify({
      "td_client_id": "2026-02-10",
      "page": "in_browser_2_both_popup_inline, in_browser_1_popup, in_browser_1_inline, in_browser_2_popup, in_browser_2_inline"
    }, null, 2)

  });


  playloadArea.value = JSON.stringify({
    "td_client_id": "2026-02-10",
    "page": "in_browser_1_popup"
  }, null, 2)
}()
