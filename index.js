let btn = document.getElementById("btn-el");

let myLeads = '["www.google.com", "www.facebook.com", "www.youtube.com"]';

const inputEl = document.getElementById("input-el");

const ulEl = document.getElementById("ul-el");

localStorage.setItem("myLeads", "https://www.google.com");

let link = localStorage.getItem("myLeads");

//localStorage.clear();
console.log(link);

let listOfItems = "";

btn.addEventListener("click", function() {
    let input = inputEl.value;
    console.log("Clicked");
    myLeads = JSON.parse(myLeads);
    myLeads.push(input);
    console.log(myLeads);
    renderItems();
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    console.log(localStorage.getItem("myLeads"));
    let data = JSON.parse(localStorage.getItem(myLeads));
    console.log(data);
});

function renderItems() {
    for (let i = 0; i < myLeads.length; i++) {
        /*listOfItems +=
                                                                  "<li><a target='_blank' href='" +
                                                                  myLeads[i] +
                                                                  "'>" +
                                                                  myLeads[i] +
                                                                  "</a></li>";*/
        /*another way of writing */
        listOfItems += `           
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `;
        ulEl.innerHTML = listOfItems;
    }
}