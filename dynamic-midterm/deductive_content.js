var data = {
    number: 0,
    questions: [{
            header: "Observation 1",
            img: "http://placekitten.com/100/100",
            text: "I play fortnite",
        },
        {
            header: "Observation 2",
            img: "http://placekitten.com/200/200",
            text: "Everyone I play Fortnite with plays on PS4",
        },
        {
            header: "Logical Conclusion",
            img: "http://placekitten.com/300/300",
            text: "Therefore, Fortnite must only be available on PS4"
        },
    ]
}

var count = 0;

function NextPage() {
    if (count > 2) {
        document.querySelector(".deductive_body").style.display = "none";
        document.querySelector(".deductive_result").style.display = "flex";
    } else {
        document.querySelector(".deductive_header").innerText = data.questions[data.number].header;
        document.querySelector(".deductive_image").innerHTML = "<img src= " + data.questions[data.number].img + " />";
        document.querySelector(".deductive_text").innerText = data.questions[data.number].text;
        data.number++;
        count++;
        console.log(count);
    }
}

function reset() {
    data.number = 0;
    count = 0;
    document.querySelector(".deductive_body").style.display = "flex";
    document.querySelector(".deductive_result").style.display = "none";
    console.log(data.number);
    NextPage();
}

NextPage();