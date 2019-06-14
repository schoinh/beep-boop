var input, outputArray, outputString

var beepBoop = function(input) {
  outputArray = [];
  for (var num = 0; num <= input; num++) {
    outputArray.push(num);
  }
  outputString = outputArray.join(", ")
}


$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    input = $("#input").val();
    beepBoop(input);

    $("#output").text(outputString);
  })
})
