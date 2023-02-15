!function() {
  var saveBtn = document.querySelector(".save-btn");
  var uncheckAll = document.querySelector("#uncheckall");

  var form1 = document.querySelector("uc-form-1");
  var form2 = document.querySelector("uc-form-2");

  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      form1.submit();
      form2.submit();
    });


    uncheckAll.addEventListener('click', (evt) => {
      var target = evt.target;

      console.log(target.checked);
    });
  }
}();
