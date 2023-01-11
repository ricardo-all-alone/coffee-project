(function () {
    "use strict"

    function renderCoffee(coffee) {
        let html = '<div class="coffee">';
        html += '<div hidden>' + coffee.id + '</div>';
        html += '<h1>' + coffee.name + '</div>';
        html += '<p>' + coffee.roast + '</p>';
        html += '</div>';
        html += '<br>'
        return html;
    }



    function renderCoffees(coffees) {
        let html = '';
        for (var i = coffees.length - 1; i >= 0; i--) {
            html += renderCoffee(coffees[i]);
        }
        return html;
    }


    function updateCoffees(e) {
        e.preventDefault(); // don't submit the form, we just want to update the data
        let selectedRoast = roastSelection.value;
        console.log(selectedRoast);
        let filteredCoffees = [];
        if (roastSelection.value === 'all') {
        div.innerHTML = renderCoffees(coffees);
        } else {
            coffees.forEach(function (coffee) {
                if (coffee.roast === selectedRoast) {
                    filteredCoffees.push(coffee);
                }
            });
        }
        div.innerHTML = renderCoffees(filteredCoffees);

    }

    function DoSubmit(sel)
{
     if(sel.val()!='0') this.form.submit();
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



    let div = document.querySelector('#coffees');
    let submitButton = document.querySelector('#submit');
    let roastSelection = document.querySelector('#roast-selection');

    div.innerHTML = renderCoffees(coffees);

    submitButton.addEventListener('click', updateCoffees);









})();


// function createBooks(title, author) {
//     let authorName = author.split(' ')
//     let newBook = {
//         title: title,
//         author: {
//             firstName: authorName[0],
//             lastName: (authorName[1] === undefined) ? authorName[1] = '' : authorName[1] = authorName[1]
//         }
//     }
//     books.push(newBook)
// }