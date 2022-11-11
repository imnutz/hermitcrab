!function() {
  var txtToken = document.querySelector('#token');
  var txtIndex = document.querySelector('#index');
  var form = document.querySelector('#form');
  var preResult = document.querySelector('#results');

  form.addEventListener('submit', function(evt) {
    evt.preventDefault();

    var tokens = txtToken.value.split(',');
    var indexes = txtIndex.value.split(',');

    if (!tokens || !indexes) {
      return alert('Please input your tokens and indexes');
    }

    td.lookupProfile({
      cdpHost: 'profile-api-development.treasuredata.com',
      token: tokens,
      index: indexes
    }, function(results) {
      preResult.textContent = JSON.stringify(results, null, 2);
    }, function(e) {
      console.error(e);
    });
  });
}();
