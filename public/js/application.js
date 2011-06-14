var Typecaster = {
  dropdownSelector: "#font-selector select",

  init: function() {
    $(Typecaster.dropdownSelector).change(function() { Typecaster.update(); });
    Typecaster.update();
  },
  
  getFont: function() {
    return $(Typecaster.dropdownSelector).val();
  },
  
  setFont: function(font) {
    $("body").css("font-family", font);
  },
  
  update: function() {
    Typecaster.setFont(Typecaster.getFont());
  }
}

$(function() {
  Typecaster.init();
});
