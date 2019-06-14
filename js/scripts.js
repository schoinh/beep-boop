var input, outputArray, outputString

var beepBoop = function(input) {
  outputArray = [];
  debugger
  for (var num = 0; num <= input; num++) {
    num = num.toString();
    if (num.includes(3)) {
      outputArray.push("I'm sorry, Dave. I'm afraid I can't do that.")
    } else if (num.includes(2)) {
      outputArray.push("Boop!")
    } else if (num.includes(1)) {
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
