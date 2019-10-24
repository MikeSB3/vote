$(document).ready(function(){

  var age = parseInt(prompt("How old are you?"));

  if (age < 18) {
    $(".cantvote").show();
  } else if (age >= 18) {
    $(".vote").show();
  } else {
    alert("Error");
  };

});
