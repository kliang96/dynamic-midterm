var data = {
    number: 0,
    points: 0,
    wrong: "Nice try, right now you are at:",
    question1: [{
            questionNo: "Question 1",
            question: "I knocked down a player in Fortnite",
            img: "img/fight.jpg",
            answer: "deduc",

        },
        {
            questionNo: "Question 1",
            question: "He died right away",
            img: "img/eliminate-player.jpg",
            answer: "deduc",

        },
        {
            questionNo: "Question 1",
            question: "This must mean all his team mates are also dead",
            img: "img/dead.jpg",
            answer: "deduc",
        }
    ],

    question2: [{
            questionNo: "Question 2",
            question: "Ninja is my favorite Fortnite streamer",
            img: "img/ninja.jpg",
            answer: "induc",
        },
        {
            questionNo: "Question 2",
            question: "Ninja has the most subs of any Fortnite player",
            img: "img/ninja-diamond-play.jpg",
            answer: "induc",

        },
        {
            questionNo: "Question 2",
            question: "This must mean Ninja is the best at Fortnite",
            img: "img/ninja-victory-royale.png",
            answer: "induc",
        }
    ],

    question3: [{
            questionNo: "Question 3",
            question: "The “Storm” in Fortnite causes damage.",
            img: "img/question3pic1.jpg",
            answer: "deduc",
        },
        {
            questionNo: "Question 3",
            question: "I am damaged by the Storm.",
            img: "img/question3pic2.jpg",
            answer: "deduc",
        },
        {
            questionNo: "Question 3",
            question: "This must mean all players are damaged by the storm.",
            img: "img/question3pic3.jpg",
            answer: "deduc",
        }
    ],

    question4: [{
            questionNo: "Question 4",
            question: "I landed in Tomato Town",
            img: "img/question4pic1.png",
            answer: "induc",

        },
        {
            questionNo: "Question 4",
            question: "Tomato Town houses different loot.",
            img: "img/question4pic2.png",
            answer: "induc",

        },
        {
            questionNo: "Question 4",
            question: "Tomato Town must be the only area with loot.",
            img: "img/question4pic3.jpg",
            answer: "induc",

        }
    ],

    question5: [{
            questionNo: "Question 5",
            question: "There are buildings here.",
            img: "img/question5pic1.jpeg",
            answer: "induc",

        },
        {
            questionNo: "Question 5",
            question: "Players usually build when they fight eachother.",
            img: "img/question5pic2.jpg",
            answer: "induc",

        },
        {
            questionNo: "Question 5",
            question: "There must’ve been a fight here.",
            img: "img/question5pic3.jpg",
            answer: "induc",

        }
    ],
}


var questionnum = ["data.question1[data.number].quesitonNo", "data.question1[data.number].question", "question3", "question4", "question5"];
var count = 1;

// changing initial state of quiz 
function getStarted() {
    document.querySelector(".quiz_tutorial").style.display = "none";
    document.querySelector(".quiz_question").style.display = "flex";

}

function next1() {
    document.querySelector(".quiz_question").style.display = "flex";
    document.querySelector(".quiz_answer").style.display = "none";
    // next();
}

var counter = 0;

function next() {
    // console.log(data.number, "data.number");
    if (counter <= 2) {
        question1();
    }
    if (counter >= 3 && counter <= 5) {
        if (data.number == 3) {
            data.number = 0;
            document.querySelector(".quiz_question").style.display = "none";
            document.querySelector(".quiz_answer").style.display = "flex";
        }
        question2();
    }
    if (counter >= 6 && counter <= 8) {
        if (data.number == 3) {
            data.number = 0;
            document.querySelector(".quiz_question").style.display = "none";
            document.querySelector(".quiz_answer").style.display = "flex";
        }
        question3();
    }
    if (counter >= 9 && counter <= 11) {
        if (data.number == 3) {
            data.number = 0;
            document.querySelector(".quiz_question").style.display = "none";
            document.querySelector(".quiz_answer").style.display = "flex";
        }
        question4();
    }
    if (counter >= 12 && counter <= 14) {
        if (data.number == 3) {
            data.number = 0;
            document.querySelector(".quiz_question").style.display = "none";
            document.querySelector(".quiz_answer").style.display = "flex";
        }
        question5();

    }
    if (counter >= 15 && counter < 16) {
        data.number = 0;
        document.querySelector(".quiz_question").style.display = "none";
        document.querySelector(".quiz_answer").style.display = "flex";
    }
    if (counter >= 16) {
        document.querySelector(".right").style.display = "flex";
        document.querySelector(".quiz_answer").style.display = "none";
        document.querySelector(".quiz_question").style.display = "none";
        document.querySelector("#done").style.display = "none";
        document.querySelector(".point").innerHTML = data.points;
    }
    console.log(counter, "counter");
    counter++;
    data.number++;
}


// changing from question to question
function question1() {
    // if (data.number < 4) {
    document.querySelector(".quiz_question_number").innerHTML = data.question1[data.number].questionNo;
    document.querySelector(".quiz_question_question").innerHTML = data.question1[data.number].question;
    document.querySelector(".quiz_question_picture").src = data.question1[data.number].img;
        // data.number++;
        // }
}
// changing from question to question
function question2() {
    // if (data.number < 4) {
    document.querySelector(".quiz_question_number").innerHTML = data.question2[data.number].questionNo;
    document.querySelector(".quiz_question_question").innerHTML = data.question2[data.number].question;
    document.querySelector(".quiz_question_picture").src = data.question2[data.number].img;
    // data.number++;
    // }
}

function question3() {
    document.querySelector(".quiz_question_number").innerHTML = data.question3[data.number].questionNo;
    document.querySelector(".quiz_question_question").innerHTML = data.question3[data.number].question;
    document.querySelector(".quiz_question_picture").src = data.question3[data.number].img;
    // data.number++;

}

function question4() {
    document.querySelector(".quiz_question_number").innerHTML = data.question4[data.number].questionNo;
    document.querySelector(".quiz_question_question").innerHTML = data.question4[data.number].question;
    document.querySelector(".quiz_question_picture").src = data.question4[data.number].img;
    // data.number++;
}


function question5() {
    document.querySelector(".quiz_question_number").innerHTML = data.question5[data.number].questionNo;
    document.querySelector(".quiz_question_question").innerHTML = data.question5[data.number].question;
    document.querySelector(".quiz_question_picture").src = data.question5[data.number].img;
    // data.number++;
}

// var points = 0;

function answer(clicked) {
    if (clicked == data.question1[data.number].answer && counter === 4) {
        document.querySelector(".right").style.display = "flex";
        document.querySelector(".quiz_answer").style.display = "none";
        document.querySelector(".quiz_question").style.display = "none";
        document.querySelector(".quiz_progress_percent").style.width = "20%";
        data.points++;
        document.querySelector(".mark").innerHTML = data.points;
        console.log("one");
    } else if (clicked == data.question2[data.number].answer && counter === 7) {
        document.querySelector(".right").style.display = "flex";
        document.querySelector(".quiz_answer").style.display = "none";
        document.querySelector(".quiz_question").style.display = "none";
        document.querySelector(".quiz_progress_percent").style.width = "40%";
        data.points++;
        document.querySelector(".mark").innerHTML = data.points;
        console.log("two");
    } else if (clicked == data.question3[data.number].answer && counter == 10) {
        document.querySelector(".right").style.display = "flex";
        document.querySelector(".quiz_answer").style.display = "none";
        document.querySelector(".quiz_question").style.display = "none";
        document.querySelector(".quiz_progress_percent").style.width = "60%";
        data.points++;
        document.querySelector("#mark").innerHTML = data.points;
    } else if (clicked == data.question4[data.number].answer && counter == 13) {
        document.querySelector(".right").style.display = "flex";
        document.querySelector(".quiz_answer").style.display = "none";
        document.querySelector(".quiz_question").style.display = "none";
        document.querySelector(".quiz_progress_percent").style.width = "80%";
        data.points++;
        document.querySelector(".mark").innerHTML = data.points;
    } else if (clicked == data.question5[data.number].answer && counter == 16) {
        data.points++;
        document.querySelector(".score").innerHTML = "Thank you for playing! Your final score is " + data.points + "/5! Good job";
        document.querySelector(".quiz_answer").style.display = "none";
        document.querySelector(".quiz_question").style.display = "none";
        document.querySelector(".right").style.display = "flex";
        document.querySelector(".quiz_progress_percent").style.width = "100%";
        // } else if (clicked != data.question5[data.number].answer && counter >= 16) {
        //     document.querySelector(".right").style.display = "flex";
        //     document.querySelector(".quiz_answer").style.display = "none";
        //     document.querySelector(".quiz_question").style.display = "none";
        //     document.querySelector(".mark").innerHTML = data.points;
    } else {
        document.querySelector(".scores").innerHTML = "Nice try, you are now at " + data.points + "/5 Keep it up!";
        document.querySelector(".wrong").style.display = "flex";
        document.querySelector(".quiz_answer").style.display = "none";
        document.querySelector(".quiz_question").style.display = "none";
        console.log("wrong");
    }
    console.log(data.points, "points");
}

function changedisp() {
    document.querySelector(".right").style.display = "none";
    document.querySelector(".wrong").style.display = "none";
    document.querySelector(".quiz_question").style.display = "flex";
}