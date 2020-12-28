var enString = {
    text1: "Hello, my name is",
    aboutTitle: "About me",
    aboutText: "This is all i have about me bla lba",
    servicesTitle: "My services",
    text3: "lol"
}
var ulEn = ["Home", "About", "Services", "Skills", "Projects", "Contact"];
var typedEn = ["Student", "Philantrophist", "Freelancer", "Developer"];
var gundiArray = document.querySelectorAll(".menu li a");
gundiArray.forEach((item, index) => { item.classList.add("coolhover") });


class CreateBooks {
    constructor(title, author, pages, readStatus) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
    }
    setReadStatus() {
        if (this.readStatus === true) {
            this.readStatus = "I have read it";
        } else if (this.readStatus === false) {
            this.readStatus = "I have not read it";
        }
        console.log(this.title, this.author, this.pages, this.readStatus);
    }
}
const theHobbit = new CreateBooks("The hobbit", "J.R.R Tolkien", 290, true)

class Author extends CreateBooks {
    constructor(title, author, pages, readStatus, age) {
        super(title, author, pages, readStatus);
        this.age = age;
    }
    booksByAuthor() {
        console.log(`${this.author} is now ${this.age} and has written ${this.title}. `);
    }
}
const JRR = new Author("The hobbit", "J.R.R Tolkien", 290, true, 76);
console.log(JRR);
(() => { console.log("shit") })();

/*
var str = "ABCHDGYEUEJDIF";
const arr = Array.from({ length: 150 }, x => " ");
console.log(arr);
console.log([...str]);


//declaratioin and expression

console.log(functionDeclaration);
functionDeclaration();
function functionDeclaration() {
    console.log("this is hoisted")
}

console.log(functionExpression);
// this wont work, as this fucntion isnt hoisted functionExpression();
var functionExpression = function() {
    console.log("this is not hoisted")
}

//callbacks
function anotherCallback(last) {
    console.log(`this have been through 2 callback functions, here is it: ${last}`);
    return last;

}
function callbackf(firstReturn) {
    var newreturn = firstReturn * 15 + 27;
    anotherCallback(newreturn);
}
function gundi(number, callbacks) {
    number = number + 19;
    callbacks(Math.sqrt(number));
}
gundi(4, callbackf);
//promises
console.log("test before");
function gundiFuction(shittyNumber) {
    var gundi = true;
    var i = shittyNumber;
    return new Promise((resolve, reject) => {
        while (i < 1000 + shittyNumber) {
            i++;
        }
        if (i >= 1000 + shittyNumber) resolve(i);
        else reject();
    });
}

console.log("test after");

gundiFuction(7)
    .then((valueshit) => console.log(`shits worked: ${valueshit}`))
    .catch((error) => console.log(`shit didnt work: ${error}`));

async function gakka() {
    const skrud = await gundiFuction(4);
    setTimeout(() => {
        console.log(skrud);
        gakka();
 }, 1000);
}
gakka();
*/


function getEl(id) {
    return document.querySelector(id);
}
function submitForm() {
    var div = document.createElement("div");
    div.appendChild("Emailen blev sendt");
    var divFalse = div.appendChild(`emailen kunne ikke sendes: ${ajax.responseText}`);
    getEl(".email-button").disabled = true;
    var formData = new FormData();
    formData.append("name", getEl(".name").value);
    formData.append("email", getEl(".email").value);
    formData.append("subject", getEl(".subject").value);
    formData.append("message", getEl(".email-textarea textarea").value);
    var ajax = new XMLHttpRequest();
    ajax.open("POST", "email-parser.php");
    ajax.onreadystatechange = () => {
        if (ajax.readyState === 4 && ajax.status === 200) {
            if (ajax.responseText === "´succes") {
                getEl(".email-form").appendChild(div);
            } else {
                getEl(".email-form").appendChild(divFalse);
                getEl(".email-button").disabled = false;
            }
        }
    }
    ajax.send(formData);
}