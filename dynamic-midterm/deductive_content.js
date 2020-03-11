var data = {
    number:0,
    questions:[
        {
            header: "Observation 1",
            img: "http://placekitten.com/100/100",
            text: "Lorem ipsum",
        },
        {
            header: "Observation 2",
            img: "http://placekitten.com/100/100",
            text: "Lorem ipsum",
        },
        {
            header: "Logical Conclusion",
            img: "http://placekitten.com/100/100",
            text: "Lorem ipsum",
        },
    ]
}

function NextPage(){
    document.querySelector(".deductive_header").innerText = data.questions[data.number].header;
    document.querySelector(".deductive_image").innerHTML = "<img src='" + data.questions[data.number].img + " />";
    document.querySelector(".deductive_text").innerText = data.questions[data.number].text;
}



NextPage();