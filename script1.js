"use strict";

let AllResult = "";
// script for "Submitted page"

function showacordion(e) {
  // Get current link value
  console.log(e);
  var currentLink = $(e).attr("href");
  var index =
    currentLink.substring(currentLink.indexOf("-") + 1, currentLink.length) - 1;
  console.log(index);
  var accordion = `
    <div class="main">
      <div class="width">
        <h3>Personal Information</h3>
        <div class="keyValue">
          <div class="key1">
            <p>First Name</p>
            <p>Last Name</p>
            <p>E mail</p>
            <p>Phone</p>
          </div>
          <div class="value1">
            <p>${AllResult[index].first_name}</p>
            <p>${AllResult[index].last_name}</p>
            <p>${AllResult[index].email}</p>
            <p>${AllResult[index].phone}</p>
          </div>
        </div>
      </div>
      <div class="width">
        <h3>Skillset</h3>
        <div class="keyValue">
          <div class="key2">
            <p>PHP</p>
            <p>React</p>
          </div>
          <div class="value2">
            <p>Years of Experiences: 3</p>
            <p>Years of Experiences: 9</p>
          </div>
        </div>
      </div>
      <div class="width">
        <h3>Covid Situation</h3>
        <div>
          <div>
            <span>how would you prefer to work?</span>
            <div class="keyValue">
              <div class="key2">
                <p><i class="fa fa-circle-o"></i></p>
                <p><i class="fa fa-circle-o"></i></p>
                <p><i class="fa fa-dot-circle-o"></i></p>
              </div>
              <div class="value2">
                <p>test2</p>
                <p>Hybrid</p>
                <p>From Home</p>
              </div>
            </div>
          </div>
          <div>
            <span>Did you have covid 19?</span>
            <div class="keyValue">
              <div class="key2">
                <p><i class="fa fa-dot-circle-o"></i></p>
                <p><i class="fa fa-circle-o"></i></p>
              </div>
              <div class="value2">
                <p>Yes</p>
                <p>No</p>
              </div>
            </div>
          </div>
          <div>
            <span>When did you have covid 19?</span>
            <div class="calendarInput">
              <p>${AllResult[index].had_covid_at}</p>
              <i class="fa fa-calendar" style="color: red"></i>
            </div>
          </div>
          <div>
            <span>Have you been vaccinated?</span>
            <div class="keyValue">
              <div class="key2">
                <p><i class="fa fa-dot-circle-o"></i></p>
                <p><i class="fa fa-circle-o"></i></p>
              </div>
              <div class="value2">
                <p>Yes</p>
                <p>No</p>
              </div>
            </div>
          </div>
          <div>
            <span>When did you get covid vaccine?</span>
            <div class="calendarInput">
              <p>${AllResult[index].vaccinated_at}</p>
              <i class="fa fa-calendar" style="color: red"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="Skillset width">
        <h3>Insigts</h3>
        <div>
          <div>
            <span
              >Would you attend Devtalks and maybe also organize your
              own?</span
            >
            <div class="keyValue">
              <div class="key2">
                <p><i class="fa fa-dot-circle-o"></i></p>
                <p><i class="fa fa-circle-o"></i></p>
              </div>
              <div class="value2">
                <p>Yes</p>
                <p>No</p>
              </div>
            </div>
          </div>
          <div>
            <span>What would you speak about at Devtalk?</span>
            <div class="">
              <div class="textArea">
                <textarea
                  disabled
                  id="story"
                  name="story"
                  rows="5"
                  cols="33"
                >
                ${AllResult[index].devtalk_topic}
                </textarea>
              </div>
            </div>
          </div>
          <div>
            <span> Tell us somthing special </span>
            <div class="">
              <div class="textArea">
                <textarea
                  disabled
                  id="story"
                  name="story"
                  rows="5"
                  cols="33"
                >
                ${AllResult[index].something_special}
                </textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  `;
  var txt = document.createElement("div");
  txt.setAttribute("id", "accordion-" + (Number(index) + 1));
  txt.setAttribute("class", "section-content");
  txt.innerHTML = accordion;

  if (e.classList.contains("active")) {
    close_section(e);
  } else {
    close_section(e);
    e.parentNode.insertBefore(txt, e.nextSibling);
    // Add active class to section title
    $(e).addClass("active");
    // Display the hidden content
    $(".accordion " + currentLink)
      .slideDown(350)
      .addClass("open");
  }
  //e.preventDefault();
  console.log(e);
}

function close_section(e) {
  console.log(e.nextSibling);
  if (e.nextSibling != null) {
    if (e.nextSibling != `"""` && e.nextSibling.classList.contains("open")) {
      e.parentNode.removeChild(e.nextSibling);
    }
    $(".accordion .section-title").removeClass("active");
    $(".accordion .section-content").removeClass("open").slideUp(350);
  }
}

function getFromAPI1(url, callback) {
  var obj;
  fetch(url)
    .then((res) => res.json())
    .then((data) => (obj = data))
    .then(() => callback(obj));
}

function getData1(arrOfObjs) {
  AllResult = arrOfObjs;
  //console.log(AllResult[0].first_name);
  console.log(arrOfObjs);
  let result = "";
  for (let i = 1; i <= arrOfObjs.length; i++) {
    result += `<a class="section-title" href="#accordion-${i}" onclick="showacordion(this)">${i}</a>`;
  }
  document.getElementById("accordionList").innerHTML = result;
}

getFromAPI1(
  "https://bootcamp-2022.devtest.ge/api/applications?token=0ce625f7-c272-4d65-b22e-46ba4e96896e",
  getData1
);
