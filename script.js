"use strict";

const skillsObject = [];

let valid = "";
// const data = await getData("https://bootcamp-2022.devtest.ge/api/skills");

const rightArrow1 = document.querySelector(".rightArrow");
const leftArrow1 = document.querySelector(".leftArrow");
const buttonSumbit = document.querySelector(".buttonSumbit");

function getFromAPI1(url, callback) {
  var obj;
  fetch(url)
    .then((res) => res.json())
    .then((data) => (obj = data))
    .then(() => callback(obj));
}

function getData1(arrOfObjs) {
  console.log("arrOfObjs");
  console.log(arrOfObjs);
}
function startE() {
  let firstName = document.querySelector("#firstName").value;
  console.log(firstName);
  let lastName = document.querySelector("#lastName").value;
  console.log(lastName);
  let Email = document.querySelector("#Email").value;
  console.log(Email);
  let phoneNumber = document.querySelector("#phoneNumber").value;
  console.log(phoneNumber);

  let workRadio = document.querySelector('input[name="work"]:checked').value;
  console.log(workRadio);

  let covid = document.querySelector('input[name="covid"]:checked').value;
  console.log(covid);

  let covidCalendar = document.querySelector("#covidCalendar").value;
  console.log(covidCalendar);

  let vaccinated = document.querySelector(
    'input[name="vaccinated"]:checked'
  ).value;
  console.log(vaccinated);

  let vaccineCalendar = document.querySelector("#vaccineCalendar").value;
  console.log(vaccineCalendar);

  let Devtalks = document.querySelector('input[name="Devtalks"]:checked').value;
  console.log(Devtalks);

  let DevtalksTextarea = document.querySelector("#DevtalksTextarea").value;
  console.log(DevtalksTextarea);
  let specialTextarea = document.querySelector("#specialTextarea").value;
  console.log(specialTextarea);

  let registrationInfo = `{
    "token": "0ce625f7-c272-4d65-b22e-46ba4e96896e",
    "first_name": "${firstName}",
    "last_name": "${lastName}",
    "email": "${Email}",
    "phone": "${phoneNumber}",
    "skills": [
      {
        "id": 1,
        "experience": 3
      },
      {
        "id": 8,
        "experience": 3
      }
    ],
    "work_preference": "${workRadio}",
    "had_covid": ${covid},
    "had_covid_at": "${covidCalendar}",
    "vaccinated": ${vaccinated},
    "vaccinated_at": "${vaccineCalendar}",
    "will_organize_devtalk": ${Devtalks},
    "devtalk_topic": "${DevtalksTextarea}",
    "something_special": "${specialTextarea}"
  }`;
  console.log(registrationInfo);

  let url = "https://bootcamp-2022.devtest.ge/api/application";

  let xhr = new XMLHttpRequest();
  xhr.open("POST", url);

  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      console.log(xhr.responseText);
    }
  };

  xhr.send(registrationInfo);
  window.location.assign("thankyou.html");
  console.log(skillsObject);

  getFromAPI1(
    "https://bootcamp-2022.devtest.ge/api/applications?token=0ce625f7-c272-4d65-b22e-46ba4e96896e",
    getData1
  );
}
getFromAPI1(
  "https://bootcamp-2022.devtest.ge/api/applications?token=0ce625f7-c272-4d65-b22e-46ba4e96896e",
  getData1
);

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
  checkFirstName();
  checkLastName();
  if (valid) {
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
    } else {
      opacityNames[0].classList.add("colorBtn");
      opacityNames[0].classList.remove("opacityBtn");
      // console.log(opacityNames);
      showText();
      showInput();
    }
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
  // console.log(lenghttest);
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
  // console.log(`meore ${inputLenght}`);
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

// Add Programing Language (skills)
function getOption() {
  var selectElement1 = document.querySelector("#languageSelect").value;
  var output2Year = document.querySelector("#output2Year").value;
  addRow(selectElement1, output2Year);
}

function addRow(language, Year) {
  const div = document.createElement("div");

  div.className = "row";

  div.innerHTML = `
    
  <div class="btnAddL">
  <p class="minusBtnText2">${language}</p>
  <p class="minusBtnText3">Years of Experience : ${Year}</p>
  <button onclick="removeRow(this)"  class="btnNone">
    <i class="fa fa-minus-circle minusCircle"></i>
  </button>
  </div>
  `;
  skillsObject.push({ id: language, Experience: Year });

  document.getElementById("minusBtn2").appendChild(div);
}

// Remove (skills)

function removeRow(input) {
  let element = input.previousElementSibling.previousElementSibling;
  const index = skillsObject.findIndex((object) => {
    return object.id == element.innerHTML;
  });
  delete skillsObject[index];
  input.parentNode.remove();
}

// hide Calendar1

function hideCalendar(radioBTN) {
  let hideCal = document.getElementsByClassName("calendarHidden");
  if (radioBTN.value == "true") {
    hideCal[0].classList.remove("hidden");
  } else {
    hideCal[0].classList.add("hidden");
  }
}

// hide Calendar2
function hideCalendar2(radioBTN) {
  let hideCal = document.getElementsByClassName("calendarHidden2");
  if (radioBTN.value == "true") {
    hideCal[0].classList.remove("hidden");
  } else {
    hideCal[0].classList.add("hidden");
  }
}

// hide Textarea
function hiddenTextarea(radioBTN) {
  let hideCal = document.getElementsByClassName("hiddenTextarea");
  if (radioBTN.value == "true") {
    hideCal[0].classList.remove("hidden");
  } else {
    hideCal[0].classList.add("hidden");
  }
}

//validation First name

let firstName = document.querySelector("#firstName").value;

function checkFirstName() {
  var textbox = document.getElementById("firstName");
  if (textbox.value.length < 2 && textbox.value.length > 0) {
    document.getElementById("validationName").innerHTML =
      "*less then 2 character";
    valid = false;
  } else if (textbox.value == "") {
    document.getElementById("validationName").innerHTML =
      "* first name is required";
    valid = false;
  } else {
    document.getElementById("validationName").innerHTML = "";
    valid = true;
  }
}

//validation Last Name

function checkLastName() {
  var textbox = document.getElementById("lastName");
  if (textbox.value.length < 2 && textbox.value.length > 0) {
    document.getElementById("validationLastName").innerHTML =
      "*less then 2 character";
    valid = false;
  } else if (textbox.value == "") {
    document.getElementById("validationLastName").innerHTML =
      "* Last name is required";
    valid = false;
  } else {
    document.getElementById("validationLastName").innerHTML = "";
    valid = true;
  }
}

//Get Skills from DB

function getFromAPI(url, callback) {
  var obj;
  fetch(url)
    .then((res) => res.json())
    .then((data) => (obj = data))
    .then(() => callback(obj));
}

getFromAPI("https://bootcamp-2022.devtest.ge/api/skills", getData);

function getData(arrOfObjs) {
  var results = "<option disabled selected value='error'>Skills</option>";
  arrOfObjs.forEach((x) => {
    results += "<option value='" + x["id"] + "'>" + x["title"] + "</option>";
  });
  results += "";
  document.getElementById("languageSelect").innerHTML = results;
}
