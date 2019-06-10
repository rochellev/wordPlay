$(document).ready(function(event) {
  $("form#flavors").submit(function(event) {
    // this index
    var numbers = [1,2,3,4,5,6,7,8]
    var favItems = numbers.map(function(number) {
      return $('#item'+ number).val();
    });
    alert(favItems.sort());
    alert(favItems)

    var sorter=function(n){
      return "<li>"+favItems[n]+"</li>"
    }
    numbers.forEach(function(number){
      $("ul#insertation").append(sorter(number-1))
    });

    event.preventDefault();

  });
});
