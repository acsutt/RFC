/* Function taken from: https://stackoverflow.com/questions/247483/http-get-request-in-javascript */
var HttpClient = function() {
  (this.get = function(aUrl, aCallback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
      if (httpRequest.readyState == 4 && httpRequest.status == 200)
        aCallback(httpRequest.responseText);
    };
    httpRequest.open("GET", aUrl, true);
    httpRequest.send(null);
  }),
    (this.post = function(url, data) {
      var httpRequest = new XMLHttpRequest();
      httpRequest.open("POST", url, true);
      httpRequest.setRequestHeader("Access-Control-Allow-Origin", "*");
      httpRequest.setRequestHeader("Content-Type", "application/json");
      httpRequest.send(JSON.stringify(data));
    });
};

var firstname = "";
var surname = "";
const RFCForm = {
  right: document.getElementById("right"),
  left: document.getElementById("left")
};

function toggleElement(element, displayStyle, hide) {
  element.style.minWidth = hide;
  element.style.borderWidth = hide;
}
let questions = [
  "What is the change?",
  "Why is the change required?",
  "What systems will be altered and how?",
  "What customers could potentially be impacted by this change and will there be any impact to service?",
  "What possible risks are involved with making the change",
  "What are the risks of not performing the change?",
  "How will the change be verified post implementation?",
  "What is the roll-back plan in case of the change not having the desired effect?",
  "When does the change need to be completed by? Why?",
  "Who will be performing the change?"
];
let currentSection = 0;
const questionsSections = [[0, 1, 2], [3, 4, 5], [6, 7], [8, 9]];

let templates = {
  login: function() {
    toggleElement(RFCForm.left, "flex", null);
    RFCForm.right.innerHTML = `<div class="header">
            <h1>Request For Change</h1>
            <p>In order for a change to be instigated. You must first answer 10 questions based on the change you would like. All field are required are marked with a <strong class="error">*</strong>.</p>
          </div>
          <p id="invalidForm" class="error"></p>
          <div class="rightContent">
            <form>
              <div class="FirstName">
                <h4>First Name <strong class="error">*</strong></h4>
                <input placeholder="FirstName" id="firstname">
              </div>
              <div class="Surname">
                <h4>Surname <strong class="error">*</strong></h4>
                <input placeholder="Surname" id="surname">
              </div>
            </form>
          </div>
          <div class="footer">
            <button class="submit" onclick="validateInputs('options')">Continue ⟶</button>
          </div>`;
  },
  options: function() {
    RFCForm.right.innerHTML = `<div class="header">
              <h1>Welcome back!</h1>
            </div>
            <p class="error"></p>
            <div class="rightContent">
              <div class="options">
                <div class="option" onclick="renderTemplate('makeARequest')">
                  <div class="icon" style="background-color: #e82910ff">
                    <img src="https://cdn.glitch.com/c6b364c6-db89-45d2-b2d7-18559fbc4e64%2FmakeRequest.png?v=1579711825430">
                  </div>
                  <div class="text">Make a request</div>
                </div>
                <div class="option" onclick="renderTemplate('viewRequests')">
                  <div class="icon" style="background-color: #8b1065ff">
                    <img src="https://cdn.glitch.com/c6b364c6-db89-45d2-b2d7-18559fbc4e64%2FviewRequests.png?v=1579711825530">
                  </div>
                  <div class="text">View requests</div>
                </div>
                <div class="option" onclick="renderTemplate('manageRequests')">
                  <div class="icon" style="background-color: #164194">
                    <img src="https://cdn.glitch.com/c6b364c6-db89-45d2-b2d7-18559fbc4e64%2FmanageRequests.png?v=1579711825680">
                  </div>
                  <div class="text">Manage requests</div>
                </div>
            </div>`;
  },
  viewRequests: function() {
    toggleElement(RFCForm.left, "flex", 0);
    RFCForm.right.innerHTML = `<div class="header">
                                <h1>View requests</h1>
                               </div>
                               <div class="rightContent">
                                <div class="tableContent">
                                <table>
                                  <thead>
                                    <tr>
                                      <th>Requested by</th>
                                      <th>Requested At</th>
                                      <th>Priority</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                    <tr>
                                      <td>User</td>
                                      <td>21/01/19</td>
                                      <td>High</td>
                                    </tr>
                                  </tbody>
                                </table>
                               </div>`;
  },
  manageRequests: function() {
    toggleElement(RFCForm.left, "flex", 0);
    RFCForm.right.innerHTML = `<div class="header">
                                <h1>Manage requests</h1>
                               </div>
                               <div class=""></div>`;
  },
  makeARequest: function() {
    let questionElements = "";
    questionsSections[currentSection].forEach(
      questionNumber =>
        (questionElements =
          questionElements +
          `<h4 class="question">${questions[questionNumber]}</h4><textarea></textarea>`)
    );

    toggleElement(RFCForm.left, "flex", 0);
    RFCForm.right.innerHTML = `<div class="makeARequest">
                                <div class="progressBar">
                                  <ul class="stages">
                                    <li>Change</li>
                                    <li>Risks</li>
                                    <li>Plan</li>
                                    <li>When & Who</li>
                                  </ul>
                                </div>
                                <form class="requestForm">
                                  ${questionElements}
                                </form>
                              </div>
                              <div class="footer">
                                <div class="priorityButtons">Please select the priority of your request
                                  <div class="inputGroup">
                                    <input type="radio" name="priority" id="retro" class="prioritySelect">
                                    <label for="retro">Retrospective</label>
                                  </div>
                                  <div class="inputGroup">
                                    <input type="radio" name="priority" id="normal" class="prioritySelect" checked>
                                    <label for="normal">Normal</label>
                                  </div>
                                  <div class="inputGroup">
                                    <input type="radio" name="priority" id="emergency" class="prioritySelect">
                                    <label for="emergency">Emergency</label>
                                  </div>
                                </div>
                                <button class="submit" onclick="validateInputs('makeARequest', true)">Continue ⟶</button>
                              </div>`;
  }
};

//Startpoint
templates.viewRequests();

function validateInputs(nextPage, isQuestions = false) {
  let error = 0;
  toggleElement(RFCForm.left, "flex", null);
  Array.from(document.getElementsByTagName("input")).forEach(ele => {
    if (ele.value == "") {
      ele.style.border = "1px solid red";
      error++;
    }
  });
  if (error > 0)
    return (document.getElementById("invalidForm").innerHTML =
      "Missing fields. Please fill in the field(s) highlighted.");
  if (nextPage) {
    if (isQuestions) {
      if (currentSection == questionsSections.length - 1)
        return this.renderTemplate("login");
      currentSection++;
    }
    this.renderTemplate(nextPage);
  }
}
function renderTemplate(template) {
  templates[template]();
}
function checkNames() {
  firstname = document.getElementById("firstname");
  surname = document.getElementById("surname");
  if (firstname.value != "" && surname.value != "") {
    return true;
  } else {
    return false;
  }
}

function loadModeSelect() {
  if (checkNames()) {
    templates.options();
    for (
      let i = 0;
      i < document.getElementsByClassName("invalidForm").length;
      i++
    ) {
      document.getElementsByClassName("error")[i].style.display = "none";
    }
  } else {
    for (let i = 0; i < document.getElementsByClassName("error").length; i++) {
      document.getElementsByClassName("error")[i].style.display = "block";
    }
  }
}

/* <div class="progressBar">
                                <div class="progressStages">
                                  <button class="progressStage" style="background: #e82910ff"><h3>1</h3></button>
                                  <button class="progressStage" style="background: #8b1065ff"><h3>2</h3></button>
                                  <button class="progressStage" style="background: #164194ff"><h3>3</h3></button>
                                </div>
                                <div class="cover"></div>
                                <div class="bar"></div>
                               </div>
                               */
