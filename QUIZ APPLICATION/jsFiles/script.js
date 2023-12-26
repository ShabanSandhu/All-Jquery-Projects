

$(document).ready(function () {

    // variables
    let selectedOption;

    // input options
    let firstOption = $("#firstOption")
    let secondOption = $("#secondOption")
    let thirdOption = $("#thirdOption")
    let forthOption = $("#forthOption")
    // end input options


    // dummy data means lable
    let dimmyQuestion = $("#dimmyQuestion");
    let option1 = $("#option1");
    let option2 = $("#option2");
    let option3 = $("#option3");
    let option4 = $("#option4");
    let submitButton = $("#submitButton");
    let resultContainer = $("#result");
    let tryAgain = $("#tryAgain")
    // end dummy data 


    // by default index
    let indexOfArray = 0;
    // end 

    // by default score
    let score = 0;
    // end 

    let writeAnswer = 0;
    let wrongAnswer = 0;


    let writeQuestionArray = []
    let wrongQuestionArray = []


    let listForWriteQuestion = $("#listForWriteQuestion")
    let listForWrongQuestion = $("#listForWrongQuestion")


    let tableBodyForCorrection = $("#tableBodyForCorrection")

    let page = $("#page")

    // Array of questions
    let questions = [
        {
            "question": " 1:The caption of Pakistan cricket team?",
            "option1": "Babar",
            "option2": "Sarfaraz",
            "option3": "Imad",
            "option4": "Shadab",
            "correctAnswer": "Babar",
        },
        {
            "question": " 2:The web server programming language?",
            "option1": "Java",
            "option2": "Python",
            "option3": "JavaScript",
            "option4": "Other",
            "correctAnswer": "JavaScript",
        },
        {
            "question": " 3:The famous person all over the world?",
            "option1": "alenmusk",
            "option2": "bilgates",
            "option3": "mark zuker burg",
            "option4": "all",
            "correctAnswer": "all",
        },
        {
            "question": " 4:Needed of driving a car?",
            "option1": "water",
            "option2": "fuiel",
            "option3": "oil",
            "option4": "nothing",
            "correctAnswer": "fuiel",
        }
        // ... (other questions)
    ];



    function displayQuestion(index) {
        dimmyQuestion.text(questions[index].question);
        option1.text(questions[index].option1);
        option2.text(questions[index].option2);
        option3.text(questions[index].option3);
        option4.text(questions[index].option4);
        page.text(`PAGE : ${index+1} of ${questions.length}`)
    }


    displayQuestion(indexOfArray);


    submitButton.click(function () {

        debugger

        // value assigen
        firstOption.val(questions[indexOfArray].option1)
        secondOption.val(questions[indexOfArray].option2)
        thirdOption.val(questions[indexOfArray].option3)
        forthOption.val(questions[indexOfArray].option4)
        // end 

        selectedOption = $("input[name='answer']:checked").val();

        if (selectedOption == undefined) {
            alert("Mark This Option")
            return;
        }


        else if (selectedOption) {
            let correctAnswer = questions[indexOfArray].correctAnswer;

            if (selectedOption === correctAnswer) {
                score++;
                writeAnswer++
                // let findQuestion1 = questions[indexOfArray].question
                // let correctAnswer1 = questions[indexOfArray].correctAnswer
                // let newQuestion = {
                //     "question": findQuestion1,
                //     "correctAnswer":correctAnswer1 
                // }
                // writeQuestionArray.push(newQuestion)
            }

            else {
                wrongAnswer++
                let findQuestion2 = questions[indexOfArray].question
                let correctAnswer2 = questions[indexOfArray].correctAnswer
                let newQuestion = {
                    "question": findQuestion2,
                    "correctAnswer":correctAnswer2,
                    "attemptAnswer": selectedOption
                }
                wrongQuestionArray.push(newQuestion)
            }
        }


        indexOfArray++;

        if (indexOfArray < questions.length) {

            $("input[name='answer']").prop("checked", false);
            displayQuestion(indexOfArray);

        }
        else {

            $("#quiezApp").hide();
            resultContainer.show();

            let tableBody = `
            <tr>
                <td><h4>${questions.length}</h4></td>
                <td><h4>${writeAnswer}</h4></td>
                <td><h4>${wrongAnswer}</h4></td>
                <td><h4>${score}</h4></td>
                <td><h4>${questions.length}</h4></td>
            </tr>`

            $("#bdy").html(tableBody)

            let tbody = ""

            for (i = 0; i < wrongQuestionArray.length; i++) {

                tbody +=
                    `<tr><th scope="row"> ${(i + 1)}</th>
             <td>${wrongQuestionArray[i].question}</td>
             <td>${wrongQuestionArray[i].attemptAnswer}</td>
             <td>${wrongQuestionArray[i].correctAnswer}</td>`
            }

            tableBodyForCorrection.html(tbody)

        }

    });



    tryAgain.click(function () {

        location.reload();

    })

});
