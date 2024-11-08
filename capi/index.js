!(function () {
  // Utils ===============================================
  var cookieOptions = { secure: true };
  function addUrlParam(name, value) {
    var currentUrl = new URL(window.location.href);

    if (!currentUrl.searchParams.has(name)) {
      currentUrl.searchParams.append(name, value);
    }

    window.location.href = currentUrl.href;
  }

  function getElement(id) {
    return document.querySelector(`#${id}`);
  }

  function addClickEvent(element, handler) {
    element.addEventListener("click", handler);
  }
  // =======================================================

  // SET PARAMS ============================================
  function addGoogle_gclid_Param() {
    addUrlParam("gclid", "gclid_value");
  }

  function addGoogle_wbraid_Param() {
    addUrlParam("wbraid", "wbraid_value");
  }

  function addFacebook_fbclid_Param() {
    addUrlParam("fbclid", "fbclid_value");
  }

  function addYahoo_yclid_Param() {
    addUrlParam("yclid", "yclid_value");
  }

  function addLine_ldtagcl_Param() {
    addUrlParam("ldtag_cl", "ldtag_cl_value");
  }

  function addX_twclid_Param() {
    addUrlParam("twclid", "twclid_value");
  }

  function addPinterest_epik_Param() {
    addUrlParam("epik", "epik_value");
  }

  function addSnapchat_sccid_Param() {
    addUrlParam("ScCid", "sccid_value");
  }
  // END SET PARAMS ============================================

  // SET COOKIES ============================================
  function set_ga_Cookie() {
    Cookies.set("_ga", "ga_value", cookieOptions);
  }

  function set_gcl_Cookie() {
    var prefix = getElement("gcl-prefix").value || "_gcl";
    var name = getElement("gcl-name").value;

    if (!name) {
      return alert("Input your gcl cookie name");
    }

    Cookies.set(`${prefix}_${name}`, `${prefix}_${name}`, cookieOptions);
  }

  function set_fbp_Cookie() {
    Cookies.set("_fbp", "fbp_value", cookieOptions);
  }

  function set_fbc_Cookie() {
    Cookies.set("_fbc", "fbc_value", cookieOptions);
  }

  function set_shbts_Cookie() {
    Cookies.set("shbts", "shbts_value", cookieOptions);
  }

  function set_shbid_Cookie() {
    Cookies.set("shbid", "shbid_value", cookieOptions);
  }

  function set_dsuserid_Cookie() {
    Cookies.set("ds_user_id", "dsuserid_value", cookieOptions);
  }

  function set_igdid_Cookie() {
    Cookies.set("ig_did", "igdid_value", cookieOptions);
  }

  function set_yjsu_yjad_Cookie() {
    Cookies.set("_yjsu_yjad", "yjsuyjad_value", cookieOptions);
  }

  function set_ycl_yjad_Cookie() {
    Cookies.set("_ycl_yjad", "yclyjad_value", cookieOptions);
  }

  function set_yjr_yjad_Cookie() {
    Cookies.set("_yjr_yjad", "yjryjad_value", cookieOptions);
  }

  function set_ltcid_Cookie() {
    Cookies.set("__lt__cid", "__lt__cid_value", cookieOptions);
  }

  function set_ltsid_Cookie() {
    Cookies.set("__lt__sid", "__lt__sid_value", cookieOptions);
  }

  function set_twclid_Cookie() {
    Cookies.set("_twclid", "twclid_value", cookieOptions);
  }

  function set_epik_Cookie() {
    Cookies.set("_epik", "epik_value", cookieOptions);
  }

  function set_ttp_Cookie() {
    Cookies.set("_ttp", "ttp_value", cookieOptions);
  }

  function set_mktotrk_Cookie() {
    Cookies.set("_mkto_trk", "mktotrk_value", cookieOptions);
  }

  function set_utagmain_Cookie() {
    Cookies.set("utag_main", "utagmain_value", cookieOptions);
  }
  // END SET COOKIES ============================================

  function fetchTags() {
    var iVendors = getElement("i_vendors").value || "";
    var iCookies = getElement("i_cookies").value || "";
    var iParams = getElement("i_params").value || "";

    var configs = {};
    if (iVendors) {
      configs.vendors = iVendors.split(",");
    }

    if (iCookies) {
      configs.cookies = iCookies.split(",");
    }

    if (iParams) {
      configs.params = iParams.split(",");
    }

    td.collectTags(configs);

    var globalTable = td.get("$global");
    getElement("result").textContent = JSON.stringify(globalTable, null, 2);
  }

  function setup() {
    // add para actions
    addClickEvent(getElement("para_gclid"), addGoogle_gclid_Param);
    addClickEvent(getElement("para_wbraid"), addGoogle_gclid_Param);
    addClickEvent(getElement("para_fbclid"), addFacebook_fbclid_Param);
    addClickEvent(getElement("para_yclid"), addYahoo_yclid_Param);
    addClickEvent(getElement("para_ldtagcl"), addLine_ldtagcl_Param);
    addClickEvent(getElement("para_twclid"), addX_twclid_Param);
    addClickEvent(getElement("para_epik"), addPinterest_epik_Param);
    addClickEvent(getElement("para_sccid"), addSnapchat_sccid_Param);

    // add cookie actions
    addClickEvent(getElement("c_ga"), set_ga_Cookie);
    addClickEvent(getElement("c_gmp"), set_gcl_Cookie);

    addClickEvent(getElement("c_fbp"), set_fbp_Cookie);
    addClickEvent(getElement("c_fbc"), set_fbc_Cookie);

    addClickEvent(getElement("c_shbts"), set_shbts_Cookie);
    addClickEvent(getElement("c_shbid"), set_shbid_Cookie);
    addClickEvent(getElement("c_dsuserid"), set_dsuserid_Cookie);
    addClickEvent(getElement("c_igdid"), set_igdid_Cookie);

    addClickEvent(getElement("c_yclyjad"), set_ycl_yjad_Cookie);
    addClickEvent(getElement("c_yjryjad"), set_yjr_yjad_Cookie);
    addClickEvent(getElement("c_yjsuyjad"), set_yjsu_yjad_Cookie);

    addClickEvent(getElement("c_ltcid"), set_ltcid_Cookie);
    addClickEvent(getElement("c_ltsid"), set_ltsid_Cookie);

    addClickEvent(getElement("c_twclid"), set_twclid_Cookie);

    addClickEvent(getElement("c_epik"), set_epik_Cookie);
    addClickEvent(getElement("c_ttp"), set_ttp_Cookie);
    addClickEvent(getElement("c_mktotrk"), set_mktotrk_Cookie);
    addClickEvent(getElement("c_utagmain"), set_utagmain_Cookie);

    addClickEvent(getElement("fetch_tags"), fetchTags);
  }

  setup();
})();
