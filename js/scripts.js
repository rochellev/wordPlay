$(document).ready(function(event) {
  $("form#wordPlay").submit(function(event) {
    // turn sentence into array, split at space
    var inputArray = $("#item1").val().split(' ');
    var outputArray = [];
    var combinedArray = []

    inputArray.forEach(function(input){
      if(input.length >= 3){
        outputArray.push(input);
      }

    });

    combinedArray= outputArray.join(inputArray);
    alert(combinedArray);

    //alert(outputArray.length);
    var sorter = function(n){
      return "<li>" + combinedArray[n] + "</li>"
    }


    event.preventDefault();

  });
});
