var data = {
    number:0,
    questions:[
        {
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

function NextPage(){
    document.querySelector(".deductive_header").innerText = data.questions[data.number].header;
    document.querySelector(".deductive_image").innerHTML = "<img src=" + data.questions[data.number].img + " />";
    document.querySelector(".deductive_text").innerText = data.questions[data.number].text;
}

NextPage();