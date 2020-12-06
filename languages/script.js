// JavaScript source code
fetch("dk.json")
    .then((response) => { return response.json() })
    .then((data) => { console.log(data) });
console.log("working");