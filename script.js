"use strict";

const rightArrow1 = document.querySelector(".rightArrow");
const leftArrow1 = document.querySelector(".leftArrow");
const buttonSumbit = document.querySelector(".buttonSumbit");
// const buttonSend = document.getElementById("start");

// buttonSend.addEventListener("click", function () {
//   firstName = document.getElementById("firstName").innerText;
//   console.log(firstName);
// });

// let firstName = document.querySelector("#firstName");
// console.log(firstName);

function startE() {
  let firstName = document.querySelector("#firstName").value;
  console.log(firstName);
  let lastName = document.querySelector("#lastName").value;
  console.log(lastName);
  // let workRadio = document.querySelector('input[name="work"]:checked').value;
  // console.log(workRadio);

  window.location.assign("thankyou.html");
}

buttonSumbit.addEventListener("click", function () {
  let hiddenSection = document.getElementsByClassName("hiddenSection");
  let secondHiddensection = document.getElementsByClassName(
    "secondHiddensection"
  );
  hiddenSection[0].classList.remove("hidden");
  secondHiddensection[0].classList.add("hidden");
});

//  Right Arrow Button
rightArrow1.addEventListener("click", function () {
  let opacityNames = document.getElementsByClassName("opacityBtn");
  let hiddenSection = document.getElementsByClassName("hiddenSection");
  let secondHiddensection = document.getElementsByClassName(
    "secondHiddensection"
  );

  // console.log(opacityNames);
  // console.log(inputPart);

  if (opacityNames.length == 1) {
    hiddenSection[0].classList.add("hidden");
    secondHiddensection[0].classList.remove("hidden");
    console.log("ee");
  } else {
    opacityNames[0].classList.add("colorBtn");
    opacityNames[0].classList.remove("opacityBtn");
    // console.log(opacityNames);
    showText();
    showInput();
  }
});

// Left Arrow Button
leftArrow1.addEventListener("click", function () {
  let colorBtn = document.getElementsByClassName("colorBtn");
  let lenghttest = colorBtn.length;
  // console.log(colorBtn);
  if (lenghttest == 1) {
    document
      .getElementsByClassName("leftArrow")
      .addEventListener("click", gotoUrl());
  } else {
    colorBtn[lenghttest - 1].classList.add("opacityBtn");
    colorBtn[lenghttest - 1].classList.remove("colorBtn");
    // console.log(colorBtn);
    showText();
    showInput();
  }
});

// Right Side Text
function showText() {
  let element = document.getElementsByClassName("colorBtn");
  let lenghttest = element.length;
  console.log(lenghttest);
  let textMain = document.getElementsByClassName("textMain");
  textMain[lenghttest - 1].classList.remove("hidden");
  $("article.textMain")
    .not(textMain[lenghttest - 1])
    .addClass("hidden");
}

// Left Side Input
function showInput() {
  let inputPart2 = document.getElementsByClassName("colorBtn");
  let inputLenght = inputPart2.length;
  console.log(`meore ${inputLenght}`);
  let inputPart = document.getElementsByClassName("inputPart");
  inputPart[inputLenght - 1].classList.remove("hidden");
  $("article.inputPart")
    .not(inputPart[inputLenght - 1])
    .addClass("hidden");
}

// Link to the first page
function gotoUrl() {
  window.location.assign("index.html");
}

// test
function getOption() {
  let selectElement1 = document.querySelector("#languageSelect").value;
  let output2Year = document.querySelector("#output2Year").value;
  let test10 =
    `Ena: ${selectElement1}` + ` Experience Duration in Years  ${output2Year}`;

  console.log(test10);
  // document.querySelector(".output").textContent = output;
}
