let btn = document.getElementById("btn-el");
const myLeads = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
btn.addEventListener("click", function() {
    let input = inputEl.value;
    console.log("Clicked");
    myLeads.push(input);
    console.log(myLeads);
    for (let i = 0; i < myLeads.length; i++) {
        ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
    }
});