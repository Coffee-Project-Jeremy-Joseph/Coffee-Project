"use strict"
function renderCoffee(coffee) {
    let html = '<div class="col-6 col-md-4 col-lg-5 offset-lg-1 pe-0">';
    html += '<div class="coffee d-flex flex-row" id="' + coffee.id + '">';
    html += '<div class="coffeeName pe-3" id="' + coffee.name + '">' + coffee.name + '</div>';
    html += '<div class="' + coffee.roast + ' my-auto">' + coffee.roast + '</div>';
    html += '</div>';
    html += '</div>';

    return html;
}
function renderCoffees(coffees) {
    let html = '';
    for(let i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
        if ("all" === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    content.innerHTML = renderCoffees(filteredCoffees);
    let coffeesVis = document.getElementById("coffees");
    coffeesVis.classList.remove("opacity-0");
}
function addCoffees(value) {
    let filteredCoffees = coffees;
    let newRoast = addRoastSelection.value;
    let newName = addNewCoffee.value;
    let newId = coffees.length + 1;
    coffees.push({id: newId, name: newName, roast: newRoast});
    content.innerHTML = renderCoffees(filteredCoffees);
    // addRoastSelection.value = document.getElementById("add-roast-selection").value = "";
    addNewCoffee.value = document.getElementById('enterNewCoffee').value = "";
}
function searchCoffees(value) {
    let filteredCoffees = [];
    for (let i = 0; i < coffees.length; i++) {
        if(coffees[i].name.toLowerCase().indexOf(value.toLowerCase()) >  -1) {
            filteredCoffees.push(coffees[i]);
        }
    }
    content.innerHTML = renderCoffees(filteredCoffees);
}
let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];
let content = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');
let addRoastSelection = document.querySelector('#add-roast-selection');
let addNewCoffee = document.querySelector('#enterNewCoffee');

content.innerHTML = renderCoffees(coffees);
roastSelection.addEventListener('change', updateCoffees);
submitButton.addEventListener('click', addCoffees);

// presentation notes
// pop-ups for no information entered
// save results to local storage
// icons
// art work
// button, dropdown, input styling
// large layout center inputs
// larger text for desktop
// buttons should have a max width
// need background filters behind text for legibility