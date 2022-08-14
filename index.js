let myLeads = [];

const inputEl = document.getElementById("input-el");

const input_btn = document.getElementById("btn-el");

const ulEl = document.getElementById("ul-el");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

const checkTruthy = Boolean(leadsFromLocalStorage);

const btn_del = document.getElementById("btn-del");

const btn_tab = document.getElementById("btn-tab");

btn_tab.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        renderElements(myLeads);
    });
});

btn_del.addEventListener("dblclick", function() {
    localStorage.clear();
    myLeads = [];
    renderElements(myLeads);
    location.reload();
});

console.log(leadsFromLocalStorage);

if (checkTruthy === true) {
    myLeads = leadsFromLocalStorage;
    renderElements(myLeads);
}

function renderElements(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `;
    }
    ulEl.innerHTML = listItems;
}

input_btn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderElements(myLeads);
});