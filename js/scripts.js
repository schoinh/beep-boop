var input, outputArray, outputString

var beepBoop = function(name, inputNum) {
  outputArray = [];
  debugger
  for (var num = 0; num <= inputNum; num++) {
    num = num.toString();
    if (num.includes(3)) {
      outputArray.push("I'm sorry")
      outputArray.push(name)
      outputArray.push("I'm afraid I can't do that")
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

    inputName = $("#name").val();
    inputNumber = $("#input").val();
    beepBoop(inputName, inputNumber);

    $("#output").text(outputString);
  })
})
