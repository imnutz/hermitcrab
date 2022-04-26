!function(doc) {
  // sizing
  var sizingContainer = doc.querySelector('.sizing');
  var acceptButtonColorContaqiner = doc.querySelector('.accept');
  var denyButtonColorContaqiner = doc.querySelector('.deny');
  var confirmationButtonColorContaqiner = doc.querySelector('.confirmation');
  var layoutContainer = doc.querySelector('.layout');
  var positionContainer = doc.querySelector('.position');
  var commonColors = doc.querySelector('.common');
  var toggleSettings = doc.querySelector('.toggle-settings');
  var settingsPanel = doc.querySelector('.settings-panel');
  var showBannerBtn = doc.querySelector('.show-banner');

  toggleSettings.addEventListener('click', function (evt) {
    evt.preventDefault();
    settingsPanel.classList.toggle('visible');
  });

  showBannerBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    Treasure.CookieControl.showBanner();
  });

  sizingContainer.addEventListener('click', function (evt) {
    evt.preventDefault();
    var target = evt.target;

    var percentage = target.textContent;

    if (Treasure.CookieControl.banner) {
      Treasure.CookieControl.banner.width = percentage;
    }
  });

  commonColors.addEventListener('change', function (evt) {
    var target = evt.target;
    var name = target.name;

    var currentColorScheme = {};

    if (Treasure.CookieControl.banner) {
       currentColorScheme = { ...Treasure.CookieControl.banner.colorScheme };
    } else if (Treasure.CookieControl.preferenceModal) {
       currentColorScheme = { ...Treasure.CookieControl.preferenceModal.colorScheme };
    }

    var component = Treasure.CookieControl.banner ? 'banner' : Treasure.CookieControl.preferenceModal ? 'modal' : '';

    if (component) {
      if (name === 'bg') {
        currentColorScheme[component]['backgroundColor']= target.value;
      } else if (name === 'buttonColor') {
        currentColorScheme[component]['buttonColor'] = target.value;
      }
    }

    if (Treasure.CookieControl.banner) {
      Treasure.CookieControl.banner.colorScheme = currentColorScheme;
    }
    if (Treasure.CookieControl.preferenceModal) {
      Treasure.CookieControl.preferenceModal.colorScheme = currentColorScheme;
    }
  });

  acceptButtonColorContaqiner.addEventListener('change', function (evt) {
    var target = evt.target;
    var name = target.name;

    var currentColorScheme = {};

    if (Treasure.CookieControl.banner) {
       currentColorScheme = { ...Treasure.CookieControl.banner.colorScheme };
    } else if (Treasure.CookieControl.preferenceModal) {
       currentColorScheme = { ...Treasure.CookieControl.preferenceModal.colorScheme };
    }

    var component = Treasure.CookieControl.banner ? 'banner' : Treasure.CookieControl.preferenceModal ? 'modal' : '';
    if (component) {
      if (name === 'bg') {
        currentColorScheme[component]['accept'].backgroundColor = target.value;
      } else if (name === 'textColor') {
        currentColorScheme[component]['accept'].textColor = target.value;
      } else if (name === 'borderColor') {
        currentColorScheme[component]['accept'].borderColor = target.value;
      }
    }

    if (Treasure.CookieControl.banner) {
      Treasure.CookieControl.banner.colorScheme = currentColorScheme;
    }
    if (Treasure.CookieControl.preferenceModal) {
      Treasure.CookieControl.preferenceModal.colorScheme = currentColorScheme;
    }
  });

  denyButtonColorContaqiner.addEventListener('change', function (evt) {
    var target = evt.target;
    var name = target.name;
    var currentColorScheme = {};

    if (Treasure.CookieControl.banner) {
       currentColorScheme = { ...Treasure.CookieControl.banner.colorScheme };
    } else if (Treasure.CookieControl.preferenceModal) {
       currentColorScheme = { ...Treasure.CookieControl.preferenceModal.colorScheme };
    }

    var component = Treasure.CookieControl.banner ? 'banner' : Treasure.CookieControl.preferenceModal ? 'modal' : '';
    if (component) {
      if (name === 'bg') {
        currentColorScheme[component]['deny'].backgroundColor = target.value;
      } else if (name === 'textColor') {
        currentColorScheme[component]['deny'].textColor = target.value;
      } else if (name === 'borderColor') {
        currentColorScheme[component]['deny'].borderColor = target.value;
      }
    }

    if (Treasure.CookieControl.banner) {
      Treasure.CookieControl.banner.colorScheme = currentColorScheme;
    } 

    if (Treasure.CookieControl.preferenceModal) {
      Treasure.CookieControl.preferenceModal.colorScheme = currentColorScheme;
    }
  });

  confirmationButtonColorContaqiner.addEventListener('change', function (evt) {
    var target = evt.target;
    var name = target.name;

    var currentColorScheme = {};

    if (Treasure.CookieControl.banner) {
       currentColorScheme = { ...Treasure.CookieControl.banner.colorScheme };
    } else if (Treasure.CookieControl.preferenceModal) {
       currentColorScheme = { ...Treasure.CookieControl.preferenceModal.colorScheme };
    }

    var component = Treasure.CookieControl.banner ? 'banner' : Treasure.CookieControl.preferenceModal ? 'modal' : '';
    if (component) {
      if (name === 'bg') {
        currentColorScheme[component]['confirmation'].backgroundColor = target.value;
      } else if (name === 'textColor') {
        currentColorScheme[component]['confirmation'].textColor = target.value;
      } else if (name === 'borderColor') {
        currentColorScheme[component]['confirmation'].borderColor = target.value;
      }
    }

    if (Treasure.CookieControl.banner) {
      Treasure.CookieControl.banner.colorScheme = currentColorScheme;
    } 
    if (Treasure.CookieControl.preferenceModal) {
      Treasure.CookieControl.preferenceModal.colorScheme = currentColorScheme;
    }
  });


  layoutContainer.addEventListener('change', function (evt) {
    var value = evt.target.value;

    if (Treasure.CookieControl.banner) {
      Treasure.CookieControl.banner.layoutType = value;
    }
  });

  positionContainer.addEventListener('change', function (evt) {
    var value = evt.target.value;

    if (Treasure.CookieControl.banner) {
      Treasure.CookieControl.banner.layout = value;
    }
  });

}(document);

