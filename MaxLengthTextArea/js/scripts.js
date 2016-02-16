$(function () {
  "use strict";

  var maxTextAreas = $("[maxsize]"); //this returns an array containing all elements (not just textareas???) with a 'maxsize' attribute
  var areasMaxTextLimit = $("[maxsize]").attr("maxsize");

  // $(maxTextAreas).on("click", function () {
  //   $(this).css("color", "red"); // this changes the text color to red when either textarea with a maxlength attribute is clicked
  //   $("label").text("0");
  // });

  $(maxTextAreas).keypress( function () {
    if(maxTextAreas.val().length >= areasMaxTextLimit) {
        return false;
    } else {
    $(".remainingText").css("display", "block");
    $(".remainingText").text("You've got " + (maxTextAreas.attr("maxsize") - maxTextAreas.val().length -1 ) + " characters remaining");
    }
  });

  // try .not ??? to exclude certain values

  // $(this).css("color", "red"); // this changes the text color to red when either textarea with a maxlength attribute is clicked

  // $("[maxsize]").on("click", function () {
  //   $(this).css("color", "red"); // this changes the text color to red when either textarea with a maxlength attribute is clicked
  //   $("label").text(("[maxsize]").attr('maxsize') + " characters remaining");
  // });

  // $("[maxsize]".attr("maxsize"), function () {
  //   console.log($(this).attr("maxsize"));
  // }); THIS IS BORKED

});
