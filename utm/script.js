!function() {
  function getValue(elId) {
    return document.querySelector(elId).value;
  }

  var generateBtn = document.querySelector('#generate_btn');
  var displayArea = document.querySelector('#display');

  generateBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    var utmId = getValue('#utm_id');
    var utmMedium = getValue('#utm_medium');
    var utmSourcePlatform = getValue('#utm_source_platform');
    var utmSource = getValue('#utm_source');
    var utmCampaign = getValue('#utm_campaign');
    var utmMarketingTactic = getValue('#utm_marketing_tactic');


    if(!utmId && !utmMedium && !utmSourcePlatform && !utmSource && !utmCampaign && !utmMarketingTactic) {
      return alert('Must have at least 1 param');
    }

    var paramsObj = {};

    if (utmId) {
      paramsObj['utm_id'] = utmId;
    }

    if (utmMedium) {
      paramsObj['utm_medium'] = utmMedium;
    }

    if (utmSourcePlatform) {
      paramsObj['utm_source_platform'] = utmSourcePlatform;
    }

    if (utmSource) {
      paramsObj['utm_source'] = utmSource;
    }

    if (utmCampaign) {
      paramsObj['utm_campaign'] = utmCampaign;
    }

    if (utmMarketingTactic) {
      paramsObj['utm_marketing_tactic'] = utmMarketingTactic;
    }

    console.log(paramsObj);

    var searchParams = new URLSearchParams(paramsObj);

    var emailText = `
      Thank you for choosing our service, please click the link below to continue with us
      <a href="./email.html?${searchParams.toString()}">OUR GREAT WEBSITE</a>
    `;
    displayArea.innerHTML = emailText;
  });
}();
