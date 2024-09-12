liff.init({
  liffId: "6608810"
})
.then(function() {
  dataLayer.push({
    'event': 'liffInit',
    'liffInit': 1
  });
})
.catch(function(err) {
  // Error happens during initialization
  console.log(err.code, err.message);
});
