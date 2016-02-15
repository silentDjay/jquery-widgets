$(function () {
  "use strict";

  $("#modalButton").on("click", function () {
    $(this).text("YOU FAILED");
    $(".modalHolder").addClass("revealed");
  });

  $(".modalHolder").on("click", function () {
    $(".modalHolder").removeClass("revealed");
  });

  $(".modalX").on("click", function () {
    $(".modalHolder").removeClass("revealed");
  });

  $('.modal').click(function (e) {
    e.stopPropagation();
  });
  
});
