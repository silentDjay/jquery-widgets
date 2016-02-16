$(function () {
  "use strict";

  $(".textField").keypress( function () {
    // $(".fieldArea").add("input[type='text']"); //well, this doesn't do anything
    $("<input class='textField' type='text'>").appendTo( ".fieldArea" ); // this adds a field with every character added to the first field

  });


});
