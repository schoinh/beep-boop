var input, countUpString, countDownString;
var array = [];

var beepBoop = function(name, inputNum) {
  array = [];
  if (inputNum < 0) {                   // handles negative number input
    for (var num = 0; num >= inputNum; num--) {
      generateArray(num);
    }
  } else {                    // handles positive number input
    for (var num = 0; num <= inputNum; num++) {
      generateArray(num);
    }
  }
  countUpString = array.join(", ");           // counts from zero
  countDownString = array.reverse().join(", ");       //counts to zero
}

var generateArray = function(num) {
  num = num.toString();
  if (num.includes(3)) {
    var apology = "I'm sorry, " + inputName + ", I'm afraid I can't do that";
    array.push(apology);
  } else if (num.includes(2)) {
    array.push("Boop!");
  } else if (num.includes(1)) {
    array.push("Beep!");
  } else {
    array.push(num);
  }
}

$(function() {
  $("#countUp").click(function(event) {
    event.preventDefault();

    inputName = $("#name").val();
    inputNumber = $("#input").val();

    if (!inputName || !inputNumber) {
      $(".alert").show();
    } else {
      $(".alert").hide();
      beepBoop(inputName, inputNumber);
      $("#output").text(countUpString);
    }
  })

  $("#countDown").click(function(event) {
    event.preventDefault();

    inputName = $("#name").val();
    inputNumber = $("#input").val();

    if (!inputName || !inputNumber) {
      $(".alert").show();
    } else {
      $(".alert").hide();
      beepBoop(inputName, inputNumber);
      $("#output").text(countDownString);
    }
  })

  $("#panicButton").click(function(event) {
    event.preventDefault();
    $(".container").hide();
    $(".panic").show();
  })

  $("#back").click(function() {             // takes user back to main screen
    $(".panic").hide();
    $(".container").show();
  })
})
