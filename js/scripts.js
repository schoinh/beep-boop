var input, outputArray, outputString;

var beepBoop = function(name, inputNum) {
  outputArray = [];
  for (var num = 0; num <= inputNum; num++) {
    num = num.toString();
    if (num.includes(3)) {
      var apology = "I'm sorry, " + name + ", I'm afraid I can't do that";
      outputArray.push(apology);
    } else if (num.includes(2)) {
      outputArray.push("Boop!");
    } else if (num.includes(1)) {
      outputArray.push("Beep!");
    } else {
      outputArray.push(num);
    }
  }
  outputString = outputArray.join(", ");
}


$(function() {
  $("#countUp").click(function(event) {
    event.preventDefault();

    inputName = $("#name").val();
    inputNumber = $("#input").val();
    beepBoop(inputName, inputNumber);

    $("#output").text(outputString);
  })

  $("#countDown").click(function(event) {
    event.preventDefault();

    inputName = $("#name").val();
    inputNumber = $("#input").val();
    beepBoop(inputName, inputNumber);

    $("#output").text(outputString);
  })
})
