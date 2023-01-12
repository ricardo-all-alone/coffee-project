// (function () {
    "use strict"

    // function that creates div with object info
    function renderCoffee(coffee) {
        let html = '<div class="coffee col-6 d-flex flex-wrap align-items-baseline ps-md-4">';
        html += '<div hidden>' + coffee.id + '</div>';
        html += '<h1 class="text-light fs-4">' + coffee.name + '</h1>';
        html += '<p class="ms-md-2 mb-0 fs-6 text-secondary">' + coffee.roast + '</p>';
        html += '</div>';

        return html;
    }

    // function that renders all coffees
    function renderCoffees(coffees) {
        let html = '';
        for (var i = coffees.length - 1; i >= 0; i--) {
            html += renderCoffee(coffees[i]);
        }
        return html;
    }

    // function that updates page based on roast
    function updateCoffees(e) {
        e.preventDefault();
        let selectedRoast = roastSelection.value;
        let filteredCoffees = [];
        coffees.forEach(function (coffee) {
            if (selectedRoast === 'all') {
                filteredCoffees.push(coffee);
            }
            else if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }
        });
        div.innerHTML = renderCoffees(filteredCoffees);
    }

    // function that updates page based on search
    function searchList(e) {
        e.preventDefault();
        let userSearch = coffeeName.value;
        let searchResults = [];
        let userSearchLower = userSearch.toLowerCase();
        coffees.forEach(function (coffee) {
            if (coffee.name.toLowerCase().startsWith(userSearchLower)) {
                searchResults.push(coffee)
            }
        });
        div.innerHTML = renderCoffees(searchResults);
    }

    // from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
    let coffees = [

        {
            id: 1,
            name: 'Light City',
            roast: 'light'
        },

        {
            id: 2,
            name: 'Half City',
            roast: 'light'
        },

        {
            id: 3,
            name: 'Cinnamon',
            roast: 'light'
        },

        {
            id: 4,
            name: 'City',
            roast: 'medium'
        },

        {
            id: 5,
            name: 'American',
            roast: 'medium'
        },

        {
            id: 6,
            name: 'Breakfast',
            roast: 'medium'
        },

        {
            id: 7,
            name: 'High',
            roast: 'dark'
        },

        {
            id: 8,
            name: 'Continental',
            roast: 'dark'
        },

        {
            id: 9,
            name: 'New Orleans',
            roast: 'dark'
        },

        {
            id: 10,
            name: 'European',
            roast: 'dark'
        },

        {
            id: 11,
            name: 'Espresso',
            roast: 'dark'
        },

        {
            id: 12,
            name: 'Viennese',
            roast: 'dark'
        },

        {
            id: 13,
            name: 'Italian',
            roast: 'dark'
        },

        {
            id: 14,
            name: 'French',
            roast: 'dark'
        },

    ];

    // function for user to add New Coffee
    function createNewCoffee(e) {
        e.preventDefault();
        let newRoast = newCoffeeRoast.value;
        let newName = newCoffeeName.value;
        let newCoffee = {
            id: (coffees.length + 1),
            name: newName,
            roast: newRoast
        }
        coffees.push(newCoffee);
        newCoffeeRoast.value = 'blank';
        newCoffeeName.value = ''
    console.log(coffees) //Delete before final push!!!!!

    }

    // globalVariables
    let div = document.querySelector('#coffees');
    let roastSelection = document.querySelector('#roast-selection');
    let coffeeName = document.querySelector('#coffee-name-search');
    let newCoffeeForm = document.querySelector('#new-coffee-form');
    let newCoffeeRoast = document.querySelector('#new-roast');
    let newCoffeeName = document.querySelector('#new-coffee-name');
    div.innerHTML = renderCoffees(coffees);

    console.log(coffees) //Delete before final push!!!!!


    // listeners
    roastSelection.addEventListener('input', updateCoffees);
    coffeeName.addEventListener('input', searchList);
    newCoffeeForm.addEventListener('submit', createNewCoffee);

// })();