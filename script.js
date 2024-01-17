// Tip Calculator

// Saving elements as variables

var percent1 = document.getElementById("div1");
var percent2 = document.getElementById("div2");
var percent3 = document.getElementById("div3");
var percent4 = document.getElementById("div4");
var skip = document.getElementById("div5");
var custom = document.getElementById("div6");

// Event Listeners

percent1.addEventListener("click", applyPercent1);
percent2.addEventListener("click", applyPercent2);
percent3.addEventListener("click", applyPercent3);
percent4.addEventListener("click", applyPercent4);
skip.addEventListener("click", applyReset);
custom.addEventListener("click", applyCustom);

// Event Functions

function applyPercent1() {
  var amount = +document.getElementById("input").value;
  var people = +document.getElementById("input2").value;
  total = amount * 0.18;
  output = total + amount;
  output = output.toFixed(2);

  if (output != 0) {
    document.getElementById("display1").innerHTML = `Total: $${output}`;
  } else {
    document.getElementById("display1").innerHTML = "(add bill/amount)";
  }

  output = output / people;
  output = output.toFixed(2);

  if (people != 0) {
    document.getElementById("display11").innerHTML = `Total: $${output}`;
  } else {
    document.getElementById("display11").innerHTML = "(add amount of people)";
  }

  console.log(output);
}

function applyPercent2() {
  var amount = +document.getElementById("input").value;
  var people = +document.getElementById("input2").value;
  total = amount * 0.2;
  output = total + amount;
  output = output.toFixed(2);

  if (output != 0) {
    document.getElementById("display2").innerHTML = `Total: $${output}`;
  } else {
    document.getElementById("display2").innerHTML = "(add bill/amount)";
  }

  output = output / people;
  output = output.toFixed(2);

  if (people != 0) {
    document.getElementById("display22").innerHTML = `Total: $${output}`;
  } else {
    document.getElementById("display22").innerHTML = "(add amount of people)";
  }

  console.log(output);
}

function applyPercent3() {
  var amount = +document.getElementById("input").value;
  var people = +document.getElementById("input2").value;
  total = amount * 0.25;
  output = total + amount;
  output = output.toFixed(2);

  if (output != 0) {
    document.getElementById("display3").innerHTML = `Total: $${output}`;
  } else {
    document.getElementById("display3").innerHTML = "(add bill/amount)";
  }

  output = output / people;
  output = output.toFixed(2);

  if (people != 0) {
    document.getElementById("display33").innerHTML = `Total: $${output}`;
  } else {
    document.getElementById("display33").innerHTML = "(add amount of people)";
  }
  console.log(output);
}

function applyPercent4() {
  var amount = +document.getElementById("input").value;
  var people = +document.getElementById("input2").value;
  total = amount * 0.3;
  output = total + amount;
  output = output.toFixed(2);

  if (output != 0) {
    document.getElementById("display4").innerHTML = `Total: $${output}`;
  } else {
    document.getElementById("display4").innerHTML = "(add bill/amount)";
  }

  output = output / people;
  output = output.toFixed(2);

  if (people != 0) {
    document.getElementById("display44").innerHTML = `Total: $${output}`;
  } else {
    document.getElementById("display44").innerHTML = "(add amount of people)";
  }
  console.log(output);
}

function applyReset() {
  document.getElementById("input").value = "";
  document.getElementById("input2").value = "";
  document.getElementById("display1").innerHTML = "(-------)";
  document.getElementById("display2").innerHTML = "(-------)";
  document.getElementById("display3").innerHTML = "(-------)";
  document.getElementById("display4").innerHTML = "(-------)";
  document.getElementById("display11").innerHTML = "(-------)";
  document.getElementById("display22").innerHTML = "(-------)";
  document.getElementById("display33").innerHTML = "(-------)";
  document.getElementById("display44").innerHTML = "(-------)";
  document.getElementById("custom").innerHTML = "(-------)";
  document.getElementById("customPeople").innerHTML = "(-------)";
}

function applyCustom() {
  var amount = +document.getElementById("input").value;
  var people = +document.getElementById("input2").value;
  let custom = +prompt("Enter your percentage you want to tip (only numbers):");
  custom = custom / 100;

  let total = amount * custom;
  output = total + amount;
  output = output.toFixed(2);

  if (output == 0) {
    document.getElementById("custom").innerHTML = "(add bill/amount)";
  } else {
    document.getElementById("custom").innerHTML = `Total: $${output}`;
  }

  output = output / people;
  output = output.toFixed(2);

  if (people != 0) {
    document.getElementById("customPeople").innerHTML = `Total: $${output}`;
  } else {
    document.getElementById("customPeople").innerHTML =
      "(add amount of people)";
  }

  console.log(output);
}
