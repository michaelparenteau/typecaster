$(function() {
  $("#font-selector select").change(function() {
    $("body").css("font-family", $(this).val());
  });
});
