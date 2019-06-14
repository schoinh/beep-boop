var input, outputArray, outputString

var beepBoop = function(input) {
  outputArray = [];
  for (var num = 0; num <= input; num++) {
    if (num === 3) {
      outputArray.push("I'm sorry, Dave. I'm afraid I can't do that.")
    } else if (num === 2) {
      outputArray.push("Boop!")
    } else if (num === 1) {
      outputArray.push("Beep!")
    } else {
      outputArray.push(num);
    }
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
