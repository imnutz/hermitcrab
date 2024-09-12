!(function () {
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
    Cookies.set("_ga", "ga_value", { secure: true });
  }

  function get_ga_Cookie() {
    alert(td.getGoogleAnalyticsCookie());
  }

  function set_gcl_aw_Cookie() {
    Cookies.set("_gcl_aw", "gclaw_value");
  }
  function get_gcl_aw_Cookie() {
    alert(td.getGoogleConversionLinkerCookie());
  }

  function set_fbp_Cookie() {
    Cookies.set("_fbp", "fbp_value");
  }

  function get_fbp_Cookie() {
    alert(td.getFacebook1stCookie());
  }

  function set_fbc_Cookie() {
    Cookies.set("_fbc", "fbc_value");
  }

  function get_fbc_Cookie() {
    alert(td.getFacebookClickIDCookie());
  }

  function set_yjsu_yjad_Cookie() {
    Cookies.set("_yjsu_yjad", "yjsuyjad_value");
  }

  function get_yjsu_yjad_Cookie() {
    alert(td.getYahooCAPICookie());
  }

  function set_ycl_yjad_Cookie() {
    Cookies.set("_ycl_yjad", "yclyjad_value");
  }

  function get_ycl_yjad_Cookie() {
    alert(td.getYahooClickID_ycl_yjad_Cookie());
  }

  function set_yjr_yjad_Cookie() {
    Cookies.set("_yjr_yjad", "yjryjad_value");
  }

  function get_yjr_yjad_Cookie() {
    alert(td.getYahooClickID_yjr_yjad_Cookie());
  }

  function set_twclid_Cookie() {
    Cookies.set("_twclid", "twclid_value");
  }

  function get_twclid_Cookie() {
    alert(td.getXClickIDCookie());
  }

  function set_lt_cid_Cookie() {
    Cookies.set("__lt__cid", "ltcid_value");
  }

  function get_lt_cid_Cookie() {
    alert(td.getLineCookie());
  }

  function getElement(id) {
    return document.querySelector(`#${id}`);
  }

  function setup() {
    // add para actions
    getElement("para_gclid").addEventListener("click", addGoogleClidParam);
    getElement("para_fbclid").addEventListener("click", addFacebookClidParam);
    getElement("para_yclid").addEventListener("click", addYahoo_yclid_Param);
    getElement("para_yjryjad").addEventListener(
      "click",
      addYahoo_yjr_yjad_Param,
    );

    // add cookie actions
    getElement("c_ga").addEventListener("click", set_ga_Cookie);
    getElement("c_gclaw").addEventListener("click", set_gcl_aw_Cookie);
    getElement("c_fbp").addEventListener("click", set_fbp_Cookie);
    getElement("c_fbc").addEventListener("click", set_fbc_Cookie);
    getElement("c_yjsuyjad").addEventListener("click", set_yjsu_yjad_Cookie);
    getElement("c_yclyjad").addEventListener("click", set_ycl_yjad_Cookie);
    getElement("c_yjryjad").addEventListener("click", set_yjr_yjad_Cookie);
    getElement("c_twclid").addEventListener("click", set_twclid_Cookie);
    getElement("c_ltcid").addEventListener("click", set_lt_cid_Cookie);

    getElement("get_ga").addEventListener("click", get_ga_Cookie);
    getElement("get_gclaw").addEventListener("click", get_gcl_aw_Cookie);
    getElement("get_fbp").addEventListener("click", get_fbp_Cookie);
    getElement("get_fbc").addEventListener("click", get_fbc_Cookie);
    getElement("get_ycapi").addEventListener("click", get_yjsu_yjad_Cookie);
    getElement("get_yclyjad").addEventListener("click", get_ycl_yjad_Cookie);
    getElement("get_yjryjad").addEventListener("click", get_yjr_yjad_Cookie);
    getElement("get_twclid").addEventListener("click", get_twclid_Cookie);
    getElement("get_ltcid").addEventListener("click", get_lt_cid_Cookie);

    getElement("get_p_gclid").addEventListener("click", function () {
      alert(td.getGoogleClickIDParam());
    });

    getElement("get_p_fbclid").addEventListener("click", function () {
      alert(td.getFacebookClickIDParam());
    });

    getElement("get_p_yclid").addEventListener("click", function () {
      alert(td.getYahooClickID_yclid_Param());
    });

    getElement("get_p_yjryjad").addEventListener("click", function () {
      alert(td.getYahooClickID_yjr_yjad_Param());
    });
  }

  setup();
})();
