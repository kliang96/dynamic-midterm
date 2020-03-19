var data = {
    number: 0,
    questions: [{
            header: "Observation 1",
            img: "http://placekitten.com/100/100",
            text: "Lorem ipsum 1",
        },
        {
            header: "Observation 2",
            img: "http://placekitten.com/200/200",
            text: "Lorem ipsum 2",
        },
        {
            header: "Logical Conclusion",
            img: "http://placekitten.com/300/300",
            text: "Lorem ipsum 3",
        },
    ]
}

var count = 0;

function NextPage() {
    if (count > 2) {
        document.querySelector(".inductive_body").style.display = "none";
        document.querySelector(".inductive_result").style.display = "flex";
    } else {
        document.querySelector(".inductive_header").innerText = data.questions[data.number].header;
        document.querySelector(".inductive_image").innerHTML = "<img src= " + data.questions[data.number].img + " />";
        document.querySelector(".inductive_text").innerText = data.questions[data.number].text;
        data.number++;
        count++;
        console.log(count);
    }
}

function reset() {
    data.number = 0;
    count = 0;
    document.querySelector(".inductive_body").style.display = "flex";
    document.querySelector(".inductive_result").style.display = "none";
    console.log(data.number);
    NextPage();
}

NextPage();