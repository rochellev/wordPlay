$(document).ready(function(event) {
  $("form#wordPlay").submit(function(event) {
    // turn sentence into array, split at space
    var input = $("#item1").val().split(' ');



    event.preventDefault();

  });
});
