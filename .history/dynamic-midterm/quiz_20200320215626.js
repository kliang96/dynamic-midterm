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
            questionNo: "Question 2",
            question: "This is questitkadkna two",
            img: "img/johnwick.gif",
        },
        {
            questionNo: "Question 2",
            question: "Tfuckmeeeeee1 pt1",
            img: "img/ps4.jpg",
        },
        {
            questionNo: "Question 2",
            question: "Tfuckmeeeeee1 pt2",
            img: "img/fortnitePS4.jpeg",
        },
        {
            questionNo: "Question 2",
            question: "Tfuckmeeeeee1 pt3",
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

var questionnum = ["data.question1[data.number].quesitonNo", "data.question1[data.number].question", "question3", "question4", "question5"];
var count = 1;

// changing initial state of quiz 
function getStarted() {
    document.querySelector(".quiz_tutorial").style.display = "none";
    document.querySelector(".quiz_question").style.display = "flex";
    console.log(data.number, "init")
    question1();
}

var counter = 1;

function next() {
if(counter% 5 == 0){
    data.number = 0;
}
if(counter <= 4){
    console.log(data.number, "q1");
    question1();
} 
if(counter >5){
    console.log(data.number, "q2");
    question2();
}
    counter++;
    // console.log(counter);
}


// changing from question to question
function question1() {
    // if (data.number < 4) {
        document.querySelector(".quiz_question_number").innerHTML = data.question1[data.number].questionNo;
        document.querySelector(".quiz_question_question").innerHTML = data.question1[data.number].question;
        document.querySelector(".quiz_question_number").src = data.question1[data.number].img;
        data.number++;
    // }
}
// changing from question to question
function question2() {
    // if (data.number < 4) {
        document.querySelector(".quiz_question_number").innerHTML = data.question2[data.number].questionNo;
        document.querySelector(".quiz_question_question").innerHTML = data.question2[data.number].question;
        document.querySelector(".quiz_question_number").src = data.question2[data.number].img;
        data.number++;
    // }
}

function question3() {
    if (data.number < 4) {
        document.querySelector(".quiz_question_number").innerHTML = data.question3[data.number].questionNo;
        document.querySelector(".quiz_question_question").innerHTML = data.question3[data.number].question;
        document.querySelector(".quiz_question_number").src = data.question3[data.number].img;
        data.number++;
    }
}

function question4() {
    if (data.number < 4) {
        document.querySelector(".quiz_question_number").innerHTML = data.question4[data.number].questionNo;
        document.querySelector(".quiz_question_question").innerHTML = data.question4[data.number].question;
        document.querySelector(".quiz_question_number").src = data.question4[data.number].img;
        data.number++;
    }
}

function question5() {
    if (data.number < 4) {
        document.querySelector(".quiz_question_number").innerHTML = data.question5[data.number].questionNo;
        document.querySelector(".quiz_question_question").innerHTML = data.question5[data.number].question;
        document.querySelector(".quiz_question_number").src = data.question5[data.number].img;
        data.number++;
    }
}