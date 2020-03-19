var data = {
    number: 0,
    questions: [{
            header: "Inductive Observation 1",
            img: "img/johnwick.gif",
            text: "I play fortnite",
        },
        {
            header: "Inductive Observation 2",
            img: "ps4.jpg",
            text: "Everyone I play Fortnite with plays on PS4",
        },
        {
            header: "Inductive Logical Conclusion",
            img: "fortnitePS4.jpeg",
            text: "Therefore, Fortnite must only be available on PS4",
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
        document.querySelector(".inductive_image").innerHTML = `<img src= ${data.questions[data.number].img} />`;
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