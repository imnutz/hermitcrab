!(function () {
  var cookieOptions = { secure: true };
  function addUrlParam(name, value) {
    var currentUrl = new URL(window.location.href);

    if (!currentUrl.searchParams.has(name)) {
      currentUrl.searchParams.append(name, value);
    }

    window.location.href = currentUrl.href;
  }

  function addGoogleClidParam() {
    addUrlParam("gclid", "gclid_value");
  }

  function addFacebookClidParam() {
    addUrlParam("fbclid", "fbclid_value");
  }

  function addYahoo_yclid_Param() {
    addUrlParam("yclid", "yclid_value");
  }

  function addYahoo_yjr_yjad_Param() {
    addUrlParam("yjr_yjad", "yjr_yjad_value");
  }

  function set_ga_Cookie() {
    Cookies.set("_ga", "ga_value", cookieOptions);
  }

  function get_ga_Cookie() {
    alert(td.getGoogleAnalyticsCookie());
  }

  function set_gcl_aw_Cookie() {
    Cookies.set("_gcl_aw", "gclaw_value", cookieOptions);
  }
  function get_gcl_aw_Cookie() {
    alert(td.getGoogleConversionLinkerCookie());
  }

  function set_fbp_Cookie() {
    Cookies.set("_fbp", "fbp_value", cookieOptions);
  }

  function get_fbp_Cookie() {
    alert(td.getFacebook1stCookie());
  }

  function set_fbc_Cookie() {
    Cookies.set("_fbc", "fbc_value", cookieOptions);
  }

  function get_fbc_Cookie() {
    alert(td.getFacebookClickIDCookie());
  }

  function set_yjsu_yjad_Cookie() {
    Cookies.set("_yjsu_yjad", "yjsuyjad_value", cookieOptions);
  }

  function get_yjsu_yjad_Cookie() {
    alert(td.getYahooCAPICookie());
  }

  function set_ycl_yjad_Cookie() {
    Cookies.set("_ycl_yjad", "yclyjad_value", cookieOptions);
  }

  function get_ycl_yjad_Cookie() {
    alert(td.getYahooClickID_ycl_yjad_Cookie());
  }

  function set_yjr_yjad_Cookie() {
    Cookies.set("_yjr_yjad", "yjryjad_value", cookieOptions);
  }

  function get_yjr_yjad_Cookie() {
    alert(td.getYahooClickID_yjr_yjad_Cookie());
  }

  function set_twclid_Cookie() {
    Cookies.set("_twclid", "twclid_value", cookieOptions);
  }

  function get_twclid_Cookie() {
    alert(td.getXClickIDCookie());
  }

  function set_lt_cid_Cookie() {
    Cookies.set("__lt__cid", "ltcid_value", cookieOptions);
  }

  function get_lt_cid_Cookie() {
    alert(td.getLineCookie());
  }

  function getElement(id) {
    return document.querySelector(`#${id}`);
  }

  function addClickEvent(element, handler) {
    element.addEventListener("click", handler);
  }

  function setup() {
    // add para actions
    addClickEvent(getElement("para_gclid"), addGoogleClidParam);
    addClickEvent(getElement("para_fbclid"), addFacebookClidParam);
    addClickEvent(getElement("para_yclid"), addYahoo_yclid_Param);
    addClickEvent(getElement("para_yjryjad"), addYahoo_yjr_yjad_Param);

    // add cookie actions
    addClickEvent(getElement("c_ga"), set_ga_Cookie);
    addClickEvent(getElement("c_gclaw"), set_gcl_aw_Cookie);
    addClickEvent(getElement("c_fbp"), set_fbp_Cookie);
    addClickEvent(getElement("c_fbc"), set_fbc_Cookie);
    addClickEvent(getElement("c_yjsuyjad"), set_yjsu_yjad_Cookie);
    addClickEvent(getElement("c_yclyjad"), set_ycl_yjad_Cookie);
    addClickEvent(getElement("c_yjryjad"), set_yjr_yjad_Cookie);
    addClickEvent(getElement("c_twclid"), set_twclid_Cookie);
    addClickEvent(getElement("c_ltcid"), set_lt_cid_Cookie);

    addClickEvent(getElement("get_ga"), get_ga_Cookie);
    addClickEvent(getElement("get_gclaw"), get_gcl_aw_Cookie);
    addClickEvent(getElement("get_fbp"), get_fbp_Cookie);
    addClickEvent(getElement("get_fbc"), get_fbc_Cookie);
    addClickEvent(getElement("get_ycapi"), get_yjsu_yjad_Cookie);
    addClickEvent(getElement("get_yclyjad"), get_ycl_yjad_Cookie);
    addClickEvent(getElement("get_yjryjad"), get_yjr_yjad_Cookie);
    addClickEvent(getElement("get_twclid"), get_twclid_Cookie);
    addClickEvent(getElement("get_ltcid"), get_lt_cid_Cookie);

    addClickEvent(getElement("get_p_gclid"), function () {
      alert(td.getGoogleClickIDParam());
    });

    addClickEvent(getElement("get_p_fbclid"), function () {
      alert(td.getFacebookClickIDParam());
    });

    addClickEvent(getElement("get_p_yclid"), function () {
      alert(td.getYahooClickID_yclid_Param());
    });

    addClickEvent(getElement("get_p_yjryjad"), function () {
      alert(td.getYahooClickID_yjr_yjad_Param());
    });
  }

  setup();
})();
