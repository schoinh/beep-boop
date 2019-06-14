var input, countUpString, countDownString;

var beepBoop = function(name, inputNum) {
  var array = [];
  for (var num = 0; num <= inputNum; num++) {
    num = num.toString();
    if (num.includes(3)) {
      var apology = "I'm sorry, " + name + ", I'm afraid I can't do that";
      array.push(apology);
    } else if (num.includes(2)) {
      array.push("Boop!");
    } else if (num.includes(1)) {
      array.push("Beep!");
    } else {
      array.push(num);
    }
  }
  countUpString = array.join(", ");
  countDownString = array.reverse().join(", ");
}

$(function() {
  $("#countUp").click(function(event) {
    event.preventDefault();

    inputName = $("#name").val();
    inputNumber = $("#input").val();
    beepBoop(inputName, inputNumber);

    $("#output").text(countUpString);
  })

  $("#countDown").click(function(event) {
    event.preventDefault();

    inputName = $("#name").val();
    inputNumber = $("#input").val();
    beepBoop(inputName, inputNumber);

    $("#output").text(countDownString);
  })
})
