var userData = {
  username: "",
  responses: []
};

var questionList = [];

/* Function taken from: https://stackoverflow.com/questions/247483/http-get-request-in-javascript */
var HttpClient = function() {
  this.get = function(aUrl, aCallback) {
      var httpRequest = new XMLHttpRequest();
      httpRequest.onreadystatechange = function() { 
          if (httpRequest.readyState == 4 && httpRequest.status == 200)
              aCallback(httpRequest.responseText);
      }
      httpRequest.open( "GET", aUrl, true );            
      httpRequest.send( null );
  },
  this.post = function(url, data) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("POST", url, true);
    httpRequest.setRequestHeader('Content-Type', 'application/json');
    httpRequest.send(JSON.stringify(data));
  }
}

function startup() {
  document.getElementsByClassName("ui-datepicker-next").innerHTML = ">";
  document.getElementsByClassName("ui-datepicker-prev").innerHTML = "<";
  window.addEventListener("scroll", checkHeader);
  var mainContent = document.getElementById("page-content");
  var body = document.getElementById("holder");

  let client = new HttpClient();
  client.get("http://localhost:1010/questions", data => { //Get the questions
    let questionList = JSON.parse(data);
    for (let i = 0; i < questionList.length; i++) { //Loop through each question
      var QAblock = document.createElement("div");
      QAblock.className = "QA-Block";
      mainContent.appendChild(QAblock);
  
      var question = document.createElement("div");
      question.className = "question";
      question.innerHTML = questionList[i].question;
      QAblock.appendChild(question);

      //Add date selector if needed
      if (questionList[i].datePicker) {
        var dateText = document.createElement("p");
        dateText.innerHTML = "Date: ";
        question.appendChild(dateText);
  
        var dateGrid = document.createElement("input");
        dateGrid.type = "text";
        dateGrid.placeholder = "Click to select date";
        dateGrid.id = "datepicker";
        dateText.appendChild(dateGrid);
      }
      //Add text box
      var textBox = document.createElement("textarea");
      textBox.className = "textBox";
      textBox.id = "answerBox" + i;
      textBox.placeholder = "Please answer here";
      QAblock.appendChild(textBox);
    }
    $(function() { //Configuring the data picker
      $("#datepicker").datepicker({
        dateFormat: "dd-mm-yy",
        showAnim: "slideDown"
      });
    });
  });
}

function submit() {
  var answered = 0;
  var responses = document.getElementsByClassName("textBox");

  for (var i = 0; i < responses.length; i++) {
    var answer = document.getElementById("answerBox" + i);
    if (answer.value != "") {
      answered++;
      userData.responses.push(answer.value);
    } else {
      $(".name").addClass("emptyInput");
      $(answer).addClass("emptyInput");
    }
  }
  var firstname = document.getElementById("firstName");
  var surname = document.getElementById("surname");
  if (
    answered < responses.length ||
    datepicker.value == "" ||
    firstname.value == "" ||
    surname.value == ""
  ) {
    alert("Please provide answers for all questions and fill in your name.");
  } else {
    for (var i = 0; i < responses.length; i++) {
      answer = document.getElementById("answerBox" + i);
      //This is where all answers from questions will be
      //use answer.value to get the string of each response
      userData.responses.push(answer.value);
    }
    let client = new HttpClient();
    client.post(`http://localhost:1010/users/${firstname.value + "_" + surname.value}`, { responses: userData.responses });
  }
}

var checkHeader = _.throttle(() => {
  let scrollPosition = Math.round(window.scrollY);
  if (scrollPosition > 100) {
    document.querySelector("header").classList.add("sticky");
  } else {
    document.querySelector("header").classList.remove("sticky");
  }
}, 300);
