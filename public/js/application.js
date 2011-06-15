var Typecaster = function($){
  var $fontLinks = $("#font-selector a");
  
  return {
    init: function() {
      $fontLinks.click(function() { 
        $fontLinks.removeClass("active");
        $(this).addClass("active");
        Typecaster.update(); 
      });
      
      Typecaster.update();
    },
  
    getFont: function() {
      return $("#font-selector a.active").attr("data-value");
    },
  
    setFont: function(font) {
      $("#document").css("font-family", font);
    },
  
    update: function() {
      Typecaster.setFont(Typecaster.getFont());
    }
  };
}(jQuery);

$(function() {
  Typecaster.init();
});
