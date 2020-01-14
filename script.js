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
    mainContent = document.getElementById("page-content");
    for (var q = 0; q < 10; q++) {
        QAblock = document.createElement("div")
        QAblock.className = "QA-Block";
        mainContent.appendChild(QAblock);
        
        question = document.createElement("div");
        question.className = "question";
        question.innerHTML = questionList[q][0];
        QAblock.appendChild(question);

        if (questionList[q][1]) {
            dateText = document.createElement("p");
            dateText.innerHTML = "Date:";
            question.appendChild(dateText);

            dateGrid = document.createElement("input");
            dateGrid.type = "text";
            dateGrid.id = "datepicker";
            dateText.appendChild(dateGrid);
        }
        textBox = document.createElement("input");
        textBox.className = "textBox";
        textBox.type = "text";
        textBox.placeholder = "Random Place Holder Text";
        QAblock.appendChild(textBox);
    }
    $( function() {
        $( "#datepicker" ).datepicker({
            dateFormat: "dd-mm-yy"
        });
        } );
}
