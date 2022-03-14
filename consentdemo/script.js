!function(doc) {
  // sizing
  var sizingContainer = doc.querySelector('.sizing');
  var acceptButtonColorContaqiner = doc.querySelector('.accept');
  var denyButtonColorContaqiner = doc.querySelector('.deny');
  var confirmationButtonColorContaqiner = doc.querySelector('.confirmation');
  var layoutContainer = doc.querySelector('.layout');
  var commonColors = doc.querySelector('.common');


  sizingContainer.addEventListener('click', function (evt) {
    evt.preventDefault();
    var target = evt.target;

    var percentage = target.textContent;

    Treasure.CookieControl.banner.width = percentage;
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
    if (name === 'bg') {
      currentColorScheme['backgroundColor']= target.value;
    } else if (name === 'buttonColor') {
      currentColorScheme['buttonColor'] = target.value;
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
    if (name === 'bg') {
      currentColorScheme['accept'].backgroundColor = target.value;
    } else if (name === 'textColor') {
      currentColorScheme['accept'].textColor = target.value;
    } else if (name === 'borderColor') {
      currentColorScheme['accept'].borderColor = target.value;
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

    if (name === 'bg') {
      currentColorScheme['deny'].backgroundColor = target.value;
    } else if (name === 'textColor') {
      currentColorScheme['deny'].textColor = target.value;
    } else if (name === 'borderColor') {
      currentColorScheme['deny'].borderColor = target.value;
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
    if (name === 'bg') {
      currentColorScheme['confirmation'].backgroundColor = target.value;
    } else if (name === 'textColor') {
      currentColorScheme['confirmation'].textColor = target.value;
    } else if (name === 'borderColor') {
      currentColorScheme['confirmation'].borderColor = target.value;
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
}(document);
