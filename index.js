let btn = document.getElementById("btn-el");
const myLeads = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
let listOfItems = "";
btn.addEventListener("click", function() {
    let input = inputEl.value;
    console.log("Clicked");
    myLeads.push(input);
    console.log(myLeads);
    renderItems();
    inputEl.value = "";
});

function renderItems() {
    for (let i = 0; i < myLeads.length; i++) {
        listOfItems += "<li>" + myLeads[i] + "</li>";
        ulEl.innerHTML = listOfItems;
    }
}