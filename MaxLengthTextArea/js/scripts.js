$(function () {
  "use strict";

  var maxTextAreas = $("[maxsize]"); //this returns an array containing all elements (not just textareas??? with a 'maxsize' attribute

  // $(maxTextAreas).on("click", function () {
  //   $(this).css("color", "red"); // this changes the text color to red when either textarea with a maxlength attribute is clicked
  //   $("label").text("0");
  // });

  $(maxTextAreas).keydown( function () {
    $(this).css("color", "red"); // this changes the text color to red when either textarea with a maxlength attribute is clicked
    $("label").text((maxTextAreas.attr('maxsize') - maxTextAreas.val().length) + " characters remaining");
  });

  // try .not ??? to exclude certain values

  //I could make the textarea field label change textinput ??? (what value) with each keydown

  // $("[maxsize]").on("click", function () {
  //   $(this).css("color", "red"); // this changes the text color to red when either textarea with a maxlength attribute is clicked
  //   $("label").text(("[maxsize]").attr('maxsize') + " characters remaining");
  // });

  // $("[maxsize]".attr("maxsize"), function () {
  //   console.log($(this).attr("maxsize"));
  // }); THIS IS BORKED

  // $("[maxsize]").attr('maxsize'); // this returns the maxsize attribute for the first

  //To set or get the text value of input or textarea elements, use the .val() method.###########%%%##@@$$##

});
