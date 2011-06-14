var Typecaster = function($){
  var $dropdown = $("#font-selector select");
  
  return {
    init: function() {
      $dropdown.change(function() { Typecaster.update(); });
      Typecaster.update();
    },
  
    getFont: function() {
      return $dropdown.val();
    },
  
    setFont: function(font) {
      $("body").css("font-family", font);
    },
  
    update: function() {
      Typecaster.setFont(Typecaster.getFont());
    }
  };
}(jQuery);

$(function() {
  Typecaster.init();
});
