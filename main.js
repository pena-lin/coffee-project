"use strict";

var userInput;

function userInput(){
    userInput = document.getElementById('search').value;
    console.log(userInput);
}
function renderCoffee(coffee) {
    var html = '<div class="coffee col-md-6">';
    // html += '<div>' + coffee.id + '</div>';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<P class="center-letter">' + coffee.roast + '</P>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i<coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast.toLowerCase()=== selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function displaySearchResult(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var userInput = search.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.name.toLowerCase().includes(userInput)) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}










// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
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

function addCoffee() {
    var coffee = {
        id:'',
        name:'',
        roast:'',
    };
    coffee.id = coffees.length + 1;
    var tempName = document.getElementById('add-coffee-name').value;
    coffee.name = formatNewCoffee(tempName);
    coffee.roast = document.getElementById('add-coffee-roast-select').value;
    coffees.push(coffee);
    // var insertAtIndex = coffees.lastIndexOf(coffee.roast);
    // coffees.splice(insertAtIndex, 0, coffee);
    arrangeCoffee();
    tbody.innerHTML = renderCoffees(coffees);
}

function arrangeCoffee() {
    coffees.sort(function(a, b) {
        // return a.id - b.id

            var x = a.name.toLowerCase();
            var y = b.name.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;

    });
    // coffees.reverse();
}

function formatNewCoffee(input) {
    return input.replace(/\b\w/g, function(letter) {
        return letter.toUpperCase()
    })
}

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
// var submitButton1 = document.querySelector('#submit1');
var sendButton = document.querySelector('#send');
// var sendButton1 = document.querySelector('#send1');
var search = document.querySelector('#search');
// var search1 = document.querySelector('#search1');
var roastSelection = document.querySelector('#roast-selection');
// var roastSelection1 = document.querySelector('#roast-selection1');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
sendButton.addEventListener('click',displaySearchResult);
search.addEventListener('keyup', displaySearchResult);
// submitButton1.addEventListener('click', updateCoffees);
// sendButton1.addEventListener('click',displaySearchResult);
// search1.addEventListener('keyup', displaySearchResult);

