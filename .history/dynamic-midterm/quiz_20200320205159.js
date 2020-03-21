var data = {
    number: 0,
    question1: [{
            questionNo: "Question 1",
            question: "This is question one",
            img: "img/johnwick.gif",
        },
        {
            questionNo: "Question 1",
            question: "This is question 1 pt1",
            img: "img/ps4.jpg",
        },
        {
            questionNo: "Question 1",
            question: "This is question 1 pt2",
            img: "img/fortnitePS4.jpeg",
        },
        {
            questionNo: "Question 1",
            question: "This is question 1 pt3",
            img: "img/fortnitePS4.jpeg",
        }
    ],

    question2: [{
            questionNo: "dsadsadasd",
            question: "This is question one",
            img: "img/johnwick.gif",
        },
        {
            questionNo: "Question 1",
            question: "This is question 1 pt1",
            img: "img/ps4.jpg",
        },
        {
            questionNo: "Question 1",
            question: "This is question 1 pt2",
            img: "img/fortnitePS4.jpeg",
        },
        {
            questionNo: "Question 1",
            question: "This is question 1 pt3",
            img: "img/fortnitePS4.jpeg",
        }
    ],

    question3: [{
            questionNo: "345698086",
            question: "This is question one",
            img: "img/johnwick.gif",
        },
        {
            questionNo: "Question 1",
            question: "This is question 1 pt1",
            img: "img/ps4.jpg",
        },
        {
            questionNo: "Question 1",
            question: "This is question 1 pt2",
            img: "img/fortnitePS4.jpeg",
        },
        {
            questionNo: "Question 1",
            question: "This is question 1 pt3",
            img: "img/fortnitePS4.jpeg",
        }
    ],

    question4: [{
            questionNo: "kjmmm,mmmmmm",
            question: "This is question one",
            img: "img/johnwick.gif",
        },
        {
            questionNo: "Question 1",
            question: "This is question 1 pt1",
            img: "img/ps4.jpg",
        },
        {
            questionNo: "Question 1",
            question: "This is question 1 pt2",
            img: "img/fortnitePS4.jpeg",
        },
        {
            questionNo: "Question 1",
            question: "This is question 1 pt3",
            img: "img/fortnitePS4.jpeg",
        }
    ],

    question5: [{
            questionNo: "Question 1",
            question: "This is question one",
            img: "img/johnwick.gif",
        },
        {
            questionNo: "Question 1",
            question: "This is question 1 pt1",
            img: "img/ps4.jpg",
        },
        {
            questionNo: "Question 1",
            question: "This is question 1 pt2",
            img: "img/fortnitePS4.jpeg",
        },
        {
            questionNo: "Question 1",
            question: "This is question 1 pt3",
            img: "img/fortnitePS4.jpeg",
        }
    ],
}

var questionnum = ["data.question1", "question2", "question3", "question4", "question5"];
var count = 1;

// changing initial state of quiz 
function getStarted() {
    document.querySelector(".quiz_tutorial").style.display = "none";
    document.querySelector(".quiz_question").style.display = "flex";
    nextQuestion();
}

// changing from question to question
function quesiton1() {
    // if(data.number % 3 == 0){

    // } else {
    document.querySelector(".quiz_question_number").innerHTML = questionnum[0][0].questionNo;
    document.querySelector(".quiz_question_question").innerHTML = data.question1[data.number].question;
    document.querySelector(".quiz_question_number").src = data.question1[data.number].img;
    data.number++;
}
// }

