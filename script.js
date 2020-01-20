var userData = {
    username: "",
    responses: []
}

var questionList = [["What is the change?",false],
["Why is the change required?",false],
["What systems will be altered and how?",false],
["What customers could potentially be impacted by this change and will there be any impact to service?",false],
["What possible risks are involved with making the change?",false],
["What are the risks of not performing the change?",false],
["How will the change be verified post implementation?",false],
["What is the roll-back plan in case of the change not having the desired effect?",false],
["When does the change need to be completed by? Why?",true],
["Who will be performing the change?",false]]

function startup(){
    document.getElementsByClassName("ui-datepicker-next").innerHTML = ">";
    document.getElementsByClassName("ui-datepicker-prev").innerHTML = "<";
    window.addEventListener('scroll', checkHeader);
    var mainContent = document.getElementById("page-content");
    var body = document.getElementById("holder");
    for (var q = 0; q < 10; q++) {
        QAblock = document.createElement("div");
        QAblock.className = "QA-Block";
        mainContent.appendChild(QAblock);
        
        var question = document.createElement("div");
        question.className = "question";
        question.innerHTML = questionList[q][0];
        QAblock.appendChild(question);

        if (questionList[q][1]) {
            var dateText = document.createElement("p");
            dateText.innerHTML = "Date: ";
            question.appendChild(dateText);

            var dateGrid = document.createElement("input");
            dateGrid.type = "text";
            dateGrid.placeholder = "Click to select date";
            dateGrid.id = "datepicker";
            dateText.appendChild(dateGrid);
        }
        var textBox = document.createElement("textarea");
        textBox.className = "textBox";
        textBox.id = "answerBox" + q;
        textBox.placeholder = "Please answer here";
        QAblock.appendChild(textBox);
        document.getElementById("answerBox" + q).addEventListener("click", function(event) {
            scrollToCentre(event,this);
        });
    }

    $( function() {
        $( "#datepicker" ).datepicker({
            dateFormat: "dd-mm-yy",
            showAnim: "slideDown"
        });
        } );
}

function scrollToCentre(event, item) {
    Element.prototype.centreQuestion = function () {
        return this.offsetTop + ( this.offsetParent ? this.offsetParent.centreQuestion() : 0 );
    };
    
    var top = item.centreQuestion() - (window.innerHeight / 2.5 );
    window.scrollTo( 0, top  );
    // item.style.borderColor = "black";
    item.style.border = "0.5px solid rgb(92, 92, 92)";
    // item.style.borderWidth = "1px";
}

function submit() {
    var answered = 0;
    responses = document.getElementsByClassName("textBox");
    for (var i = 0; i < responses.length; i++) {
        answer = document.getElementById("answerBox" + i);
        if (answer.value != "") {
            answered++;
        }
        else {
            $(".name").addClass("emptyName");
            $(answer).addClass("emptyInput");
            $("#datepicker").addClass("emptyInput");

            window.scrollTo(0,0);
        }
    }
    firstname = document.getElementById("firstName");
    surname = document.getElementById("surname");
    if (answered < responses.length || datepicker.value == "" || firstname.value == "" || surname.value == "") {
        alert("Please provide answers for all questions and fill in your name.");;

    }
    else {
        for (var i = 0; i < responses.length; i++) {
            answer = document.getElementById("answerBox" + i);
            //This is where all answers from questions will be
            //use answer.value to get the string of each response
            userData.responses.push(answer.value);
        }
        
        userData.username = firstname.value + " " +surname.value;
        console.log(userData);
    }
}



var checkHeader = _.throttle(() => { 
    let scrollPosition = Math.round(window.scrollY);
    if (scrollPosition > 100){
        document.querySelector('header').classList.add('sticky');
    }
    else {
        document.querySelector('header').classList.remove('sticky');
    }
}, 300);

